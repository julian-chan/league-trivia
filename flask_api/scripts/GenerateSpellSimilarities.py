"""
    This script is used to create a new JSON file containing a dictionary of spells that are 
    similar to other spells based on their images' colors.

    Pass in the path to the extracted spell data JSON file as a command line argument.
    To create the extracted spell data JSON file, see ExtractSpellData.py.
"""
import os
import cv2
import json
import sys


def get_histogram_from_image(path_to_image):
  """
  Converts the given image to the RGB color space and finds the histogram in each of the 3 
  color channels.
  """
  image = cv2.imread(path_to_image)
  image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
  return cv2.calcHist([image_rgb], [0, 1, 2], None, [8, 8, 8], [0, 256, 0, 256, 0, 256])


def generate_spell_similarities_using_color(spell_data, spell_img_dir):
  """
  Generates a map of spells to a list of similar spells based on their images' colors. 
  Spells belonging to the same champion will not be matched together as a similar spell.

  Parameters:
    spell_data: dictionary containing data for all spells
    spell_img_dir: path to the directory of spell images

  Returns:
    {
      spell_A_id: [similar_spell_1_id, similar_spell_2_id, ...],
      spell_B_id: [similar_spell_1_id, similar_spell_2_id, ...],
      ...
    }
  """
  spell_id_to_histogram = {spell_id: get_histogram_from_image(os.path.join(spell_img_dir, spell_data[spell_id]["image"])) for spell_id in spell_data.keys()}

  similar_spells = {}
  
  for spell_id in spell_id_to_histogram.keys():
    histogram = spell_id_to_histogram[spell_id]

    # Create a set of spell ids (excluding the ones belonging to the same champion as the spell we are currently looking at) to compare
    spells_to_compare = [sid for sid in spell_data.keys() if spell_data[sid]["championId"] != spell_data[spell_id]["championId"]]

    # Compute the difference scores between this spell and all other spells
    spell_id_to_difference_score = {}
    for spell_id_to_compare in spells_to_compare:
      histogram_to_compare = spell_id_to_histogram[spell_id_to_compare]
      # Use the Bhattacharyya distance to compare the 2 histograms, where the lower the result, the better the match
      spell_id_to_difference_score[spell_id_to_compare] = cv2.compareHist(histogram, histogram_to_compare, cv2.HISTCMP_BHATTACHARYYA)
    
    # Sort by increasing difference scores
    sorted_spell_id_to_difference_score = sorted(spell_id_to_difference_score.items(), key=lambda x: x[1])

    # Get the 8 most similar spells
    similar_spells[spell_id] = [spell for (spell, score) in sorted_spell_id_to_difference_score[:8]]
  
  return similar_spells


if __name__ == "__main__":
  # Ensure there are only 2 command line arguments
  assert len(sys.argv) == 3, "There should be 2 arguments for (1) the path to the extracted spell data JSON file and (2) the path to the directory of spell images"
  
  # Ensure that the first command line argument is a valid file
  input_file = sys.argv[1]
  assert os.path.isfile(input_file), "Could not find the specified file"

  # Ensure that the second command line argument is a valid directory
  input_dir = sys.argv[2]
  assert os.path.isdir(input_dir), "Could not find the specified directory"

  with open(input_file, encoding="utf8") as spells_file:
    spell_data = json.load(spells_file)
  
  # Generate the spell similarities for each spell and write it to a new JSON file
  file_name = "similar_spells_by_color.json"
  with open(file_name, "w") as json_file:
    json.dump(generate_spell_similarities_using_color(spell_data, input_dir), json_file)
  
  print("Wrote spell similarities to " + file_name)