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


def extract_key_champion_data(full_champion_data):
  """
  This method takes a dictionary of champion ids to their respective properties, extracts the key
  data fields for each champion, and returns a dictionary of champions ids to their respective
  extracted data.
  """
  extracted_champion_data = {}

  for champion_id in full_champion_data.keys():
    # Spells have a lot of unnecessary information as well, so extract out the key data from spells
    champion_spells_data = {}
    for spell in full_champion_data[champion_id]["spells"]:
      spell_id = spell["id"]

      spell_data = {}
      spell_data["id"] = spell_id
      spell_data["name"] = spell["name"]
      spell_data["image"] = spell["image"]["full"]
      spell_data["costBurn"] = spell["costBurn"]
      champion_spells_data[spell_id] = spell_data
    
    # Passive data can be truncated a bit as well
    passive_data = {}
    passive_data["name"] = full_champion_data[champion_id]["passive"]["name"]
    passive_data["image"] = full_champion_data[champion_id]["passive"]["image"]["full"]

    key_data = {}
    key_data["id"] = champion_id
    key_data["name"] = full_champion_data[champion_id]["name"]
    key_data["title"] = full_champion_data[champion_id]["title"]
    key_data["image"] = full_champion_data[champion_id]["image"]["full"]
    key_data["skins"] = full_champion_data[champion_id]["skins"]
    key_data["tags"] = full_champion_data[champion_id]["tags"]
    key_data["spells"] = champion_spells_data
    key_data["passive"] = passive_data
    extracted_champion_data[champion_id] = key_data
  
  return extracted_champion_data
    

if __name__ == "__main__":
  # Ensure there is only 1 command line argument
  assert len(sys.argv) == 2, "There should be 1 argument for the path to the full champion JSON file"

  # Ensure that the command line argument is a valid file
  input_file = sys.argv[1]
  assert os.path.isfile(input_file), "Could not find the specified file"

  with open(input_file, encoding="utf8") as full_champion_file:
    full_champion_data = json.load(full_champion_file)["data"]
  
  # Extract the key data points for each champion and write it to a new JSON file
  extracted_champion_data = extract_key_champion_data(full_champion_data)
  with open("champions.json", "w") as json_file:
    json.dump(extracted_champion_data, json_file)