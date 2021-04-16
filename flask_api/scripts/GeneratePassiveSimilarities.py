"""
    This script is used to create a new JSON file containing a dictionary of champions that have
    similar passives to other champions based on their images' colors.

    Pass in the path to the extracted champion data JSON file as a command line argument.
    To create the extracted champion data JSON file, see ExtractChampionData.py.
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


def generate_champion_passive_similarities_using_color(passive_data, passive_img_dir):
  """
  Generates a map of champions to a list of other champions who have similar passives based on 
  their images' colors.

  Parameters:
    passive_data: dictionary containing data for all champion passives
    passive_img_dir: path to the directory of champion passive images

  Returns:
    {
      champion_A_id: [similar_champion_1_id, similar_champion_2_id, ...],
      champion_B_id: [similar_champion_1_id, similar_champion_2_id, ...],
      ...
    }
  """
  champion_id_to_histogram = {champion_id: get_histogram_from_image(os.path.join(passive_img_dir, passive_data[champion_id]["image"])) for champion_id in passive_data.keys()}

  similar_champions = {}
  
  for champion_id in champion_id_to_histogram.keys():
    histogram = champion_id_to_histogram[champion_id]

    # Only consider other champion passives
    champions_to_compare = set(passive_data.keys())
    champions_to_compare.remove(champion_id)

    # Compute the difference scores between this champion's passive and all other champion passives
    champion_id_to_difference_score = {}
    for champion_id_to_compare in champions_to_compare:
      histogram_to_compare = champion_id_to_histogram[champion_id_to_compare]
      # Use the Bhattacharyya distance to compare the 2 histograms, where the lower the result, the better the match
      champion_id_to_difference_score[champion_id_to_compare] = cv2.compareHist(histogram, histogram_to_compare, cv2.HISTCMP_BHATTACHARYYA)
    
    # Sort by increasing difference scores
    sorted_champion_id_to_difference_score = sorted(champion_id_to_difference_score.items(), key=lambda x: x[1])

    # Get the 8 most similar champions
    similar_champions[champion_id] = [champion for (champion, score) in sorted_champion_id_to_difference_score[:8]]
  
  return similar_champions


if __name__ == "__main__":
  # Ensure there are only 2 command line arguments
  assert len(sys.argv) == 3, "There should be 2 arguments for (1) the path to the extracted champion data JSON file and (2) the path to the directory of champion passive images"
  
  # Ensure that the first command line argument is a valid file
  input_file = sys.argv[1]
  assert os.path.isfile(input_file), "Could not find the specified file"

  # Ensure that the second command line argument is a valid directory
  input_dir = sys.argv[2]
  assert os.path.isdir(input_dir), "Could not find the specified directory"

  # Extract out only the passive data from each champion
  passive_data = {}
  with open(input_file, encoding="utf8") as champions_file:
    champion_data = json.load(champions_file)

    for champion_id in champion_data.keys():
      passive_data[champion_id] = champion_data[champion_id]["passive"]
  
  # Generate the passive similarities for each passive and write it to a new JSON file
  file_name = "similar_champion_passives_by_color.json"
  with open(file_name, "w") as json_file:
    json.dump(generate_champion_passive_similarities_using_color(passive_data, input_dir), json_file)
  
  print("Wrote champion passive similarities to " + file_name)