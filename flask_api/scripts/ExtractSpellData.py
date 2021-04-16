"""
    This script is used to extract and create a new JSON file containing the key data fields that 
    are needed for League Trivia from the championFull.json data downloaded from Data Dragon. This 
    is because championFull.json contains a lot of data that isn't needed for League Trivia, so we 
    only keep the data fields that the game needs in order to improve performance and the 
    conciseness of the data the game works with.

    Pass in the path to the full champion JSON file as a command line argument.
"""
import os
import json
import sys


def extract_key_spell_data(full_champion_data):
  """
  This method takes a dictionary of champion ids to their respective properties, extracts the key
  data fields for each spell, and returns a dictionary of spell ids to their respective
  extracted data.
  """
  spell_order = ["Q", "W", "E", "R"]
  extracted_spell_data = {}

  for champion_id in full_champion_data.keys():
    for i in range(len(full_champion_data[champion_id]["spells"])):
      spell = full_champion_data[champion_id]["spells"][i]

      spell_data = {}
      spell_data["id"] = spell["id"]
      spell_data["championId"] = champion_id
      spell_data["championName"] = full_champion_data[champion_id]["name"]
      spell_data["name"] = spell["name"]
      spell_data["key"] = spell_order[i]
      spell_data["image"] = spell["image"]["full"]
      spell_data["costBurn"] = spell["costBurn"]
      extracted_spell_data[spell["id"]] = spell_data
  
  return extracted_spell_data


if __name__ == "__main__":
  # Ensure there is only 1 command line argument
  assert len(sys.argv) == 2, "There should be 1 argument for the path to the full champion JSON file"

  # Ensure that the command line argument is a valid file
  input_file = sys.argv[1]
  assert os.path.isfile(input_file), "Could not find the specified file"

  with open(input_file, encoding="utf8") as full_champion_file:
    full_champion_data = json.load(full_champion_file)["data"]
  
  # Extract the key data points for each spell and write it to a new JSON file
  extracted_spell_data = extract_key_spell_data(full_champion_data)
  with open("spells.json", "w") as json_file:
    json.dump(extracted_spell_data, json_file)