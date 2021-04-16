from flask import jsonify
from flask_restful import Resource
import os
import json
import random

# Path to the static directory (assumes this file is at the same level as the static directory)
STATIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')

class ChampionsAPI(Resource):
  def get(self):
    with open(os.path.join(STATIC_DIR, "league-assets/data/champions.json"), encoding="utf8") as champions_file:
      return json.load(champions_file)

class SimilarChampionPassivesByColorAPI(Resource):
  def get(self):
    with open(os.path.join(STATIC_DIR, "league-assets/data/similar_champion_passives_by_color.json"), encoding="utf8") as similar_passives_file:
      return json.load(similar_passives_file)

class SpellsAPI(Resource):
  def get(self):
    with open(os.path.join(STATIC_DIR, "league-assets/data/spells.json"), encoding="utf8") as spells_file:
      return json.load(spells_file)

class SimilarSpellsByColorAPI(Resource):
  def get(self):
    with open(os.path.join(STATIC_DIR, "league-assets/data/similar_spells_by_color.json"), encoding="utf8") as similar_spells_file:
      return json.load(similar_spells_file)

class ItemsAPI(Resource):
  def get(self):
    with open(os.path.join(STATIC_DIR, "league-assets/data/items.json"), encoding="utf8") as items_file:
      return json.load(items_file)

class SimilarItemsByTagsAPI(Resource):
  def get(self):
    with open(os.path.join(STATIC_DIR, "league-assets/data/similar_items_by_tags.json"), encoding="utf8") as similar_items_file:
      return json.load(similar_items_file)

class RunesAPI(Resource):
  def get(self):
    with open(os.path.join(STATIC_DIR, "league-assets/data/runes.json"), encoding="utf8") as runes_file:
      return json.load(runes_file)

