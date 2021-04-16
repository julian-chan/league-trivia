"""
    This script is used to create a new JSON file containing a dictionary of items that are similar
    to other items based on their respective item tags.

    Pass in the path to the extracted item data JSON file as a command line argument.
    To create the extracted item data JSON file, see ExtractItemData.py.
"""
import os
import json
import sys


def build_tag_similarity_map_for_item(item_id, item_data):
  """
  Builds a tag similarity map, which is a map of all other item ids to a score of how similar their
  tags are to the given item's tags.

  The similarity score is computed as the average of:
    - the percentage of the given item's tags that are shared
    - the percentage of the other item's tags that are shared

  Example (A is the given item, B is the other item):
    A has 5 tags, B has 6 tags
    A and B share 3 tags
    similarity_score = ((3 / 5) + (3 / 6)) / 2

  Parameters:
    item_id: id of the item we want to build the map for
    item_data: dictionary containing data for all items

  Returns:
    {
      other_item_A_id: 0.4, 
      other_item_B_id: 0.7,
      ...
    }
  """
  tag_similarity_map = {}

  # Get the tags for the given item
  given_item_tags = item_data[item_id]["tags"]

  # Only consider other items 
  other_item_ids = set(item_data.keys())
  other_item_ids.remove(item_id)

  for other_item_id in other_item_ids:
    other_item_tags = item_data[other_item_id]["tags"]

    # Find the number of tags shared
    num_tags_shared = len(set(given_item_tags).intersection(set(other_item_tags)))

    # Compute the similarity score
    pct_of_given_item_tags_shared = num_tags_shared / len(given_item_tags) if len(given_item_tags) > 0 else 0
    pct_of_other_item_tags_shared = num_tags_shared / len(other_item_tags) if len(other_item_tags) > 0 else 0
    similarity_score = (pct_of_given_item_tags_shared + pct_of_other_item_tags_shared) / 2

    tag_similarity_map[other_item_id] = similarity_score
  
  return tag_similarity_map


def generate_item_similarities_using_tags(item_data):
  """
  Generates a map of items to a list of similar items based on their tags.

  Parameters:
    item_data: dictionary containing data for all items

  Returns:
    {
      item_A_id: [similar_item_1_id, similar_item_2_id, ...],
      item_B_id: [similar_item_1_id, similar_item_2_id, ...],
      ...
    }
  """
  similar_items_by_tags = {}

  for item_id in item_data.keys():
    tag_similarity_map = build_tag_similarity_map_for_item(item_id, item_data)

    # Sort the map in descending order of similarity score
    sorted_tag_similarity_map = sorted(tag_similarity_map.items(), key=lambda x: x[1], reverse=True)
    similar_items_by_tags[item_id] = [key for (key, val) in sorted_tag_similarity_map[:6]]

  return similar_items_by_tags


if __name__ == "__main__":
  # Ensure there is only 1 command line argument
  assert len(sys.argv) == 2, "There should be 1 argument for the path to the extracted item data JSON file"
  
  # Ensure that the command line argument is a valid file
  input_file = sys.argv[1]
  assert os.path.isfile(input_file), "Could not find the specified file"

  with open(input_file, encoding="utf8") as items_file:
    item_data = json.load(items_file)
  
  # Generate the item similarities for each item and write it to a new JSON file
  file_name = "similar_items_by_tags.json"
  with open(file_name, "w") as json_file:
    json.dump(generate_item_similarities_using_tags(item_data), json_file)
  
  print("Wrote item similarities to " + file_name)