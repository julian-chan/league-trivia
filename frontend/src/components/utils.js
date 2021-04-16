/**
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * |                                                          Constants                                                                    |
 * -----------------------------------------------------------------------------------------------------------------------------------------
 */

// These should be the same question types used in the backend
export const CHAMPION_NAME_QUESTION_TYPE = "champion_name";
export const ITEM_NAME_QUESTION_TYPE = "item_name";
export const RUNE_TO_TREE_ASSOC_QUESTION_TYPE = "rune_to_tree_assoc";
export const PASSIVE_TO_CHAMPION_ASSOC_QUESTION_TYPE = "passive_to_champion_assoc";
export const SPELL_TO_CHAMPION_ASSOC_QUESTION_TYPE = "spell_to_champion_assoc";
export const ODD_SPELL_OUT_QUESTION_TYPE = "odd_spell_out";
// These are the keys in the answer choices JSON to find the field to compare answers
export const CHAMPION_NAME_QUESTION_TYPE_ANSWER_CHOICE_KEY = "championName";
export const ITEM_NAME_QUESTION_TYPE_ANSWER_CHOICE_KEY = "itemName";
export const RUNE_TO_TREE_ASSOC_QUESTION_TYPE_ANSWER_CHOICE_KEY = "runeName";
export const PASSIVE_TO_CHAMPION_ASSOC_QUESTION_TYPE_ANSWER_CHOICE_KEY = "passiveImage";
export const SPELL_TO_CHAMPION_ASSOC_QUESTION_TYPE_ANSWER_CHOICE_KEY = "spellImage";
export const ODD_SPELL_OUT_QUESTION_TYPE_ANSWER_CHOICE_KEY = "spellImage";
// This maps the question type to the key in the answer choice JSON that should be used
const QUESTION_TYPE_TO_ANSWER_CHOICE_KEY = {};
QUESTION_TYPE_TO_ANSWER_CHOICE_KEY[CHAMPION_NAME_QUESTION_TYPE] = CHAMPION_NAME_QUESTION_TYPE_ANSWER_CHOICE_KEY;
QUESTION_TYPE_TO_ANSWER_CHOICE_KEY[ITEM_NAME_QUESTION_TYPE] = ITEM_NAME_QUESTION_TYPE_ANSWER_CHOICE_KEY;
QUESTION_TYPE_TO_ANSWER_CHOICE_KEY[RUNE_TO_TREE_ASSOC_QUESTION_TYPE] = RUNE_TO_TREE_ASSOC_QUESTION_TYPE_ANSWER_CHOICE_KEY;
QUESTION_TYPE_TO_ANSWER_CHOICE_KEY[PASSIVE_TO_CHAMPION_ASSOC_QUESTION_TYPE] = PASSIVE_TO_CHAMPION_ASSOC_QUESTION_TYPE_ANSWER_CHOICE_KEY;
QUESTION_TYPE_TO_ANSWER_CHOICE_KEY[SPELL_TO_CHAMPION_ASSOC_QUESTION_TYPE] = SPELL_TO_CHAMPION_ASSOC_QUESTION_TYPE_ANSWER_CHOICE_KEY;
QUESTION_TYPE_TO_ANSWER_CHOICE_KEY[ODD_SPELL_OUT_QUESTION_TYPE] = ODD_SPELL_OUT_QUESTION_TYPE_ANSWER_CHOICE_KEY;

