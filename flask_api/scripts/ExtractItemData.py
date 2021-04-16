"""
    This script is used to extract and create a new JSON file containing the key data fields that 
    are needed for League Trivia from the item.json data downloaded from Data Dragon. This is 
    because item.json contains a lot of data that isn't needed for League Trivia, so we only keep 
    the data fields that the game needs in order to improve performance and the conciseness of the 
    data the game works with.

    Pass in the path to the item JSON file as a command line argument.
"""
import os
import json
import sys


def extract_key_item_data(item_data):
  """
  This method takes a dictionary of item ids to their respective properties, extracts the key
  data fields for each item, and returns a dictionary of item ids to their respective 
  extracted data.
  """
  extracted_item_data = {}

  for item_id in item_data:
    key_data = {}
    key_data["id"] = item_id
    key_data["name"] = item_data[item_id]["name"]
    key_data["image"] = item_data[item_id]["image"]["full"]
    key_data["gold"] = item_data[item_id]["gold"]["total"]
    key_data["tags"] = item_data[item_id]["tags"]
    extracted_item_data[item_id] = key_data
  
  return extracted_item_data


if __name__ == "__main__":
  # Ensure there is only 1 command line argument
  assert len(sys.argv) == 2, "There should be 1 argument for the path to the item JSON file"

  # Ensure that the command line argument is a valid file
  input_file = sys.argv[1]
  assert os.path.isfile(input_file), "Could not find the specified file"

  with open(input_file, encoding="utf8") as item_file:
    item_data = json.load(item_file)["data"]
  
  # Extract the key data points for each item and write it to a new JSON file
  extracted_item_data = extract_key_item_data(item_data)
  with open("items.json", "w") as json_file:
    json.dump(extracted_item_data, json_file)