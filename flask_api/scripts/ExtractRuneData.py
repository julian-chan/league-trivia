"""
    This script is used to extract and create a new JSON file containing the key data fields that 
    are needed for League Trivia from the runesReforged.json data downloaded from Data Dragon. This 
    is because runesReforged.json contains a lot of data that isn't needed for League Trivia, so we 
    only keep the data fields that the game needs in order to improve performance and the 
    conciseness of the data the game works with.

    Pass in the path to the runes JSON file as a command line argument.
"""
import os
import json
import sys


def extract_key_rune_data(rune_data):
  """
  This method takes a list of rune trees containing their respective runes, extracts the key data 
  fields for each rune, and returns a dictionary of rune ids to their respective extracted data.
  """
  extracted_rune_data = {}

  for rune_tree in rune_data:
    rune_tree_id = rune_tree["id"]
    rune_tree_icon = rune_tree["icon"]
    rune_tree_name = rune_tree["name"]

    for i in range(len(rune_tree["slots"])):
      rune_row = rune_tree["slots"][i]
      
      for rune in rune_row["runes"]:
        rune_id = rune["id"]

        key_data = {}
        key_data["tree_id"] = rune_tree_id
        key_data["tree_icon"] = rune_tree_icon
        key_data["tree_name"] = rune_tree_name
        key_data["id"] = rune_id
        key_data["icon"] = rune["icon"]
        key_data["name"] = rune["name"]
        extracted_rune_data[rune_id] = key_data
  
  return extracted_rune_data


if __name__ == "__main__":
  # Ensure there is only 1 command line argument
  assert len(sys.argv) == 2, "There should be 1 argument for the path to the rune JSON file"

  # Ensure that the command line argument is a valid file
  input_file = sys.argv[1]
  assert os.path.isfile(input_file), "Could not find the specified file"

  with open(input_file, encoding="utf8") as rune_file:
    rune_data = json.load(rune_file)
  
  # Extract the key data points for each rune and write it to a new JSON file
  extracted_rune_data = extract_key_rune_data(rune_data)
  with open("runes.json", "w") as json_file:
    json.dump(extracted_rune_data, json_file)