// This maps the question type to the directory where images that need to be rendered for the question are stored
export const QUESTION_TYPE_TO_QUESTION_IMAGE_DIR = {};
QUESTION_TYPE_TO_QUESTION_IMAGE_DIR[CHAMPION_NAME_QUESTION_TYPE] = "/league-assets/img/champion/";
QUESTION_TYPE_TO_QUESTION_IMAGE_DIR[ITEM_NAME_QUESTION_TYPE] = "/league-assets/img/item/";
QUESTION_TYPE_TO_QUESTION_IMAGE_DIR[RUNE_TO_TREE_ASSOC_QUESTION_TYPE] = "/league-assets/img/";
QUESTION_TYPE_TO_QUESTION_IMAGE_DIR[PASSIVE_TO_CHAMPION_ASSOC_QUESTION_TYPE] = "/league-assets/img/champion/";
QUESTION_TYPE_TO_QUESTION_IMAGE_DIR[SPELL_TO_CHAMPION_ASSOC_QUESTION_TYPE] = "/league-assets/img/champion/";
// This maps the question type to the key in the question JSON that should be used to fetch the image to render
export const QUESTION_TYPE_TO_IMAGE_KEY = {};
QUESTION_TYPE_TO_IMAGE_KEY[CHAMPION_NAME_QUESTION_TYPE] = "championImage";
QUESTION_TYPE_TO_IMAGE_KEY[ITEM_NAME_QUESTION_TYPE] = "itemImage";
QUESTION_TYPE_TO_IMAGE_KEY[RUNE_TO_TREE_ASSOC_QUESTION_TYPE] = "runeTreeIcon";
QUESTION_TYPE_TO_IMAGE_KEY[PASSIVE_TO_CHAMPION_ASSOC_QUESTION_TYPE] = "championImage";
QUESTION_TYPE_TO_IMAGE_KEY[SPELL_TO_CHAMPION_ASSOC_QUESTION_TYPE] = "championImage";
// These question types ave images in the question
export const IMAGE_QUESTION_TYPES = new Set(Object.keys(QUESTION_TYPE_TO_QUESTION_IMAGE_DIR));

// This maps the question type to the directory where images that need to be rendered for the answer choices are stored
export const QUESTION_TYPE_TO_ANSWER_CHOICE_IMAGE_DIR = {};
QUESTION_TYPE_TO_ANSWER_CHOICE_IMAGE_DIR[PASSIVE_TO_CHAMPION_ASSOC_QUESTION_TYPE] = "/league-assets/img/passive/";
QUESTION_TYPE_TO_ANSWER_CHOICE_IMAGE_DIR[SPELL_TO_CHAMPION_ASSOC_QUESTION_TYPE] = "/league-assets/img/spell/";
QUESTION_TYPE_TO_ANSWER_CHOICE_IMAGE_DIR[ODD_SPELL_OUT_QUESTION_TYPE] = "/league-assets/img/spell/";
// These question types have images in the answer choices
export const IMAGE_ANSWER_CHOICES_QUESTION_TYPES = new Set(Object.keys(QUESTION_TYPE_TO_ANSWER_CHOICE_IMAGE_DIR));

// These question types have only text in the answer choices
export const TEXT_ANSWER_CHOICES_QUESTION_TYPES = new Set([CHAMPION_NAME_QUESTION_TYPE, ITEM_NAME_QUESTION_TYPE, RUNE_TO_TREE_ASSOC_QUESTION_TYPE]);

// Strings representing ranks for consistency
const IRON_RANK = "Iron";
const BRONZE_RANK = "Bronze";
const SILVER_RANK = "Silver";
const GOLD_RANK = "Gold";
const PLATINUM_RANK = "Platinum";
const DIAMOND_RANK = "Diamond";
const MASTER_RANK = "Master";
const GRANDMASTER_RANK = "Grandmaster";
const CHALLENGER_RANK = "Challenger";