class QuestionAPI(Resource):
  def __init__(self):
    # Number of answer choices
    self.num_choices = 4

    # Types of questions
    self.CHAMPION_NAME_Q_TYPE = "champion_name"
    self.CHAMPION_NAME_Q_TEXT = "What is this champion's name?"
    self.ITEM_NAME_Q_TYPE = "item_name"
    self.ITEM_NAME_Q_TEXT = "What is this item's name?"
    self.RUNE_TO_TREE_ASSOC_Q_TYPE = "rune_to_tree_assoc"
    self.RUNE_TO_TREE_ASSOC_Q_TEXT = "Which of the following runes belong in the {rune_tree} rune tree?"
    self.PASSIVE_TO_CHAMPION_ASSOC_Q_TYPE = "passive_to_champion_assoc"
    self.PASSIVE_TO_CHAMPION_ASSOC_Q_TEXT ="Which of the following passives belong to {champion}?"
    self.PASSIVE_TO_CHAMPION_ASSOC_EXPLANATION = "The correct passive was {champion}: {passive_name}."
    self.SPELL_TO_CHAMPION_ASSOC_Q_TYPE = "spell_to_champion_assoc"
    self.SPELL_TO_CHAMPION_ASSOC_Q_TEXT = "Which of the following spells belong to {champion}?"
    self.SPELL_TO_CHAMPION_ASSOC_EXPLANATION = "The correct spell was {champion} {key}: {spell}."
    self.ODD_SPELL_OUT_Q_TYPE = "odd_spell_out"
    self.ODD_SPELL_OUT_Q_TEXT = "Which of the following spells do NOT belong to the same champion as the other ones?"
    self.ODD_SPELL_OUT_EXPLANATION = "The odd spell out was {wrong_champion} {wrong_champion_key}: {wrong_champion_spell}. The other spells belong to {correct_champion}."

    self.QUESTION_TYPES = [self.CHAMPION_NAME_Q_TYPE, self.ITEM_NAME_Q_TYPE, self.RUNE_TO_TREE_ASSOC_Q_TYPE, self.PASSIVE_TO_CHAMPION_ASSOC_Q_TYPE, self.SPELL_TO_CHAMPION_ASSOC_Q_TYPE, self.ODD_SPELL_OUT_Q_TYPE]
    self.PROBABILTIES_OF_SELECTING_QUESTION_TYPES = [0.05, 0.15, 0.05, 0.25, 0.25, 0.25]

  def get(self):
    '''
    First picks a random type of question to serve. Then, depending on the type of question chosen, load the data source that is
    needed to generate that question. 
    '''
    random_question_type = random.choices(self.QUESTION_TYPES, weights=self.PROBABILTIES_OF_SELECTING_QUESTION_TYPES)[0]

    if random_question_type == self.CHAMPION_NAME_Q_TYPE:
      response_data = self.generateQuestionAndAnswersForChampionNameQuestionType()
    elif random_question_type == self.ITEM_NAME_Q_TYPE:
      response_data = self.generateQuestionAndAnswersForItemNameQuestionType()
    elif random_question_type == self.RUNE_TO_TREE_ASSOC_Q_TYPE:
      response_data = self.generateQuestionAndAnswersForRuneToTreeAssocQuestionType()
    elif random_question_type == self.PASSIVE_TO_CHAMPION_ASSOC_Q_TYPE:
      response_data = self.generateQuestionAndAnswersForPassiveToChampionAssocQuestionType()
    elif random_question_type == self.SPELL_TO_CHAMPION_ASSOC_Q_TYPE:
      response_data = self.generateQuestionAndAnswersForSpellToChampionAssocQuestionType()
    elif random_question_type == self.ODD_SPELL_OUT_Q_TYPE:
      response_data = self.generateQuestionAndAnswersForOddSpellOutQuestionType()
    
    response = jsonify(response_data)
    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

  def generateQuestionAndAnswersForChampionNameQuestionType(self):
    champion_data = ChampionsAPI().get()
    
    response_data = {}
    response_data["questionType"] = self.CHAMPION_NAME_Q_TYPE
    response_data["questionText"] = self.CHAMPION_NAME_Q_TEXT

    random_champions = random.sample(champion_data.keys(), self.num_choices)
    response_data["answerChoices"] = [{"championName": champion_data[champion]["name"], "championImage": champion_data[champion]["image"]} for champion in random_champions]
    response_data["correctAnswerIndex"] = random.randrange(self.num_choices)
    return response_data
  
  def generateQuestionAndAnswersForItemNameQuestionType(self):
    item_data = ItemsAPI().get()
    similar_items_by_tags_data = SimilarItemsByTagsAPI().get()

    response_data = {}
    response_data["questionType"] = self.ITEM_NAME_Q_TYPE
    response_data["questionText"] = self.ITEM_NAME_Q_TEXT

    # Randomly choose an item to be the correct answer
    correct_item_id = random.choice(list(similar_items_by_tags_data.keys()))
    # Randomly sample self.num_choices - 1 wrong answers among the items similar to the correct answer
    incorrect_item_ids = random.sample(similar_items_by_tags_data[correct_item_id], self.num_choices - 1)

    all_item_ids = [correct_item_id] + incorrect_item_ids

    # Shuffle the list of answer choices
    response_data["answerChoices"] = [{"itemId": item_id, "itemName": item_data[item_id]["name"], "itemImage": item_data[item_id]["image"]} for item_id in all_item_ids]
    random.shuffle(response_data["answerChoices"])

    # Find the index of the correct answer after shuffling the answer choices
    for index, value in enumerate(response_data["answerChoices"]):
      if correct_item_id == value["itemId"]:
        response_data["correctAnswerIndex"] = index
        break

    return response_data

  def generateQuestionAndAnswersForRuneToTreeAssocQuestionType(self):
    rune_data = RunesAPI().get()

    chosen_rune_tree = rune_data[random.choice(list(rune_data.keys()))]["tree_name"]

    response_data = {}
    response_data["questionType"] = self.RUNE_TO_TREE_ASSOC_Q_TYPE
    response_data["questionText"] = self.RUNE_TO_TREE_ASSOC_Q_TEXT.format(rune_tree = chosen_rune_tree)

    # Randomly choose a rune in the chosen rune tree to be the correct answer
    correct_rune_id_choice_pool = [rune_id for rune_id in rune_data if rune_data[rune_id]["tree_name"] == chosen_rune_tree]
    correct_rune_id = random.choice(correct_rune_id_choice_pool)

    # Randomly sample self.num_choices - 1 wrong answers among the runes in other rune trees
    rune_trees_for_incorrect_choice_pool = [rune_tree for rune_tree in rune_data.keys() if rune_tree != chosen_rune_tree]
    incorrect_rune_id_choice_pool = [rune_id for rune_id in rune_data if rune_data[rune_id]["tree_name"] != chosen_rune_tree]
    incorrect_rune_ids = random.sample(incorrect_rune_id_choice_pool, self.num_choices - 1)

    all_rune_ids = [correct_rune_id] + incorrect_rune_ids

    # Shuffle the list of answer choices
    response_data["answerChoices"] = [{"runeId": rune_id, "runeName": rune_data[rune_id]["name"], "runeTreeIcon": rune_data[rune_id]["tree_icon"]} for rune_id in all_rune_ids]
    random.shuffle(response_data["answerChoices"])

    # Find the index of the correct answer after shuffling the answer choices
    for index, value in enumerate(response_data["answerChoices"]):
      if correct_rune_id == value["runeId"]:
        response_data["correctAnswerIndex"] = index
        break

    return response_data
  
  def generateQuestionAndAnswersForPassiveToChampionAssocQuestionType(self):
    champion_data = ChampionsAPI().get()
    similar_passives_by_color_data = SimilarChampionPassivesByColorAPI().get()

    # Randomly choose a champion to be the correct answer
    correct_champion_id = random.choice(list(similar_passives_by_color_data.keys()))

    response_data = {}
    response_data["questionType"] = self.PASSIVE_TO_CHAMPION_ASSOC_Q_TYPE
    response_data["questionText"] = self.PASSIVE_TO_CHAMPION_ASSOC_Q_TEXT.format(champion = champion_data[correct_champion_id]["name"])

    # Randomly sample self.num_choices - 1 wrong answers among the champions with similar passives to the correct answer
    similar_champions = similar_passives_by_color_data[correct_champion_id]
    incorrect_champion_ids = random.sample(similar_champions, self.num_choices - 1)

    all_champion_ids = [correct_champion_id] + incorrect_champion_ids

    # Shuffle the list of answer choices
    response_data["answerChoices"] = [{"championId": champion_id, "championImage": champion_data[champion_id]["image"], "passiveImage": champion_data[champion_id]["passive"]["image"]} for champion_id in all_champion_ids]
    random.shuffle(response_data["answerChoices"])

    # Find the index of the correct answer after shuffling the answer choices
    for index, value in enumerate(response_data["answerChoices"]):
      if correct_champion_id == value["championId"]:
        response_data["correctAnswerIndex"] = index
        break
    
    response_data["explanation"] = self.PASSIVE_TO_CHAMPION_ASSOC_EXPLANATION.format(champion=champion_data[correct_champion_id]["name"], passive_name=champion_data[correct_champion_id]["passive"]["name"])
    return response_data

  def generateQuestionAndAnswersForSpellToChampionAssocQuestionType(self):
    champion_data = ChampionsAPI().get()
    spell_data = SpellsAPI().get()
    similar_spells_by_color_data = SimilarSpellsByColorAPI().get()

    # Randomly choose an spell to be the correct answer
    correct_spell_id = random.choice(list(similar_spells_by_color_data.keys()))

    response_data = {}
    response_data["questionType"] = self.SPELL_TO_CHAMPION_ASSOC_Q_TYPE
    response_data["questionText"] = self.SPELL_TO_CHAMPION_ASSOC_Q_TEXT.format(champion = spell_data[correct_spell_id]["championName"])

    # Randomly sample self.num_choices - 1 wrong answers among the spells similar to the correct answer
    similar_spells = similar_spells_by_color_data[correct_spell_id]
    incorrect_spell_ids = random.sample(similar_spells, self.num_choices - 1)

    all_spell_ids = [correct_spell_id] + incorrect_spell_ids

    # Shuffle the list of answer choices
    response_data["answerChoices"] = [{"spellId": spell_id, "spellImage": spell_data[spell_id]["image"], "championImage": champion_data[spell_data[spell_id]["championId"]]["image"]} for spell_id in all_spell_ids]
    random.shuffle(response_data["answerChoices"])

    # Find the index of the correct answer after shuffling the answer choices
    for index, value in enumerate(response_data["answerChoices"]):
      if correct_spell_id == value["spellId"]:
        response_data["correctAnswerIndex"] = index
        break

    response_data["explanation"] = self.SPELL_TO_CHAMPION_ASSOC_EXPLANATION.format(champion=spell_data[correct_spell_id]["championName"], key=spell_data[correct_spell_id]["key"], spell=spell_data[correct_spell_id]["name"])
    return response_data

  def generateQuestionAndAnswersForOddSpellOutQuestionType(self):
    spell_data = SpellsAPI().get()
    similar_spells_by_color_data = SimilarSpellsByColorAPI().get()

    response_data = {}
    response_data["questionType"] = self.ODD_SPELL_OUT_Q_TYPE
    response_data["questionText"] = self.ODD_SPELL_OUT_Q_TEXT

    # Randomly select a champion and get its spells
    random_champion_id = spell_data[random.choice(list(spell_data.keys()))]["championId"]
    champion_spell_ids = [spell_id for spell_id in spell_data.keys() if spell_data[spell_id]["championId"] == random_champion_id]

    # Find a random spell to replace
    spell_idx_to_replace = random.randrange(len(champion_spell_ids))
    spell_id_to_replace = champion_spell_ids[spell_idx_to_replace]

    # Find a similar spell to the one we want to replace
    similar_spell_id_to_replace_with = random.choice(similar_spells_by_color_data[spell_id_to_replace])

    all_spell_ids = [spell_id for spell_id in champion_spell_ids]
    all_spell_ids[spell_idx_to_replace] = similar_spell_id_to_replace_with

    # Shuffle the list of answer choices
    response_data["answerChoices"] = [{"spellId": spell_id, "spellImage": spell_data[spell_id]["image"]} for spell_id in all_spell_ids]
    random.shuffle(response_data["answerChoices"])

    # Find the index of the correct answer after shuffling the answer choices
    for index, value in enumerate(response_data["answerChoices"]):
      if similar_spell_id_to_replace_with == value["spellId"]:
        response_data["correctAnswerIndex"] = index
        break

    response_data["explanation"] = self.ODD_SPELL_OUT_EXPLANATION.format(wrong_champion=spell_data[similar_spell_id_to_replace_with]["championName"], wrong_champion_key=spell_data[similar_spell_id_to_replace_with]["key"], wrong_champion_spell=spell_data[similar_spell_id_to_replace_with]["name"], correct_champion=spell_data[champion_spell_ids[0]]["championName"])
    return response_data