// Map of the rank to the emblem image for that rank
export const RANK_TO_EMBLEM_IMAGE = {};
RANK_TO_EMBLEM_IMAGE[IRON_RANK] = "/league-assets/img/ranked-emblems/Emblem_Iron.png";
RANK_TO_EMBLEM_IMAGE[BRONZE_RANK] = "/league-assets/img/ranked-emblems/Emblem_Bronze.png";
RANK_TO_EMBLEM_IMAGE[SILVER_RANK] = "/league-assets/img/ranked-emblems/Emblem_Silver.png";
RANK_TO_EMBLEM_IMAGE[GOLD_RANK] = "/league-assets/img/ranked-emblems/Emblem_Gold.png";
RANK_TO_EMBLEM_IMAGE[PLATINUM_RANK] = "/league-assets/img/ranked-emblems/Emblem_Platinum.png";
RANK_TO_EMBLEM_IMAGE[DIAMOND_RANK] = "/league-assets/img/ranked-emblems/Emblem_Diamond.png";
RANK_TO_EMBLEM_IMAGE[MASTER_RANK] = "/league-assets/img/ranked-emblems/Emblem_Master.png";
RANK_TO_EMBLEM_IMAGE[GRANDMASTER_RANK] = "/league-assets/img/ranked-emblems/Emblem_Grandmaster.png";
RANK_TO_EMBLEM_IMAGE[CHALLENGER_RANK] = "/league-assets/img/ranked-emblems/Emblem_Challenger.png";

// Map of the tier to the minimum qualifications to be considered for each tier
export const TIER_TO_MIN_QUALIFICATIONS = {
  1: {"rank": IRON_RANK, "questionsAnswered": 0, "percentCorrect": 0},
  2: {"rank": BRONZE_RANK, "questionsAnswered": 3, "percentCorrect": 0.2},
  3: {"rank": SILVER_RANK, "questionsAnswered": 6, "percentCorrect": 0.35},
  4: {"rank": GOLD_RANK, "questionsAnswered": 9, "percentCorrect": 0.5},
  5: {"rank": PLATINUM_RANK, "questionsAnswered": 12, "percentCorrect": 0.65},
  6: {"rank": DIAMOND_RANK, "questionsAnswered": 15, "percentCorrect": 0.75},
  7: {"rank": MASTER_RANK, "questionsAnswered": 20, "percentCorrect": 0.85},
  8: {"rank": GRANDMASTER_RANK, "questionsAnswered": 25, "percentCorrect": 0.9},
  9: {"rank": CHALLENGER_RANK, "questionsAnswered": 30, "percentCorrect": 0.95}
}

/**
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * |                                                          Methods                                                                      |
 * -----------------------------------------------------------------------------------------------------------------------------------------
 */

// Method to determine what key is used to fetch the answer display used in the answer choices for the given type of question
export const determineAnswerChoiceKeyFromQuestionType = (questionType) => {
  return QUESTION_TYPE_TO_ANSWER_CHOICE_KEY[questionType];
};

// Method to determine the rank given the number of questions answered and number of questions answered correctly
export const determineRankGivenPerformance = (numQuestionsAnswered, numQuestionsAnsweredCorrectly) => {
  const percentCorrect = numQuestionsAnswered === 0 ? 0 : numQuestionsAnsweredCorrectly / numQuestionsAnswered;

  // First determine all the possible tiers that can be obtained based on the given performance and
  // the minimum qualifications for each tier
  let obtainableTiers = [];
  for (let tier in TIER_TO_MIN_QUALIFICATIONS) {
    // If performance satisfies minimum qualifications for the tier, we can consider the tier as obtainable
    let minQuestionsAnsweredNeeded = TIER_TO_MIN_QUALIFICATIONS[tier]["questionsAnswered"];
    let minPercentCorrectNeeded = TIER_TO_MIN_QUALIFICATIONS[tier]["percentCorrect"];
    if (numQuestionsAnswered >= minQuestionsAnsweredNeeded && percentCorrect >= minPercentCorrectNeeded) {
      obtainableTiers.push(tier);
    }
  }

  // Tier 1 is always obtainable so there should always be 1 obtainable tier
  let highestObtainableTier = obtainableTiers.sort((tier1, tier2) => tier1 - tier2)[obtainableTiers.length - 1];
  return TIER_TO_MIN_QUALIFICATIONS[highestObtainableTier]["rank"];
}