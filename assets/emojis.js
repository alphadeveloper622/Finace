import CONST from '../src/CONST';

/*
 * This list is generated from the code here https://github.com/github/gemoji/blob/master/db/emoji.json
 * Each code is then converted to hex by replacing the "U+" with "0x"
 * Each hex is then converted to a string using this function (each section is defined as "emojis" in this function)
 * const emojiData = require('./gemoji.json');
 * const { getEmojiUnicode } = require('./EmojiUtils');
 * const emojisGroupedByCategory = _.groupBy(emojiData, 'category');
 * const skinTones = ['1f3fb', '1f3fc', '1f3fd', '1f3fe',  '1f3ff'];
 * const emojisList = []
 * for(let category in emojisGroupedByCategory) {
 *      let categoryName = category.replace(' & ', 'And');
 *      categoryName = categoryName.charAt(0).toLowerCase() + categoryName.slice(1);
 *      emojisList.push({
 *          code: categoryName,
 *          header: true
 *      });
 *
 *     const emojisPerCategory = emojisGroupedByCategory[category];
 *      for(let i = 0; i < emojisPerCategory.length; i++) {
 *          const emoji = emojisPerCategory[i];
 *          let keywords = [...emoji.tags , ...emoji.aliases];
 *          if(oldEmojiMap[emoji.emoji]) { // old Emoji Map is old assets/emojis.js data
 *              keywords = keywords.concat(oldEmojiMap[emoji.emoji].keywords);
 *          }
 *          const emojiRow = {
 *              code: emoji.emoji,
 *              keywords: _.uniq(keywords)
 *          };
 *
 *          if (emoji.skin_tones) {
 *              emojiRow.types = skinTones.map(skinTone => {
 *                 const emojiUnicode = trimEmojiUnicode(getEmojiUnicode(emoji.emoji)).split(' ').map(p => parseInt(p, 16));
 *                 if(emojiUnicode.length > 0) {
 *                     emojiUnicode.splice(1, 0, parseInt(skinTone, 16));
 *                 } else {
 *                    emojiUnicode.push(parseInt(skinTone, 16));
 *                 }
 *                 return String.fromCodePoint(...emojiUnicode);
 *              });
 *          }
 *          emojisList.push(emojiRow);
 *     }
 * };
 */

// BEFORE YOU EDIT THIS, PLEASE SEE WARNINGS IN EmojiPickerMenu.js
const skinTones = [{
    code: '🖐',
    skinTone: CONST.DEFAULT_SKIN_TONE,
}, {
    code: '🖐🏻',
    skinTone: 4,
}, {
    code: '🖐🏼',
    skinTone: 3,
}, {
    code: '🖐🏽',
    skinTone: 2,
}, {
    code: '🖐🏾',
    skinTone: 1,
}, {
    code: '🖐🏿',
    skinTone: 0,
}];

const emojis = [
    {
        "code": "smileysAndEmotion",
        "header": true,
        "index": 0
    },
    {
        "name": "grinning",
        "code": "😀",
        "keywords": [
            "smile",
            "happy",
            "grinning",
            "face",
            "grin"
        ],
        "index": 1
    },
    {
        "name": "smiley",
        "code": "😃",
        "keywords": [
            "happy",
            "joy",
            "haha",
            "smiley",
            "face",
            "mouth",
            "open",
            "smile"
        ],
        "index": 2
    },
    {
        "name": "smile",
        "code": "😄",
        "keywords": [
            "happy",
            "joy",
            "laugh",
            "pleased",
            "smile",
            "eye",
            "face",
            "mouth",
            "open"
        ],
        "index": 3
    },
    {
        "name": "grin",
        "code": "😁",
        "keywords": [
            "grin",
            "eye",
            "face",
            "smile"
        ],
        "index": 4
    },
    {
        "name": "laughing",
        "code": "😆",
        "keywords": [
            "happy",
            "haha",
            "laughing",
            "satisfied",
            "face",
            "laugh",
            "mouth",
            "open",
            "smile"
        ],
        "index": 5
    },
    {
        "name": "sweat_smile",
        "code": "😅",
        "keywords": [
            "hot",
            "sweat_smile",
            "cold",
            "face",
            "open",
            "smile",
            "sweat"
        ],
        "index": 6
    },
    {
        "name": "rofl",
        "code": "🤣",
        "keywords": [
            "lol",
            "laughing",
            "rofl",
            "face",
            "floor",
            "laugh",
            "rolling"
        ],
        "index": 7
    },
    {
        "name": "joy",
        "code": "😂",
        "keywords": [
            "tears",
            "joy",
            "face",
            "laugh",
            "tear"
        ],
        "index": 8
    },
    {
        "name": "slightly_smiling_face",
        "code": "🙂",
        "keywords": [
            "slightly_smiling_face",
            "face",
            "smile"
        ],
        "index": 9
    },
    {
        "name": "upside_down_face",
        "code": "🙃",
        "keywords": [
            "upside_down_face",
            "face",
            "upside-down"
        ],
        "index": 10
    },
    {
        "name": "wink",
        "code": "😉",
        "keywords": [
            "flirt",
            "wink",
            "face"
        ],
        "index": 11
    },
    {
        "name": "blush",
        "code": "😊",
        "keywords": [
            "proud",
            "blush",
            "eye",
            "face",
            "smile"
        ],
        "index": 12
    },
    {
        "name": "innocent",
        "code": "😇",
        "keywords": [
            "angel",
            "innocent",
            "face",
            "fairy tale",
            "fantasy",
            "halo",
            "smile"
        ],
        "index": 13
    },
    {
        "name": "smiling_face_with_three_hearts",
        "code": "🥰",
        "keywords": [
            "love",
            "smiling_face_with_three_hearts"
        ],
        "index": 14
    },
    {
        "name": "heart_eyes",
        "code": "😍",
        "keywords": [
            "love",
            "crush",
            "heart_eyes",
            "eye",
            "face",
            "heart",
            "smile"
        ],
        "index": 15
    },
    {
        "name": "star_struck",
        "code": "🤩",
        "keywords": [
            "eyes",
            "star_struck"
        ],
        "index": 16
    },
    {
        "name": "kissing_heart",
        "code": "😘",
        "keywords": [
            "flirt",
            "kissing_heart",
            "face",
            "heart",
            "kiss"
        ],
        "index": 17
    },
    {
        "name": "kissing",
        "code": "😗",
        "keywords": [
            "kissing",
            "face",
            "kiss"
        ],
        "index": 18
    },
    {
        "name": "relaxed",
        "code": "☺️",
        "keywords": [
            "blush",
            "pleased",
            "relaxed"
        ],
        "index": 19
    },
    {
        "name": "kissing_closed_eyes",
        "code": "😚",
        "keywords": [
            "kissing_closed_eyes",
            "closed",
            "eye",
            "face",
            "kiss"
        ],
        "index": 20
    },
    {
        "name": "kissing_smiling_eyes",
        "code": "😙",
        "keywords": [
            "kissing_smiling_eyes",
            "eye",
            "face",
            "kiss",
            "smile"
        ],
        "index": 21
    },
    {
        "name": "smiling_face_with_tear",
        "code": "🥲",
        "keywords": [
            "smiling_face_with_tear"
        ],
        "index": 22
    },
    {
        "name": "yum",
        "code": "😋",
        "keywords": [
            "tongue",
            "lick",
            "yum",
            "delicious",
            "face",
            "savouring",
            "smile",
            "um"
        ],
        "index": 23
    },
    {
        "name": "stuck_out_tongue",
        "code": "😛",
        "keywords": [
            "stuck_out_tongue",
            "face",
            "tongue"
        ],
        "index": 24
    },
    {
        "name": "stuck_out_tongue_winking_eye",
        "code": "😜",
        "keywords": [
            "prank",
            "silly",
            "stuck_out_tongue_winking_eye",
            "eye",
            "face",
            "joke",
            "tongue",
            "wink"
        ],
        "index": 25
    },
    {
        "name": "zany_face",
        "code": "🤪",
        "keywords": [
            "goofy",
            "wacky",
            "zany_face"
        ],
        "index": 26
    },
    {
        "name": "stuck_out_tongue_closed_eyes",
        "code": "😝",
        "keywords": [
            "prank",
            "stuck_out_tongue_closed_eyes",
            "eye",
            "face",
            "horrible",
            "taste",
            "tongue"
        ],
        "index": 27
    },
    {
        "name": "money_mouth_face",
        "code": "🤑",
        "keywords": [
            "rich",
            "money_mouth_face",
            "face",
            "money",
            "mouth"
        ],
        "index": 28
    },
    {
        "name": "hugs",
        "code": "🤗",
        "keywords": [
            "hugs",
            "face",
            "hug",
            "hugging"
        ],
        "index": 29
    },
    {
        "name": "hand_over_mouth",
        "code": "🤭",
        "keywords": [
            "quiet",
            "whoops",
            "hand_over_mouth"
        ],
        "index": 30
    },
    {
        "name": "shushing_face",
        "code": "🤫",
        "keywords": [
            "silence",
            "quiet",
            "shushing_face"
        ],
        "index": 31
    },
    {
        "name": "thinking",
        "code": "🤔",
        "keywords": [
            "thinking",
            "face"
        ],
        "index": 32
    },
    {
        "name": "zipper_mouth_face",
        "code": "🤐",
        "keywords": [
            "silence",
            "hush",
            "zipper_mouth_face",
            "face",
            "mouth",
            "zipper"
        ],
        "index": 33
    },
    {
        "name": "raised_eyebrow",
        "code": "🤨",
        "keywords": [
            "suspicious",
            "raised_eyebrow"
        ],
        "index": 34
    },
    {
        "name": "neutral_face",
        "code": "😐",
        "keywords": [
            "meh",
            "neutral_face",
            "deadpan",
            "face",
            "neutral"
        ],
        "index": 35
    },
    {
        "name": "expressionless",
        "code": "😑",
        "keywords": [
            "expressionless",
            "face",
            "inexpressive",
            "unexpressive"
        ],
        "index": 36
    },
    {
        "name": "no_mouth",
        "code": "😶",
        "keywords": [
            "mute",
            "silence",
            "no_mouth",
            "face",
            "mouth",
            "quiet",
            "silent"
        ],
        "index": 37
    },
    {
        "name": "face_in_clouds",
        "code": "😶‍🌫️",
        "keywords": [
            "face_in_clouds"
        ],
        "index": 38
    },
    {
        "name": "smirk",
        "code": "😏",
        "keywords": [
            "smug",
            "smirk",
            "face"
        ],
        "index": 39
    },
    {
        "name": "unamused",
        "code": "😒",
        "keywords": [
            "meh",
            "unamused",
            "face",
            "unhappy"
        ],
        "index": 40
    },
    {
        "name": "roll_eyes",
        "code": "🙄",
        "keywords": [
            "roll_eyes",
            "eyes",
            "face",
            "rolling"
        ],
        "index": 41
    },
    {
        "name": "grimacing",
        "code": "😬",
        "keywords": [
            "grimacing",
            "face",
            "grimace"
        ],
        "index": 42
    },
    {
        "name": "face_exhaling",
        "code": "😮‍💨",
        "keywords": [
            "face_exhaling"
        ],
        "index": 43
    },
    {
        "name": "lying_face",
        "code": "🤥",
        "keywords": [
            "liar",
            "lying_face",
            "face",
            "lie",
            "pinocchio"
        ],
        "index": 44
    },
    {
        "name": "relieved",
        "code": "😌",
        "keywords": [
            "whew",
            "relieved",
            "face"
        ],
        "index": 45
    },
    {
        "name": "pensive",
        "code": "😔",
        "keywords": [
            "pensive",
            "dejected",
            "face"
        ],
        "index": 46
    },
    {
        "name": "sleepy",
        "code": "😪",
        "keywords": [
            "tired",
            "sleepy",
            "face",
            "sleep"
        ],
        "index": 47
    },
    {
        "name": "drooling_face",
        "code": "🤤",
        "keywords": [
            "drooling_face",
            "drooling",
            "face"
        ],
        "index": 48
    },
    {
        "name": "sleeping",
        "code": "😴",
        "keywords": [
            "zzz",
            "sleeping",
            "face",
            "sleep"
        ],
        "index": 49
    },
    {
        "name": "mask",
        "code": "😷",
        "keywords": [
            "sick",
            "ill",
            "mask",
            "cold",
            "doctor",
            "face",
            "medicine"
        ],
        "index": 50
    },
    {
        "name": "face_with_thermometer",
        "code": "🤒",
        "keywords": [
            "sick",
            "face_with_thermometer",
            "face",
            "ill",
            "thermometer"
        ],
        "index": 51
    },
    {
        "name": "face_with_head_bandage",
        "code": "🤕",
        "keywords": [
            "hurt",
            "face_with_head_bandage",
            "bandage",
            "face",
            "injury"
        ],
        "index": 52
    },
    {
        "name": "nauseated_face",
        "code": "🤢",
        "keywords": [
            "sick",
            "barf",
            "disgusted",
            "nauseated_face",
            "face",
            "nauseated",
            "vomit"
        ],
        "index": 53
    },
    {
        "name": "vomiting_face",
        "code": "🤮",
        "keywords": [
            "barf",
            "sick",
            "vomiting_face"
        ],
        "index": 54
    },
    {
        "name": "sneezing_face",
        "code": "🤧",
        "keywords": [
            "achoo",
            "sick",
            "sneezing_face",
            "face",
            "gesundheit",
            "sneeze"
        ],
        "index": 55
    },
    {
        "name": "hot_face",
        "code": "🥵",
        "keywords": [
            "heat",
            "sweating",
            "hot_face"
        ],
        "index": 56
    },
    {
        "name": "cold_face",
        "code": "🥶",
        "keywords": [
            "freezing",
            "ice",
            "cold_face"
        ],
        "index": 57
    },
    {
        "name": "woozy_face",
        "code": "🥴",
        "keywords": [
            "groggy",
            "woozy_face"
        ],
        "index": 58
    },
    {
        "name": "dizzy_face",
        "code": "😵",
        "keywords": [
            "dizzy_face",
            "dizzy",
            "face"
        ],
        "index": 59
    },
    {
        "name": "face_with_spiral_eyes",
        "code": "😵‍💫",
        "keywords": [
            "face_with_spiral_eyes"
        ],
        "index": 60
    },
    {
        "name": "exploding_head",
        "code": "🤯",
        "keywords": [
            "mind",
            "blown",
            "exploding_head"
        ],
        "index": 61
    },
    {
        "name": "cowboy_hat_face",
        "code": "🤠",
        "keywords": [
            "cowboy_hat_face",
            "cowboy",
            "cowgirl",
            "face",
            "hat"
        ],
        "index": 62
    },
    {
        "name": "partying_face",
        "code": "🥳",
        "keywords": [
            "celebration",
            "birthday",
            "partying_face"
        ],
        "index": 63
    },
    {
        "name": "disguised_face",
        "code": "🥸",
        "keywords": [
            "disguised_face"
        ],
        "index": 64
    },
    {
        "name": "sunglasses",
        "code": "😎",
        "keywords": [
            "cool",
            "sunglasses",
            "bright",
            "eye",
            "eyewear",
            "face",
            "glasses",
            "smile",
            "sun",
            "weather"
        ],
        "index": 65
    },
    {
        "name": "nerd_face",
        "code": "🤓",
        "keywords": [
            "geek",
            "glasses",
            "nerd_face",
            "face",
            "nerd"
        ],
        "index": 66
    },
    {
        "name": "monocle_face",
        "code": "🧐",
        "keywords": [
            "monocle_face"
        ],
        "index": 67
    },
    {
        "name": "confused",
        "code": "😕",
        "keywords": [
            "confused",
            "face"
        ],
        "index": 68
    },
    {
        "name": "worried",
        "code": "😟",
        "keywords": [
            "nervous",
            "worried",
            "face"
        ],
        "index": 69
    },
    {
        "name": "slightly_frowning_face",
        "code": "🙁",
        "keywords": [
            "slightly_frowning_face",
            "face",
            "frown"
        ],
        "index": 70
    },
    {
        "name": "frowning_face",
        "code": "☹️",
        "keywords": [
            "frowning_face"
        ],
        "index": 71
    },
    {
        "name": "open_mouth",
        "code": "😮",
        "keywords": [
            "surprise",
            "impressed",
            "wow",
            "open_mouth",
            "face",
            "mouth",
            "open",
            "sympathy"
        ],
        "index": 72
    },
    {
        "name": "hushed",
        "code": "😯",
        "keywords": [
            "silence",
            "speechless",
            "hushed",
            "face",
            "stunned",
            "surprised"
        ],
        "index": 73
    },
    {
        "name": "astonished",
        "code": "😲",
        "keywords": [
            "amazed",
            "gasp",
            "astonished",
            "face",
            "shocked",
            "totally"
        ],
        "index": 74
    },
    {
        "name": "flushed",
        "code": "😳",
        "keywords": [
            "flushed",
            "dazed",
            "face"
        ],
        "index": 75
    },
    {
        "name": "pleading_face",
        "code": "🥺",
        "keywords": [
            "puppy",
            "eyes",
            "pleading_face"
        ],
        "index": 76
    },
    {
        "name": "frowning",
        "code": "😦",
        "keywords": [
            "frowning",
            "face",
            "frown",
            "mouth",
            "open"
        ],
        "index": 77
    },
    {
        "name": "anguished",
        "code": "😧",
        "keywords": [
            "stunned",
            "anguished",
            "face"
        ],
        "index": 78
    },
    {
        "name": "fearful",
        "code": "😨",
        "keywords": [
            "scared",
            "shocked",
            "oops",
            "fearful",
            "face",
            "fear"
        ],
        "index": 79
    },
    {
        "name": "cold_sweat",
        "code": "😰",
        "keywords": [
            "nervous",
            "cold_sweat",
            "blue",
            "cold",
            "face",
            "mouth",
            "open",
            "rushed",
            "sweat"
        ],
        "index": 80
    },
    {
        "name": "disappointed_relieved",
        "code": "😥",
        "keywords": [
            "phew",
            "sweat",
            "nervous",
            "disappointed_relieved",
            "disappointed",
            "face",
            "relieved",
            "whew"
        ],
        "index": 81
    },
    {
        "name": "cry",
        "code": "😢",
        "keywords": [
            "sad",
            "tear",
            "cry",
            "face"
        ],
        "index": 82
    },
    {
        "name": "sob",
        "code": "😭",
        "keywords": [
            "sad",
            "cry",
            "bawling",
            "sob",
            "face",
            "tear"
        ],
        "index": 83
    },
    {
        "name": "scream",
        "code": "😱",
        "keywords": [
            "horror",
            "shocked",
            "scream",
            "face",
            "fear",
            "fearful",
            "munch",
            "scared"
        ],
        "index": 84
    },
    {
        "name": "confounded",
        "code": "😖",
        "keywords": [
            "confounded",
            "face"
        ],
        "index": 85
    },
    {
        "name": "persevere",
        "code": "😣",
        "keywords": [
            "struggling",
            "persevere",
            "face"
        ],
        "index": 86
    },
    {
        "name": "disappointed",
        "code": "😞",
        "keywords": [
            "sad",
            "disappointed",
            "face"
        ],
        "index": 87
    },
    {
        "name": "sweat",
        "code": "😓",
        "keywords": [
            "sweat",
            "cold",
            "face"
        ],
        "index": 88
    },
    {
        "name": "weary",
        "code": "😩",
        "keywords": [
            "tired",
            "weary",
            "face"
        ],
        "index": 89
    },
    {
        "name": "tired_face",
        "code": "😫",
        "keywords": [
            "upset",
            "whine",
            "tired_face",
            "face",
            "tired"
        ],
        "index": 90
    },
    {
        "name": "yawning_face",
        "code": "🥱",
        "keywords": [
            "yawning_face"
        ],
        "index": 91
    },
    {
        "name": "triumph",
        "code": "😤",
        "keywords": [
            "smug",
            "triumph",
            "face",
            "won"
        ],
        "index": 92
    },
    {
        "name": "rage",
        "code": "😡",
        "keywords": [
            "angry",
            "rage",
            "pout",
            "face",
            "mad",
            "pouting",
            "red"
        ],
        "index": 93
    },
    {
        "name": "angry",
        "code": "😠",
        "keywords": [
            "mad",
            "annoyed",
            "angry",
            "face"
        ],
        "index": 94
    },
    {
        "name": "cursing_face",
        "code": "🤬",
        "keywords": [
            "foul",
            "cursing_face"
        ],
        "index": 95
    },
    {
        "name": "smiling_imp",
        "code": "😈",
        "keywords": [
            "devil",
            "evil",
            "horns",
            "smiling_imp",
            "face",
            "fairy tale",
            "fantasy",
            "smile"
        ],
        "index": 96
    },
    {
        "name": "imp",
        "code": "👿",
        "keywords": [
            "angry",
            "devil",
            "evil",
            "horns",
            "imp",
            "demon",
            "face",
            "fairy tale",
            "fantasy"
        ],
        "index": 97
    },
    {
        "name": "skull",
        "code": "💀",
        "keywords": [
            "dead",
            "danger",
            "poison",
            "skull",
            "body",
            "death",
            "face",
            "fairy tale",
            "monster"
        ],
        "index": 98
    },
    {
        "name": "skull_and_crossbones",
        "code": "☠️",
        "keywords": [
            "danger",
            "pirate",
            "skull_and_crossbones",
            "body",
            "crossbones",
            "death",
            "face",
            "monster",
            "skull"
        ],
        "index": 99
    },
    {
        "name": "hankey",
        "code": "💩",
        "keywords": [
            "crap",
            "hankey",
            "poop",
            "shit",
            "comic",
            "dung",
            "face",
            "monster",
            "poo"
        ],
        "index": 100
    },
    {
        "name": "clown_face",
        "code": "🤡",
        "keywords": [
            "clown_face",
            "clown",
            "face"
        ],
        "index": 101
    },
    {
        "name": "japanese_ogre",
        "code": "👹",
        "keywords": [
            "monster",
            "japanese_ogre",
            "creature",
            "face",
            "fairy tale",
            "fantasy",
            "japanese",
            "ogre"
        ],
        "index": 102
    },
    {
        "name": "japanese_goblin",
        "code": "👺",
        "keywords": [
            "japanese_goblin",
            "creature",
            "face",
            "fairy tale",
            "fantasy",
            "goblin",
            "japanese",
            "monster"
        ],
        "index": 103
    },
    {
        "name": "ghost",
        "code": "👻",
        "keywords": [
            "halloween",
            "ghost",
            "creature",
            "face",
            "fairy tale",
            "fantasy",
            "monster"
        ],
        "index": 104
    },
    {
        "name": "alien",
        "code": "👽",
        "keywords": [
            "ufo",
            "alien",
            "creature",
            "extraterrestrial",
            "face",
            "fairy tale",
            "fantasy",
            "monster",
            "space"
        ],
        "index": 105
    },
    {
        "name": "space_invader",
        "code": "👾",
        "keywords": [
            "game",
            "retro",
            "space_invader",
            "alien",
            "creature",
            "extraterrestrial",
            "face",
            "fairy tale",
            "fantasy",
            "monster",
            "space",
            "ufo"
        ],
        "index": 106
    },
    {
        "name": "robot",
        "code": "🤖",
        "keywords": [
            "robot",
            "face",
            "monster"
        ],
        "index": 107
    },
    {
        "name": "smiley_cat",
        "code": "😺",
        "keywords": [
            "smiley_cat",
            "cat",
            "face",
            "mouth",
            "open",
            "smile"
        ],
        "index": 108
    },
    {
        "name": "smile_cat",
        "code": "😸",
        "keywords": [
            "smile_cat",
            "cat",
            "eye",
            "face",
            "grin",
            "smile"
        ],
        "index": 109
    },
    {
        "name": "joy_cat",
        "code": "😹",
        "keywords": [
            "joy_cat",
            "cat",
            "face",
            "joy",
            "tear"
        ],
        "index": 110
    },
    {
        "name": "heart_eyes_cat",
        "code": "😻",
        "keywords": [
            "heart_eyes_cat",
            "cat",
            "eye",
            "face",
            "heart",
            "love",
            "smile"
        ],
        "index": 111
    },
    {
        "name": "smirk_cat",
        "code": "😼",
        "keywords": [
            "smirk_cat",
            "cat",
            "face",
            "ironic",
            "smile",
            "wry"
        ],
        "index": 112
    },
    {
        "name": "kissing_cat",
        "code": "😽",
        "keywords": [
            "kissing_cat",
            "cat",
            "eye",
            "face",
            "kiss"
        ],
        "index": 113
    },
    {
        "name": "scream_cat",
        "code": "🙀",
        "keywords": [
            "horror",
            "scream_cat",
            "cat",
            "face",
            "oh",
            "surprised",
            "weary"
        ],
        "index": 114
    },
    {
        "name": "crying_cat_face",
        "code": "😿",
        "keywords": [
            "sad",
            "tear",
            "crying_cat_face",
            "cat",
            "cry",
            "face"
        ],
        "index": 115
    },
    {
        "name": "pouting_cat",
        "code": "😾",
        "keywords": [
            "pouting_cat",
            "cat",
            "face",
            "pouting"
        ],
        "index": 116
    },
    {
        "name": "see_no_evil",
        "code": "🙈",
        "keywords": [
            "monkey",
            "blind",
            "ignore",
            "see_no_evil",
            "evil",
            "face",
            "forbidden",
            "gesture",
            "no",
            "not",
            "prohibited",
            "see"
        ],
        "index": 117
    },
    {
        "name": "hear_no_evil",
        "code": "🙉",
        "keywords": [
            "monkey",
            "deaf",
            "hear_no_evil",
            "evil",
            "face",
            "forbidden",
            "gesture",
            "hear",
            "no",
            "not",
            "prohibited"
        ],
        "index": 118
    },
    {
        "name": "speak_no_evil",
        "code": "🙊",
        "keywords": [
            "monkey",
            "mute",
            "hush",
            "speak_no_evil",
            "evil",
            "face",
            "forbidden",
            "gesture",
            "no",
            "not",
            "prohibited",
            "speak"
        ],
        "index": 119
    },
    {
        "name": "kiss",
        "code": "💋",
        "keywords": [
            "lipstick",
            "kiss",
            "heart",
            "lips",
            "mark",
            "romance"
        ],
        "index": 120
    },
    {
        "name": "love_letter",
        "code": "💌",
        "keywords": [
            "email",
            "envelope",
            "love_letter",
            "heart",
            "letter",
            "love",
            "mail",
            "romance"
        ],
        "index": 121
    },
    {
        "name": "cupid",
        "code": "💘",
        "keywords": [
            "love",
            "heart",
            "cupid",
            "arrow",
            "romance"
        ],
        "index": 122
    },
    {
        "name": "gift_heart",
        "code": "💝",
        "keywords": [
            "chocolates",
            "gift_heart",
            "heart",
            "ribbon",
            "valentine"
        ],
        "index": 123
    },
    {
        "name": "sparkling_heart",
        "code": "💖",
        "keywords": [
            "sparkling_heart",
            "excited",
            "heart",
            "sparkle"
        ],
        "index": 124
    },
    {
        "name": "heartpulse",
        "code": "💗",
        "keywords": [
            "heartpulse",
            "excited",
            "growing",
            "heart",
            "nervous"
        ],
        "index": 125
    },
    {
        "name": "heartbeat",
        "code": "💓",
        "keywords": [
            "heartbeat",
            "beating",
            "heart",
            "pulsating"
        ],
        "index": 126
    },
    {
        "name": "revolving_hearts",
        "code": "💞",
        "keywords": [
            "revolving_hearts",
            "heart",
            "revolving"
        ],
        "index": 127
    },
    {
        "name": "two_hearts",
        "code": "💕",
        "keywords": [
            "two_hearts",
            "heart",
            "love"
        ],
        "index": 128
    },
    {
        "name": "heart_decoration",
        "code": "💟",
        "keywords": [
            "heart_decoration",
            "heart"
        ],
        "index": 129
    },
    {
        "name": "heavy_heart_exclamation",
        "code": "❣️",
        "keywords": [
            "heavy_heart_exclamation",
            "exclamation",
            "heart",
            "mark",
            "punctuation"
        ],
        "index": 130
    },
    {
        "name": "broken_heart",
        "code": "💔",
        "keywords": [
            "broken_heart",
            "break",
            "broken",
            "heart"
        ],
        "index": 131
    },
    {
        "name": "heart_on_fire",
        "code": "❤️‍🔥",
        "keywords": [
            "heart_on_fire"
        ],
        "index": 132
    },
    {
        "name": "mending_heart",
        "code": "❤️‍🩹",
        "keywords": [
            "mending_heart"
        ],
        "index": 133
    },
    {
        "name": "heart",
        "code": "❤️",
        "keywords": [
            "love",
            "heart"
        ],
        "index": 134
    },
    {
        "name": "orange_heart",
        "code": "🧡",
        "keywords": [
            "orange_heart"
        ],
        "index": 135
    },
    {
        "name": "yellow_heart",
        "code": "💛",
        "keywords": [
            "yellow_heart",
            "heart",
            "yellow"
        ],
        "index": 136
    },
    {
        "name": "green_heart",
        "code": "💚",
        "keywords": [
            "green_heart",
            "green",
            "heart"
        ],
        "index": 137
    },
    {
        "name": "blue_heart",
        "code": "💙",
        "keywords": [
            "blue_heart",
            "blue",
            "heart"
        ],
        "index": 138
    },
    {
        "name": "purple_heart",
        "code": "💜",
        "keywords": [
            "purple_heart",
            "heart",
            "purple"
        ],
        "index": 139
    },
    {
        "name": "brown_heart",
        "code": "🤎",
        "keywords": [
            "brown_heart"
        ],
        "index": 140
    },
    {
        "name": "black_heart",
        "code": "🖤",
        "keywords": [
            "black_heart",
            "black",
            "evil",
            "heart",
            "wicked"
        ],
        "index": 141
    },
    {
        "name": "white_heart",
        "code": "🤍",
        "keywords": [
            "white_heart"
        ],
        "index": 142
    },
    {
        "name": "100",
        "code": "💯",
        "keywords": [
            "score",
            "perfect",
            "100",
            "full",
            "hundred"
        ],
        "index": 143
    },
    {
        "name": "anger",
        "code": "💢",
        "keywords": [
            "angry",
            "anger",
            "comic",
            "mad"
        ],
        "index": 144
    },
    {
        "name": "boom",
        "code": "💥",
        "keywords": [
            "explode",
            "boom",
            "collision",
            "comic"
        ],
        "index": 145
    },
    {
        "name": "dizzy",
        "code": "💫",
        "keywords": [
            "star",
            "dizzy",
            "comic"
        ],
        "index": 146
    },
    {
        "name": "sweat_drops",
        "code": "💦",
        "keywords": [
            "water",
            "workout",
            "sweat_drops",
            "comic",
            "splashing",
            "sweat"
        ],
        "index": 147
    },
    {
        "name": "dash",
        "code": "💨",
        "keywords": [
            "wind",
            "blow",
            "fast",
            "dash",
            "comic",
            "running"
        ],
        "index": 148
    },
    {
        "name": "hole",
        "code": "🕳️",
        "keywords": [
            "hole"
        ],
        "index": 149
    },
    {
        "name": "bomb",
        "code": "💣",
        "keywords": [
            "boom",
            "bomb",
            "comic"
        ],
        "index": 150
    },
    {
        "name": "speech_balloon",
        "code": "💬",
        "keywords": [
            "comment",
            "speech_balloon",
            "balloon",
            "bubble",
            "comic",
            "dialog",
            "speech"
        ],
        "index": 151
    },
    {
        "name": "eye_speech_bubble",
        "code": "👁️‍🗨️",
        "keywords": [
            "eye_speech_bubble"
        ],
        "index": 152
    },
    {
        "name": "left_speech_bubble",
        "code": "🗨️",
        "keywords": [
            "left_speech_bubble"
        ],
        "index": 153
    },
    {
        "name": "right_anger_bubble",
        "code": "🗯️",
        "keywords": [
            "right_anger_bubble"
        ],
        "index": 154
    },
    {
        "name": "thought_balloon",
        "code": "💭",
        "keywords": [
            "thinking",
            "thought_balloon",
            "balloon",
            "bubble",
            "comic",
            "thought"
        ],
        "index": 155
    },
    {
        "name": "zzz",
        "code": "💤",
        "keywords": [
            "sleeping",
            "zzz",
            "comic",
            "sleep"
        ],
        "index": 156
    },
    {
        "code": "peopleAndBody",
        "header": true,
        "index": 157
    },
    {
        "name": "wave",
        "code": "👋",
        "keywords": [
            "goodbye",
            "wave",
            "body",
            "hand",
            "waving"
        ],
        "types": [
            "👋🏿",
            "👋🏾",
            "👋🏽",
            "👋🏼",
            "👋🏻"
        ],
        "index": 158
    },
    {
        "name": "raised_back_of_hand",
        "code": "🤚",
        "keywords": [
            "raised_back_of_hand",
            "backhand",
            "raised"
        ],
        "types": [
            "🤚🏿",
            "🤚🏾",
            "🤚🏽",
            "🤚🏼",
            "🤚🏻"
        ],
        "index": 159
    },
    {
        "name": "raised_hand_with_fingers_splayed",
        "code": "🖐️",
        "keywords": [
            "raised_hand_with_fingers_splayed"
        ],
        "types": [
            "🖐🏿",
            "🖐🏾",
            "🖐🏽",
            "🖐🏼",
            "🖐🏻"
        ],
        "index": 160
    },
    {
        "name": "hand",
        "code": "✋",
        "keywords": [
            "highfive",
            "stop",
            "hand",
            "raised_hand",
            "body"
        ],
        "types": [
            "✋🏿",
            "✋🏾",
            "✋🏽",
            "✋🏼",
            "✋🏻"
        ],
        "index": 161
    },
    {
        "name": "vulcan_salute",
        "code": "🖖",
        "keywords": [
            "prosper",
            "spock",
            "vulcan_salute",
            "body",
            "finger",
            "hand",
            "vulcan"
        ],
        "types": [
            "🖖🏿",
            "🖖🏾",
            "🖖🏽",
            "🖖🏼",
            "🖖🏻"
        ],
        "index": 162
    },
    {
        "name": "ok_hand",
        "code": "👌",
        "keywords": [
            "ok_hand",
            "body",
            "hand",
            "ok"
        ],
        "types": [
            "👌🏿",
            "👌🏾",
            "👌🏽",
            "👌🏼",
            "👌🏻"
        ],
        "index": 163
    },
    {
        "name": "pinched_fingers",
        "code": "🤌",
        "keywords": [
            "pinched_fingers"
        ],
        "types": [
            "🤌🏿",
            "🤌🏾",
            "🤌🏽",
            "🤌🏼",
            "🤌🏻"
        ],
        "index": 164
    },
    {
        "name": "pinching_hand",
        "code": "🤏",
        "keywords": [
            "pinching_hand"
        ],
        "types": [
            "🤏🏿",
            "🤏🏾",
            "🤏🏽",
            "🤏🏼",
            "🤏🏻"
        ],
        "index": 165
    },
    {
        "name": "v",
        "code": "✌️",
        "keywords": [
            "victory",
            "peace",
            "v"
        ],
        "types": [
            "✌🏿",
            "✌🏾",
            "✌🏽",
            "✌🏼",
            "✌🏻"
        ],
        "index": 166
    },
    {
        "name": "crossed_fingers",
        "code": "🤞",
        "keywords": [
            "luck",
            "hopeful",
            "crossed_fingers",
            "cross",
            "finger",
            "hand"
        ],
        "types": [
            "🤞🏿",
            "🤞🏾",
            "🤞🏽",
            "🤞🏼",
            "🤞🏻"
        ],
        "index": 167
    },
    {
        "name": "love_you_gesture",
        "code": "🤟",
        "keywords": [
            "love_you_gesture"
        ],
        "types": [
            "🤟🏿",
            "🤟🏾",
            "🤟🏽",
            "🤟🏼",
            "🤟🏻"
        ],
        "index": 168
    },
    {
        "name": "metal",
        "code": "🤘",
        "keywords": [
            "metal",
            "body",
            "finger",
            "hand",
            "horns",
            "rock-on"
        ],
        "types": [
            "🤘🏿",
            "🤘🏾",
            "🤘🏽",
            "🤘🏼",
            "🤘🏻"
        ],
        "index": 169
    },
    {
        "name": "call_me_hand",
        "code": "🤙",
        "keywords": [
            "call_me_hand",
            "call",
            "hand"
        ],
        "types": [
            "🤙🏿",
            "🤙🏾",
            "🤙🏽",
            "🤙🏼",
            "🤙🏻"
        ],
        "index": 170
    },
    {
        "name": "point_left",
        "code": "👈",
        "keywords": [
            "point_left",
            "backhand",
            "body",
            "finger",
            "hand",
            "index",
            "point"
        ],
        "types": [
            "👈🏿",
            "👈🏾",
            "👈🏽",
            "👈🏼",
            "👈🏻"
        ],
        "index": 171
    },
    {
        "name": "point_right",
        "code": "👉",
        "keywords": [
            "point_right",
            "backhand",
            "body",
            "finger",
            "hand",
            "index",
            "point"
        ],
        "types": [
            "👉🏿",
            "👉🏾",
            "👉🏽",
            "👉🏼",
            "👉🏻"
        ],
        "index": 172
    },
    {
        "name": "point_up_2",
        "code": "👆",
        "keywords": [
            "point_up_2",
            "backhand",
            "body",
            "finger",
            "hand",
            "index",
            "point",
            "up"
        ],
        "types": [
            "👆🏿",
            "👆🏾",
            "👆🏽",
            "👆🏼",
            "👆🏻"
        ],
        "index": 173
    },
    {
        "name": "middle_finger",
        "code": "🖕",
        "keywords": [
            "middle_finger",
            "fu",
            "body",
            "finger",
            "hand",
            "middle finger"
        ],
        "types": [
            "🖕🏿",
            "🖕🏾",
            "🖕🏽",
            "🖕🏼",
            "🖕🏻"
        ],
        "index": 174
    },
    {
        "name": "point_down",
        "code": "👇",
        "keywords": [
            "point_down",
            "backhand",
            "body",
            "down",
            "finger",
            "hand",
            "index",
            "point"
        ],
        "types": [
            "👇🏿",
            "👇🏾",
            "👇🏽",
            "👇🏼",
            "👇🏻"
        ],
        "index": 175
    },
    {
        "name": "point_up",
        "code": "☝️",
        "keywords": [
            "point_up"
        ],
        "types": [
            "☝🏿",
            "☝🏾",
            "☝🏽",
            "☝🏼",
            "☝🏻"
        ],
        "index": 176
    },
    {
        "name": "+1",
        "code": "👍",
        "keywords": [
            "approve",
            "ok",
            "+1",
            "thumbsup",
            "body",
            "hand",
            "thumb",
            "thumbs up",
            "up"
        ],
        "types": [
            "👍🏿",
            "👍🏾",
            "👍🏽",
            "👍🏼",
            "👍🏻"
        ],
        "index": 177
    },
    {
        "name": "-1",
        "code": "👎",
        "keywords": [
            "disapprove",
            "bury",
            "-1",
            "thumbsdown",
            "body",
            "down",
            "hand",
            "thumb",
            "thumbs down"
        ],
        "types": [
            "👎🏿",
            "👎🏾",
            "👎🏽",
            "👎🏼",
            "👎🏻"
        ],
        "index": 178
    },
    {
        "name": "fist_raised",
        "code": "✊",
        "keywords": [
            "power",
            "fist_raised",
            "fist",
            "body",
            "clenched",
            "hand",
            "punch"
        ],
        "types": [
            "✊🏿",
            "✊🏾",
            "✊🏽",
            "✊🏼",
            "✊🏻"
        ],
        "index": 179
    },
    {
        "name": "fist_oncoming",
        "code": "👊",
        "keywords": [
            "attack",
            "fist_oncoming",
            "facepunch",
            "punch",
            "body",
            "clenched",
            "fist",
            "hand"
        ],
        "types": [
            "👊🏿",
            "👊🏾",
            "👊🏽",
            "👊🏼",
            "👊🏻"
        ],
        "index": 180
    },
    {
        "name": "fist_left",
        "code": "🤛",
        "keywords": [
            "fist_left",
            "fist",
            "leftwards"
        ],
        "types": [
            "🤛🏿",
            "🤛🏾",
            "🤛🏽",
            "🤛🏼",
            "🤛🏻"
        ],
        "index": 181
    },
    {
        "name": "fist_right",
        "code": "🤜",
        "keywords": [
            "fist_right",
            "fist",
            "rightwards"
        ],
        "types": [
            "🤜🏿",
            "🤜🏾",
            "🤜🏽",
            "🤜🏼",
            "🤜🏻"
        ],
        "index": 182
    },
    {
        "name": "clap",
        "code": "👏",
        "keywords": [
            "praise",
            "applause",
            "clap",
            "body",
            "hand"
        ],
        "types": [
            "👏🏿",
            "👏🏾",
            "👏🏽",
            "👏🏼",
            "👏🏻"
        ],
        "index": 183
    },
    {
        "name": "raised_hands",
        "code": "🙌",
        "keywords": [
            "hooray",
            "raised_hands",
            "body",
            "celebration",
            "gesture",
            "hand",
            "raised"
        ],
        "types": [
            "🙌🏿",
            "🙌🏾",
            "🙌🏽",
            "🙌🏼",
            "🙌🏻"
        ],
        "index": 184
    },
    {
        "name": "open_hands",
        "code": "👐",
        "keywords": [
            "open_hands",
            "body",
            "hand",
            "open"
        ],
        "types": [
            "👐🏿",
            "👐🏾",
            "👐🏽",
            "👐🏼",
            "👐🏻"
        ],
        "index": 185
    },
    {
        "name": "palms_up_together",
        "code": "🤲",
        "keywords": [
            "palms_up_together"
        ],
        "types": [
            "🤲🏿",
            "🤲🏾",
            "🤲🏽",
            "🤲🏼",
            "🤲🏻"
        ],
        "index": 186
    },
    {
        "name": "handshake",
        "code": "🤝",
        "keywords": [
            "deal",
            "handshake",
            "agreement",
            "hand",
            "meeting",
            "shake"
        ],
        "index": 187
    },
    {
        "name": "pray",
        "code": "🙏",
        "keywords": [
            "please",
            "hope",
            "wish",
            "pray",
            "ask",
            "body",
            "bow",
            "folded",
            "gesture",
            "hand",
            "thanks"
        ],
        "types": [
            "🙏🏿",
            "🙏🏾",
            "🙏🏽",
            "🙏🏼",
            "🙏🏻"
        ],
        "index": 188
    },
    {
        "name": "writing_hand",
        "code": "✍️",
        "keywords": [
            "writing_hand"
        ],
        "types": [
            "✍🏿",
            "✍🏾",
            "✍🏽",
            "✍🏼",
            "✍🏻"
        ],
        "index": 189
    },
    {
        "name": "nail_care",
        "code": "💅",
        "keywords": [
            "beauty",
            "manicure",
            "nail_care",
            "body",
            "care",
            "cosmetics",
            "nail",
            "polish"
        ],
        "types": [
            "💅🏿",
            "💅🏾",
            "💅🏽",
            "💅🏼",
            "💅🏻"
        ],
        "index": 190
    },
    {
        "name": "selfie",
        "code": "🤳",
        "keywords": [
            "selfie",
            "camera",
            "phone"
        ],
        "types": [
            "🤳🏿",
            "🤳🏾",
            "🤳🏽",
            "🤳🏼",
            "🤳🏻"
        ],
        "index": 191
    },
    {
        "name": "muscle",
        "code": "💪",
        "keywords": [
            "flex",
            "bicep",
            "strong",
            "workout",
            "muscle",
            "biceps",
            "body",
            "comic"
        ],
        "types": [
            "💪🏿",
            "💪🏾",
            "💪🏽",
            "💪🏼",
            "💪🏻"
        ],
        "index": 192
    },
    {
        "name": "mechanical_arm",
        "code": "🦾",
        "keywords": [
            "mechanical_arm"
        ],
        "index": 193
    },
    {
        "name": "mechanical_leg",
        "code": "🦿",
        "keywords": [
            "mechanical_leg"
        ],
        "index": 194
    },
    {
        "name": "leg",
        "code": "🦵",
        "keywords": [
            "leg"
        ],
        "types": [
            "🦵🏿",
            "🦵🏾",
            "🦵🏽",
            "🦵🏼",
            "🦵🏻"
        ],
        "index": 195
    },
    {
        "name": "foot",
        "code": "🦶",
        "keywords": [
            "foot"
        ],
        "types": [
            "🦶🏿",
            "🦶🏾",
            "🦶🏽",
            "🦶🏼",
            "🦶🏻"
        ],
        "index": 196
    },
    {
        "name": "ear",
        "code": "👂",
        "keywords": [
            "hear",
            "sound",
            "listen",
            "ear",
            "body"
        ],
        "types": [
            "👂🏿",
            "👂🏾",
            "👂🏽",
            "👂🏼",
            "👂🏻"
        ],
        "index": 197
    },
    {
        "name": "ear_with_hearing_aid",
        "code": "🦻",
        "keywords": [
            "ear_with_hearing_aid"
        ],
        "types": [
            "🦻🏿",
            "🦻🏾",
            "🦻🏽",
            "🦻🏼",
            "🦻🏻"
        ],
        "index": 198
    },
    {
        "name": "nose",
        "code": "👃",
        "keywords": [
            "smell",
            "nose",
            "body"
        ],
        "types": [
            "👃🏿",
            "👃🏾",
            "👃🏽",
            "👃🏼",
            "👃🏻"
        ],
        "index": 199
    },
    {
        "name": "brain",
        "code": "🧠",
        "keywords": [
            "brain"
        ],
        "index": 200
    },
    {
        "name": "anatomical_heart",
        "code": "🫀",
        "keywords": [
            "anatomical_heart"
        ],
        "index": 201
    },
    {
        "name": "lungs",
        "code": "🫁",
        "keywords": [
            "lungs"
        ],
        "index": 202
    },
    {
        "name": "tooth",
        "code": "🦷",
        "keywords": [
            "tooth"
        ],
        "index": 203
    },
    {
        "name": "bone",
        "code": "🦴",
        "keywords": [
            "bone"
        ],
        "index": 204
    },
    {
        "name": "eyes",
        "code": "👀",
        "keywords": [
            "look",
            "see",
            "watch",
            "eyes",
            "body",
            "eye",
            "face"
        ],
        "index": 205
    },
    {
        "name": "eye",
        "code": "👁️",
        "keywords": [
            "eye"
        ],
        "index": 206
    },
    {
        "name": "tongue",
        "code": "👅",
        "keywords": [
            "taste",
            "tongue",
            "body"
        ],
        "index": 207
    },
    {
        "name": "lips",
        "code": "👄",
        "keywords": [
            "kiss",
            "lips",
            "body",
            "mouth"
        ],
        "index": 208
    },
    {
        "name": "baby",
        "code": "👶",
        "keywords": [
            "child",
            "newborn",
            "baby"
        ],
        "types": [
            "👶🏿",
            "👶🏾",
            "👶🏽",
            "👶🏼",
            "👶🏻"
        ],
        "index": 209
    },
    {
        "name": "child",
        "code": "🧒",
        "keywords": [
            "child"
        ],
        "types": [
            "🧒🏿",
            "🧒🏾",
            "🧒🏽",
            "🧒🏼",
            "🧒🏻"
        ],
        "index": 210
    },
    {
        "name": "boy",
        "code": "👦",
        "keywords": [
            "child",
            "boy"
        ],
        "types": [
            "👦🏿",
            "👦🏾",
            "👦🏽",
            "👦🏼",
            "👦🏻"
        ],
        "index": 211
    },
    {
        "name": "girl",
        "code": "👧",
        "keywords": [
            "child",
            "girl",
            "maiden",
            "virgin",
            "virgo",
            "zodiac"
        ],
        "types": [
            "👧🏿",
            "👧🏾",
            "👧🏽",
            "👧🏼",
            "👧🏻"
        ],
        "index": 212
    },
    {
        "name": "adult",
        "code": "🧑",
        "keywords": [
            "adult"
        ],
        "types": [
            "🧑🏿",
            "🧑🏾",
            "🧑🏽",
            "🧑🏼",
            "🧑🏻"
        ],
        "index": 213
    },
    {
        "name": "blond_haired_person",
        "code": "👱",
        "keywords": [
            "blond_haired_person",
            "blond"
        ],
        "types": [
            "👱🏿",
            "👱🏾",
            "👱🏽",
            "👱🏼",
            "👱🏻"
        ],
        "index": 214
    },
    {
        "name": "man",
        "code": "👨",
        "keywords": [
            "mustache",
            "father",
            "dad",
            "man"
        ],
        "types": [
            "👨🏿",
            "👨🏾",
            "👨🏽",
            "👨🏼",
            "👨🏻"
        ],
        "index": 215
    },
    {
        "name": "bearded_person",
        "code": "🧔",
        "keywords": [
            "bearded_person"
        ],
        "types": [
            "🧔🏿",
            "🧔🏾",
            "🧔🏽",
            "🧔🏼",
            "🧔🏻"
        ],
        "index": 216
    },
    {
        "name": "man_beard",
        "code": "🧔‍♂️",
        "keywords": [
            "man_beard"
        ],
        "types": [
            "🧔🏿‍♂️",
            "🧔🏾‍♂️",
            "🧔🏽‍♂️",
            "🧔🏼‍♂️",
            "🧔🏻‍♂️"
        ],
        "index": 217
    },
    {
        "name": "woman_beard",
        "code": "🧔‍♀️",
        "keywords": [
            "woman_beard"
        ],
        "types": [
            "🧔🏿‍♀️",
            "🧔🏾‍♀️",
            "🧔🏽‍♀️",
            "🧔🏼‍♀️",
            "🧔🏻‍♀️"
        ],
        "index": 218
    },
    {
        "name": "red_haired_man",
        "code": "👨‍🦰",
        "keywords": [
            "red_haired_man"
        ],
        "types": [
            "👨🏿‍🦰",
            "👨🏾‍🦰",
            "👨🏽‍🦰",
            "👨🏼‍🦰",
            "👨🏻‍🦰"
        ],
        "index": 219
    },
    {
        "name": "curly_haired_man",
        "code": "👨‍🦱",
        "keywords": [
            "curly_haired_man"
        ],
        "types": [
            "👨🏿‍🦱",
            "👨🏾‍🦱",
            "👨🏽‍🦱",
            "👨🏼‍🦱",
            "👨🏻‍🦱"
        ],
        "index": 220
    },
    {
        "name": "white_haired_man",
        "code": "👨‍🦳",
        "keywords": [
            "white_haired_man"
        ],
        "types": [
            "👨🏿‍🦳",
            "👨🏾‍🦳",
            "👨🏽‍🦳",
            "👨🏼‍🦳",
            "👨🏻‍🦳"
        ],
        "index": 221
    },
    {
        "name": "bald_man",
        "code": "👨‍🦲",
        "keywords": [
            "bald_man"
        ],
        "types": [
            "👨🏿‍🦲",
            "👨🏾‍🦲",
            "👨🏽‍🦲",
            "👨🏼‍🦲",
            "👨🏻‍🦲"
        ],
        "index": 222
    },
    {
        "name": "woman",
        "code": "👩",
        "keywords": [
            "girls",
            "woman"
        ],
        "types": [
            "👩🏿",
            "👩🏾",
            "👩🏽",
            "👩🏼",
            "👩🏻"
        ],
        "index": 223
    },
    {
        "name": "red_haired_woman",
        "code": "👩‍🦰",
        "keywords": [
            "red_haired_woman"
        ],
        "types": [
            "👩🏿‍🦰",
            "👩🏾‍🦰",
            "👩🏽‍🦰",
            "👩🏼‍🦰",
            "👩🏻‍🦰"
        ],
        "index": 224
    },
    {
        "name": "person_red_hair",
        "code": "🧑‍🦰",
        "keywords": [
            "person_red_hair"
        ],
        "types": [
            "🧑🏿‍🦰",
            "🧑🏾‍🦰",
            "🧑🏽‍🦰",
            "🧑🏼‍🦰",
            "🧑🏻‍🦰"
        ],
        "index": 225
    },
    {
        "name": "curly_haired_woman",
        "code": "👩‍🦱",
        "keywords": [
            "curly_haired_woman"
        ],
        "types": [
            "👩🏿‍🦱",
            "👩🏾‍🦱",
            "👩🏽‍🦱",
            "👩🏼‍🦱",
            "👩🏻‍🦱"
        ],
        "index": 226
    },
    {
        "name": "person_curly_hair",
        "code": "🧑‍🦱",
        "keywords": [
            "person_curly_hair"
        ],
        "types": [
            "🧑🏿‍🦱",
            "🧑🏾‍🦱",
            "🧑🏽‍🦱",
            "🧑🏼‍🦱",
            "🧑🏻‍🦱"
        ],
        "index": 227
    },
    {
        "name": "white_haired_woman",
        "code": "👩‍🦳",
        "keywords": [
            "white_haired_woman"
        ],
        "types": [
            "👩🏿‍🦳",
            "👩🏾‍🦳",
            "👩🏽‍🦳",
            "👩🏼‍🦳",
            "👩🏻‍🦳"
        ],
        "index": 228
    },
    {
        "name": "person_white_hair",
        "code": "🧑‍🦳",
        "keywords": [
            "person_white_hair"
        ],
        "types": [
            "🧑🏿‍🦳",
            "🧑🏾‍🦳",
            "🧑🏽‍🦳",
            "🧑🏼‍🦳",
            "🧑🏻‍🦳"
        ],
        "index": 229
    },
    {
        "name": "bald_woman",
        "code": "👩‍🦲",
        "keywords": [
            "bald_woman"
        ],
        "types": [
            "👩🏿‍🦲",
            "👩🏾‍🦲",
            "👩🏽‍🦲",
            "👩🏼‍🦲",
            "👩🏻‍🦲"
        ],
        "index": 230
    },
    {
        "name": "person_bald",
        "code": "🧑‍🦲",
        "keywords": [
            "person_bald"
        ],
        "types": [
            "🧑🏿‍🦲",
            "🧑🏾‍🦲",
            "🧑🏽‍🦲",
            "🧑🏼‍🦲",
            "🧑🏻‍🦲"
        ],
        "index": 231
    },
    {
        "name": "blond_haired_woman",
        "code": "👱‍♀️",
        "keywords": [
            "blond_haired_woman",
            "blonde_woman"
        ],
        "types": [
            "👱🏿‍♀️",
            "👱🏾‍♀️",
            "👱🏽‍♀️",
            "👱🏼‍♀️",
            "👱🏻‍♀️"
        ],
        "index": 232
    },
    {
        "name": "blond_haired_man",
        "code": "👱‍♂️",
        "keywords": [
            "blond_haired_man"
        ],
        "types": [
            "👱🏿‍♂️",
            "👱🏾‍♂️",
            "👱🏽‍♂️",
            "👱🏼‍♂️",
            "👱🏻‍♂️"
        ],
        "index": 233
    },
    {
        "name": "older_adult",
        "code": "🧓",
        "keywords": [
            "older_adult"
        ],
        "types": [
            "🧓🏿",
            "🧓🏾",
            "🧓🏽",
            "🧓🏼",
            "🧓🏻"
        ],
        "index": 234
    },
    {
        "name": "older_man",
        "code": "👴",
        "keywords": [
            "older_man",
            "man",
            "old"
        ],
        "types": [
            "👴🏿",
            "👴🏾",
            "👴🏽",
            "👴🏼",
            "👴🏻"
        ],
        "index": 235
    },
    {
        "name": "older_woman",
        "code": "👵",
        "keywords": [
            "older_woman",
            "old",
            "woman"
        ],
        "types": [
            "👵🏿",
            "👵🏾",
            "👵🏽",
            "👵🏼",
            "👵🏻"
        ],
        "index": 236
    },
    {
        "name": "frowning_person",
        "code": "🙍",
        "keywords": [
            "frowning_person",
            "frown",
            "gesture"
        ],
        "types": [
            "🙍🏿",
            "🙍🏾",
            "🙍🏽",
            "🙍🏼",
            "🙍🏻"
        ],
        "index": 237
    },
    {
        "name": "frowning_man",
        "code": "🙍‍♂️",
        "keywords": [
            "frowning_man"
        ],
        "types": [
            "🙍🏿‍♂️",
            "🙍🏾‍♂️",
            "🙍🏽‍♂️",
            "🙍🏼‍♂️",
            "🙍🏻‍♂️"
        ],
        "index": 238
    },
    {
        "name": "frowning_woman",
        "code": "🙍‍♀️",
        "keywords": [
            "frowning_woman"
        ],
        "types": [
            "🙍🏿‍♀️",
            "🙍🏾‍♀️",
            "🙍🏽‍♀️",
            "🙍🏼‍♀️",
            "🙍🏻‍♀️"
        ],
        "index": 239
    },
    {
        "name": "pouting_face",
        "code": "🙎",
        "keywords": [
            "pouting_face",
            "gesture",
            "pouting"
        ],
        "types": [
            "🙎🏿",
            "🙎🏾",
            "🙎🏽",
            "🙎🏼",
            "🙎🏻"
        ],
        "index": 240
    },
    {
        "name": "pouting_man",
        "code": "🙎‍♂️",
        "keywords": [
            "pouting_man"
        ],
        "types": [
            "🙎🏿‍♂️",
            "🙎🏾‍♂️",
            "🙎🏽‍♂️",
            "🙎🏼‍♂️",
            "🙎🏻‍♂️"
        ],
        "index": 241
    },
    {
        "name": "pouting_woman",
        "code": "🙎‍♀️",
        "keywords": [
            "pouting_woman"
        ],
        "types": [
            "🙎🏿‍♀️",
            "🙎🏾‍♀️",
            "🙎🏽‍♀️",
            "🙎🏼‍♀️",
            "🙎🏻‍♀️"
        ],
        "index": 242
    },
    {
        "name": "no_good",
        "code": "🙅",
        "keywords": [
            "stop",
            "halt",
            "denied",
            "no_good",
            "forbidden",
            "gesture",
            "hand",
            "no",
            "not",
            "prohibited"
        ],
        "types": [
            "🙅🏿",
            "🙅🏾",
            "🙅🏽",
            "🙅🏼",
            "🙅🏻"
        ],
        "index": 243
    },
    {
        "name": "no_good_man",
        "code": "🙅‍♂️",
        "keywords": [
            "stop",
            "halt",
            "denied",
            "no_good_man",
            "ng_man"
        ],
        "types": [
            "🙅🏿‍♂️",
            "🙅🏾‍♂️",
            "🙅🏽‍♂️",
            "🙅🏼‍♂️",
            "🙅🏻‍♂️"
        ],
        "index": 244
    },
    {
        "name": "no_good_woman",
        "code": "🙅‍♀️",
        "keywords": [
            "stop",
            "halt",
            "denied",
            "no_good_woman",
            "ng_woman"
        ],
        "types": [
            "🙅🏿‍♀️",
            "🙅🏾‍♀️",
            "🙅🏽‍♀️",
            "🙅🏼‍♀️",
            "🙅🏻‍♀️"
        ],
        "index": 245
    },
    {
        "name": "ok_person",
        "code": "🙆",
        "keywords": [
            "ok_person",
            "gesture",
            "hand",
            "ok"
        ],
        "types": [
            "🙆🏿",
            "🙆🏾",
            "🙆🏽",
            "🙆🏼",
            "🙆🏻"
        ],
        "index": 246
    },
    {
        "name": "ok_man",
        "code": "🙆‍♂️",
        "keywords": [
            "ok_man"
        ],
        "types": [
            "🙆🏿‍♂️",
            "🙆🏾‍♂️",
            "🙆🏽‍♂️",
            "🙆🏼‍♂️",
            "🙆🏻‍♂️"
        ],
        "index": 247
    },
    {
        "name": "ok_woman",
        "code": "🙆‍♀️",
        "keywords": [
            "ok_woman"
        ],
        "types": [
            "🙆🏿‍♀️",
            "🙆🏾‍♀️",
            "🙆🏽‍♀️",
            "🙆🏼‍♀️",
            "🙆🏻‍♀️"
        ],
        "index": 248
    },
    {
        "name": "tipping_hand_person",
        "code": "💁",
        "keywords": [
            "tipping_hand_person",
            "information_desk_person",
            "hand",
            "help",
            "information",
            "sassy"
        ],
        "types": [
            "💁🏿",
            "💁🏾",
            "💁🏽",
            "💁🏼",
            "💁🏻"
        ],
        "index": 249
    },
    {
        "name": "tipping_hand_man",
        "code": "💁‍♂️",
        "keywords": [
            "information",
            "tipping_hand_man",
            "sassy_man"
        ],
        "types": [
            "💁🏿‍♂️",
            "💁🏾‍♂️",
            "💁🏽‍♂️",
            "💁🏼‍♂️",
            "💁🏻‍♂️"
        ],
        "index": 250
    },
    {
        "name": "tipping_hand_woman",
        "code": "💁‍♀️",
        "keywords": [
            "information",
            "tipping_hand_woman",
            "sassy_woman"
        ],
        "types": [
            "💁🏿‍♀️",
            "💁🏾‍♀️",
            "💁🏽‍♀️",
            "💁🏼‍♀️",
            "💁🏻‍♀️"
        ],
        "index": 251
    },
    {
        "name": "raising_hand",
        "code": "🙋",
        "keywords": [
            "raising_hand",
            "gesture",
            "hand",
            "happy",
            "raised"
        ],
        "types": [
            "🙋🏿",
            "🙋🏾",
            "🙋🏽",
            "🙋🏼",
            "🙋🏻"
        ],
        "index": 252
    },
    {
        "name": "raising_hand_man",
        "code": "🙋‍♂️",
        "keywords": [
            "raising_hand_man"
        ],
        "types": [
            "🙋🏿‍♂️",
            "🙋🏾‍♂️",
            "🙋🏽‍♂️",
            "🙋🏼‍♂️",
            "🙋🏻‍♂️"
        ],
        "index": 253
    },
    {
        "name": "raising_hand_woman",
        "code": "🙋‍♀️",
        "keywords": [
            "raising_hand_woman"
        ],
        "types": [
            "🙋🏿‍♀️",
            "🙋🏾‍♀️",
            "🙋🏽‍♀️",
            "🙋🏼‍♀️",
            "🙋🏻‍♀️"
        ],
        "index": 254
    },
    {
        "name": "deaf_person",
        "code": "🧏",
        "keywords": [
            "deaf_person"
        ],
        "types": [
            "🧏🏿",
            "🧏🏾",
            "🧏🏽",
            "🧏🏼",
            "🧏🏻"
        ],
        "index": 255
    },
    {
        "name": "deaf_man",
        "code": "🧏‍♂️",
        "keywords": [
            "deaf_man"
        ],
        "types": [
            "🧏🏿‍♂️",
            "🧏🏾‍♂️",
            "🧏🏽‍♂️",
            "🧏🏼‍♂️",
            "🧏🏻‍♂️"
        ],
        "index": 256
    },
    {
        "name": "deaf_woman",
        "code": "🧏‍♀️",
        "keywords": [
            "deaf_woman"
        ],
        "types": [
            "🧏🏿‍♀️",
            "🧏🏾‍♀️",
            "🧏🏽‍♀️",
            "🧏🏼‍♀️",
            "🧏🏻‍♀️"
        ],
        "index": 257
    },
    {
        "name": "bow",
        "code": "🙇",
        "keywords": [
            "respect",
            "thanks",
            "bow",
            "apology",
            "gesture",
            "sorry"
        ],
        "types": [
            "🙇🏿",
            "🙇🏾",
            "🙇🏽",
            "🙇🏼",
            "🙇🏻"
        ],
        "index": 258
    },
    {
        "name": "bowing_man",
        "code": "🙇‍♂️",
        "keywords": [
            "respect",
            "thanks",
            "bowing_man"
        ],
        "types": [
            "🙇🏿‍♂️",
            "🙇🏾‍♂️",
            "🙇🏽‍♂️",
            "🙇🏼‍♂️",
            "🙇🏻‍♂️"
        ],
        "index": 259
    },
    {
        "name": "bowing_woman",
        "code": "🙇‍♀️",
        "keywords": [
            "respect",
            "thanks",
            "bowing_woman"
        ],
        "types": [
            "🙇🏿‍♀️",
            "🙇🏾‍♀️",
            "🙇🏽‍♀️",
            "🙇🏼‍♀️",
            "🙇🏻‍♀️"
        ],
        "index": 260
    },
    {
        "name": "facepalm",
        "code": "🤦",
        "keywords": [
            "facepalm",
            "disbelief",
            "exasperation",
            "face",
            "palm"
        ],
        "types": [
            "🤦🏿",
            "🤦🏾",
            "🤦🏽",
            "🤦🏼",
            "🤦🏻"
        ],
        "index": 261
    },
    {
        "name": "man_facepalming",
        "code": "🤦‍♂️",
        "keywords": [
            "man_facepalming"
        ],
        "types": [
            "🤦🏿‍♂️",
            "🤦🏾‍♂️",
            "🤦🏽‍♂️",
            "🤦🏼‍♂️",
            "🤦🏻‍♂️"
        ],
        "index": 262
    },
    {
        "name": "woman_facepalming",
        "code": "🤦‍♀️",
        "keywords": [
            "woman_facepalming"
        ],
        "types": [
            "🤦🏿‍♀️",
            "🤦🏾‍♀️",
            "🤦🏽‍♀️",
            "🤦🏼‍♀️",
            "🤦🏻‍♀️"
        ],
        "index": 263
    },
    {
        "name": "shrug",
        "code": "🤷",
        "keywords": [
            "shrug",
            "doubt",
            "ignorance",
            "indifference"
        ],
        "types": [
            "🤷🏿",
            "🤷🏾",
            "🤷🏽",
            "🤷🏼",
            "🤷🏻"
        ],
        "index": 264
    },
    {
        "name": "man_shrugging",
        "code": "🤷‍♂️",
        "keywords": [
            "man_shrugging"
        ],
        "types": [
            "🤷🏿‍♂️",
            "🤷🏾‍♂️",
            "🤷🏽‍♂️",
            "🤷🏼‍♂️",
            "🤷🏻‍♂️"
        ],
        "index": 265
    },
    {
        "name": "woman_shrugging",
        "code": "🤷‍♀️",
        "keywords": [
            "woman_shrugging"
        ],
        "types": [
            "🤷🏿‍♀️",
            "🤷🏾‍♀️",
            "🤷🏽‍♀️",
            "🤷🏼‍♀️",
            "🤷🏻‍♀️"
        ],
        "index": 266
    },
    {
        "name": "health_worker",
        "code": "🧑‍⚕️",
        "keywords": [
            "health_worker"
        ],
        "types": [
            "🧑🏿‍⚕️",
            "🧑🏾‍⚕️",
            "🧑🏽‍⚕️",
            "🧑🏼‍⚕️",
            "🧑🏻‍⚕️"
        ],
        "index": 267
    },
    {
        "name": "man_health_worker",
        "code": "👨‍⚕️",
        "keywords": [
            "doctor",
            "nurse",
            "man_health_worker"
        ],
        "types": [
            "👨🏿‍⚕️",
            "👨🏾‍⚕️",
            "👨🏽‍⚕️",
            "👨🏼‍⚕️",
            "👨🏻‍⚕️"
        ],
        "index": 268
    },
    {
        "name": "woman_health_worker",
        "code": "👩‍⚕️",
        "keywords": [
            "doctor",
            "nurse",
            "woman_health_worker"
        ],
        "types": [
            "👩🏿‍⚕️",
            "👩🏾‍⚕️",
            "👩🏽‍⚕️",
            "👩🏼‍⚕️",
            "👩🏻‍⚕️"
        ],
        "index": 269
    },
    {
        "name": "student",
        "code": "🧑‍🎓",
        "keywords": [
            "student"
        ],
        "types": [
            "🧑🏿‍🎓",
            "🧑🏾‍🎓",
            "🧑🏽‍🎓",
            "🧑🏼‍🎓",
            "🧑🏻‍🎓"
        ],
        "index": 270
    },
    {
        "name": "man_student",
        "code": "👨‍🎓",
        "keywords": [
            "graduation",
            "man_student"
        ],
        "types": [
            "👨🏿‍🎓",
            "👨🏾‍🎓",
            "👨🏽‍🎓",
            "👨🏼‍🎓",
            "👨🏻‍🎓"
        ],
        "index": 271
    },
    {
        "name": "woman_student",
        "code": "👩‍🎓",
        "keywords": [
            "graduation",
            "woman_student"
        ],
        "types": [
            "👩🏿‍🎓",
            "👩🏾‍🎓",
            "👩🏽‍🎓",
            "👩🏼‍🎓",
            "👩🏻‍🎓"
        ],
        "index": 272
    },
    {
        "name": "teacher",
        "code": "🧑‍🏫",
        "keywords": [
            "teacher"
        ],
        "types": [
            "🧑🏿‍🏫",
            "🧑🏾‍🏫",
            "🧑🏽‍🏫",
            "🧑🏼‍🏫",
            "🧑🏻‍🏫"
        ],
        "index": 273
    },
    {
        "name": "man_teacher",
        "code": "👨‍🏫",
        "keywords": [
            "school",
            "professor",
            "man_teacher"
        ],
        "types": [
            "👨🏿‍🏫",
            "👨🏾‍🏫",
            "👨🏽‍🏫",
            "👨🏼‍🏫",
            "👨🏻‍🏫"
        ],
        "index": 274
    },
    {
        "name": "woman_teacher",
        "code": "👩‍🏫",
        "keywords": [
            "school",
            "professor",
            "woman_teacher"
        ],
        "types": [
            "👩🏿‍🏫",
            "👩🏾‍🏫",
            "👩🏽‍🏫",
            "👩🏼‍🏫",
            "👩🏻‍🏫"
        ],
        "index": 275
    },
    {
        "name": "judge",
        "code": "🧑‍⚖️",
        "keywords": [
            "judge"
        ],
        "types": [
            "🧑🏿‍⚖️",
            "🧑🏾‍⚖️",
            "🧑🏽‍⚖️",
            "🧑🏼‍⚖️",
            "🧑🏻‍⚖️"
        ],
        "index": 276
    },
    {
        "name": "man_judge",
        "code": "👨‍⚖️",
        "keywords": [
            "justice",
            "man_judge"
        ],
        "types": [
            "👨🏿‍⚖️",
            "👨🏾‍⚖️",
            "👨🏽‍⚖️",
            "👨🏼‍⚖️",
            "👨🏻‍⚖️"
        ],
        "index": 277
    },
    {
        "name": "woman_judge",
        "code": "👩‍⚖️",
        "keywords": [
            "justice",
            "woman_judge"
        ],
        "types": [
            "👩🏿‍⚖️",
            "👩🏾‍⚖️",
            "👩🏽‍⚖️",
            "👩🏼‍⚖️",
            "👩🏻‍⚖️"
        ],
        "index": 278
    },
    {
        "name": "farmer",
        "code": "🧑‍🌾",
        "keywords": [
            "farmer"
        ],
        "types": [
            "🧑🏿‍🌾",
            "🧑🏾‍🌾",
            "🧑🏽‍🌾",
            "🧑🏼‍🌾",
            "🧑🏻‍🌾"
        ],
        "index": 279
    },
    {
        "name": "man_farmer",
        "code": "👨‍🌾",
        "keywords": [
            "man_farmer"
        ],
        "types": [
            "👨🏿‍🌾",
            "👨🏾‍🌾",
            "👨🏽‍🌾",
            "👨🏼‍🌾",
            "👨🏻‍🌾"
        ],
        "index": 280
    },
    {
        "name": "woman_farmer",
        "code": "👩‍🌾",
        "keywords": [
            "woman_farmer"
        ],
        "types": [
            "👩🏿‍🌾",
            "👩🏾‍🌾",
            "👩🏽‍🌾",
            "👩🏼‍🌾",
            "👩🏻‍🌾"
        ],
        "index": 281
    },
    {
        "name": "cook",
        "code": "🧑‍🍳",
        "keywords": [
            "cook"
        ],
        "types": [
            "🧑🏿‍🍳",
            "🧑🏾‍🍳",
            "🧑🏽‍🍳",
            "🧑🏼‍🍳",
            "🧑🏻‍🍳"
        ],
        "index": 282
    },
    {
        "name": "man_cook",
        "code": "👨‍🍳",
        "keywords": [
            "chef",
            "man_cook"
        ],
        "types": [
            "👨🏿‍🍳",
            "👨🏾‍🍳",
            "👨🏽‍🍳",
            "👨🏼‍🍳",
            "👨🏻‍🍳"
        ],
        "index": 283
    },
    {
        "name": "woman_cook",
        "code": "👩‍🍳",
        "keywords": [
            "chef",
            "woman_cook"
        ],
        "types": [
            "👩🏿‍🍳",
            "👩🏾‍🍳",
            "👩🏽‍🍳",
            "👩🏼‍🍳",
            "👩🏻‍🍳"
        ],
        "index": 284
    },
    {
        "name": "mechanic",
        "code": "🧑‍🔧",
        "keywords": [
            "mechanic"
        ],
        "types": [
            "🧑🏿‍🔧",
            "🧑🏾‍🔧",
            "🧑🏽‍🔧",
            "🧑🏼‍🔧",
            "🧑🏻‍🔧"
        ],
        "index": 285
    },
    {
        "name": "man_mechanic",
        "code": "👨‍🔧",
        "keywords": [
            "man_mechanic"
        ],
        "types": [
            "👨🏿‍🔧",
            "👨🏾‍🔧",
            "👨🏽‍🔧",
            "👨🏼‍🔧",
            "👨🏻‍🔧"
        ],
        "index": 286
    },
    {
        "name": "woman_mechanic",
        "code": "👩‍🔧",
        "keywords": [
            "woman_mechanic"
        ],
        "types": [
            "👩🏿‍🔧",
            "👩🏾‍🔧",
            "👩🏽‍🔧",
            "👩🏼‍🔧",
            "👩🏻‍🔧"
        ],
        "index": 287
    },
    {
        "name": "factory_worker",
        "code": "🧑‍🏭",
        "keywords": [
            "factory_worker"
        ],
        "types": [
            "🧑🏿‍🏭",
            "🧑🏾‍🏭",
            "🧑🏽‍🏭",
            "🧑🏼‍🏭",
            "🧑🏻‍🏭"
        ],
        "index": 288
    },
    {
        "name": "man_factory_worker",
        "code": "👨‍🏭",
        "keywords": [
            "man_factory_worker"
        ],
        "types": [
            "👨🏿‍🏭",
            "👨🏾‍🏭",
            "👨🏽‍🏭",
            "👨🏼‍🏭",
            "👨🏻‍🏭"
        ],
        "index": 289
    },
    {
        "name": "woman_factory_worker",
        "code": "👩‍🏭",
        "keywords": [
            "woman_factory_worker"
        ],
        "types": [
            "👩🏿‍🏭",
            "👩🏾‍🏭",
            "👩🏽‍🏭",
            "👩🏼‍🏭",
            "👩🏻‍🏭"
        ],
        "index": 290
    },
    {
        "name": "office_worker",
        "code": "🧑‍💼",
        "keywords": [
            "office_worker"
        ],
        "types": [
            "🧑🏿‍💼",
            "🧑🏾‍💼",
            "🧑🏽‍💼",
            "🧑🏼‍💼",
            "🧑🏻‍💼"
        ],
        "index": 291
    },
    {
        "name": "man_office_worker",
        "code": "👨‍💼",
        "keywords": [
            "business",
            "man_office_worker"
        ],
        "types": [
            "👨🏿‍💼",
            "👨🏾‍💼",
            "👨🏽‍💼",
            "👨🏼‍💼",
            "👨🏻‍💼"
        ],
        "index": 292
    },
    {
        "name": "woman_office_worker",
        "code": "👩‍💼",
        "keywords": [
            "business",
            "woman_office_worker"
        ],
        "types": [
            "👩🏿‍💼",
            "👩🏾‍💼",
            "👩🏽‍💼",
            "👩🏼‍💼",
            "👩🏻‍💼"
        ],
        "index": 293
    },
    {
        "name": "scientist",
        "code": "🧑‍🔬",
        "keywords": [
            "scientist"
        ],
        "types": [
            "🧑🏿‍🔬",
            "🧑🏾‍🔬",
            "🧑🏽‍🔬",
            "🧑🏼‍🔬",
            "🧑🏻‍🔬"
        ],
        "index": 294
    },
    {
        "name": "man_scientist",
        "code": "👨‍🔬",
        "keywords": [
            "research",
            "man_scientist"
        ],
        "types": [
            "👨🏿‍🔬",
            "👨🏾‍🔬",
            "👨🏽‍🔬",
            "👨🏼‍🔬",
            "👨🏻‍🔬"
        ],
        "index": 295
    },
    {
        "name": "woman_scientist",
        "code": "👩‍🔬",
        "keywords": [
            "research",
            "woman_scientist"
        ],
        "types": [
            "👩🏿‍🔬",
            "👩🏾‍🔬",
            "👩🏽‍🔬",
            "👩🏼‍🔬",
            "👩🏻‍🔬"
        ],
        "index": 296
    },
    {
        "name": "technologist",
        "code": "🧑‍💻",
        "keywords": [
            "technologist"
        ],
        "types": [
            "🧑🏿‍💻",
            "🧑🏾‍💻",
            "🧑🏽‍💻",
            "🧑🏼‍💻",
            "🧑🏻‍💻"
        ],
        "index": 297
    },
    {
        "name": "man_technologist",
        "code": "👨‍💻",
        "keywords": [
            "coder",
            "man_technologist"
        ],
        "types": [
            "👨🏿‍💻",
            "👨🏾‍💻",
            "👨🏽‍💻",
            "👨🏼‍💻",
            "👨🏻‍💻"
        ],
        "index": 298
    },
    {
        "name": "woman_technologist",
        "code": "👩‍💻",
        "keywords": [
            "coder",
            "woman_technologist"
        ],
        "types": [
            "👩🏿‍💻",
            "👩🏾‍💻",
            "👩🏽‍💻",
            "👩🏼‍💻",
            "👩🏻‍💻"
        ],
        "index": 299
    },
    {
        "name": "singer",
        "code": "🧑‍🎤",
        "keywords": [
            "singer"
        ],
        "types": [
            "🧑🏿‍🎤",
            "🧑🏾‍🎤",
            "🧑🏽‍🎤",
            "🧑🏼‍🎤",
            "🧑🏻‍🎤"
        ],
        "index": 300
    },
    {
        "name": "man_singer",
        "code": "👨‍🎤",
        "keywords": [
            "rockstar",
            "man_singer"
        ],
        "types": [
            "👨🏿‍🎤",
            "👨🏾‍🎤",
            "👨🏽‍🎤",
            "👨🏼‍🎤",
            "👨🏻‍🎤"
        ],
        "index": 301
    },
    {
        "name": "woman_singer",
        "code": "👩‍🎤",
        "keywords": [
            "rockstar",
            "woman_singer"
        ],
        "types": [
            "👩🏿‍🎤",
            "👩🏾‍🎤",
            "👩🏽‍🎤",
            "👩🏼‍🎤",
            "👩🏻‍🎤"
        ],
        "index": 302
    },
    {
        "name": "artist",
        "code": "🧑‍🎨",
        "keywords": [
            "artist"
        ],
        "types": [
            "🧑🏿‍🎨",
            "🧑🏾‍🎨",
            "🧑🏽‍🎨",
            "🧑🏼‍🎨",
            "🧑🏻‍🎨"
        ],
        "index": 303
    },
    {
        "name": "man_artist",
        "code": "👨‍🎨",
        "keywords": [
            "painter",
            "man_artist"
        ],
        "types": [
            "👨🏿‍🎨",
            "👨🏾‍🎨",
            "👨🏽‍🎨",
            "👨🏼‍🎨",
            "👨🏻‍🎨"
        ],
        "index": 304
    },
    {
        "name": "woman_artist",
        "code": "👩‍🎨",
        "keywords": [
            "painter",
            "woman_artist"
        ],
        "types": [
            "👩🏿‍🎨",
            "👩🏾‍🎨",
            "👩🏽‍🎨",
            "👩🏼‍🎨",
            "👩🏻‍🎨"
        ],
        "index": 305
    },
    {
        "name": "pilot",
        "code": "🧑‍✈️",
        "keywords": [
            "pilot"
        ],
        "types": [
            "🧑🏿‍✈️",
            "🧑🏾‍✈️",
            "🧑🏽‍✈️",
            "🧑🏼‍✈️",
            "🧑🏻‍✈️"
        ],
        "index": 306
    },
    {
        "name": "man_pilot",
        "code": "👨‍✈️",
        "keywords": [
            "man_pilot"
        ],
        "types": [
            "👨🏿‍✈️",
            "👨🏾‍✈️",
            "👨🏽‍✈️",
            "👨🏼‍✈️",
            "👨🏻‍✈️"
        ],
        "index": 307
    },
    {
        "name": "woman_pilot",
        "code": "👩‍✈️",
        "keywords": [
            "woman_pilot"
        ],
        "types": [
            "👩🏿‍✈️",
            "👩🏾‍✈️",
            "👩🏽‍✈️",
            "👩🏼‍✈️",
            "👩🏻‍✈️"
        ],
        "index": 308
    },
    {
        "name": "astronaut",
        "code": "🧑‍🚀",
        "keywords": [
            "astronaut"
        ],
        "types": [
            "🧑🏿‍🚀",
            "🧑🏾‍🚀",
            "🧑🏽‍🚀",
            "🧑🏼‍🚀",
            "🧑🏻‍🚀"
        ],
        "index": 309
    },
    {
        "name": "man_astronaut",
        "code": "👨‍🚀",
        "keywords": [
            "space",
            "man_astronaut"
        ],
        "types": [
            "👨🏿‍🚀",
            "👨🏾‍🚀",
            "👨🏽‍🚀",
            "👨🏼‍🚀",
            "👨🏻‍🚀"
        ],
        "index": 310
    },
    {
        "name": "woman_astronaut",
        "code": "👩‍🚀",
        "keywords": [
            "space",
            "woman_astronaut"
        ],
        "types": [
            "👩🏿‍🚀",
            "👩🏾‍🚀",
            "👩🏽‍🚀",
            "👩🏼‍🚀",
            "👩🏻‍🚀"
        ],
        "index": 311
    },
    {
        "name": "firefighter",
        "code": "🧑‍🚒",
        "keywords": [
            "firefighter"
        ],
        "types": [
            "🧑🏿‍🚒",
            "🧑🏾‍🚒",
            "🧑🏽‍🚒",
            "🧑🏼‍🚒",
            "🧑🏻‍🚒"
        ],
        "index": 312
    },
    {
        "name": "man_firefighter",
        "code": "👨‍🚒",
        "keywords": [
            "man_firefighter"
        ],
        "types": [
            "👨🏿‍🚒",
            "👨🏾‍🚒",
            "👨🏽‍🚒",
            "👨🏼‍🚒",
            "👨🏻‍🚒"
        ],
        "index": 313
    },
    {
        "name": "woman_firefighter",
        "code": "👩‍🚒",
        "keywords": [
            "woman_firefighter"
        ],
        "types": [
            "👩🏿‍🚒",
            "👩🏾‍🚒",
            "👩🏽‍🚒",
            "👩🏼‍🚒",
            "👩🏻‍🚒"
        ],
        "index": 314
    },
    {
        "name": "police_officer",
        "code": "👮",
        "keywords": [
            "law",
            "police_officer",
            "cop",
            "officer",
            "police"
        ],
        "types": [
            "👮🏿",
            "👮🏾",
            "👮🏽",
            "👮🏼",
            "👮🏻"
        ],
        "index": 315
    },
    {
        "name": "policeman",
        "code": "👮‍♂️",
        "keywords": [
            "law",
            "cop",
            "policeman"
        ],
        "types": [
            "👮🏿‍♂️",
            "👮🏾‍♂️",
            "👮🏽‍♂️",
            "👮🏼‍♂️",
            "👮🏻‍♂️"
        ],
        "index": 316
    },
    {
        "name": "policewoman",
        "code": "👮‍♀️",
        "keywords": [
            "law",
            "cop",
            "policewoman"
        ],
        "types": [
            "👮🏿‍♀️",
            "👮🏾‍♀️",
            "👮🏽‍♀️",
            "👮🏼‍♀️",
            "👮🏻‍♀️"
        ],
        "index": 317
    },
    {
        "name": "detective",
        "code": "🕵️",
        "keywords": [
            "sleuth",
            "detective"
        ],
        "types": [
            "🕵🏿",
            "🕵🏾",
            "🕵🏽",
            "🕵🏼",
            "🕵🏻"
        ],
        "index": 318
    },
    {
        "name": "male_detective",
        "code": "🕵️‍♂️",
        "keywords": [
            "sleuth",
            "male_detective"
        ],
        "types": [
            "🕵🏿‍♂️",
            "🕵🏾‍♂️",
            "🕵🏽‍♂️",
            "🕵🏼‍♂️",
            "🕵🏻‍♂️"
        ],
        "index": 319
    },
    {
        "name": "female_detective",
        "code": "🕵️‍♀️",
        "keywords": [
            "sleuth",
            "female_detective"
        ],
        "types": [
            "🕵🏿‍♀️",
            "🕵🏾‍♀️",
            "🕵🏽‍♀️",
            "🕵🏼‍♀️",
            "🕵🏻‍♀️"
        ],
        "index": 320
    },
    {
        "name": "guard",
        "code": "💂",
        "keywords": [
            "guard",
            "guardsman"
        ],
        "types": [
            "💂🏿",
            "💂🏾",
            "💂🏽",
            "💂🏼",
            "💂🏻"
        ],
        "index": 321
    },
    {
        "name": "guardsman",
        "code": "💂‍♂️",
        "keywords": [
            "guardsman"
        ],
        "types": [
            "💂🏿‍♂️",
            "💂🏾‍♂️",
            "💂🏽‍♂️",
            "💂🏼‍♂️",
            "💂🏻‍♂️"
        ],
        "index": 322
    },
    {
        "name": "guardswoman",
        "code": "💂‍♀️",
        "keywords": [
            "guardswoman"
        ],
        "types": [
            "💂🏿‍♀️",
            "💂🏾‍♀️",
            "💂🏽‍♀️",
            "💂🏼‍♀️",
            "💂🏻‍♀️"
        ],
        "index": 323
    },
    {
        "name": "ninja",
        "code": "🥷",
        "keywords": [
            "ninja"
        ],
        "types": [
            "🥷🏿",
            "🥷🏾",
            "🥷🏽",
            "🥷🏼",
            "🥷🏻"
        ],
        "index": 324
    },
    {
        "name": "construction_worker",
        "code": "👷",
        "keywords": [
            "helmet",
            "construction_worker",
            "construction",
            "hat",
            "worker"
        ],
        "types": [
            "👷🏿",
            "👷🏾",
            "👷🏽",
            "👷🏼",
            "👷🏻"
        ],
        "index": 325
    },
    {
        "name": "construction_worker_man",
        "code": "👷‍♂️",
        "keywords": [
            "helmet",
            "construction_worker_man"
        ],
        "types": [
            "👷🏿‍♂️",
            "👷🏾‍♂️",
            "👷🏽‍♂️",
            "👷🏼‍♂️",
            "👷🏻‍♂️"
        ],
        "index": 326
    },
    {
        "name": "construction_worker_woman",
        "code": "👷‍♀️",
        "keywords": [
            "helmet",
            "construction_worker_woman"
        ],
        "types": [
            "👷🏿‍♀️",
            "👷🏾‍♀️",
            "👷🏽‍♀️",
            "👷🏼‍♀️",
            "👷🏻‍♀️"
        ],
        "index": 327
    },
    {
        "name": "prince",
        "code": "🤴",
        "keywords": [
            "crown",
            "royal",
            "prince"
        ],
        "types": [
            "🤴🏿",
            "🤴🏾",
            "🤴🏽",
            "🤴🏼",
            "🤴🏻"
        ],
        "index": 328
    },
    {
        "name": "princess",
        "code": "👸",
        "keywords": [
            "crown",
            "royal",
            "princess",
            "fairy tale",
            "fantasy"
        ],
        "types": [
            "👸🏿",
            "👸🏾",
            "👸🏽",
            "👸🏼",
            "👸🏻"
        ],
        "index": 329
    },
    {
        "name": "person_with_turban",
        "code": "👳",
        "keywords": [
            "person_with_turban",
            "man",
            "turban"
        ],
        "types": [
            "👳🏿",
            "👳🏾",
            "👳🏽",
            "👳🏼",
            "👳🏻"
        ],
        "index": 330
    },
    {
        "name": "man_with_turban",
        "code": "👳‍♂️",
        "keywords": [
            "man_with_turban"
        ],
        "types": [
            "👳🏿‍♂️",
            "👳🏾‍♂️",
            "👳🏽‍♂️",
            "👳🏼‍♂️",
            "👳🏻‍♂️"
        ],
        "index": 331
    },
    {
        "name": "woman_with_turban",
        "code": "👳‍♀️",
        "keywords": [
            "woman_with_turban"
        ],
        "types": [
            "👳🏿‍♀️",
            "👳🏾‍♀️",
            "👳🏽‍♀️",
            "👳🏼‍♀️",
            "👳🏻‍♀️"
        ],
        "index": 332
    },
    {
        "name": "man_with_gua_pi_mao",
        "code": "👲",
        "keywords": [
            "man_with_gua_pi_mao",
            "gua pi mao",
            "hat",
            "man"
        ],
        "types": [
            "👲🏿",
            "👲🏾",
            "👲🏽",
            "👲🏼",
            "👲🏻"
        ],
        "index": 333
    },
    {
        "name": "woman_with_headscarf",
        "code": "🧕",
        "keywords": [
            "hijab",
            "woman_with_headscarf"
        ],
        "types": [
            "🧕🏿",
            "🧕🏾",
            "🧕🏽",
            "🧕🏼",
            "🧕🏻"
        ],
        "index": 334
    },
    {
        "name": "person_in_tuxedo",
        "code": "🤵",
        "keywords": [
            "groom",
            "marriage",
            "wedding",
            "person_in_tuxedo",
            "man",
            "tuxedo"
        ],
        "types": [
            "🤵🏿",
            "🤵🏾",
            "🤵🏽",
            "🤵🏼",
            "🤵🏻"
        ],
        "index": 335
    },
    {
        "name": "man_in_tuxedo",
        "code": "🤵‍♂️",
        "keywords": [
            "man_in_tuxedo"
        ],
        "types": [
            "🤵🏿‍♂️",
            "🤵🏾‍♂️",
            "🤵🏽‍♂️",
            "🤵🏼‍♂️",
            "🤵🏻‍♂️"
        ],
        "index": 336
    },
    {
        "name": "woman_in_tuxedo",
        "code": "🤵‍♀️",
        "keywords": [
            "woman_in_tuxedo"
        ],
        "types": [
            "🤵🏿‍♀️",
            "🤵🏾‍♀️",
            "🤵🏽‍♀️",
            "🤵🏼‍♀️",
            "🤵🏻‍♀️"
        ],
        "index": 337
    },
    {
        "name": "person_with_veil",
        "code": "👰",
        "keywords": [
            "marriage",
            "wedding",
            "person_with_veil",
            "bride",
            "veil"
        ],
        "types": [
            "👰🏿",
            "👰🏾",
            "👰🏽",
            "👰🏼",
            "👰🏻"
        ],
        "index": 338
    },
    {
        "name": "man_with_veil",
        "code": "👰‍♂️",
        "keywords": [
            "man_with_veil"
        ],
        "types": [
            "👰🏿‍♂️",
            "👰🏾‍♂️",
            "👰🏽‍♂️",
            "👰🏼‍♂️",
            "👰🏻‍♂️"
        ],
        "index": 339
    },
    {
        "name": "woman_with_veil",
        "code": "👰‍♀️",
        "keywords": [
            "woman_with_veil",
            "bride_with_veil"
        ],
        "types": [
            "👰🏿‍♀️",
            "👰🏾‍♀️",
            "👰🏽‍♀️",
            "👰🏼‍♀️",
            "👰🏻‍♀️"
        ],
        "index": 340
    },
    {
        "name": "pregnant_woman",
        "code": "🤰",
        "keywords": [
            "pregnant_woman",
            "pregnant",
            "woman"
        ],
        "types": [
            "🤰🏿",
            "🤰🏾",
            "🤰🏽",
            "🤰🏼",
            "🤰🏻"
        ],
        "index": 341
    },
    {
        "name": "breast_feeding",
        "code": "🤱",
        "keywords": [
            "nursing",
            "breast_feeding"
        ],
        "types": [
            "🤱🏿",
            "🤱🏾",
            "🤱🏽",
            "🤱🏼",
            "🤱🏻"
        ],
        "index": 342
    },
    {
        "name": "woman_feeding_baby",
        "code": "👩‍🍼",
        "keywords": [
            "woman_feeding_baby"
        ],
        "types": [
            "👩🏿‍🍼",
            "👩🏾‍🍼",
            "👩🏽‍🍼",
            "👩🏼‍🍼",
            "👩🏻‍🍼"
        ],
        "index": 343
    },
    {
        "name": "man_feeding_baby",
        "code": "👨‍🍼",
        "keywords": [
            "man_feeding_baby"
        ],
        "types": [
            "👨🏿‍🍼",
            "👨🏾‍🍼",
            "👨🏽‍🍼",
            "👨🏼‍🍼",
            "👨🏻‍🍼"
        ],
        "index": 344
    },
    {
        "name": "person_feeding_baby",
        "code": "🧑‍🍼",
        "keywords": [
            "person_feeding_baby"
        ],
        "types": [
            "🧑🏿‍🍼",
            "🧑🏾‍🍼",
            "🧑🏽‍🍼",
            "🧑🏼‍🍼",
            "🧑🏻‍🍼"
        ],
        "index": 345
    },
    {
        "name": "angel",
        "code": "👼",
        "keywords": [
            "angel",
            "baby",
            "face",
            "fairy tale",
            "fantasy"
        ],
        "types": [
            "👼🏿",
            "👼🏾",
            "👼🏽",
            "👼🏼",
            "👼🏻"
        ],
        "index": 346
    },
    {
        "name": "santa",
        "code": "🎅",
        "keywords": [
            "christmas",
            "santa",
            "activity",
            "celebration",
            "fairy tale",
            "fantasy",
            "father"
        ],
        "types": [
            "🎅🏿",
            "🎅🏾",
            "🎅🏽",
            "🎅🏼",
            "🎅🏻"
        ],
        "index": 347
    },
    {
        "name": "mrs_claus",
        "code": "🤶",
        "keywords": [
            "santa",
            "mrs_claus",
            "christmas",
            "mother",
            "mrs. claus"
        ],
        "types": [
            "🤶🏿",
            "🤶🏾",
            "🤶🏽",
            "🤶🏼",
            "🤶🏻"
        ],
        "index": 348
    },
    {
        "name": "mx_claus",
        "code": "🧑‍🎄",
        "keywords": [
            "mx_claus"
        ],
        "types": [
            "🧑🏿‍🎄",
            "🧑🏾‍🎄",
            "🧑🏽‍🎄",
            "🧑🏼‍🎄",
            "🧑🏻‍🎄"
        ],
        "index": 349
    },
    {
        "name": "superhero",
        "code": "🦸",
        "keywords": [
            "superhero"
        ],
        "types": [
            "🦸🏿",
            "🦸🏾",
            "🦸🏽",
            "🦸🏼",
            "🦸🏻"
        ],
        "index": 350
    },
    {
        "name": "superhero_man",
        "code": "🦸‍♂️",
        "keywords": [
            "superhero_man"
        ],
        "types": [
            "🦸🏿‍♂️",
            "🦸🏾‍♂️",
            "🦸🏽‍♂️",
            "🦸🏼‍♂️",
            "🦸🏻‍♂️"
        ],
        "index": 351
    },
    {
        "name": "superhero_woman",
        "code": "🦸‍♀️",
        "keywords": [
            "superhero_woman"
        ],
        "types": [
            "🦸🏿‍♀️",
            "🦸🏾‍♀️",
            "🦸🏽‍♀️",
            "🦸🏼‍♀️",
            "🦸🏻‍♀️"
        ],
        "index": 352
    },
    {
        "name": "supervillain",
        "code": "🦹",
        "keywords": [
            "supervillain"
        ],
        "types": [
            "🦹🏿",
            "🦹🏾",
            "🦹🏽",
            "🦹🏼",
            "🦹🏻"
        ],
        "index": 353
    },
    {
        "name": "supervillain_man",
        "code": "🦹‍♂️",
        "keywords": [
            "supervillain_man"
        ],
        "types": [
            "🦹🏿‍♂️",
            "🦹🏾‍♂️",
            "🦹🏽‍♂️",
            "🦹🏼‍♂️",
            "🦹🏻‍♂️"
        ],
        "index": 354
    },
    {
        "name": "supervillain_woman",
        "code": "🦹‍♀️",
        "keywords": [
            "supervillain_woman"
        ],
        "types": [
            "🦹🏿‍♀️",
            "🦹🏾‍♀️",
            "🦹🏽‍♀️",
            "🦹🏼‍♀️",
            "🦹🏻‍♀️"
        ],
        "index": 355
    },
    {
        "name": "mage",
        "code": "🧙",
        "keywords": [
            "wizard",
            "mage"
        ],
        "types": [
            "🧙🏿",
            "🧙🏾",
            "🧙🏽",
            "🧙🏼",
            "🧙🏻"
        ],
        "index": 356
    },
    {
        "name": "mage_man",
        "code": "🧙‍♂️",
        "keywords": [
            "wizard",
            "mage_man"
        ],
        "types": [
            "🧙🏿‍♂️",
            "🧙🏾‍♂️",
            "🧙🏽‍♂️",
            "🧙🏼‍♂️",
            "🧙🏻‍♂️"
        ],
        "index": 357
    },
    {
        "name": "mage_woman",
        "code": "🧙‍♀️",
        "keywords": [
            "wizard",
            "mage_woman"
        ],
        "types": [
            "🧙🏿‍♀️",
            "🧙🏾‍♀️",
            "🧙🏽‍♀️",
            "🧙🏼‍♀️",
            "🧙🏻‍♀️"
        ],
        "index": 358
    },
    {
        "name": "fairy",
        "code": "🧚",
        "keywords": [
            "fairy"
        ],
        "types": [
            "🧚🏿",
            "🧚🏾",
            "🧚🏽",
            "🧚🏼",
            "🧚🏻"
        ],
        "index": 359
    },
    {
        "name": "fairy_man",
        "code": "🧚‍♂️",
        "keywords": [
            "fairy_man"
        ],
        "types": [
            "🧚🏿‍♂️",
            "🧚🏾‍♂️",
            "🧚🏽‍♂️",
            "🧚🏼‍♂️",
            "🧚🏻‍♂️"
        ],
        "index": 360
    },
    {
        "name": "fairy_woman",
        "code": "🧚‍♀️",
        "keywords": [
            "fairy_woman"
        ],
        "types": [
            "🧚🏿‍♀️",
            "🧚🏾‍♀️",
            "🧚🏽‍♀️",
            "🧚🏼‍♀️",
            "🧚🏻‍♀️"
        ],
        "index": 361
    },
    {
        "name": "vampire",
        "code": "🧛",
        "keywords": [
            "vampire"
        ],
        "types": [
            "🧛🏿",
            "🧛🏾",
            "🧛🏽",
            "🧛🏼",
            "🧛🏻"
        ],
        "index": 362
    },
    {
        "name": "vampire_man",
        "code": "🧛‍♂️",
        "keywords": [
            "vampire_man"
        ],
        "types": [
            "🧛🏿‍♂️",
            "🧛🏾‍♂️",
            "🧛🏽‍♂️",
            "🧛🏼‍♂️",
            "🧛🏻‍♂️"
        ],
        "index": 363
    },
    {
        "name": "vampire_woman",
        "code": "🧛‍♀️",
        "keywords": [
            "vampire_woman"
        ],
        "types": [
            "🧛🏿‍♀️",
            "🧛🏾‍♀️",
            "🧛🏽‍♀️",
            "🧛🏼‍♀️",
            "🧛🏻‍♀️"
        ],
        "index": 364
    },
    {
        "name": "merperson",
        "code": "🧜",
        "keywords": [
            "merperson"
        ],
        "types": [
            "🧜🏿",
            "🧜🏾",
            "🧜🏽",
            "🧜🏼",
            "🧜🏻"
        ],
        "index": 365
    },
    {
        "name": "merman",
        "code": "🧜‍♂️",
        "keywords": [
            "merman"
        ],
        "types": [
            "🧜🏿‍♂️",
            "🧜🏾‍♂️",
            "🧜🏽‍♂️",
            "🧜🏼‍♂️",
            "🧜🏻‍♂️"
        ],
        "index": 366
    },
    {
        "name": "mermaid",
        "code": "🧜‍♀️",
        "keywords": [
            "mermaid"
        ],
        "types": [
            "🧜🏿‍♀️",
            "🧜🏾‍♀️",
            "🧜🏽‍♀️",
            "🧜🏼‍♀️",
            "🧜🏻‍♀️"
        ],
        "index": 367
    },
    {
        "name": "elf",
        "code": "🧝",
        "keywords": [
            "elf"
        ],
        "types": [
            "🧝🏿",
            "🧝🏾",
            "🧝🏽",
            "🧝🏼",
            "🧝🏻"
        ],
        "index": 368
    },
    {
        "name": "elf_man",
        "code": "🧝‍♂️",
        "keywords": [
            "elf_man"
        ],
        "types": [
            "🧝🏿‍♂️",
            "🧝🏾‍♂️",
            "🧝🏽‍♂️",
            "🧝🏼‍♂️",
            "🧝🏻‍♂️"
        ],
        "index": 369
    },
    {
        "name": "elf_woman",
        "code": "🧝‍♀️",
        "keywords": [
            "elf_woman"
        ],
        "types": [
            "🧝🏿‍♀️",
            "🧝🏾‍♀️",
            "🧝🏽‍♀️",
            "🧝🏼‍♀️",
            "🧝🏻‍♀️"
        ],
        "index": 370
    },
    {
        "name": "genie",
        "code": "🧞",
        "keywords": [
            "genie"
        ],
        "index": 371
    },
    {
        "name": "genie_man",
        "code": "🧞‍♂️",
        "keywords": [
            "genie_man"
        ],
        "index": 372
    },
    {
        "name": "genie_woman",
        "code": "🧞‍♀️",
        "keywords": [
            "genie_woman"
        ],
        "index": 373
    },
    {
        "name": "zombie",
        "code": "🧟",
        "keywords": [
            "zombie"
        ],
        "index": 374
    },
    {
        "name": "zombie_man",
        "code": "🧟‍♂️",
        "keywords": [
            "zombie_man"
        ],
        "index": 375
    },
    {
        "name": "zombie_woman",
        "code": "🧟‍♀️",
        "keywords": [
            "zombie_woman"
        ],
        "index": 376
    },
    {
        "name": "massage",
        "code": "💆",
        "keywords": [
            "spa",
            "massage",
            "salon"
        ],
        "types": [
            "💆🏿",
            "💆🏾",
            "💆🏽",
            "💆🏼",
            "💆🏻"
        ],
        "index": 377
    },
    {
        "name": "massage_man",
        "code": "💆‍♂️",
        "keywords": [
            "spa",
            "massage_man"
        ],
        "types": [
            "💆🏿‍♂️",
            "💆🏾‍♂️",
            "💆🏽‍♂️",
            "💆🏼‍♂️",
            "💆🏻‍♂️"
        ],
        "index": 378
    },
    {
        "name": "massage_woman",
        "code": "💆‍♀️",
        "keywords": [
            "spa",
            "massage_woman"
        ],
        "types": [
            "💆🏿‍♀️",
            "💆🏾‍♀️",
            "💆🏽‍♀️",
            "💆🏼‍♀️",
            "💆🏻‍♀️"
        ],
        "index": 379
    },
    {
        "name": "haircut",
        "code": "💇",
        "keywords": [
            "beauty",
            "haircut",
            "barber",
            "parlor"
        ],
        "types": [
            "💇🏿",
            "💇🏾",
            "💇🏽",
            "💇🏼",
            "💇🏻"
        ],
        "index": 380
    },
    {
        "name": "haircut_man",
        "code": "💇‍♂️",
        "keywords": [
            "haircut_man"
        ],
        "types": [
            "💇🏿‍♂️",
            "💇🏾‍♂️",
            "💇🏽‍♂️",
            "💇🏼‍♂️",
            "💇🏻‍♂️"
        ],
        "index": 381
    },
    {
        "name": "haircut_woman",
        "code": "💇‍♀️",
        "keywords": [
            "haircut_woman"
        ],
        "types": [
            "💇🏿‍♀️",
            "💇🏾‍♀️",
            "💇🏽‍♀️",
            "💇🏼‍♀️",
            "💇🏻‍♀️"
        ],
        "index": 382
    },
    {
        "name": "walking",
        "code": "🚶",
        "keywords": [
            "walking",
            "hike",
            "pedestrian",
            "walk"
        ],
        "types": [
            "🚶🏿",
            "🚶🏾",
            "🚶🏽",
            "🚶🏼",
            "🚶🏻"
        ],
        "index": 383
    },
    {
        "name": "walking_man",
        "code": "🚶‍♂️",
        "keywords": [
            "walking_man"
        ],
        "types": [
            "🚶🏿‍♂️",
            "🚶🏾‍♂️",
            "🚶🏽‍♂️",
            "🚶🏼‍♂️",
            "🚶🏻‍♂️"
        ],
        "index": 384
    },
    {
        "name": "walking_woman",
        "code": "🚶‍♀️",
        "keywords": [
            "walking_woman"
        ],
        "types": [
            "🚶🏿‍♀️",
            "🚶🏾‍♀️",
            "🚶🏽‍♀️",
            "🚶🏼‍♀️",
            "🚶🏻‍♀️"
        ],
        "index": 385
    },
    {
        "name": "standing_person",
        "code": "🧍",
        "keywords": [
            "standing_person"
        ],
        "types": [
            "🧍🏿",
            "🧍🏾",
            "🧍🏽",
            "🧍🏼",
            "🧍🏻"
        ],
        "index": 386
    },
    {
        "name": "standing_man",
        "code": "🧍‍♂️",
        "keywords": [
            "standing_man"
        ],
        "types": [
            "🧍🏿‍♂️",
            "🧍🏾‍♂️",
            "🧍🏽‍♂️",
            "🧍🏼‍♂️",
            "🧍🏻‍♂️"
        ],
        "index": 387
    },
    {
        "name": "standing_woman",
        "code": "🧍‍♀️",
        "keywords": [
            "standing_woman"
        ],
        "types": [
            "🧍🏿‍♀️",
            "🧍🏾‍♀️",
            "🧍🏽‍♀️",
            "🧍🏼‍♀️",
            "🧍🏻‍♀️"
        ],
        "index": 388
    },
    {
        "name": "kneeling_person",
        "code": "🧎",
        "keywords": [
            "kneeling_person"
        ],
        "types": [
            "🧎🏿",
            "🧎🏾",
            "🧎🏽",
            "🧎🏼",
            "🧎🏻"
        ],
        "index": 389
    },
    {
        "name": "kneeling_man",
        "code": "🧎‍♂️",
        "keywords": [
            "kneeling_man"
        ],
        "types": [
            "🧎🏿‍♂️",
            "🧎🏾‍♂️",
            "🧎🏽‍♂️",
            "🧎🏼‍♂️",
            "🧎🏻‍♂️"
        ],
        "index": 390
    },
    {
        "name": "kneeling_woman",
        "code": "🧎‍♀️",
        "keywords": [
            "kneeling_woman"
        ],
        "types": [
            "🧎🏿‍♀️",
            "🧎🏾‍♀️",
            "🧎🏽‍♀️",
            "🧎🏼‍♀️",
            "🧎🏻‍♀️"
        ],
        "index": 391
    },
    {
        "name": "person_with_probing_cane",
        "code": "🧑‍🦯",
        "keywords": [
            "person_with_probing_cane"
        ],
        "types": [
            "🧑🏿‍🦯",
            "🧑🏾‍🦯",
            "🧑🏽‍🦯",
            "🧑🏼‍🦯",
            "🧑🏻‍🦯"
        ],
        "index": 392
    },
    {
        "name": "man_with_probing_cane",
        "code": "👨‍🦯",
        "keywords": [
            "man_with_probing_cane"
        ],
        "types": [
            "👨🏿‍🦯",
            "👨🏾‍🦯",
            "👨🏽‍🦯",
            "👨🏼‍🦯",
            "👨🏻‍🦯"
        ],
        "index": 393
    },
    {
        "name": "woman_with_probing_cane",
        "code": "👩‍🦯",
        "keywords": [
            "woman_with_probing_cane"
        ],
        "types": [
            "👩🏿‍🦯",
            "👩🏾‍🦯",
            "👩🏽‍🦯",
            "👩🏼‍🦯",
            "👩🏻‍🦯"
        ],
        "index": 394
    },
    {
        "name": "person_in_motorized_wheelchair",
        "code": "🧑‍🦼",
        "keywords": [
            "person_in_motorized_wheelchair"
        ],
        "types": [
            "🧑🏿‍🦼",
            "🧑🏾‍🦼",
            "🧑🏽‍🦼",
            "🧑🏼‍🦼",
            "🧑🏻‍🦼"
        ],
        "index": 395
    },
    {
        "name": "man_in_motorized_wheelchair",
        "code": "👨‍🦼",
        "keywords": [
            "man_in_motorized_wheelchair"
        ],
        "types": [
            "👨🏿‍🦼",
            "👨🏾‍🦼",
            "👨🏽‍🦼",
            "👨🏼‍🦼",
            "👨🏻‍🦼"
        ],
        "index": 396
    },
    {
        "name": "woman_in_motorized_wheelchair",
        "code": "👩‍🦼",
        "keywords": [
            "woman_in_motorized_wheelchair"
        ],
        "types": [
            "👩🏿‍🦼",
            "👩🏾‍🦼",
            "👩🏽‍🦼",
            "👩🏼‍🦼",
            "👩🏻‍🦼"
        ],
        "index": 397
    },
    {
        "name": "person_in_manual_wheelchair",
        "code": "🧑‍🦽",
        "keywords": [
            "person_in_manual_wheelchair"
        ],
        "types": [
            "🧑🏿‍🦽",
            "🧑🏾‍🦽",
            "🧑🏽‍🦽",
            "🧑🏼‍🦽",
            "🧑🏻‍🦽"
        ],
        "index": 398
    },
    {
        "name": "man_in_manual_wheelchair",
        "code": "👨‍🦽",
        "keywords": [
            "man_in_manual_wheelchair"
        ],
        "types": [
            "👨🏿‍🦽",
            "👨🏾‍🦽",
            "👨🏽‍🦽",
            "👨🏼‍🦽",
            "👨🏻‍🦽"
        ],
        "index": 399
    },
    {
        "name": "woman_in_manual_wheelchair",
        "code": "👩‍🦽",
        "keywords": [
            "woman_in_manual_wheelchair"
        ],
        "types": [
            "👩🏿‍🦽",
            "👩🏾‍🦽",
            "👩🏽‍🦽",
            "👩🏼‍🦽",
            "👩🏻‍🦽"
        ],
        "index": 400
    },
    {
        "name": "runner",
        "code": "🏃",
        "keywords": [
            "exercise",
            "workout",
            "marathon",
            "runner",
            "running"
        ],
        "types": [
            "🏃🏿",
            "🏃🏾",
            "🏃🏽",
            "🏃🏼",
            "🏃🏻"
        ],
        "index": 401
    },
    {
        "name": "running_man",
        "code": "🏃‍♂️",
        "keywords": [
            "exercise",
            "workout",
            "marathon",
            "running_man"
        ],
        "types": [
            "🏃🏿‍♂️",
            "🏃🏾‍♂️",
            "🏃🏽‍♂️",
            "🏃🏼‍♂️",
            "🏃🏻‍♂️"
        ],
        "index": 402
    },
    {
        "name": "running_woman",
        "code": "🏃‍♀️",
        "keywords": [
            "exercise",
            "workout",
            "marathon",
            "running_woman"
        ],
        "types": [
            "🏃🏿‍♀️",
            "🏃🏾‍♀️",
            "🏃🏽‍♀️",
            "🏃🏼‍♀️",
            "🏃🏻‍♀️"
        ],
        "index": 403
    },
    {
        "name": "woman_dancing",
        "code": "💃",
        "keywords": [
            "dress",
            "woman_dancing",
            "dancer"
        ],
        "types": [
            "💃🏿",
            "💃🏾",
            "💃🏽",
            "💃🏼",
            "💃🏻"
        ],
        "index": 404
    },
    {
        "name": "man_dancing",
        "code": "🕺",
        "keywords": [
            "dancer",
            "man_dancing",
            "dance",
            "man"
        ],
        "types": [
            "🕺🏿",
            "🕺🏾",
            "🕺🏽",
            "🕺🏼",
            "🕺🏻"
        ],
        "index": 405
    },
    {
        "name": "business_suit_levitating",
        "code": "🕴️",
        "keywords": [
            "business_suit_levitating"
        ],
        "types": [
            "🕴🏿",
            "🕴🏾",
            "🕴🏽",
            "🕴🏼",
            "🕴🏻"
        ],
        "index": 406
    },
    {
        "name": "dancers",
        "code": "👯",
        "keywords": [
            "bunny",
            "dancers",
            "dancer",
            "ear",
            "girl",
            "woman"
        ],
        "index": 407
    },
    {
        "name": "dancing_men",
        "code": "👯‍♂️",
        "keywords": [
            "bunny",
            "dancing_men"
        ],
        "index": 408
    },
    {
        "name": "dancing_women",
        "code": "👯‍♀️",
        "keywords": [
            "bunny",
            "dancing_women"
        ],
        "index": 409
    },
    {
        "name": "sauna_person",
        "code": "🧖",
        "keywords": [
            "steamy",
            "sauna_person"
        ],
        "types": [
            "🧖🏿",
            "🧖🏾",
            "🧖🏽",
            "🧖🏼",
            "🧖🏻"
        ],
        "index": 410
    },
    {
        "name": "sauna_man",
        "code": "🧖‍♂️",
        "keywords": [
            "steamy",
            "sauna_man"
        ],
        "types": [
            "🧖🏿‍♂️",
            "🧖🏾‍♂️",
            "🧖🏽‍♂️",
            "🧖🏼‍♂️",
            "🧖🏻‍♂️"
        ],
        "index": 411
    },
    {
        "name": "sauna_woman",
        "code": "🧖‍♀️",
        "keywords": [
            "steamy",
            "sauna_woman"
        ],
        "types": [
            "🧖🏿‍♀️",
            "🧖🏾‍♀️",
            "🧖🏽‍♀️",
            "🧖🏼‍♀️",
            "🧖🏻‍♀️"
        ],
        "index": 412
    },
    {
        "name": "climbing",
        "code": "🧗",
        "keywords": [
            "bouldering",
            "climbing"
        ],
        "types": [
            "🧗🏿",
            "🧗🏾",
            "🧗🏽",
            "🧗🏼",
            "🧗🏻"
        ],
        "index": 413
    },
    {
        "name": "climbing_man",
        "code": "🧗‍♂️",
        "keywords": [
            "bouldering",
            "climbing_man"
        ],
        "types": [
            "🧗🏿‍♂️",
            "🧗🏾‍♂️",
            "🧗🏽‍♂️",
            "🧗🏼‍♂️",
            "🧗🏻‍♂️"
        ],
        "index": 414
    },
    {
        "name": "climbing_woman",
        "code": "🧗‍♀️",
        "keywords": [
            "bouldering",
            "climbing_woman"
        ],
        "types": [
            "🧗🏿‍♀️",
            "🧗🏾‍♀️",
            "🧗🏽‍♀️",
            "🧗🏼‍♀️",
            "🧗🏻‍♀️"
        ],
        "index": 415
    },
    {
        "name": "person_fencing",
        "code": "🤺",
        "keywords": [
            "person_fencing",
            "fencer",
            "fencing",
            "sword"
        ],
        "index": 416
    },
    {
        "name": "horse_racing",
        "code": "🏇",
        "keywords": [
            "horse_racing",
            "horse",
            "jockey",
            "racehorse",
            "racing"
        ],
        "types": [
            "🏇🏿",
            "🏇🏾",
            "🏇🏽",
            "🏇🏼",
            "🏇🏻"
        ],
        "index": 417
    },
    {
        "name": "skier",
        "code": "⛷️",
        "keywords": [
            "skier"
        ],
        "index": 418
    },
    {
        "name": "snowboarder",
        "code": "🏂",
        "keywords": [
            "snowboarder",
            "ski",
            "snow",
            "snowboard"
        ],
        "types": [
            "🏂🏿",
            "🏂🏾",
            "🏂🏽",
            "🏂🏼",
            "🏂🏻"
        ],
        "index": 419
    },
    {
        "name": "golfing",
        "code": "🏌️",
        "keywords": [
            "golfing"
        ],
        "types": [
            "🏌🏿",
            "🏌🏾",
            "🏌🏽",
            "🏌🏼",
            "🏌🏻"
        ],
        "index": 420
    },
    {
        "name": "golfing_man",
        "code": "🏌️‍♂️",
        "keywords": [
            "golfing_man"
        ],
        "types": [
            "🏌🏿‍♂️",
            "🏌🏾‍♂️",
            "🏌🏽‍♂️",
            "🏌🏼‍♂️",
            "🏌🏻‍♂️"
        ],
        "index": 421
    },
    {
        "name": "golfing_woman",
        "code": "🏌️‍♀️",
        "keywords": [
            "golfing_woman"
        ],
        "types": [
            "🏌🏿‍♀️",
            "🏌🏾‍♀️",
            "🏌🏽‍♀️",
            "🏌🏼‍♀️",
            "🏌🏻‍♀️"
        ],
        "index": 422
    },
    {
        "name": "surfer",
        "code": "🏄",
        "keywords": [
            "surfer",
            "surfing"
        ],
        "types": [
            "🏄🏿",
            "🏄🏾",
            "🏄🏽",
            "🏄🏼",
            "🏄🏻"
        ],
        "index": 423
    },
    {
        "name": "surfing_man",
        "code": "🏄‍♂️",
        "keywords": [
            "surfing_man"
        ],
        "types": [
            "🏄🏿‍♂️",
            "🏄🏾‍♂️",
            "🏄🏽‍♂️",
            "🏄🏼‍♂️",
            "🏄🏻‍♂️"
        ],
        "index": 424
    },
    {
        "name": "surfing_woman",
        "code": "🏄‍♀️",
        "keywords": [
            "surfing_woman"
        ],
        "types": [
            "🏄🏿‍♀️",
            "🏄🏾‍♀️",
            "🏄🏽‍♀️",
            "🏄🏼‍♀️",
            "🏄🏻‍♀️"
        ],
        "index": 425
    },
    {
        "name": "rowboat",
        "code": "🚣",
        "keywords": [
            "rowboat",
            "boat",
            "vehicle"
        ],
        "types": [
            "🚣🏿",
            "🚣🏾",
            "🚣🏽",
            "🚣🏼",
            "🚣🏻"
        ],
        "index": 426
    },
    {
        "name": "rowing_man",
        "code": "🚣‍♂️",
        "keywords": [
            "rowing_man"
        ],
        "types": [
            "🚣🏿‍♂️",
            "🚣🏾‍♂️",
            "🚣🏽‍♂️",
            "🚣🏼‍♂️",
            "🚣🏻‍♂️"
        ],
        "index": 427
    },
    {
        "name": "rowing_woman",
        "code": "🚣‍♀️",
        "keywords": [
            "rowing_woman"
        ],
        "types": [
            "🚣🏿‍♀️",
            "🚣🏾‍♀️",
            "🚣🏽‍♀️",
            "🚣🏼‍♀️",
            "🚣🏻‍♀️"
        ],
        "index": 428
    },
    {
        "name": "swimmer",
        "code": "🏊",
        "keywords": [
            "swimmer",
            "swim"
        ],
        "types": [
            "🏊🏿",
            "🏊🏾",
            "🏊🏽",
            "🏊🏼",
            "🏊🏻"
        ],
        "index": 429
    },
    {
        "name": "swimming_man",
        "code": "🏊‍♂️",
        "keywords": [
            "swimming_man"
        ],
        "types": [
            "🏊🏿‍♂️",
            "🏊🏾‍♂️",
            "🏊🏽‍♂️",
            "🏊🏼‍♂️",
            "🏊🏻‍♂️"
        ],
        "index": 430
    },
    {
        "name": "swimming_woman",
        "code": "🏊‍♀️",
        "keywords": [
            "swimming_woman"
        ],
        "types": [
            "🏊🏿‍♀️",
            "🏊🏾‍♀️",
            "🏊🏽‍♀️",
            "🏊🏼‍♀️",
            "🏊🏻‍♀️"
        ],
        "index": 431
    },
    {
        "name": "bouncing_ball_person",
        "code": "⛹️",
        "keywords": [
            "basketball",
            "bouncing_ball_person"
        ],
        "types": [
            "⛹🏿",
            "⛹🏾",
            "⛹🏽",
            "⛹🏼",
            "⛹🏻"
        ],
        "index": 432
    },
    {
        "name": "bouncing_ball_man",
        "code": "⛹️‍♂️",
        "keywords": [
            "bouncing_ball_man",
            "basketball_man"
        ],
        "types": [
            "⛹🏿‍♂️",
            "⛹🏾‍♂️",
            "⛹🏽‍♂️",
            "⛹🏼‍♂️",
            "⛹🏻‍♂️"
        ],
        "index": 433
    },
    {
        "name": "bouncing_ball_woman",
        "code": "⛹️‍♀️",
        "keywords": [
            "bouncing_ball_woman",
            "basketball_woman"
        ],
        "types": [
            "⛹🏿‍♀️",
            "⛹🏾‍♀️",
            "⛹🏽‍♀️",
            "⛹🏼‍♀️",
            "⛹🏻‍♀️"
        ],
        "index": 434
    },
    {
        "name": "weight_lifting",
        "code": "🏋️",
        "keywords": [
            "gym",
            "workout",
            "weight_lifting"
        ],
        "types": [
            "🏋🏿",
            "🏋🏾",
            "🏋🏽",
            "🏋🏼",
            "🏋🏻"
        ],
        "index": 435
    },
    {
        "name": "weight_lifting_man",
        "code": "🏋️‍♂️",
        "keywords": [
            "gym",
            "workout",
            "weight_lifting_man"
        ],
        "types": [
            "🏋🏿‍♂️",
            "🏋🏾‍♂️",
            "🏋🏽‍♂️",
            "🏋🏼‍♂️",
            "🏋🏻‍♂️"
        ],
        "index": 436
    },
    {
        "name": "weight_lifting_woman",
        "code": "🏋️‍♀️",
        "keywords": [
            "gym",
            "workout",
            "weight_lifting_woman"
        ],
        "types": [
            "🏋🏿‍♀️",
            "🏋🏾‍♀️",
            "🏋🏽‍♀️",
            "🏋🏼‍♀️",
            "🏋🏻‍♀️"
        ],
        "index": 437
    },
    {
        "name": "bicyclist",
        "code": "🚴",
        "keywords": [
            "bicyclist",
            "bicycle",
            "bike",
            "cyclist"
        ],
        "types": [
            "🚴🏿",
            "🚴🏾",
            "🚴🏽",
            "🚴🏼",
            "🚴🏻"
        ],
        "index": 438
    },
    {
        "name": "biking_man",
        "code": "🚴‍♂️",
        "keywords": [
            "biking_man"
        ],
        "types": [
            "🚴🏿‍♂️",
            "🚴🏾‍♂️",
            "🚴🏽‍♂️",
            "🚴🏼‍♂️",
            "🚴🏻‍♂️"
        ],
        "index": 439
    },
    {
        "name": "biking_woman",
        "code": "🚴‍♀️",
        "keywords": [
            "biking_woman"
        ],
        "types": [
            "🚴🏿‍♀️",
            "🚴🏾‍♀️",
            "🚴🏽‍♀️",
            "🚴🏼‍♀️",
            "🚴🏻‍♀️"
        ],
        "index": 440
    },
    {
        "name": "mountain_bicyclist",
        "code": "🚵",
        "keywords": [
            "mountain_bicyclist",
            "bicycle",
            "bicyclist",
            "bike",
            "cyclist",
            "mountain"
        ],
        "types": [
            "🚵🏿",
            "🚵🏾",
            "🚵🏽",
            "🚵🏼",
            "🚵🏻"
        ],
        "index": 441
    },
    {
        "name": "mountain_biking_man",
        "code": "🚵‍♂️",
        "keywords": [
            "mountain_biking_man"
        ],
        "types": [
            "🚵🏿‍♂️",
            "🚵🏾‍♂️",
            "🚵🏽‍♂️",
            "🚵🏼‍♂️",
            "🚵🏻‍♂️"
        ],
        "index": 442
    },
    {
        "name": "mountain_biking_woman",
        "code": "🚵‍♀️",
        "keywords": [
            "mountain_biking_woman"
        ],
        "types": [
            "🚵🏿‍♀️",
            "🚵🏾‍♀️",
            "🚵🏽‍♀️",
            "🚵🏼‍♀️",
            "🚵🏻‍♀️"
        ],
        "index": 443
    },
    {
        "name": "cartwheeling",
        "code": "🤸",
        "keywords": [
            "cartwheeling",
            "cartwheel",
            "gymnastics"
        ],
        "types": [
            "🤸🏿",
            "🤸🏾",
            "🤸🏽",
            "🤸🏼",
            "🤸🏻"
        ],
        "index": 444
    },
    {
        "name": "man_cartwheeling",
        "code": "🤸‍♂️",
        "keywords": [
            "man_cartwheeling"
        ],
        "types": [
            "🤸🏿‍♂️",
            "🤸🏾‍♂️",
            "🤸🏽‍♂️",
            "🤸🏼‍♂️",
            "🤸🏻‍♂️"
        ],
        "index": 445
    },
    {
        "name": "woman_cartwheeling",
        "code": "🤸‍♀️",
        "keywords": [
            "woman_cartwheeling"
        ],
        "types": [
            "🤸🏿‍♀️",
            "🤸🏾‍♀️",
            "🤸🏽‍♀️",
            "🤸🏼‍♀️",
            "🤸🏻‍♀️"
        ],
        "index": 446
    },
    {
        "name": "wrestling",
        "code": "🤼",
        "keywords": [
            "wrestling",
            "wrestle",
            "wrestler"
        ],
        "index": 447
    },
    {
        "name": "men_wrestling",
        "code": "🤼‍♂️",
        "keywords": [
            "men_wrestling"
        ],
        "index": 448
    },
    {
        "name": "women_wrestling",
        "code": "🤼‍♀️",
        "keywords": [
            "women_wrestling"
        ],
        "index": 449
    },
    {
        "name": "water_polo",
        "code": "🤽",
        "keywords": [
            "water_polo",
            "polo",
            "water"
        ],
        "types": [
            "🤽🏿",
            "🤽🏾",
            "🤽🏽",
            "🤽🏼",
            "🤽🏻"
        ],
        "index": 450
    },
    {
        "name": "man_playing_water_polo",
        "code": "🤽‍♂️",
        "keywords": [
            "man_playing_water_polo"
        ],
        "types": [
            "🤽🏿‍♂️",
            "🤽🏾‍♂️",
            "🤽🏽‍♂️",
            "🤽🏼‍♂️",
            "🤽🏻‍♂️"
        ],
        "index": 451
    },
    {
        "name": "woman_playing_water_polo",
        "code": "🤽‍♀️",
        "keywords": [
            "woman_playing_water_polo"
        ],
        "types": [
            "🤽🏿‍♀️",
            "🤽🏾‍♀️",
            "🤽🏽‍♀️",
            "🤽🏼‍♀️",
            "🤽🏻‍♀️"
        ],
        "index": 452
    },
    {
        "name": "handball_person",
        "code": "🤾",
        "keywords": [
            "handball_person",
            "ball",
            "handball"
        ],
        "types": [
            "🤾🏿",
            "🤾🏾",
            "🤾🏽",
            "🤾🏼",
            "🤾🏻"
        ],
        "index": 453
    },
    {
        "name": "man_playing_handball",
        "code": "🤾‍♂️",
        "keywords": [
            "man_playing_handball"
        ],
        "types": [
            "🤾🏿‍♂️",
            "🤾🏾‍♂️",
            "🤾🏽‍♂️",
            "🤾🏼‍♂️",
            "🤾🏻‍♂️"
        ],
        "index": 454
    },
    {
        "name": "woman_playing_handball",
        "code": "🤾‍♀️",
        "keywords": [
            "woman_playing_handball"
        ],
        "types": [
            "🤾🏿‍♀️",
            "🤾🏾‍♀️",
            "🤾🏽‍♀️",
            "🤾🏼‍♀️",
            "🤾🏻‍♀️"
        ],
        "index": 455
    },
    {
        "name": "juggling_person",
        "code": "🤹",
        "keywords": [
            "juggling_person",
            "balance",
            "juggle",
            "multitask",
            "skill"
        ],
        "types": [
            "🤹🏿",
            "🤹🏾",
            "🤹🏽",
            "🤹🏼",
            "🤹🏻"
        ],
        "index": 456
    },
    {
        "name": "man_juggling",
        "code": "🤹‍♂️",
        "keywords": [
            "man_juggling"
        ],
        "types": [
            "🤹🏿‍♂️",
            "🤹🏾‍♂️",
            "🤹🏽‍♂️",
            "🤹🏼‍♂️",
            "🤹🏻‍♂️"
        ],
        "index": 457
    },
    {
        "name": "woman_juggling",
        "code": "🤹‍♀️",
        "keywords": [
            "woman_juggling"
        ],
        "types": [
            "🤹🏿‍♀️",
            "🤹🏾‍♀️",
            "🤹🏽‍♀️",
            "🤹🏼‍♀️",
            "🤹🏻‍♀️"
        ],
        "index": 458
    },
    {
        "name": "lotus_position",
        "code": "🧘",
        "keywords": [
            "meditation",
            "lotus_position"
        ],
        "types": [
            "🧘🏿",
            "🧘🏾",
            "🧘🏽",
            "🧘🏼",
            "🧘🏻"
        ],
        "index": 459
    },
    {
        "name": "lotus_position_man",
        "code": "🧘‍♂️",
        "keywords": [
            "meditation",
            "lotus_position_man"
        ],
        "types": [
            "🧘🏿‍♂️",
            "🧘🏾‍♂️",
            "🧘🏽‍♂️",
            "🧘🏼‍♂️",
            "🧘🏻‍♂️"
        ],
        "index": 460
    },
    {
        "name": "lotus_position_woman",
        "code": "🧘‍♀️",
        "keywords": [
            "meditation",
            "lotus_position_woman"
        ],
        "types": [
            "🧘🏿‍♀️",
            "🧘🏾‍♀️",
            "🧘🏽‍♀️",
            "🧘🏼‍♀️",
            "🧘🏻‍♀️"
        ],
        "index": 461
    },
    {
        "name": "bath",
        "code": "🛀",
        "keywords": [
            "shower",
            "bath",
            "bathtub"
        ],
        "types": [
            "🛀🏿",
            "🛀🏾",
            "🛀🏽",
            "🛀🏼",
            "🛀🏻"
        ],
        "index": 462
    },
    {
        "name": "sleeping_bed",
        "code": "🛌",
        "keywords": [
            "sleeping_bed",
            "hotel",
            "sleep"
        ],
        "types": [
            "🛌🏿",
            "🛌🏾",
            "🛌🏽",
            "🛌🏼",
            "🛌🏻"
        ],
        "index": 463
    },
    {
        "name": "people_holding_hands",
        "code": "🧑‍🤝‍🧑",
        "keywords": [
            "couple",
            "date",
            "people_holding_hands"
        ],
        "types": [
            "🧑🏿‍🤝‍🧑🏿",
            "🧑🏿‍🤝‍🧑🏾",
            "🧑🏿‍🤝‍🧑🏽",
            "🧑🏿‍🤝‍🧑🏼",
            "🧑🏿‍🤝‍🧑🏻",
            "🧑🏾‍🤝‍🧑🏿",
            "🧑🏾‍🤝‍🧑🏾",
            "🧑🏾‍🤝‍🧑🏽",
            "🧑🏾‍🤝‍🧑🏼",
            "🧑🏾‍🤝‍🧑🏻",
            "🧑🏽‍🤝‍🧑🏿",
            "🧑🏽‍🤝‍🧑🏾",
            "🧑🏽‍🤝‍🧑🏽",
            "🧑🏽‍🤝‍🧑🏼",
            "🧑🏽‍🤝‍🧑🏻",
            "🧑🏼‍🤝‍🧑🏿",
            "🧑🏼‍🤝‍🧑🏾",
            "🧑🏼‍🤝‍🧑🏽",
            "🧑🏼‍🤝‍🧑🏼",
            "🧑🏼‍🤝‍🧑🏻",
            "🧑🏻‍🤝‍🧑🏿",
            "🧑🏻‍🤝‍🧑🏾",
            "🧑🏻‍🤝‍🧑🏽",
            "🧑🏻‍🤝‍🧑🏼",
            "🧑🏻‍🤝‍🧑🏻"
        ],
        "index": 464
    },
    {
        "name": "two_women_holding_hands",
        "code": "👭",
        "keywords": [
            "couple",
            "date",
            "two_women_holding_hands",
            "hand",
            "hold",
            "woman"
        ],
        "types": [
            "👩🏿‍🤝‍👩🏾",
            "👩🏿‍🤝‍👩🏽",
            "👩🏿‍🤝‍👩🏼",
            "👩🏿‍🤝‍👩🏻",
            "👩🏾‍🤝‍👩🏿",
            "👩🏾‍🤝‍👩🏽",
            "👩🏾‍🤝‍👩🏼",
            "👩🏾‍🤝‍👩🏻",
            "👩🏽‍🤝‍👩🏿",
            "👩🏽‍🤝‍👩🏾",
            "👩🏽‍🤝‍👩🏼",
            "👩🏽‍🤝‍👩🏻",
            "👩🏼‍🤝‍👩🏿",
            "👩🏼‍🤝‍👩🏾",
            "👩🏼‍🤝‍👩🏽",
            "👩🏼‍🤝‍👩🏻",
            "👩🏻‍🤝‍👩🏿",
            "👩🏻‍🤝‍👩🏾",
            "👩🏻‍🤝‍👩🏽",
            "👩🏻‍🤝‍👩🏼",
            "👭🏿",
            "👭🏾",
            "👭🏽",
            "👭🏼",
            "👭🏻"
        ],
        "index": 465
    },
    {
        "name": "couple",
        "code": "👫",
        "keywords": [
            "date",
            "couple",
            "hand",
            "hold",
            "man",
            "woman"
        ],
        "types": [
            "👩🏿‍🤝‍👨🏾",
            "👩🏿‍🤝‍👨🏽",
            "👩🏿‍🤝‍👨🏼",
            "👩🏿‍🤝‍👨🏻",
            "👩🏾‍🤝‍👨🏿",
            "👩🏾‍🤝‍👨🏽",
            "👩🏾‍🤝‍👨🏼",
            "👩🏾‍🤝‍👨🏻",
            "👩🏽‍🤝‍👨🏿",
            "👩🏽‍🤝‍👨🏾",
            "👩🏽‍🤝‍👨🏼",
            "👩🏽‍🤝‍👨🏻",
            "👩🏼‍🤝‍👨🏿",
            "👩🏼‍🤝‍👨🏾",
            "👩🏼‍🤝‍👨🏽",
            "👩🏼‍🤝‍👨🏻",
            "👩🏻‍🤝‍👨🏿",
            "👩🏻‍🤝‍👨🏾",
            "👩🏻‍🤝‍👨🏽",
            "👩🏻‍🤝‍👨🏼",
            "👫🏿",
            "👫🏾",
            "👫🏽",
            "👫🏼",
            "👫🏻"
        ],
        "index": 466
    },
    {
        "name": "two_men_holding_hands",
        "code": "👬",
        "keywords": [
            "couple",
            "date",
            "two_men_holding_hands",
            "gemini",
            "hand",
            "hold",
            "man",
            "twins",
            "zodiac"
        ],
        "types": [
            "👨🏿‍🤝‍👨🏾",
            "👨🏿‍🤝‍👨🏽",
            "👨🏿‍🤝‍👨🏼",
            "👨🏿‍🤝‍👨🏻",
            "👨🏾‍🤝‍👨🏿",
            "👨🏾‍🤝‍👨🏽",
            "👨🏾‍🤝‍👨🏼",
            "👨🏾‍🤝‍👨🏻",
            "👨🏽‍🤝‍👨🏿",
            "👨🏽‍🤝‍👨🏾",
            "👨🏽‍🤝‍👨🏼",
            "👨🏽‍🤝‍👨🏻",
            "👨🏼‍🤝‍👨🏿",
            "👨🏼‍🤝‍👨🏾",
            "👨🏼‍🤝‍👨🏽",
            "👨🏼‍🤝‍👨🏻",
            "👨🏻‍🤝‍👨🏿",
            "👨🏻‍🤝‍👨🏾",
            "👨🏻‍🤝‍👨🏽",
            "👨🏻‍🤝‍👨🏼",
            "👬🏿",
            "👬🏾",
            "👬🏽",
            "👬🏼",
            "👬🏻"
        ],
        "index": 467
    },
    {
        "name": "couplekiss",
        "code": "💏",
        "keywords": [
            "couplekiss",
            "couple",
            "kiss",
            "romance"
        ],
        "types": [
            "🧑🏿‍❤️‍💋‍🧑🏾",
            "🧑🏿‍❤️‍💋‍🧑🏽",
            "🧑🏿‍❤️‍💋‍🧑🏼",
            "🧑🏿‍❤️‍💋‍🧑🏻",
            "🧑🏾‍❤️‍💋‍🧑🏿",
            "🧑🏾‍❤️‍💋‍🧑🏽",
            "🧑🏾‍❤️‍💋‍🧑🏼",
            "🧑🏾‍❤️‍💋‍🧑🏻",
            "🧑🏽‍❤️‍💋‍🧑🏿",
            "🧑🏽‍❤️‍💋‍🧑🏾",
            "🧑🏽‍❤️‍💋‍🧑🏼",
            "🧑🏽‍❤️‍💋‍🧑🏻",
            "🧑🏼‍❤️‍💋‍🧑🏿",
            "🧑🏼‍❤️‍💋‍🧑🏾",
            "🧑🏼‍❤️‍💋‍🧑🏽",
            "🧑🏼‍❤️‍💋‍🧑🏻",
            "🧑🏻‍❤️‍💋‍🧑🏿",
            "🧑🏻‍❤️‍💋‍🧑🏾",
            "🧑🏻‍❤️‍💋‍🧑🏽",
            "🧑🏻‍❤️‍💋‍🧑🏼",
            "💏🏿",
            "💏🏾",
            "💏🏽",
            "💏🏼",
            "💏🏻"
        ],
        "index": 468
    },
    {
        "name": "couplekiss_man_woman",
        "code": "👩‍❤️‍💋‍👨",
        "keywords": [
            "couplekiss_man_woman"
        ],
        "types": [
            "👩🏿‍❤️‍💋‍👨🏿",
            "👩🏿‍❤️‍💋‍👨🏾",
            "👩🏿‍❤️‍💋‍👨🏽",
            "👩🏿‍❤️‍💋‍👨🏼",
            "👩🏿‍❤️‍💋‍👨🏻",
            "👩🏾‍❤️‍💋‍👨🏿",
            "👩🏾‍❤️‍💋‍👨🏾",
            "👩🏾‍❤️‍💋‍👨🏽",
            "👩🏾‍❤️‍💋‍👨🏼",
            "👩🏾‍❤️‍💋‍👨🏻",
            "👩🏽‍❤️‍💋‍👨🏿",
            "👩🏽‍❤️‍💋‍👨🏾",
            "👩🏽‍❤️‍💋‍👨🏽",
            "👩🏽‍❤️‍💋‍👨🏼",
            "👩🏽‍❤️‍💋‍👨🏻",
            "👩🏼‍❤️‍💋‍👨🏿",
            "👩🏼‍❤️‍💋‍👨🏾",
            "👩🏼‍❤️‍💋‍👨🏽",
            "👩🏼‍❤️‍💋‍👨🏼",
            "👩🏼‍❤️‍💋‍👨🏻",
            "👩🏻‍❤️‍💋‍👨🏿",
            "👩🏻‍❤️‍💋‍👨🏾",
            "👩🏻‍❤️‍💋‍👨🏽",
            "👩🏻‍❤️‍💋‍👨🏼",
            "👩🏻‍❤️‍💋‍👨🏻"
        ],
        "index": 469
    },
    {
        "name": "couplekiss_man_man",
        "code": "👨‍❤️‍💋‍👨",
        "keywords": [
            "couplekiss_man_man"
        ],
        "types": [
            "👨🏿‍❤️‍💋‍👨🏿",
            "👨🏿‍❤️‍💋‍👨🏾",
            "👨🏿‍❤️‍💋‍👨🏽",
            "👨🏿‍❤️‍💋‍👨🏼",
            "👨🏿‍❤️‍💋‍👨🏻",
            "👨🏾‍❤️‍💋‍👨🏿",
            "👨🏾‍❤️‍💋‍👨🏾",
            "👨🏾‍❤️‍💋‍👨🏽",
            "👨🏾‍❤️‍💋‍👨🏼",
            "👨🏾‍❤️‍💋‍👨🏻",
            "👨🏽‍❤️‍💋‍👨🏿",
            "👨🏽‍❤️‍💋‍👨🏾",
            "👨🏽‍❤️‍💋‍👨🏽",
            "👨🏽‍❤️‍💋‍👨🏼",
            "👨🏽‍❤️‍💋‍👨🏻",
            "👨🏼‍❤️‍💋‍👨🏿",
            "👨🏼‍❤️‍💋‍👨🏾",
            "👨🏼‍❤️‍💋‍👨🏽",
            "👨🏼‍❤️‍💋‍👨🏼",
            "👨🏼‍❤️‍💋‍👨🏻",
            "👨🏻‍❤️‍💋‍👨🏿",
            "👨🏻‍❤️‍💋‍👨🏾",
            "👨🏻‍❤️‍💋‍👨🏽",
            "👨🏻‍❤️‍💋‍👨🏼",
            "👨🏻‍❤️‍💋‍👨🏻"
        ],
        "index": 470
    },
    {
        "name": "couplekiss_woman_woman",
        "code": "👩‍❤️‍💋‍👩",
        "keywords": [
            "couplekiss_woman_woman"
        ],
        "types": [
            "👩🏿‍❤️‍💋‍👩🏿",
            "👩🏿‍❤️‍💋‍👩🏾",
            "👩🏿‍❤️‍💋‍👩🏽",
            "👩🏿‍❤️‍💋‍👩🏼",
            "👩🏿‍❤️‍💋‍👩🏻",
            "👩🏾‍❤️‍💋‍👩🏿",
            "👩🏾‍❤️‍💋‍👩🏾",
            "👩🏾‍❤️‍💋‍👩🏽",
            "👩🏾‍❤️‍💋‍👩🏼",
            "👩🏾‍❤️‍💋‍👩🏻",
            "👩🏽‍❤️‍💋‍👩🏿",
            "👩🏽‍❤️‍💋‍👩🏾",
            "👩🏽‍❤️‍💋‍👩🏽",
            "👩🏽‍❤️‍💋‍👩🏼",
            "👩🏽‍❤️‍💋‍👩🏻",
            "👩🏼‍❤️‍💋‍👩🏿",
            "👩🏼‍❤️‍💋‍👩🏾",
            "👩🏼‍❤️‍💋‍👩🏽",
            "👩🏼‍❤️‍💋‍👩🏼",
            "👩🏼‍❤️‍💋‍👩🏻",
            "👩🏻‍❤️‍💋‍👩🏿",
            "👩🏻‍❤️‍💋‍👩🏾",
            "👩🏻‍❤️‍💋‍👩🏽",
            "👩🏻‍❤️‍💋‍👩🏼",
            "👩🏻‍❤️‍💋‍👩🏻"
        ],
        "index": 471
    },
    {
        "name": "couple_with_heart",
        "code": "💑",
        "keywords": [
            "couple_with_heart",
            "couple",
            "heart",
            "love",
            "romance"
        ],
        "types": [
            "🧑🏿‍❤️‍🧑🏾",
            "🧑🏿‍❤️‍🧑🏽",
            "🧑🏿‍❤️‍🧑🏼",
            "🧑🏿‍❤️‍🧑🏻",
            "🧑🏾‍❤️‍🧑🏿",
            "🧑🏾‍❤️‍🧑🏽",
            "🧑🏾‍❤️‍🧑🏼",
            "🧑🏾‍❤️‍🧑🏻",
            "🧑🏽‍❤️‍🧑🏿",
            "🧑🏽‍❤️‍🧑🏾",
            "🧑🏽‍❤️‍🧑🏼",
            "🧑🏽‍❤️‍🧑🏻",
            "🧑🏼‍❤️‍🧑🏿",
            "🧑🏼‍❤️‍🧑🏾",
            "🧑🏼‍❤️‍🧑🏽",
            "🧑🏼‍❤️‍🧑🏻",
            "🧑🏻‍❤️‍🧑🏿",
            "🧑🏻‍❤️‍🧑🏾",
            "🧑🏻‍❤️‍🧑🏽",
            "🧑🏻‍❤️‍🧑🏼",
            "💑🏿",
            "💑🏾",
            "💑🏽",
            "💑🏼",
            "💑🏻"
        ],
        "index": 472
    },
    {
        "name": "couple_with_heart_woman_man",
        "code": "👩‍❤️‍👨",
        "keywords": [
            "couple_with_heart_woman_man"
        ],
        "types": [
            "👩🏿‍❤️‍👨🏿",
            "👩🏿‍❤️‍👨🏾",
            "👩🏿‍❤️‍👨🏽",
            "👩🏿‍❤️‍👨🏼",
            "👩🏿‍❤️‍👨🏻",
            "👩🏾‍❤️‍👨🏿",
            "👩🏾‍❤️‍👨🏾",
            "👩🏾‍❤️‍👨🏽",
            "👩🏾‍❤️‍👨🏼",
            "👩🏾‍❤️‍👨🏻",
            "👩🏽‍❤️‍👨🏿",
            "👩🏽‍❤️‍👨🏾",
            "👩🏽‍❤️‍👨🏽",
            "👩🏽‍❤️‍👨🏼",
            "👩🏽‍❤️‍👨🏻",
            "👩🏼‍❤️‍👨🏿",
            "👩🏼‍❤️‍👨🏾",
            "👩🏼‍❤️‍👨🏽",
            "👩🏼‍❤️‍👨🏼",
            "👩🏼‍❤️‍👨🏻",
            "👩🏻‍❤️‍👨🏿",
            "👩🏻‍❤️‍👨🏾",
            "👩🏻‍❤️‍👨🏽",
            "👩🏻‍❤️‍👨🏼",
            "👩🏻‍❤️‍👨🏻"
        ],
        "index": 473
    },
    {
        "name": "couple_with_heart_man_man",
        "code": "👨‍❤️‍👨",
        "keywords": [
            "couple_with_heart_man_man"
        ],
        "types": [
            "👨🏿‍❤️‍👨🏿",
            "👨🏿‍❤️‍👨🏾",
            "👨🏿‍❤️‍👨🏽",
            "👨🏿‍❤️‍👨🏼",
            "👨🏿‍❤️‍👨🏻",
            "👨🏾‍❤️‍👨🏿",
            "👨🏾‍❤️‍👨🏾",
            "👨🏾‍❤️‍👨🏽",
            "👨🏾‍❤️‍👨🏼",
            "👨🏾‍❤️‍👨🏻",
            "👨🏽‍❤️‍👨🏿",
            "👨🏽‍❤️‍👨🏾",
            "👨🏽‍❤️‍👨🏽",
            "👨🏽‍❤️‍👨🏼",
            "👨🏽‍❤️‍👨🏻",
            "👨🏼‍❤️‍👨🏿",
            "👨🏼‍❤️‍👨🏾",
            "👨🏼‍❤️‍👨🏽",
            "👨🏼‍❤️‍👨🏼",
            "👨🏼‍❤️‍👨🏻",
            "👨🏻‍❤️‍👨🏿",
            "👨🏻‍❤️‍👨🏾",
            "👨🏻‍❤️‍👨🏽",
            "👨🏻‍❤️‍👨🏼",
            "👨🏻‍❤️‍👨🏻"
        ],
        "index": 474
    },
    {
        "name": "couple_with_heart_woman_woman",
        "code": "👩‍❤️‍👩",
        "keywords": [
            "couple_with_heart_woman_woman"
        ],
        "types": [
            "👩🏿‍❤️‍👩🏿",
            "👩🏿‍❤️‍👩🏾",
            "👩🏿‍❤️‍👩🏽",
            "👩🏿‍❤️‍👩🏼",
            "👩🏿‍❤️‍👩🏻",
            "👩🏾‍❤️‍👩🏿",
            "👩🏾‍❤️‍👩🏾",
            "👩🏾‍❤️‍👩🏽",
            "👩🏾‍❤️‍👩🏼",
            "👩🏾‍❤️‍👩🏻",
            "👩🏽‍❤️‍👩🏿",
            "👩🏽‍❤️‍👩🏾",
            "👩🏽‍❤️‍👩🏽",
            "👩🏽‍❤️‍👩🏼",
            "👩🏽‍❤️‍👩🏻",
            "👩🏼‍❤️‍👩🏿",
            "👩🏼‍❤️‍👩🏾",
            "👩🏼‍❤️‍👩🏽",
            "👩🏼‍❤️‍👩🏼",
            "👩🏼‍❤️‍👩🏻",
            "👩🏻‍❤️‍👩🏿",
            "👩🏻‍❤️‍👩🏾",
            "👩🏻‍❤️‍👩🏽",
            "👩🏻‍❤️‍👩🏼",
            "👩🏻‍❤️‍👩🏻"
        ],
        "index": 475
    },
    {
        "name": "family",
        "code": "👪",
        "keywords": [
            "home",
            "parents",
            "child",
            "family",
            "father",
            "mother"
        ],
        "index": 476
    },
    {
        "name": "family_man_woman_boy",
        "code": "👨‍👩‍👦",
        "keywords": [
            "family_man_woman_boy",
            "boy",
            "family",
            "man",
            "woman"
        ],
        "index": 477
    },
    {
        "name": "family_man_woman_girl",
        "code": "👨‍👩‍👧",
        "keywords": [
            "family_man_woman_girl",
            "family",
            "girl",
            "man",
            "woman"
        ],
        "index": 478
    },
    {
        "name": "family_man_woman_girl_boy",
        "code": "👨‍👩‍👧‍👦",
        "keywords": [
            "family_man_woman_girl_boy",
            "boy",
            "family",
            "girl",
            "man",
            "woman"
        ],
        "index": 479
    },
    {
        "name": "family_man_woman_boy_boy",
        "code": "👨‍👩‍👦‍👦",
        "keywords": [
            "family_man_woman_boy_boy",
            "boy",
            "family",
            "man",
            "woman"
        ],
        "index": 480
    },
    {
        "name": "family_man_woman_girl_girl",
        "code": "👨‍👩‍👧‍👧",
        "keywords": [
            "family_man_woman_girl_girl",
            "family",
            "girl",
            "man",
            "woman"
        ],
        "index": 481
    },
    {
        "name": "family_man_man_boy",
        "code": "👨‍👨‍👦",
        "keywords": [
            "family_man_man_boy",
            "boy",
            "family",
            "man"
        ],
        "index": 482
    },
    {
        "name": "family_man_man_girl",
        "code": "👨‍👨‍👧",
        "keywords": [
            "family_man_man_girl",
            "family",
            "girl",
            "man"
        ],
        "index": 483
    },
    {
        "name": "family_man_man_girl_boy",
        "code": "👨‍👨‍👧‍👦",
        "keywords": [
            "family_man_man_girl_boy",
            "boy",
            "family",
            "girl",
            "man"
        ],
        "index": 484
    },
    {
        "name": "family_man_man_boy_boy",
        "code": "👨‍👨‍👦‍👦",
        "keywords": [
            "family_man_man_boy_boy",
            "boy",
            "family",
            "man"
        ],
        "index": 485
    },
    {
        "name": "family_man_man_girl_girl",
        "code": "👨‍👨‍👧‍👧",
        "keywords": [
            "family_man_man_girl_girl",
            "family",
            "girl",
            "man"
        ],
        "index": 486
    },
    {
        "name": "family_woman_woman_boy",
        "code": "👩‍👩‍👦",
        "keywords": [
            "family_woman_woman_boy",
            "boy",
            "family",
            "woman"
        ],
        "index": 487
    },
    {
        "name": "family_woman_woman_girl",
        "code": "👩‍👩‍👧",
        "keywords": [
            "family_woman_woman_girl",
            "family",
            "girl",
            "woman"
        ],
        "index": 488
    },
    {
        "name": "family_woman_woman_girl_boy",
        "code": "👩‍👩‍👧‍👦",
        "keywords": [
            "family_woman_woman_girl_boy",
            "boy",
            "family",
            "girl",
            "woman"
        ],
        "index": 489
    },
    {
        "name": "family_woman_woman_boy_boy",
        "code": "👩‍👩‍👦‍👦",
        "keywords": [
            "family_woman_woman_boy_boy",
            "boy",
            "family",
            "woman"
        ],
        "index": 490
    },
    {
        "name": "family_woman_woman_girl_girl",
        "code": "👩‍👩‍👧‍👧",
        "keywords": [
            "family_woman_woman_girl_girl",
            "family",
            "girl",
            "woman"
        ],
        "index": 491
    },
    {
        "name": "family_man_boy",
        "code": "👨‍👦",
        "keywords": [
            "family_man_boy"
        ],
        "index": 492
    },
    {
        "name": "family_man_boy_boy",
        "code": "👨‍👦‍👦",
        "keywords": [
            "family_man_boy_boy"
        ],
        "index": 493
    },
    {
        "name": "family_man_girl",
        "code": "👨‍👧",
        "keywords": [
            "family_man_girl"
        ],
        "index": 494
    },
    {
        "name": "family_man_girl_boy",
        "code": "👨‍👧‍👦",
        "keywords": [
            "family_man_girl_boy"
        ],
        "index": 495
    },
    {
        "name": "family_man_girl_girl",
        "code": "👨‍👧‍👧",
        "keywords": [
            "family_man_girl_girl"
        ],
        "index": 496
    },
    {
        "name": "family_woman_boy",
        "code": "👩‍👦",
        "keywords": [
            "family_woman_boy"
        ],
        "index": 497
    },
    {
        "name": "family_woman_boy_boy",
        "code": "👩‍👦‍👦",
        "keywords": [
            "family_woman_boy_boy"
        ],
        "index": 498
    },
    {
        "name": "family_woman_girl",
        "code": "👩‍👧",
        "keywords": [
            "family_woman_girl"
        ],
        "index": 499
    },
    {
        "name": "family_woman_girl_boy",
        "code": "👩‍👧‍👦",
        "keywords": [
            "family_woman_girl_boy"
        ],
        "index": 500
    },
    {
        "name": "family_woman_girl_girl",
        "code": "👩‍👧‍👧",
        "keywords": [
            "family_woman_girl_girl"
        ],
        "index": 501
    },
    {
        "name": "speaking_head",
        "code": "🗣️",
        "keywords": [
            "speaking_head"
        ],
        "index": 502
    },
    {
        "name": "bust_in_silhouette",
        "code": "👤",
        "keywords": [
            "user",
            "bust_in_silhouette",
            "bust",
            "silhouette"
        ],
        "index": 503
    },
    {
        "name": "busts_in_silhouette",
        "code": "👥",
        "keywords": [
            "users",
            "group",
            "team",
            "busts_in_silhouette",
            "bust",
            "silhouette"
        ],
        "index": 504
    },
    {
        "name": "people_hugging",
        "code": "🫂",
        "keywords": [
            "people_hugging"
        ],
        "index": 505
    },
    {
        "name": "footprints",
        "code": "👣",
        "keywords": [
            "feet",
            "tracks",
            "footprints",
            "body",
            "clothing",
            "footprint",
            "print"
        ],
        "index": 506
    },
    {
        "code": "animalsAndNature",
        "header": true,
        "index": 507
    },
    {
        "name": "monkey_face",
        "code": "🐵",
        "keywords": [
            "monkey_face",
            "face",
            "monkey"
        ],
        "index": 508
    },
    {
        "name": "monkey",
        "code": "🐒",
        "keywords": [
            "monkey"
        ],
        "index": 509
    },
    {
        "name": "gorilla",
        "code": "🦍",
        "keywords": [
            "gorilla"
        ],
        "index": 510
    },
    {
        "name": "orangutan",
        "code": "🦧",
        "keywords": [
            "orangutan"
        ],
        "index": 511
    },
    {
        "name": "dog",
        "code": "🐶",
        "keywords": [
            "pet",
            "dog",
            "face"
        ],
        "index": 512
    },
    {
        "name": "dog2",
        "code": "🐕",
        "keywords": [
            "dog2",
            "dog",
            "pet"
        ],
        "index": 513
    },
    {
        "name": "guide_dog",
        "code": "🦮",
        "keywords": [
            "guide_dog"
        ],
        "index": 514
    },
    {
        "name": "service_dog",
        "code": "🐕‍🦺",
        "keywords": [
            "service_dog"
        ],
        "index": 515
    },
    {
        "name": "poodle",
        "code": "🐩",
        "keywords": [
            "dog",
            "poodle"
        ],
        "index": 516
    },
    {
        "name": "wolf",
        "code": "🐺",
        "keywords": [
            "wolf",
            "face"
        ],
        "index": 517
    },
    {
        "name": "fox_face",
        "code": "🦊",
        "keywords": [
            "fox_face",
            "face",
            "fox"
        ],
        "index": 518
    },
    {
        "name": "raccoon",
        "code": "🦝",
        "keywords": [
            "raccoon"
        ],
        "index": 519
    },
    {
        "name": "cat",
        "code": "🐱",
        "keywords": [
            "pet",
            "cat",
            "face"
        ],
        "index": 520
    },
    {
        "name": "cat2",
        "code": "🐈",
        "keywords": [
            "cat2",
            "cat",
            "pet"
        ],
        "index": 521
    },
    {
        "name": "black_cat",
        "code": "🐈‍⬛",
        "keywords": [
            "black_cat"
        ],
        "index": 522
    },
    {
        "name": "lion",
        "code": "🦁",
        "keywords": [
            "lion",
            "face",
            "leo",
            "zodiac"
        ],
        "index": 523
    },
    {
        "name": "tiger",
        "code": "🐯",
        "keywords": [
            "tiger",
            "face"
        ],
        "index": 524
    },
    {
        "name": "tiger2",
        "code": "🐅",
        "keywords": [
            "tiger2",
            "tiger"
        ],
        "index": 525
    },
    {
        "name": "leopard",
        "code": "🐆",
        "keywords": [
            "leopard"
        ],
        "index": 526
    },
    {
        "name": "horse",
        "code": "🐴",
        "keywords": [
            "horse",
            "face"
        ],
        "index": 527
    },
    {
        "name": "racehorse",
        "code": "🐎",
        "keywords": [
            "speed",
            "racehorse",
            "horse",
            "racing"
        ],
        "index": 528
    },
    {
        "name": "unicorn",
        "code": "🦄",
        "keywords": [
            "unicorn",
            "face"
        ],
        "index": 529
    },
    {
        "name": "zebra",
        "code": "🦓",
        "keywords": [
            "zebra"
        ],
        "index": 530
    },
    {
        "name": "deer",
        "code": "🦌",
        "keywords": [
            "deer"
        ],
        "index": 531
    },
    {
        "name": "bison",
        "code": "🦬",
        "keywords": [
            "bison"
        ],
        "index": 532
    },
    {
        "name": "cow",
        "code": "🐮",
        "keywords": [
            "cow",
            "face"
        ],
        "index": 533
    },
    {
        "name": "ox",
        "code": "🐂",
        "keywords": [
            "ox",
            "bull",
            "taurus",
            "zodiac"
        ],
        "index": 534
    },
    {
        "name": "water_buffalo",
        "code": "🐃",
        "keywords": [
            "water_buffalo",
            "buffalo",
            "water"
        ],
        "index": 535
    },
    {
        "name": "cow2",
        "code": "🐄",
        "keywords": [
            "cow2",
            "cow"
        ],
        "index": 536
    },
    {
        "name": "pig",
        "code": "🐷",
        "keywords": [
            "pig",
            "face"
        ],
        "index": 537
    },
    {
        "name": "pig2",
        "code": "🐖",
        "keywords": [
            "pig2",
            "pig",
            "sow"
        ],
        "index": 538
    },
    {
        "name": "boar",
        "code": "🐗",
        "keywords": [
            "boar",
            "pig"
        ],
        "index": 539
    },
    {
        "name": "pig_nose",
        "code": "🐽",
        "keywords": [
            "pig_nose",
            "face",
            "nose",
            "pig"
        ],
        "index": 540
    },
    {
        "name": "ram",
        "code": "🐏",
        "keywords": [
            "ram",
            "aries",
            "sheep",
            "zodiac"
        ],
        "index": 541
    },
    {
        "name": "sheep",
        "code": "🐑",
        "keywords": [
            "sheep",
            "ewe"
        ],
        "index": 542
    },
    {
        "name": "goat",
        "code": "🐐",
        "keywords": [
            "goat",
            "capricorn",
            "zodiac"
        ],
        "index": 543
    },
    {
        "name": "dromedary_camel",
        "code": "🐪",
        "keywords": [
            "desert",
            "dromedary_camel",
            "camel",
            "dromedary",
            "hump"
        ],
        "index": 544
    },
    {
        "name": "camel",
        "code": "🐫",
        "keywords": [
            "camel",
            "bactrian",
            "hump"
        ],
        "index": 545
    },
    {
        "name": "llama",
        "code": "🦙",
        "keywords": [
            "llama"
        ],
        "index": 546
    },
    {
        "name": "giraffe",
        "code": "🦒",
        "keywords": [
            "giraffe"
        ],
        "index": 547
    },
    {
        "name": "elephant",
        "code": "🐘",
        "keywords": [
            "elephant"
        ],
        "index": 548
    },
    {
        "name": "mammoth",
        "code": "🦣",
        "keywords": [
            "mammoth"
        ],
        "index": 549
    },
    {
        "name": "rhinoceros",
        "code": "🦏",
        "keywords": [
            "rhinoceros"
        ],
        "index": 550
    },
    {
        "name": "hippopotamus",
        "code": "🦛",
        "keywords": [
            "hippopotamus"
        ],
        "index": 551
    },
    {
        "name": "mouse",
        "code": "🐭",
        "keywords": [
            "mouse",
            "face"
        ],
        "index": 552
    },
    {
        "name": "mouse2",
        "code": "🐁",
        "keywords": [
            "mouse2",
            "mouse"
        ],
        "index": 553
    },
    {
        "name": "rat",
        "code": "🐀",
        "keywords": [
            "rat"
        ],
        "index": 554
    },
    {
        "name": "hamster",
        "code": "🐹",
        "keywords": [
            "pet",
            "hamster",
            "face"
        ],
        "index": 555
    },
    {
        "name": "rabbit",
        "code": "🐰",
        "keywords": [
            "bunny",
            "rabbit",
            "face",
            "pet"
        ],
        "index": 556
    },
    {
        "name": "rabbit2",
        "code": "🐇",
        "keywords": [
            "rabbit2",
            "bunny",
            "pet",
            "rabbit"
        ],
        "index": 557
    },
    {
        "name": "chipmunk",
        "code": "🐿️",
        "keywords": [
            "chipmunk"
        ],
        "index": 558
    },
    {
        "name": "beaver",
        "code": "🦫",
        "keywords": [
            "beaver"
        ],
        "index": 559
    },
    {
        "name": "hedgehog",
        "code": "🦔",
        "keywords": [
            "hedgehog"
        ],
        "index": 560
    },
    {
        "name": "bat",
        "code": "🦇",
        "keywords": [
            "bat",
            "vampire"
        ],
        "index": 561
    },
    {
        "name": "bear",
        "code": "🐻",
        "keywords": [
            "bear",
            "face"
        ],
        "index": 562
    },
    {
        "name": "polar_bear",
        "code": "🐻‍❄️",
        "keywords": [
            "polar_bear"
        ],
        "index": 563
    },
    {
        "name": "koala",
        "code": "🐨",
        "keywords": [
            "koala",
            "bear"
        ],
        "index": 564
    },
    {
        "name": "panda_face",
        "code": "🐼",
        "keywords": [
            "panda_face",
            "face",
            "panda"
        ],
        "index": 565
    },
    {
        "name": "sloth",
        "code": "🦥",
        "keywords": [
            "sloth"
        ],
        "index": 566
    },
    {
        "name": "otter",
        "code": "🦦",
        "keywords": [
            "otter"
        ],
        "index": 567
    },
    {
        "name": "skunk",
        "code": "🦨",
        "keywords": [
            "skunk"
        ],
        "index": 568
    },
    {
        "name": "kangaroo",
        "code": "🦘",
        "keywords": [
            "kangaroo"
        ],
        "index": 569
    },
    {
        "name": "badger",
        "code": "🦡",
        "keywords": [
            "badger"
        ],
        "index": 570
    },
    {
        "name": "feet",
        "code": "🐾",
        "keywords": [
            "feet",
            "paw_prints",
            "paw",
            "print"
        ],
        "index": 571
    },
    {
        "name": "turkey",
        "code": "🦃",
        "keywords": [
            "thanksgiving",
            "turkey"
        ],
        "index": 572
    },
    {
        "name": "chicken",
        "code": "🐔",
        "keywords": [
            "chicken"
        ],
        "index": 573
    },
    {
        "name": "rooster",
        "code": "🐓",
        "keywords": [
            "rooster"
        ],
        "index": 574
    },
    {
        "name": "hatching_chick",
        "code": "🐣",
        "keywords": [
            "hatching_chick",
            "baby",
            "chick",
            "hatching"
        ],
        "index": 575
    },
    {
        "name": "baby_chick",
        "code": "🐤",
        "keywords": [
            "baby_chick",
            "baby",
            "chick"
        ],
        "index": 576
    },
    {
        "name": "hatched_chick",
        "code": "🐥",
        "keywords": [
            "hatched_chick",
            "baby",
            "chick"
        ],
        "index": 577
    },
    {
        "name": "bird",
        "code": "🐦",
        "keywords": [
            "bird"
        ],
        "index": 578
    },
    {
        "name": "penguin",
        "code": "🐧",
        "keywords": [
            "penguin"
        ],
        "index": 579
    },
    {
        "name": "dove",
        "code": "🕊️",
        "keywords": [
            "peace",
            "dove"
        ],
        "index": 580
    },
    {
        "name": "eagle",
        "code": "🦅",
        "keywords": [
            "eagle",
            "bird"
        ],
        "index": 581
    },
    {
        "name": "duck",
        "code": "🦆",
        "keywords": [
            "duck",
            "bird"
        ],
        "index": 582
    },
    {
        "name": "swan",
        "code": "🦢",
        "keywords": [
            "swan"
        ],
        "index": 583
    },
    {
        "name": "owl",
        "code": "🦉",
        "keywords": [
            "owl",
            "bird",
            "wise"
        ],
        "index": 584
    },
    {
        "name": "dodo",
        "code": "🦤",
        "keywords": [
            "dodo"
        ],
        "index": 585
    },
    {
        "name": "feather",
        "code": "🪶",
        "keywords": [
            "feather"
        ],
        "index": 586
    },
    {
        "name": "flamingo",
        "code": "🦩",
        "keywords": [
            "flamingo"
        ],
        "index": 587
    },
    {
        "name": "peacock",
        "code": "🦚",
        "keywords": [
            "peacock"
        ],
        "index": 588
    },
    {
        "name": "parrot",
        "code": "🦜",
        "keywords": [
            "parrot"
        ],
        "index": 589
    },
    {
        "name": "frog",
        "code": "🐸",
        "keywords": [
            "frog",
            "face"
        ],
        "index": 590
    },
    {
        "name": "crocodile",
        "code": "🐊",
        "keywords": [
            "crocodile"
        ],
        "index": 591
    },
    {
        "name": "turtle",
        "code": "🐢",
        "keywords": [
            "slow",
            "turtle"
        ],
        "index": 592
    },
    {
        "name": "lizard",
        "code": "🦎",
        "keywords": [
            "lizard",
            "reptile"
        ],
        "index": 593
    },
    {
        "name": "snake",
        "code": "🐍",
        "keywords": [
            "snake",
            "bearer",
            "ophiuchus",
            "serpent",
            "zodiac"
        ],
        "index": 594
    },
    {
        "name": "dragon_face",
        "code": "🐲",
        "keywords": [
            "dragon_face",
            "dragon",
            "face",
            "fairy tale"
        ],
        "index": 595
    },
    {
        "name": "dragon",
        "code": "🐉",
        "keywords": [
            "dragon",
            "fairy tale"
        ],
        "index": 596
    },
    {
        "name": "sauropod",
        "code": "🦕",
        "keywords": [
            "dinosaur",
            "sauropod"
        ],
        "index": 597
    },
    {
        "name": "t-rex",
        "code": "🦖",
        "keywords": [
            "dinosaur",
            "t-rex"
        ],
        "index": 598
    },
    {
        "name": "whale",
        "code": "🐳",
        "keywords": [
            "sea",
            "whale",
            "face",
            "spouting"
        ],
        "index": 599
    },
    {
        "name": "whale2",
        "code": "🐋",
        "keywords": [
            "whale2",
            "whale"
        ],
        "index": 600
    },
    {
        "name": "dolphin",
        "code": "🐬",
        "keywords": [
            "dolphin",
            "flipper"
        ],
        "index": 601
    },
    {
        "name": "seal",
        "code": "🦭",
        "keywords": [
            "seal"
        ],
        "index": 602
    },
    {
        "name": "fish",
        "code": "🐟",
        "keywords": [
            "fish",
            "pisces",
            "zodiac"
        ],
        "index": 603
    },
    {
        "name": "tropical_fish",
        "code": "🐠",
        "keywords": [
            "tropical_fish",
            "fish",
            "tropical"
        ],
        "index": 604
    },
    {
        "name": "blowfish",
        "code": "🐡",
        "keywords": [
            "blowfish",
            "fish"
        ],
        "index": 605
    },
    {
        "name": "shark",
        "code": "🦈",
        "keywords": [
            "shark",
            "fish"
        ],
        "index": 606
    },
    {
        "name": "octopus",
        "code": "🐙",
        "keywords": [
            "octopus"
        ],
        "index": 607
    },
    {
        "name": "shell",
        "code": "🐚",
        "keywords": [
            "sea",
            "beach",
            "shell",
            "spiral"
        ],
        "index": 608
    },
    {
        "name": "snail",
        "code": "🐌",
        "keywords": [
            "slow",
            "snail"
        ],
        "index": 609
    },
    {
        "name": "butterfly",
        "code": "🦋",
        "keywords": [
            "butterfly",
            "insect",
            "pretty"
        ],
        "index": 610
    },
    {
        "name": "bug",
        "code": "🐛",
        "keywords": [
            "bug",
            "insect"
        ],
        "index": 611
    },
    {
        "name": "ant",
        "code": "🐜",
        "keywords": [
            "ant",
            "insect"
        ],
        "index": 612
    },
    {
        "name": "bee",
        "code": "🐝",
        "keywords": [
            "bee",
            "honeybee",
            "insect"
        ],
        "index": 613
    },
    {
        "name": "beetle",
        "code": "🪲",
        "keywords": [
            "beetle"
        ],
        "index": 614
    },
    {
        "name": "lady_beetle",
        "code": "🐞",
        "keywords": [
            "bug",
            "lady_beetle",
            "beetle",
            "insect",
            "lady beetle",
            "ladybird",
            "ladybug"
        ],
        "index": 615
    },
    {
        "name": "cricket",
        "code": "🦗",
        "keywords": [
            "cricket"
        ],
        "index": 616
    },
    {
        "name": "cockroach",
        "code": "🪳",
        "keywords": [
            "cockroach"
        ],
        "index": 617
    },
    {
        "name": "spider",
        "code": "🕷️",
        "keywords": [
            "spider"
        ],
        "index": 618
    },
    {
        "name": "spider_web",
        "code": "🕸️",
        "keywords": [
            "spider_web"
        ],
        "index": 619
    },
    {
        "name": "scorpion",
        "code": "🦂",
        "keywords": [
            "scorpion",
            "scorpio",
            "scorpius",
            "zodiac"
        ],
        "index": 620
    },
    {
        "name": "mosquito",
        "code": "🦟",
        "keywords": [
            "mosquito"
        ],
        "index": 621
    },
    {
        "name": "fly",
        "code": "🪰",
        "keywords": [
            "fly"
        ],
        "index": 622
    },
    {
        "name": "worm",
        "code": "🪱",
        "keywords": [
            "worm"
        ],
        "index": 623
    },
    {
        "name": "microbe",
        "code": "🦠",
        "keywords": [
            "germ",
            "microbe"
        ],
        "index": 624
    },
    {
        "name": "bouquet",
        "code": "💐",
        "keywords": [
            "flowers",
            "bouquet",
            "flower",
            "plant",
            "romance"
        ],
        "index": 625
    },
    {
        "name": "cherry_blossom",
        "code": "🌸",
        "keywords": [
            "flower",
            "spring",
            "cherry_blossom",
            "blossom",
            "cherry",
            "plant"
        ],
        "index": 626
    },
    {
        "name": "white_flower",
        "code": "💮",
        "keywords": [
            "white_flower",
            "flower"
        ],
        "index": 627
    },
    {
        "name": "rosette",
        "code": "🏵️",
        "keywords": [
            "rosette"
        ],
        "index": 628
    },
    {
        "name": "rose",
        "code": "🌹",
        "keywords": [
            "flower",
            "rose",
            "plant"
        ],
        "index": 629
    },
    {
        "name": "wilted_flower",
        "code": "🥀",
        "keywords": [
            "wilted_flower",
            "flower",
            "wilted"
        ],
        "index": 630
    },
    {
        "name": "hibiscus",
        "code": "🌺",
        "keywords": [
            "hibiscus",
            "flower",
            "plant"
        ],
        "index": 631
    },
    {
        "name": "sunflower",
        "code": "🌻",
        "keywords": [
            "sunflower",
            "flower",
            "plant",
            "sun"
        ],
        "index": 632
    },
    {
        "name": "blossom",
        "code": "🌼",
        "keywords": [
            "blossom",
            "flower",
            "plant"
        ],
        "index": 633
    },
    {
        "name": "tulip",
        "code": "🌷",
        "keywords": [
            "flower",
            "tulip",
            "plant"
        ],
        "index": 634
    },
    {
        "name": "seedling",
        "code": "🌱",
        "keywords": [
            "plant",
            "seedling",
            "young"
        ],
        "index": 635
    },
    {
        "name": "potted_plant",
        "code": "🪴",
        "keywords": [
            "potted_plant"
        ],
        "index": 636
    },
    {
        "name": "evergreen_tree",
        "code": "🌲",
        "keywords": [
            "wood",
            "evergreen_tree",
            "evergreen",
            "plant",
            "tree"
        ],
        "index": 637
    },
    {
        "name": "deciduous_tree",
        "code": "🌳",
        "keywords": [
            "wood",
            "deciduous_tree",
            "deciduous",
            "plant",
            "shedding",
            "tree"
        ],
        "index": 638
    },
    {
        "name": "palm_tree",
        "code": "🌴",
        "keywords": [
            "palm_tree",
            "palm",
            "plant",
            "tree"
        ],
        "index": 639
    },
    {
        "name": "cactus",
        "code": "🌵",
        "keywords": [
            "cactus",
            "plant"
        ],
        "index": 640
    },
    {
        "name": "ear_of_rice",
        "code": "🌾",
        "keywords": [
            "ear_of_rice",
            "ear",
            "plant",
            "rice"
        ],
        "index": 641
    },
    {
        "name": "herb",
        "code": "🌿",
        "keywords": [
            "herb",
            "leaf",
            "plant"
        ],
        "index": 642
    },
    {
        "name": "shamrock",
        "code": "☘️",
        "keywords": [
            "shamrock",
            "plant"
        ],
        "index": 643
    },
    {
        "name": "four_leaf_clover",
        "code": "🍀",
        "keywords": [
            "luck",
            "four_leaf_clover",
            "4",
            "clover",
            "four",
            "leaf",
            "plant"
        ],
        "index": 644
    },
    {
        "name": "maple_leaf",
        "code": "🍁",
        "keywords": [
            "canada",
            "maple_leaf",
            "falling",
            "leaf",
            "maple",
            "plant"
        ],
        "index": 645
    },
    {
        "name": "fallen_leaf",
        "code": "🍂",
        "keywords": [
            "autumn",
            "fallen_leaf",
            "falling",
            "leaf",
            "plant"
        ],
        "index": 646
    },
    {
        "name": "leaves",
        "code": "🍃",
        "keywords": [
            "leaf",
            "leaves",
            "blow",
            "flutter",
            "plant",
            "wind"
        ],
        "index": 647
    },
    {
        "code": "foodAndDrink",
        "header": true,
        "index": 648
    },
    {
        "name": "grapes",
        "code": "🍇",
        "keywords": [
            "grapes",
            "fruit",
            "grape",
            "plant"
        ],
        "index": 649
    },
    {
        "name": "melon",
        "code": "🍈",
        "keywords": [
            "melon",
            "fruit",
            "plant"
        ],
        "index": 650
    },
    {
        "name": "watermelon",
        "code": "🍉",
        "keywords": [
            "watermelon",
            "fruit",
            "plant"
        ],
        "index": 651
    },
    {
        "name": "tangerine",
        "code": "🍊",
        "keywords": [
            "tangerine",
            "orange",
            "mandarin",
            "fruit",
            "plant"
        ],
        "index": 652
    },
    {
        "name": "lemon",
        "code": "🍋",
        "keywords": [
            "lemon",
            "citrus",
            "fruit",
            "plant"
        ],
        "index": 653
    },
    {
        "name": "banana",
        "code": "🍌",
        "keywords": [
            "fruit",
            "banana",
            "plant"
        ],
        "index": 654
    },
    {
        "name": "pineapple",
        "code": "🍍",
        "keywords": [
            "pineapple",
            "fruit",
            "plant"
        ],
        "index": 655
    },
    {
        "name": "mango",
        "code": "🥭",
        "keywords": [
            "mango"
        ],
        "index": 656
    },
    {
        "name": "apple",
        "code": "🍎",
        "keywords": [
            "apple",
            "fruit",
            "plant",
            "red"
        ],
        "index": 657
    },
    {
        "name": "green_apple",
        "code": "🍏",
        "keywords": [
            "fruit",
            "green_apple",
            "apple",
            "green",
            "plant"
        ],
        "index": 658
    },
    {
        "name": "pear",
        "code": "🍐",
        "keywords": [
            "pear",
            "fruit",
            "plant"
        ],
        "index": 659
    },
    {
        "name": "peach",
        "code": "🍑",
        "keywords": [
            "peach",
            "fruit",
            "plant"
        ],
        "index": 660
    },
    {
        "name": "cherries",
        "code": "🍒",
        "keywords": [
            "fruit",
            "cherries",
            "cherry",
            "plant"
        ],
        "index": 661
    },
    {
        "name": "strawberry",
        "code": "🍓",
        "keywords": [
            "fruit",
            "strawberry",
            "berry",
            "plant"
        ],
        "index": 662
    },
    {
        "name": "blueberries",
        "code": "🫐",
        "keywords": [
            "blueberries"
        ],
        "index": 663
    },
    {
        "name": "kiwi_fruit",
        "code": "🥝",
        "keywords": [
            "kiwi_fruit",
            "fruit",
            "kiwi"
        ],
        "index": 664
    },
    {
        "name": "tomato",
        "code": "🍅",
        "keywords": [
            "tomato",
            "plant",
            "vegetable"
        ],
        "index": 665
    },
    {
        "name": "olive",
        "code": "🫒",
        "keywords": [
            "olive"
        ],
        "index": 666
    },
    {
        "name": "coconut",
        "code": "🥥",
        "keywords": [
            "coconut"
        ],
        "index": 667
    },
    {
        "name": "avocado",
        "code": "🥑",
        "keywords": [
            "avocado",
            "fruit"
        ],
        "index": 668
    },
    {
        "name": "eggplant",
        "code": "🍆",
        "keywords": [
            "aubergine",
            "eggplant",
            "plant",
            "vegetable"
        ],
        "index": 669
    },
    {
        "name": "potato",
        "code": "🥔",
        "keywords": [
            "potato",
            "vegetable"
        ],
        "index": 670
    },
    {
        "name": "carrot",
        "code": "🥕",
        "keywords": [
            "carrot",
            "vegetable"
        ],
        "index": 671
    },
    {
        "name": "corn",
        "code": "🌽",
        "keywords": [
            "corn",
            "ear",
            "maize",
            "maze",
            "plant"
        ],
        "index": 672
    },
    {
        "name": "hot_pepper",
        "code": "🌶️",
        "keywords": [
            "spicy",
            "hot_pepper"
        ],
        "index": 673
    },
    {
        "name": "bell_pepper",
        "code": "🫑",
        "keywords": [
            "bell_pepper"
        ],
        "index": 674
    },
    {
        "name": "cucumber",
        "code": "🥒",
        "keywords": [
            "cucumber",
            "pickle",
            "vegetable"
        ],
        "index": 675
    },
    {
        "name": "leafy_green",
        "code": "🥬",
        "keywords": [
            "leafy_green"
        ],
        "index": 676
    },
    {
        "name": "broccoli",
        "code": "🥦",
        "keywords": [
            "broccoli"
        ],
        "index": 677
    },
    {
        "name": "garlic",
        "code": "🧄",
        "keywords": [
            "garlic"
        ],
        "index": 678
    },
    {
        "name": "onion",
        "code": "🧅",
        "keywords": [
            "onion"
        ],
        "index": 679
    },
    {
        "name": "mushroom",
        "code": "🍄",
        "keywords": [
            "mushroom",
            "plant"
        ],
        "index": 680
    },
    {
        "name": "peanuts",
        "code": "🥜",
        "keywords": [
            "peanuts",
            "nut",
            "peanut",
            "vegetable"
        ],
        "index": 681
    },
    {
        "name": "chestnut",
        "code": "🌰",
        "keywords": [
            "chestnut",
            "plant"
        ],
        "index": 682
    },
    {
        "name": "bread",
        "code": "🍞",
        "keywords": [
            "toast",
            "bread",
            "loaf"
        ],
        "index": 683
    },
    {
        "name": "croissant",
        "code": "🥐",
        "keywords": [
            "croissant",
            "bread",
            "crescent roll",
            "french"
        ],
        "index": 684
    },
    {
        "name": "baguette_bread",
        "code": "🥖",
        "keywords": [
            "baguette_bread",
            "baguette",
            "bread",
            "french"
        ],
        "index": 685
    },
    {
        "name": "flatbread",
        "code": "🫓",
        "keywords": [
            "flatbread"
        ],
        "index": 686
    },
    {
        "name": "pretzel",
        "code": "🥨",
        "keywords": [
            "pretzel"
        ],
        "index": 687
    },
    {
        "name": "bagel",
        "code": "🥯",
        "keywords": [
            "bagel"
        ],
        "index": 688
    },
    {
        "name": "pancakes",
        "code": "🥞",
        "keywords": [
            "pancakes",
            "crêpe",
            "hotcake",
            "pancake"
        ],
        "index": 689
    },
    {
        "name": "waffle",
        "code": "🧇",
        "keywords": [
            "waffle"
        ],
        "index": 690
    },
    {
        "name": "cheese",
        "code": "🧀",
        "keywords": [
            "cheese"
        ],
        "index": 691
    },
    {
        "name": "meat_on_bone",
        "code": "🍖",
        "keywords": [
            "meat_on_bone",
            "bone",
            "meat"
        ],
        "index": 692
    },
    {
        "name": "poultry_leg",
        "code": "🍗",
        "keywords": [
            "meat",
            "chicken",
            "poultry_leg",
            "bone",
            "leg",
            "poultry"
        ],
        "index": 693
    },
    {
        "name": "cut_of_meat",
        "code": "🥩",
        "keywords": [
            "cut_of_meat"
        ],
        "index": 694
    },
    {
        "name": "bacon",
        "code": "🥓",
        "keywords": [
            "bacon",
            "meat"
        ],
        "index": 695
    },
    {
        "name": "hamburger",
        "code": "🍔",
        "keywords": [
            "burger",
            "hamburger"
        ],
        "index": 696
    },
    {
        "name": "fries",
        "code": "🍟",
        "keywords": [
            "fries",
            "french"
        ],
        "index": 697
    },
    {
        "name": "pizza",
        "code": "🍕",
        "keywords": [
            "pizza",
            "cheese",
            "slice"
        ],
        "index": 698
    },
    {
        "name": "hotdog",
        "code": "🌭",
        "keywords": [
            "hotdog",
            "frankfurter",
            "hot dog",
            "sausage"
        ],
        "index": 699
    },
    {
        "name": "sandwich",
        "code": "🥪",
        "keywords": [
            "sandwich"
        ],
        "index": 700
    },
    {
        "name": "taco",
        "code": "🌮",
        "keywords": [
            "taco",
            "mexican"
        ],
        "index": 701
    },
    {
        "name": "burrito",
        "code": "🌯",
        "keywords": [
            "burrito",
            "mexican"
        ],
        "index": 702
    },
    {
        "name": "tamale",
        "code": "🫔",
        "keywords": [
            "tamale"
        ],
        "index": 703
    },
    {
        "name": "stuffed_flatbread",
        "code": "🥙",
        "keywords": [
            "stuffed_flatbread",
            "falafel",
            "flatbread",
            "gyro",
            "kebab",
            "stuffed"
        ],
        "index": 704
    },
    {
        "name": "falafel",
        "code": "🧆",
        "keywords": [
            "falafel"
        ],
        "index": 705
    },
    {
        "name": "egg",
        "code": "🥚",
        "keywords": [
            "egg"
        ],
        "index": 706
    },
    {
        "name": "fried_egg",
        "code": "🍳",
        "keywords": [
            "breakfast",
            "fried_egg",
            "cooking",
            "egg",
            "frying",
            "pan"
        ],
        "index": 707
    },
    {
        "name": "shallow_pan_of_food",
        "code": "🥘",
        "keywords": [
            "paella",
            "curry",
            "shallow_pan_of_food",
            "casserole",
            "pan",
            "shallow"
        ],
        "index": 708
    },
    {
        "name": "stew",
        "code": "🍲",
        "keywords": [
            "stew",
            "pot"
        ],
        "index": 709
    },
    {
        "name": "fondue",
        "code": "🫕",
        "keywords": [
            "fondue"
        ],
        "index": 710
    },
    {
        "name": "bowl_with_spoon",
        "code": "🥣",
        "keywords": [
            "bowl_with_spoon"
        ],
        "index": 711
    },
    {
        "name": "green_salad",
        "code": "🥗",
        "keywords": [
            "green_salad",
            "green",
            "salad"
        ],
        "index": 712
    },
    {
        "name": "popcorn",
        "code": "🍿",
        "keywords": [
            "popcorn"
        ],
        "index": 713
    },
    {
        "name": "butter",
        "code": "🧈",
        "keywords": [
            "butter"
        ],
        "index": 714
    },
    {
        "name": "salt",
        "code": "🧂",
        "keywords": [
            "salt"
        ],
        "index": 715
    },
    {
        "name": "canned_food",
        "code": "🥫",
        "keywords": [
            "canned_food"
        ],
        "index": 716
    },
    {
        "name": "bento",
        "code": "🍱",
        "keywords": [
            "bento",
            "box"
        ],
        "index": 717
    },
    {
        "name": "rice_cracker",
        "code": "🍘",
        "keywords": [
            "rice_cracker",
            "cracker",
            "rice"
        ],
        "index": 718
    },
    {
        "name": "rice_ball",
        "code": "🍙",
        "keywords": [
            "rice_ball",
            "ball",
            "japanese",
            "rice"
        ],
        "index": 719
    },
    {
        "name": "rice",
        "code": "🍚",
        "keywords": [
            "rice",
            "cooked"
        ],
        "index": 720
    },
    {
        "name": "curry",
        "code": "🍛",
        "keywords": [
            "curry",
            "rice"
        ],
        "index": 721
    },
    {
        "name": "ramen",
        "code": "🍜",
        "keywords": [
            "noodle",
            "ramen",
            "bowl",
            "steaming"
        ],
        "index": 722
    },
    {
        "name": "spaghetti",
        "code": "🍝",
        "keywords": [
            "pasta",
            "spaghetti"
        ],
        "index": 723
    },
    {
        "name": "sweet_potato",
        "code": "🍠",
        "keywords": [
            "sweet_potato",
            "potato",
            "roasted",
            "sweet"
        ],
        "index": 724
    },
    {
        "name": "oden",
        "code": "🍢",
        "keywords": [
            "oden",
            "kebab",
            "seafood",
            "skewer",
            "stick"
        ],
        "index": 725
    },
    {
        "name": "sushi",
        "code": "🍣",
        "keywords": [
            "sushi"
        ],
        "index": 726
    },
    {
        "name": "fried_shrimp",
        "code": "🍤",
        "keywords": [
            "tempura",
            "fried_shrimp",
            "fried",
            "prawn",
            "shrimp"
        ],
        "index": 727
    },
    {
        "name": "fish_cake",
        "code": "🍥",
        "keywords": [
            "fish_cake",
            "cake",
            "fish",
            "pastry",
            "swirl"
        ],
        "index": 728
    },
    {
        "name": "moon_cake",
        "code": "🥮",
        "keywords": [
            "moon_cake"
        ],
        "index": 729
    },
    {
        "name": "dango",
        "code": "🍡",
        "keywords": [
            "dango",
            "dessert",
            "japanese",
            "skewer",
            "stick",
            "sweet"
        ],
        "index": 730
    },
    {
        "name": "dumpling",
        "code": "🥟",
        "keywords": [
            "dumpling"
        ],
        "index": 731
    },
    {
        "name": "fortune_cookie",
        "code": "🥠",
        "keywords": [
            "fortune_cookie"
        ],
        "index": 732
    },
    {
        "name": "takeout_box",
        "code": "🥡",
        "keywords": [
            "takeout_box"
        ],
        "index": 733
    },
    {
        "name": "crab",
        "code": "🦀",
        "keywords": [
            "crab",
            "cancer",
            "zodiac"
        ],
        "index": 734
    },
    {
        "name": "lobster",
        "code": "🦞",
        "keywords": [
            "lobster"
        ],
        "index": 735
    },
    {
        "name": "shrimp",
        "code": "🦐",
        "keywords": [
            "shrimp",
            "shellfish",
            "small"
        ],
        "index": 736
    },
    {
        "name": "squid",
        "code": "🦑",
        "keywords": [
            "squid",
            "molusc"
        ],
        "index": 737
    },
    {
        "name": "oyster",
        "code": "🦪",
        "keywords": [
            "oyster"
        ],
        "index": 738
    },
    {
        "name": "icecream",
        "code": "🍦",
        "keywords": [
            "icecream",
            "cream",
            "dessert",
            "ice",
            "soft",
            "sweet"
        ],
        "index": 739
    },
    {
        "name": "shaved_ice",
        "code": "🍧",
        "keywords": [
            "shaved_ice",
            "dessert",
            "ice",
            "shaved",
            "sweet"
        ],
        "index": 740
    },
    {
        "name": "ice_cream",
        "code": "🍨",
        "keywords": [
            "ice_cream",
            "cream",
            "dessert",
            "ice",
            "sweet"
        ],
        "index": 741
    },
    {
        "name": "doughnut",
        "code": "🍩",
        "keywords": [
            "doughnut",
            "dessert",
            "donut",
            "sweet"
        ],
        "index": 742
    },
    {
        "name": "cookie",
        "code": "🍪",
        "keywords": [
            "cookie",
            "dessert",
            "sweet"
        ],
        "index": 743
    },
    {
        "name": "birthday",
        "code": "🎂",
        "keywords": [
            "party",
            "birthday",
            "cake",
            "celebration",
            "dessert",
            "pastry",
            "sweet"
        ],
        "index": 744
    },
    {
        "name": "cake",
        "code": "🍰",
        "keywords": [
            "dessert",
            "cake",
            "pastry",
            "shortcake",
            "slice",
            "sweet"
        ],
        "index": 745
    },
    {
        "name": "cupcake",
        "code": "🧁",
        "keywords": [
            "cupcake"
        ],
        "index": 746
    },
    {
        "name": "pie",
        "code": "🥧",
        "keywords": [
            "pie"
        ],
        "index": 747
    },
    {
        "name": "chocolate_bar",
        "code": "🍫",
        "keywords": [
            "chocolate_bar",
            "bar",
            "chocolate",
            "dessert",
            "sweet"
        ],
        "index": 748
    },
    {
        "name": "candy",
        "code": "🍬",
        "keywords": [
            "sweet",
            "candy",
            "dessert"
        ],
        "index": 749
    },
    {
        "name": "lollipop",
        "code": "🍭",
        "keywords": [
            "lollipop",
            "candy",
            "dessert",
            "sweet"
        ],
        "index": 750
    },
    {
        "name": "custard",
        "code": "🍮",
        "keywords": [
            "custard",
            "dessert",
            "pudding",
            "sweet"
        ],
        "index": 751
    },
    {
        "name": "honey_pot",
        "code": "🍯",
        "keywords": [
            "honey_pot",
            "honey",
            "honeypot",
            "pot",
            "sweet"
        ],
        "index": 752
    },
    {
        "name": "baby_bottle",
        "code": "🍼",
        "keywords": [
            "milk",
            "baby_bottle",
            "baby",
            "bottle",
            "drink"
        ],
        "index": 753
    },
    {
        "name": "milk_glass",
        "code": "🥛",
        "keywords": [
            "milk_glass",
            "drink",
            "glass",
            "milk"
        ],
        "index": 754
    },
    {
        "name": "coffee",
        "code": "☕",
        "keywords": [
            "cafe",
            "espresso",
            "coffee",
            "beverage",
            "drink",
            "hot",
            "steaming",
            "tea"
        ],
        "index": 755
    },
    {
        "name": "teapot",
        "code": "🫖",
        "keywords": [
            "teapot"
        ],
        "index": 756
    },
    {
        "name": "tea",
        "code": "🍵",
        "keywords": [
            "green",
            "breakfast",
            "tea",
            "beverage",
            "cup",
            "drink",
            "teacup"
        ],
        "index": 757
    },
    {
        "name": "sake",
        "code": "🍶",
        "keywords": [
            "sake",
            "bar",
            "beverage",
            "bottle",
            "cup",
            "drink"
        ],
        "index": 758
    },
    {
        "name": "champagne",
        "code": "🍾",
        "keywords": [
            "bottle",
            "bubbly",
            "celebration",
            "champagne",
            "bar",
            "cork",
            "drink",
            "popping"
        ],
        "index": 759
    },
    {
        "name": "wine_glass",
        "code": "🍷",
        "keywords": [
            "wine_glass",
            "bar",
            "beverage",
            "drink",
            "glass",
            "wine"
        ],
        "index": 760
    },
    {
        "name": "cocktail",
        "code": "🍸",
        "keywords": [
            "drink",
            "cocktail",
            "bar",
            "glass"
        ],
        "index": 761
    },
    {
        "name": "tropical_drink",
        "code": "🍹",
        "keywords": [
            "summer",
            "vacation",
            "tropical_drink",
            "bar",
            "drink",
            "tropical"
        ],
        "index": 762
    },
    {
        "name": "beer",
        "code": "🍺",
        "keywords": [
            "drink",
            "beer",
            "bar",
            "mug"
        ],
        "index": 763
    },
    {
        "name": "beers",
        "code": "🍻",
        "keywords": [
            "drinks",
            "beers",
            "bar",
            "beer",
            "clink",
            "drink",
            "mug"
        ],
        "index": 764
    },
    {
        "name": "clinking_glasses",
        "code": "🥂",
        "keywords": [
            "cheers",
            "toast",
            "clinking_glasses",
            "celebrate",
            "clink",
            "drink",
            "glass"
        ],
        "index": 765
    },
    {
        "name": "tumbler_glass",
        "code": "🥃",
        "keywords": [
            "whisky",
            "tumbler_glass",
            "glass",
            "liquor",
            "shot",
            "tumbler"
        ],
        "index": 766
    },
    {
        "name": "cup_with_straw",
        "code": "🥤",
        "keywords": [
            "cup_with_straw"
        ],
        "index": 767
    },
    {
        "name": "bubble_tea",
        "code": "🧋",
        "keywords": [
            "bubble_tea"
        ],
        "index": 768
    },
    {
        "name": "beverage_box",
        "code": "🧃",
        "keywords": [
            "beverage_box"
        ],
        "index": 769
    },
    {
        "name": "mate",
        "code": "🧉",
        "keywords": [
            "mate"
        ],
        "index": 770
    },
    {
        "name": "ice_cube",
        "code": "🧊",
        "keywords": [
            "ice_cube"
        ],
        "index": 771
    },
    {
        "name": "chopsticks",
        "code": "🥢",
        "keywords": [
            "chopsticks"
        ],
        "index": 772
    },
    {
        "name": "plate_with_cutlery",
        "code": "🍽️",
        "keywords": [
            "dining",
            "dinner",
            "plate_with_cutlery"
        ],
        "index": 773
    },
    {
        "name": "fork_and_knife",
        "code": "🍴",
        "keywords": [
            "cutlery",
            "fork_and_knife",
            "cooking",
            "fork",
            "knife"
        ],
        "index": 774
    },
    {
        "name": "spoon",
        "code": "🥄",
        "keywords": [
            "spoon",
            "tableware"
        ],
        "index": 775
    },
    {
        "name": "hocho",
        "code": "🔪",
        "keywords": [
            "cut",
            "chop",
            "hocho",
            "knife",
            "cooking",
            "tool",
            "weapon"
        ],
        "index": 776
    },
    {
        "name": "amphora",
        "code": "🏺",
        "keywords": [
            "amphora",
            "aquarius",
            "cooking",
            "drink",
            "jug",
            "tool",
            "weapon",
            "zodiac"
        ],
        "index": 777
    },
    {
        "code": "travelAndPlaces",
        "header": true,
        "index": 778
    },
    {
        "name": "earth_africa",
        "code": "🌍",
        "keywords": [
            "globe",
            "world",
            "international",
            "earth_africa",
            "africa",
            "earth",
            "europe"
        ],
        "index": 779
    },
    {
        "name": "earth_americas",
        "code": "🌎",
        "keywords": [
            "globe",
            "world",
            "international",
            "earth_americas",
            "americas",
            "earth"
        ],
        "index": 780
    },
    {
        "name": "earth_asia",
        "code": "🌏",
        "keywords": [
            "globe",
            "world",
            "international",
            "earth_asia",
            "asia",
            "australia",
            "earth"
        ],
        "index": 781
    },
    {
        "name": "globe_with_meridians",
        "code": "🌐",
        "keywords": [
            "world",
            "global",
            "international",
            "globe_with_meridians",
            "earth",
            "globe",
            "meridians"
        ],
        "index": 782
    },
    {
        "name": "world_map",
        "code": "🗺️",
        "keywords": [
            "travel",
            "world_map"
        ],
        "index": 783
    },
    {
        "name": "japan",
        "code": "🗾",
        "keywords": [
            "japan",
            "map"
        ],
        "index": 784
    },
    {
        "name": "compass",
        "code": "🧭",
        "keywords": [
            "compass"
        ],
        "index": 785
    },
    {
        "name": "mountain_snow",
        "code": "🏔️",
        "keywords": [
            "mountain_snow"
        ],
        "index": 786
    },
    {
        "name": "mountain",
        "code": "⛰️",
        "keywords": [
            "mountain"
        ],
        "index": 787
    },
    {
        "name": "volcano",
        "code": "🌋",
        "keywords": [
            "volcano",
            "eruption",
            "mountain",
            "weather"
        ],
        "index": 788
    },
    {
        "name": "mount_fuji",
        "code": "🗻",
        "keywords": [
            "mount_fuji",
            "fuji",
            "mountain"
        ],
        "index": 789
    },
    {
        "name": "camping",
        "code": "🏕️",
        "keywords": [
            "camping"
        ],
        "index": 790
    },
    {
        "name": "beach_umbrella",
        "code": "🏖️",
        "keywords": [
            "beach_umbrella"
        ],
        "index": 791
    },
    {
        "name": "desert",
        "code": "🏜️",
        "keywords": [
            "desert"
        ],
        "index": 792
    },
    {
        "name": "desert_island",
        "code": "🏝️",
        "keywords": [
            "desert_island"
        ],
        "index": 793
    },
    {
        "name": "national_park",
        "code": "🏞️",
        "keywords": [
            "national_park"
        ],
        "index": 794
    },
    {
        "name": "stadium",
        "code": "🏟️",
        "keywords": [
            "stadium"
        ],
        "index": 795
    },
    {
        "name": "classical_building",
        "code": "🏛️",
        "keywords": [
            "classical_building"
        ],
        "index": 796
    },
    {
        "name": "building_construction",
        "code": "🏗️",
        "keywords": [
            "building_construction"
        ],
        "index": 797
    },
    {
        "name": "bricks",
        "code": "🧱",
        "keywords": [
            "bricks"
        ],
        "index": 798
    },
    {
        "name": "rock",
        "code": "🪨",
        "keywords": [
            "rock"
        ],
        "index": 799
    },
    {
        "name": "wood",
        "code": "🪵",
        "keywords": [
            "wood"
        ],
        "index": 800
    },
    {
        "name": "hut",
        "code": "🛖",
        "keywords": [
            "hut"
        ],
        "index": 801
    },
    {
        "name": "houses",
        "code": "🏘️",
        "keywords": [
            "houses"
        ],
        "index": 802
    },
    {
        "name": "derelict_house",
        "code": "🏚️",
        "keywords": [
            "derelict_house"
        ],
        "index": 803
    },
    {
        "name": "house",
        "code": "🏠",
        "keywords": [
            "house",
            "building",
            "home"
        ],
        "index": 804
    },
    {
        "name": "house_with_garden",
        "code": "🏡",
        "keywords": [
            "house_with_garden",
            "building",
            "garden",
            "home",
            "house"
        ],
        "index": 805
    },
    {
        "name": "office",
        "code": "🏢",
        "keywords": [
            "office",
            "building"
        ],
        "index": 806
    },
    {
        "name": "post_office",
        "code": "🏣",
        "keywords": [
            "post_office",
            "building",
            "japanese",
            "post"
        ],
        "index": 807
    },
    {
        "name": "european_post_office",
        "code": "🏤",
        "keywords": [
            "european_post_office",
            "building",
            "european",
            "post"
        ],
        "index": 808
    },
    {
        "name": "hospital",
        "code": "🏥",
        "keywords": [
            "hospital",
            "building",
            "doctor",
            "medicine"
        ],
        "index": 809
    },
    {
        "name": "bank",
        "code": "🏦",
        "keywords": [
            "bank",
            "building"
        ],
        "index": 810
    },
    {
        "name": "hotel",
        "code": "🏨",
        "keywords": [
            "hotel",
            "building"
        ],
        "index": 811
    },
    {
        "name": "love_hotel",
        "code": "🏩",
        "keywords": [
            "love_hotel",
            "building",
            "hotel",
            "love"
        ],
        "index": 812
    },
    {
        "name": "convenience_store",
        "code": "🏪",
        "keywords": [
            "convenience_store",
            "building",
            "convenience",
            "store"
        ],
        "index": 813
    },
    {
        "name": "school",
        "code": "🏫",
        "keywords": [
            "school",
            "building"
        ],
        "index": 814
    },
    {
        "name": "department_store",
        "code": "🏬",
        "keywords": [
            "department_store",
            "building",
            "department",
            "store"
        ],
        "index": 815
    },
    {
        "name": "factory",
        "code": "🏭",
        "keywords": [
            "factory",
            "building"
        ],
        "index": 816
    },
    {
        "name": "japanese_castle",
        "code": "🏯",
        "keywords": [
            "japanese_castle",
            "building",
            "castle",
            "japanese"
        ],
        "index": 817
    },
    {
        "name": "european_castle",
        "code": "🏰",
        "keywords": [
            "european_castle",
            "building",
            "castle",
            "european"
        ],
        "index": 818
    },
    {
        "name": "wedding",
        "code": "💒",
        "keywords": [
            "marriage",
            "wedding",
            "activity",
            "chapel",
            "romance"
        ],
        "index": 819
    },
    {
        "name": "tokyo_tower",
        "code": "🗼",
        "keywords": [
            "tokyo_tower",
            "tokyo",
            "tower"
        ],
        "index": 820
    },
    {
        "name": "statue_of_liberty",
        "code": "🗽",
        "keywords": [
            "statue_of_liberty",
            "liberty",
            "statue"
        ],
        "index": 821
    },
    {
        "name": "church",
        "code": "⛪",
        "keywords": [
            "church",
            "building",
            "christian",
            "cross",
            "religion"
        ],
        "index": 822
    },
    {
        "name": "mosque",
        "code": "🕌",
        "keywords": [
            "mosque",
            "islam",
            "muslim",
            "religion"
        ],
        "index": 823
    },
    {
        "name": "hindu_temple",
        "code": "🛕",
        "keywords": [
            "hindu_temple"
        ],
        "index": 824
    },
    {
        "name": "synagogue",
        "code": "🕍",
        "keywords": [
            "synagogue",
            "jew",
            "jewish",
            "religion",
            "temple"
        ],
        "index": 825
    },
    {
        "name": "shinto_shrine",
        "code": "⛩️",
        "keywords": [
            "shinto_shrine"
        ],
        "index": 826
    },
    {
        "name": "kaaba",
        "code": "🕋",
        "keywords": [
            "kaaba",
            "islam",
            "muslim",
            "religion"
        ],
        "index": 827
    },
    {
        "name": "fountain",
        "code": "⛲",
        "keywords": [
            "fountain"
        ],
        "index": 828
    },
    {
        "name": "tent",
        "code": "⛺",
        "keywords": [
            "camping",
            "tent"
        ],
        "index": 829
    },
    {
        "name": "foggy",
        "code": "🌁",
        "keywords": [
            "karl",
            "foggy",
            "fog",
            "weather"
        ],
        "index": 830
    },
    {
        "name": "night_with_stars",
        "code": "🌃",
        "keywords": [
            "night_with_stars",
            "night",
            "star",
            "weather"
        ],
        "index": 831
    },
    {
        "name": "cityscape",
        "code": "🏙️",
        "keywords": [
            "skyline",
            "cityscape"
        ],
        "index": 832
    },
    {
        "name": "sunrise_over_mountains",
        "code": "🌄",
        "keywords": [
            "sunrise_over_mountains",
            "morning",
            "mountain",
            "sun",
            "sunrise",
            "weather"
        ],
        "index": 833
    },
    {
        "name": "sunrise",
        "code": "🌅",
        "keywords": [
            "sunrise",
            "morning",
            "sun",
            "weather"
        ],
        "index": 834
    },
    {
        "name": "city_sunset",
        "code": "🌆",
        "keywords": [
            "city_sunset",
            "building",
            "city",
            "dusk",
            "evening",
            "landscape",
            "sun",
            "sunset",
            "weather"
        ],
        "index": 835
    },
    {
        "name": "city_sunrise",
        "code": "🌇",
        "keywords": [
            "city_sunrise",
            "building",
            "dusk",
            "sun",
            "sunset",
            "weather"
        ],
        "index": 836
    },
    {
        "name": "bridge_at_night",
        "code": "🌉",
        "keywords": [
            "bridge_at_night",
            "bridge",
            "night",
            "weather"
        ],
        "index": 837
    },
    {
        "name": "hotsprings",
        "code": "♨️",
        "keywords": [
            "hotsprings",
            "hot",
            "springs",
            "steaming"
        ],
        "index": 838
    },
    {
        "name": "carousel_horse",
        "code": "🎠",
        "keywords": [
            "carousel_horse",
            "activity",
            "carousel",
            "entertainment",
            "horse"
        ],
        "index": 839
    },
    {
        "name": "ferris_wheel",
        "code": "🎡",
        "keywords": [
            "ferris_wheel",
            "activity",
            "amusement park",
            "entertainment",
            "ferris",
            "wheel"
        ],
        "index": 840
    },
    {
        "name": "roller_coaster",
        "code": "🎢",
        "keywords": [
            "roller_coaster",
            "activity",
            "amusement park",
            "coaster",
            "entertainment",
            "roller"
        ],
        "index": 841
    },
    {
        "name": "barber",
        "code": "💈",
        "keywords": [
            "barber",
            "haircut",
            "pole"
        ],
        "index": 842
    },
    {
        "name": "circus_tent",
        "code": "🎪",
        "keywords": [
            "circus_tent",
            "activity",
            "circus",
            "entertainment",
            "tent"
        ],
        "index": 843
    },
    {
        "name": "steam_locomotive",
        "code": "🚂",
        "keywords": [
            "train",
            "steam_locomotive",
            "engine",
            "locomotive",
            "railway",
            "steam",
            "vehicle"
        ],
        "index": 844
    },
    {
        "name": "railway_car",
        "code": "🚃",
        "keywords": [
            "railway_car",
            "car",
            "electric",
            "railway",
            "train",
            "tram",
            "trolleybus",
            "vehicle"
        ],
        "index": 845
    },
    {
        "name": "bullettrain_side",
        "code": "🚄",
        "keywords": [
            "train",
            "bullettrain_side",
            "railway",
            "shinkansen",
            "speed",
            "vehicle"
        ],
        "index": 846
    },
    {
        "name": "bullettrain_front",
        "code": "🚅",
        "keywords": [
            "train",
            "bullettrain_front",
            "bullet",
            "railway",
            "shinkansen",
            "speed",
            "vehicle"
        ],
        "index": 847
    },
    {
        "name": "train2",
        "code": "🚆",
        "keywords": [
            "train2",
            "railway",
            "train",
            "vehicle"
        ],
        "index": 848
    },
    {
        "name": "metro",
        "code": "🚇",
        "keywords": [
            "metro",
            "subway",
            "vehicle"
        ],
        "index": 849
    },
    {
        "name": "light_rail",
        "code": "🚈",
        "keywords": [
            "light_rail",
            "railway",
            "vehicle"
        ],
        "index": 850
    },
    {
        "name": "station",
        "code": "🚉",
        "keywords": [
            "station",
            "railway",
            "train",
            "vehicle"
        ],
        "index": 851
    },
    {
        "name": "tram",
        "code": "🚊",
        "keywords": [
            "tram",
            "trolleybus",
            "vehicle"
        ],
        "index": 852
    },
    {
        "name": "monorail",
        "code": "🚝",
        "keywords": [
            "monorail",
            "vehicle"
        ],
        "index": 853
    },
    {
        "name": "mountain_railway",
        "code": "🚞",
        "keywords": [
            "mountain_railway",
            "car",
            "mountain",
            "railway",
            "vehicle"
        ],
        "index": 854
    },
    {
        "name": "train",
        "code": "🚋",
        "keywords": [
            "train",
            "car",
            "tram",
            "trolleybus",
            "vehicle"
        ],
        "index": 855
    },
    {
        "name": "bus",
        "code": "🚌",
        "keywords": [
            "bus",
            "vehicle"
        ],
        "index": 856
    },
    {
        "name": "oncoming_bus",
        "code": "🚍",
        "keywords": [
            "oncoming_bus",
            "bus",
            "oncoming",
            "vehicle"
        ],
        "index": 857
    },
    {
        "name": "trolleybus",
        "code": "🚎",
        "keywords": [
            "trolleybus",
            "bus",
            "tram",
            "trolley",
            "vehicle"
        ],
        "index": 858
    },
    {
        "name": "minibus",
        "code": "🚐",
        "keywords": [
            "minibus",
            "bus",
            "vehicle"
        ],
        "index": 859
    },
    {
        "name": "ambulance",
        "code": "🚑",
        "keywords": [
            "ambulance",
            "vehicle"
        ],
        "index": 860
    },
    {
        "name": "fire_engine",
        "code": "🚒",
        "keywords": [
            "fire_engine",
            "engine",
            "fire",
            "truck",
            "vehicle"
        ],
        "index": 861
    },
    {
        "name": "police_car",
        "code": "🚓",
        "keywords": [
            "police_car",
            "car",
            "patrol",
            "police",
            "vehicle"
        ],
        "index": 862
    },
    {
        "name": "oncoming_police_car",
        "code": "🚔",
        "keywords": [
            "oncoming_police_car",
            "car",
            "oncoming",
            "police",
            "vehicle"
        ],
        "index": 863
    },
    {
        "name": "taxi",
        "code": "🚕",
        "keywords": [
            "taxi",
            "vehicle"
        ],
        "index": 864
    },
    {
        "name": "oncoming_taxi",
        "code": "🚖",
        "keywords": [
            "oncoming_taxi",
            "oncoming",
            "taxi",
            "vehicle"
        ],
        "index": 865
    },
    {
        "name": "car",
        "code": "🚗",
        "keywords": [
            "car",
            "red_car",
            "automobile",
            "vehicle"
        ],
        "index": 866
    },
    {
        "name": "oncoming_automobile",
        "code": "🚘",
        "keywords": [
            "oncoming_automobile",
            "automobile",
            "car",
            "oncoming",
            "vehicle"
        ],
        "index": 867
    },
    {
        "name": "blue_car",
        "code": "🚙",
        "keywords": [
            "blue_car",
            "recreational",
            "rv",
            "vehicle"
        ],
        "index": 868
    },
    {
        "name": "pickup_truck",
        "code": "🛻",
        "keywords": [
            "pickup_truck"
        ],
        "index": 869
    },
    {
        "name": "truck",
        "code": "🚚",
        "keywords": [
            "truck",
            "delivery",
            "vehicle"
        ],
        "index": 870
    },
    {
        "name": "articulated_lorry",
        "code": "🚛",
        "keywords": [
            "articulated_lorry",
            "lorry",
            "semi",
            "truck",
            "vehicle"
        ],
        "index": 871
    },
    {
        "name": "tractor",
        "code": "🚜",
        "keywords": [
            "tractor",
            "vehicle"
        ],
        "index": 872
    },
    {
        "name": "racing_car",
        "code": "🏎️",
        "keywords": [
            "racing_car"
        ],
        "index": 873
    },
    {
        "name": "motorcycle",
        "code": "🏍️",
        "keywords": [
            "motorcycle"
        ],
        "index": 874
    },
    {
        "name": "motor_scooter",
        "code": "🛵",
        "keywords": [
            "motor_scooter",
            "motor",
            "scooter"
        ],
        "index": 875
    },
    {
        "name": "manual_wheelchair",
        "code": "🦽",
        "keywords": [
            "manual_wheelchair"
        ],
        "index": 876
    },
    {
        "name": "motorized_wheelchair",
        "code": "🦼",
        "keywords": [
            "motorized_wheelchair"
        ],
        "index": 877
    },
    {
        "name": "auto_rickshaw",
        "code": "🛺",
        "keywords": [
            "auto_rickshaw"
        ],
        "index": 878
    },
    {
        "name": "bike",
        "code": "🚲",
        "keywords": [
            "bicycle",
            "bike",
            "vehicle"
        ],
        "index": 879
    },
    {
        "name": "kick_scooter",
        "code": "🛴",
        "keywords": [
            "kick_scooter",
            "kick",
            "scooter"
        ],
        "index": 880
    },
    {
        "name": "skateboard",
        "code": "🛹",
        "keywords": [
            "skateboard"
        ],
        "index": 881
    },
    {
        "name": "roller_skate",
        "code": "🛼",
        "keywords": [
            "roller_skate"
        ],
        "index": 882
    },
    {
        "name": "busstop",
        "code": "🚏",
        "keywords": [
            "busstop",
            "bus",
            "stop"
        ],
        "index": 883
    },
    {
        "name": "motorway",
        "code": "🛣️",
        "keywords": [
            "motorway"
        ],
        "index": 884
    },
    {
        "name": "railway_track",
        "code": "🛤️",
        "keywords": [
            "railway_track"
        ],
        "index": 885
    },
    {
        "name": "oil_drum",
        "code": "🛢️",
        "keywords": [
            "oil_drum"
        ],
        "index": 886
    },
    {
        "name": "fuelpump",
        "code": "⛽",
        "keywords": [
            "fuelpump",
            "fuel",
            "gas",
            "pump",
            "station"
        ],
        "index": 887
    },
    {
        "name": "rotating_light",
        "code": "🚨",
        "keywords": [
            "911",
            "emergency",
            "rotating_light",
            "beacon",
            "car",
            "light",
            "police",
            "revolving",
            "vehicle"
        ],
        "index": 888
    },
    {
        "name": "traffic_light",
        "code": "🚥",
        "keywords": [
            "traffic_light",
            "light",
            "signal",
            "traffic"
        ],
        "index": 889
    },
    {
        "name": "vertical_traffic_light",
        "code": "🚦",
        "keywords": [
            "semaphore",
            "vertical_traffic_light",
            "light",
            "signal",
            "traffic"
        ],
        "index": 890
    },
    {
        "name": "stop_sign",
        "code": "🛑",
        "keywords": [
            "stop_sign",
            "octagonal",
            "stop"
        ],
        "index": 891
    },
    {
        "name": "construction",
        "code": "🚧",
        "keywords": [
            "wip",
            "construction",
            "barrier"
        ],
        "index": 892
    },
    {
        "name": "anchor",
        "code": "⚓",
        "keywords": [
            "ship",
            "anchor",
            "tool"
        ],
        "index": 893
    },
    {
        "name": "boat",
        "code": "⛵",
        "keywords": [
            "boat",
            "sailboat",
            "resort",
            "sea",
            "vehicle",
            "yacht"
        ],
        "index": 894
    },
    {
        "name": "canoe",
        "code": "🛶",
        "keywords": [
            "canoe",
            "boat"
        ],
        "index": 895
    },
    {
        "name": "speedboat",
        "code": "🚤",
        "keywords": [
            "ship",
            "speedboat",
            "boat",
            "vehicle"
        ],
        "index": 896
    },
    {
        "name": "passenger_ship",
        "code": "🛳️",
        "keywords": [
            "cruise",
            "passenger_ship"
        ],
        "index": 897
    },
    {
        "name": "ferry",
        "code": "⛴️",
        "keywords": [
            "ferry"
        ],
        "index": 898
    },
    {
        "name": "motor_boat",
        "code": "🛥️",
        "keywords": [
            "motor_boat"
        ],
        "index": 899
    },
    {
        "name": "ship",
        "code": "🚢",
        "keywords": [
            "ship",
            "vehicle"
        ],
        "index": 900
    },
    {
        "name": "airplane",
        "code": "✈️",
        "keywords": [
            "flight",
            "airplane",
            "vehicle"
        ],
        "index": 901
    },
    {
        "name": "small_airplane",
        "code": "🛩️",
        "keywords": [
            "flight",
            "small_airplane"
        ],
        "index": 902
    },
    {
        "name": "flight_departure",
        "code": "🛫",
        "keywords": [
            "flight_departure",
            "airplane",
            "check-in",
            "departure",
            "departures",
            "vehicle"
        ],
        "index": 903
    },
    {
        "name": "flight_arrival",
        "code": "🛬",
        "keywords": [
            "flight_arrival",
            "airplane",
            "arrivals",
            "arriving",
            "landing",
            "vehicle"
        ],
        "index": 904
    },
    {
        "name": "parachute",
        "code": "🪂",
        "keywords": [
            "parachute"
        ],
        "index": 905
    },
    {
        "name": "seat",
        "code": "💺",
        "keywords": [
            "seat",
            "chair"
        ],
        "index": 906
    },
    {
        "name": "helicopter",
        "code": "🚁",
        "keywords": [
            "helicopter",
            "vehicle"
        ],
        "index": 907
    },
    {
        "name": "suspension_railway",
        "code": "🚟",
        "keywords": [
            "suspension_railway",
            "railway",
            "suspension",
            "vehicle"
        ],
        "index": 908
    },
    {
        "name": "mountain_cableway",
        "code": "🚠",
        "keywords": [
            "mountain_cableway",
            "cable",
            "gondola",
            "mountain",
            "vehicle"
        ],
        "index": 909
    },
    {
        "name": "aerial_tramway",
        "code": "🚡",
        "keywords": [
            "aerial_tramway",
            "aerial",
            "cable",
            "car",
            "gondola",
            "ropeway",
            "tramway",
            "vehicle"
        ],
        "index": 910
    },
    {
        "name": "artificial_satellite",
        "code": "🛰️",
        "keywords": [
            "orbit",
            "space",
            "artificial_satellite"
        ],
        "index": 911
    },
    {
        "name": "rocket",
        "code": "🚀",
        "keywords": [
            "ship",
            "launch",
            "rocket",
            "space",
            "vehicle"
        ],
        "index": 912
    },
    {
        "name": "flying_saucer",
        "code": "🛸",
        "keywords": [
            "ufo",
            "flying_saucer"
        ],
        "index": 913
    },
    {
        "name": "bellhop_bell",
        "code": "🛎️",
        "keywords": [
            "bellhop_bell"
        ],
        "index": 914
    },
    {
        "name": "luggage",
        "code": "🧳",
        "keywords": [
            "luggage"
        ],
        "index": 915
    },
    {
        "name": "hourglass",
        "code": "⌛",
        "keywords": [
            "time",
            "hourglass",
            "sand",
            "timer"
        ],
        "index": 916
    },
    {
        "name": "hourglass_flowing_sand",
        "code": "⏳",
        "keywords": [
            "time",
            "hourglass_flowing_sand",
            "hourglass",
            "sand",
            "timer"
        ],
        "index": 917
    },
    {
        "name": "watch",
        "code": "⌚",
        "keywords": [
            "time",
            "watch",
            "clock"
        ],
        "index": 918
    },
    {
        "name": "alarm_clock",
        "code": "⏰",
        "keywords": [
            "morning",
            "alarm_clock",
            "alarm",
            "clock"
        ],
        "index": 919
    },
    {
        "name": "stopwatch",
        "code": "⏱️",
        "keywords": [
            "stopwatch"
        ],
        "index": 920
    },
    {
        "name": "timer_clock",
        "code": "⏲️",
        "keywords": [
            "timer_clock"
        ],
        "index": 921
    },
    {
        "name": "mantelpiece_clock",
        "code": "🕰️",
        "keywords": [
            "mantelpiece_clock"
        ],
        "index": 922
    },
    {
        "name": "clock12",
        "code": "🕛",
        "keywords": [
            "clock12",
            "00",
            "12",
            "12:00",
            "clock",
            "o’clock",
            "twelve"
        ],
        "index": 923
    },
    {
        "name": "clock1230",
        "code": "🕧",
        "keywords": [
            "clock1230",
            "12",
            "12:30",
            "30",
            "clock",
            "thirty",
            "twelve"
        ],
        "index": 924
    },
    {
        "name": "clock1",
        "code": "🕐",
        "keywords": [
            "clock1",
            "00",
            "1",
            "1:00",
            "clock",
            "o’clock",
            "one"
        ],
        "index": 925
    },
    {
        "name": "clock130",
        "code": "🕜",
        "keywords": [
            "clock130",
            "1",
            "1:30",
            "30",
            "clock",
            "one",
            "thirty"
        ],
        "index": 926
    },
    {
        "name": "clock2",
        "code": "🕑",
        "keywords": [
            "clock2",
            "00",
            "2",
            "2:00",
            "clock",
            "o’clock",
            "two"
        ],
        "index": 927
    },
    {
        "name": "clock230",
        "code": "🕝",
        "keywords": [
            "clock230",
            "2",
            "2:30",
            "30",
            "clock",
            "thirty",
            "two"
        ],
        "index": 928
    },
    {
        "name": "clock3",
        "code": "🕒",
        "keywords": [
            "clock3",
            "00",
            "3",
            "3:00",
            "clock",
            "o’clock",
            "three"
        ],
        "index": 929
    },
    {
        "name": "clock330",
        "code": "🕞",
        "keywords": [
            "clock330",
            "3",
            "3:30",
            "30",
            "clock",
            "thirty",
            "three"
        ],
        "index": 930
    },
    {
        "name": "clock4",
        "code": "🕓",
        "keywords": [
            "clock4",
            "00",
            "4",
            "4:00",
            "clock",
            "four",
            "o’clock"
        ],
        "index": 931
    },
    {
        "name": "clock430",
        "code": "🕟",
        "keywords": [
            "clock430",
            "30",
            "4",
            "4:30",
            "clock",
            "four",
            "thirty"
        ],
        "index": 932
    },
    {
        "name": "clock5",
        "code": "🕔",
        "keywords": [
            "clock5",
            "00",
            "5",
            "5:00",
            "clock",
            "five",
            "o’clock"
        ],
        "index": 933
    },
    {
        "name": "clock530",
        "code": "🕠",
        "keywords": [
            "clock530",
            "30",
            "5",
            "5:30",
            "clock",
            "five",
            "thirty"
        ],
        "index": 934
    },
    {
        "name": "clock6",
        "code": "🕕",
        "keywords": [
            "clock6",
            "00",
            "6",
            "6:00",
            "clock",
            "o’clock",
            "six"
        ],
        "index": 935
    },
    {
        "name": "clock630",
        "code": "🕡",
        "keywords": [
            "clock630",
            "30",
            "6",
            "6:30",
            "clock",
            "six",
            "thirty"
        ],
        "index": 936
    },
    {
        "name": "clock7",
        "code": "🕖",
        "keywords": [
            "clock7",
            "00",
            "7",
            "7:00",
            "clock",
            "o’clock",
            "seven"
        ],
        "index": 937
    },
    {
        "name": "clock730",
        "code": "🕢",
        "keywords": [
            "clock730",
            "30",
            "7",
            "7:30",
            "clock",
            "seven",
            "thirty"
        ],
        "index": 938
    },
    {
        "name": "clock8",
        "code": "🕗",
        "keywords": [
            "clock8",
            "00",
            "8",
            "8:00",
            "clock",
            "eight",
            "o’clock"
        ],
        "index": 939
    },
    {
        "name": "clock830",
        "code": "🕣",
        "keywords": [
            "clock830",
            "30",
            "8",
            "8:30",
            "clock",
            "eight",
            "thirty"
        ],
        "index": 940
    },
    {
        "name": "clock9",
        "code": "🕘",
        "keywords": [
            "clock9",
            "00",
            "9",
            "9:00",
            "clock",
            "nine",
            "o’clock"
        ],
        "index": 941
    },
    {
        "name": "clock930",
        "code": "🕤",
        "keywords": [
            "clock930",
            "30",
            "9",
            "9:30",
            "clock",
            "nine",
            "thirty"
        ],
        "index": 942
    },
    {
        "name": "clock10",
        "code": "🕙",
        "keywords": [
            "clock10",
            "00",
            "10",
            "10:00",
            "clock",
            "o’clock",
            "ten"
        ],
        "index": 943
    },
    {
        "name": "clock1030",
        "code": "🕥",
        "keywords": [
            "clock1030",
            "10",
            "10:30",
            "30",
            "clock",
            "ten",
            "thirty"
        ],
        "index": 944
    },
    {
        "name": "clock11",
        "code": "🕚",
        "keywords": [
            "clock11",
            "00",
            "11",
            "11:00",
            "clock",
            "eleven",
            "o’clock"
        ],
        "index": 945
    },
    {
        "name": "clock1130",
        "code": "🕦",
        "keywords": [
            "clock1130",
            "11",
            "11:30",
            "30",
            "clock",
            "eleven",
            "thirty"
        ],
        "index": 946
    },
    {
        "name": "new_moon",
        "code": "🌑",
        "keywords": [
            "new_moon",
            "dark",
            "moon",
            "space",
            "weather"
        ],
        "index": 947
    },
    {
        "name": "waxing_crescent_moon",
        "code": "🌒",
        "keywords": [
            "waxing_crescent_moon",
            "crescent",
            "moon",
            "space",
            "waxing",
            "weather"
        ],
        "index": 948
    },
    {
        "name": "first_quarter_moon",
        "code": "🌓",
        "keywords": [
            "first_quarter_moon",
            "moon",
            "quarter",
            "space",
            "weather"
        ],
        "index": 949
    },
    {
        "name": "moon",
        "code": "🌔",
        "keywords": [
            "moon",
            "waxing_gibbous_moon",
            "gibbous",
            "space",
            "waxing",
            "weather"
        ],
        "index": 950
    },
    {
        "name": "full_moon",
        "code": "🌕",
        "keywords": [
            "full_moon",
            "full",
            "moon",
            "space",
            "weather"
        ],
        "index": 951
    },
    {
        "name": "waning_gibbous_moon",
        "code": "🌖",
        "keywords": [
            "waning_gibbous_moon",
            "gibbous",
            "moon",
            "space",
            "waning",
            "weather"
        ],
        "index": 952
    },
    {
        "name": "last_quarter_moon",
        "code": "🌗",
        "keywords": [
            "last_quarter_moon",
            "moon",
            "quarter",
            "space",
            "weather"
        ],
        "index": 953
    },
    {
        "name": "waning_crescent_moon",
        "code": "🌘",
        "keywords": [
            "waning_crescent_moon",
            "crescent",
            "moon",
            "space",
            "waning",
            "weather"
        ],
        "index": 954
    },
    {
        "name": "crescent_moon",
        "code": "🌙",
        "keywords": [
            "night",
            "crescent_moon",
            "crescent",
            "moon",
            "space",
            "weather"
        ],
        "index": 955
    },
    {
        "name": "new_moon_with_face",
        "code": "🌚",
        "keywords": [
            "new_moon_with_face",
            "face",
            "moon",
            "space",
            "weather"
        ],
        "index": 956
    },
    {
        "name": "first_quarter_moon_with_face",
        "code": "🌛",
        "keywords": [
            "first_quarter_moon_with_face",
            "face",
            "moon",
            "quarter",
            "space",
            "weather"
        ],
        "index": 957
    },
    {
        "name": "last_quarter_moon_with_face",
        "code": "🌜",
        "keywords": [
            "last_quarter_moon_with_face",
            "face",
            "moon",
            "quarter",
            "space",
            "weather"
        ],
        "index": 958
    },
    {
        "name": "thermometer",
        "code": "🌡️",
        "keywords": [
            "thermometer"
        ],
        "index": 959
    },
    {
        "name": "sunny",
        "code": "☀️",
        "keywords": [
            "weather",
            "sunny",
            "bright",
            "rays",
            "space",
            "sun"
        ],
        "index": 960
    },
    {
        "name": "full_moon_with_face",
        "code": "🌝",
        "keywords": [
            "full_moon_with_face",
            "bright",
            "face",
            "full",
            "moon",
            "space",
            "weather"
        ],
        "index": 961
    },
    {
        "name": "sun_with_face",
        "code": "🌞",
        "keywords": [
            "summer",
            "sun_with_face",
            "bright",
            "face",
            "space",
            "sun",
            "weather"
        ],
        "index": 962
    },
    {
        "name": "ringed_planet",
        "code": "🪐",
        "keywords": [
            "ringed_planet"
        ],
        "index": 963
    },
    {
        "name": "star",
        "code": "⭐",
        "keywords": [
            "star"
        ],
        "index": 964
    },
    {
        "name": "star2",
        "code": "🌟",
        "keywords": [
            "star2",
            "glittery",
            "glow",
            "shining",
            "sparkle",
            "star"
        ],
        "index": 965
    },
    {
        "name": "stars",
        "code": "🌠",
        "keywords": [
            "stars",
            "activity",
            "falling",
            "shooting",
            "space",
            "star"
        ],
        "index": 966
    },
    {
        "name": "milky_way",
        "code": "🌌",
        "keywords": [
            "milky_way",
            "milky way",
            "space",
            "weather"
        ],
        "index": 967
    },
    {
        "name": "cloud",
        "code": "☁️",
        "keywords": [
            "cloud",
            "weather"
        ],
        "index": 968
    },
    {
        "name": "partly_sunny",
        "code": "⛅",
        "keywords": [
            "weather",
            "cloud",
            "partly_sunny",
            "sun"
        ],
        "index": 969
    },
    {
        "name": "cloud_with_lightning_and_rain",
        "code": "⛈️",
        "keywords": [
            "cloud_with_lightning_and_rain"
        ],
        "index": 970
    },
    {
        "name": "sun_behind_small_cloud",
        "code": "🌤️",
        "keywords": [
            "sun_behind_small_cloud"
        ],
        "index": 971
    },
    {
        "name": "sun_behind_large_cloud",
        "code": "🌥️",
        "keywords": [
            "sun_behind_large_cloud"
        ],
        "index": 972
    },
    {
        "name": "sun_behind_rain_cloud",
        "code": "🌦️",
        "keywords": [
            "sun_behind_rain_cloud"
        ],
        "index": 973
    },
    {
        "name": "cloud_with_rain",
        "code": "🌧️",
        "keywords": [
            "cloud_with_rain"
        ],
        "index": 974
    },
    {
        "name": "cloud_with_snow",
        "code": "🌨️",
        "keywords": [
            "cloud_with_snow"
        ],
        "index": 975
    },
    {
        "name": "cloud_with_lightning",
        "code": "🌩️",
        "keywords": [
            "cloud_with_lightning"
        ],
        "index": 976
    },
    {
        "name": "tornado",
        "code": "🌪️",
        "keywords": [
            "tornado"
        ],
        "index": 977
    },
    {
        "name": "fog",
        "code": "🌫️",
        "keywords": [
            "fog"
        ],
        "index": 978
    },
    {
        "name": "wind_face",
        "code": "🌬️",
        "keywords": [
            "wind_face"
        ],
        "index": 979
    },
    {
        "name": "cyclone",
        "code": "🌀",
        "keywords": [
            "swirl",
            "cyclone",
            "dizzy",
            "twister",
            "typhoon",
            "weather"
        ],
        "index": 980
    },
    {
        "name": "rainbow",
        "code": "🌈",
        "keywords": [
            "rainbow",
            "rain",
            "weather"
        ],
        "index": 981
    },
    {
        "name": "closed_umbrella",
        "code": "🌂",
        "keywords": [
            "weather",
            "rain",
            "closed_umbrella",
            "clothing",
            "umbrella"
        ],
        "index": 982
    },
    {
        "name": "open_umbrella",
        "code": "☂️",
        "keywords": [
            "open_umbrella",
            "clothing",
            "rain",
            "umbrella",
            "weather"
        ],
        "index": 983
    },
    {
        "name": "umbrella",
        "code": "☔",
        "keywords": [
            "rain",
            "weather",
            "umbrella",
            "clothing",
            "drop"
        ],
        "index": 984
    },
    {
        "name": "parasol_on_ground",
        "code": "⛱️",
        "keywords": [
            "beach_umbrella",
            "parasol_on_ground"
        ],
        "index": 985
    },
    {
        "name": "zap",
        "code": "⚡",
        "keywords": [
            "lightning",
            "thunder",
            "zap",
            "danger",
            "electric",
            "electricity",
            "voltage"
        ],
        "index": 986
    },
    {
        "name": "snowflake",
        "code": "❄️",
        "keywords": [
            "winter",
            "cold",
            "weather",
            "snowflake",
            "snow"
        ],
        "index": 987
    },
    {
        "name": "snowman_with_snow",
        "code": "☃️",
        "keywords": [
            "winter",
            "christmas",
            "snowman_with_snow",
            "cold",
            "snow",
            "snowman",
            "weather"
        ],
        "index": 988
    },
    {
        "name": "snowman",
        "code": "⛄",
        "keywords": [
            "winter",
            "snowman",
            "cold",
            "snow",
            "weather"
        ],
        "index": 989
    },
    {
        "name": "comet",
        "code": "☄️",
        "keywords": [
            "comet",
            "space"
        ],
        "index": 990
    },
    {
        "name": "fire",
        "code": "🔥",
        "keywords": [
            "burn",
            "fire",
            "flame",
            "tool"
        ],
        "index": 991
    },
    {
        "name": "droplet",
        "code": "💧",
        "keywords": [
            "water",
            "droplet",
            "cold",
            "comic",
            "drop",
            "sweat",
            "weather"
        ],
        "index": 992
    },
    {
        "name": "ocean",
        "code": "🌊",
        "keywords": [
            "sea",
            "ocean",
            "water",
            "wave",
            "weather"
        ],
        "index": 993
    },
    {
        "code": "activities",
        "header": true,
        "index": 994
    },
    {
        "name": "jack_o_lantern",
        "code": "🎃",
        "keywords": [
            "halloween",
            "jack_o_lantern",
            "activity",
            "celebration",
            "entertainment",
            "jack",
            "lantern"
        ],
        "index": 995
    },
    {
        "name": "christmas_tree",
        "code": "🎄",
        "keywords": [
            "christmas_tree",
            "activity",
            "celebration",
            "christmas",
            "entertainment",
            "tree"
        ],
        "index": 996
    },
    {
        "name": "fireworks",
        "code": "🎆",
        "keywords": [
            "festival",
            "celebration",
            "fireworks",
            "activity",
            "entertainment"
        ],
        "index": 997
    },
    {
        "name": "sparkler",
        "code": "🎇",
        "keywords": [
            "sparkler",
            "activity",
            "celebration",
            "entertainment",
            "fireworks",
            "sparkle"
        ],
        "index": 998
    },
    {
        "name": "firecracker",
        "code": "🧨",
        "keywords": [
            "firecracker"
        ],
        "index": 999
    },
    {
        "name": "sparkles",
        "code": "✨",
        "keywords": [
            "shiny",
            "sparkles",
            "entertainment",
            "sparkle",
            "star"
        ],
        "index": 1000
    },
    {
        "name": "balloon",
        "code": "🎈",
        "keywords": [
            "party",
            "birthday",
            "balloon",
            "activity",
            "celebration",
            "entertainment"
        ],
        "index": 1001
    },
    {
        "name": "tada",
        "code": "🎉",
        "keywords": [
            "hooray",
            "party",
            "tada",
            "activity",
            "celebration",
            "entertainment",
            "popper"
        ],
        "index": 1002
    },
    {
        "name": "confetti_ball",
        "code": "🎊",
        "keywords": [
            "confetti_ball",
            "activity",
            "ball",
            "celebration",
            "confetti",
            "entertainment"
        ],
        "index": 1003
    },
    {
        "name": "tanabata_tree",
        "code": "🎋",
        "keywords": [
            "tanabata_tree",
            "activity",
            "banner",
            "celebration",
            "entertainment",
            "japanese",
            "tree"
        ],
        "index": 1004
    },
    {
        "name": "bamboo",
        "code": "🎍",
        "keywords": [
            "bamboo",
            "activity",
            "celebration",
            "japanese",
            "pine",
            "plant"
        ],
        "index": 1005
    },
    {
        "name": "dolls",
        "code": "🎎",
        "keywords": [
            "dolls",
            "activity",
            "celebration",
            "doll",
            "entertainment",
            "festival",
            "japanese"
        ],
        "index": 1006
    },
    {
        "name": "flags",
        "code": "🎏",
        "keywords": [
            "flags",
            "activity",
            "carp",
            "celebration",
            "entertainment",
            "flag",
            "streamer"
        ],
        "index": 1007
    },
    {
        "name": "wind_chime",
        "code": "🎐",
        "keywords": [
            "wind_chime",
            "activity",
            "bell",
            "celebration",
            "chime",
            "entertainment",
            "wind"
        ],
        "index": 1008
    },
    {
        "name": "rice_scene",
        "code": "🎑",
        "keywords": [
            "rice_scene",
            "activity",
            "celebration",
            "ceremony",
            "entertainment",
            "moon"
        ],
        "index": 1009
    },
    {
        "name": "red_envelope",
        "code": "🧧",
        "keywords": [
            "red_envelope"
        ],
        "index": 1010
    },
    {
        "name": "ribbon",
        "code": "🎀",
        "keywords": [
            "ribbon",
            "celebration"
        ],
        "index": 1011
    },
    {
        "name": "gift",
        "code": "🎁",
        "keywords": [
            "present",
            "birthday",
            "christmas",
            "gift",
            "box",
            "celebration",
            "entertainment",
            "wrapped"
        ],
        "index": 1012
    },
    {
        "name": "reminder_ribbon",
        "code": "🎗️",
        "keywords": [
            "reminder_ribbon"
        ],
        "index": 1013
    },
    {
        "name": "tickets",
        "code": "🎟️",
        "keywords": [
            "tickets"
        ],
        "index": 1014
    },
    {
        "name": "ticket",
        "code": "🎫",
        "keywords": [
            "ticket",
            "activity",
            "admission",
            "entertainment"
        ],
        "index": 1015
    },
    {
        "name": "medal_military",
        "code": "🎖️",
        "keywords": [
            "medal_military"
        ],
        "index": 1016
    },
    {
        "name": "trophy",
        "code": "🏆",
        "keywords": [
            "award",
            "contest",
            "winner",
            "trophy",
            "prize"
        ],
        "index": 1017
    },
    {
        "name": "medal_sports",
        "code": "🏅",
        "keywords": [
            "gold",
            "winner",
            "medal_sports",
            "medal"
        ],
        "index": 1018
    },
    {
        "name": "1st_place_medal",
        "code": "🥇",
        "keywords": [
            "gold",
            "1st_place_medal",
            "first",
            "medal"
        ],
        "index": 1019
    },
    {
        "name": "2nd_place_medal",
        "code": "🥈",
        "keywords": [
            "silver",
            "2nd_place_medal",
            "medal",
            "second"
        ],
        "index": 1020
    },
    {
        "name": "3rd_place_medal",
        "code": "🥉",
        "keywords": [
            "bronze",
            "3rd_place_medal",
            "medal",
            "third"
        ],
        "index": 1021
    },
    {
        "name": "soccer",
        "code": "⚽",
        "keywords": [
            "sports",
            "soccer",
            "ball"
        ],
        "index": 1022
    },
    {
        "name": "baseball",
        "code": "⚾",
        "keywords": [
            "sports",
            "baseball",
            "ball"
        ],
        "index": 1023
    },
    {
        "name": "softball",
        "code": "🥎",
        "keywords": [
            "softball"
        ],
        "index": 1024
    },
    {
        "name": "basketball",
        "code": "🏀",
        "keywords": [
            "sports",
            "basketball",
            "ball",
            "hoop"
        ],
        "index": 1025
    },
    {
        "name": "volleyball",
        "code": "🏐",
        "keywords": [
            "volleyball",
            "ball",
            "game"
        ],
        "index": 1026
    },
    {
        "name": "football",
        "code": "🏈",
        "keywords": [
            "sports",
            "football",
            "american",
            "ball"
        ],
        "index": 1027
    },
    {
        "name": "rugby_football",
        "code": "🏉",
        "keywords": [
            "rugby_football",
            "ball",
            "football",
            "rugby"
        ],
        "index": 1028
    },
    {
        "name": "tennis",
        "code": "🎾",
        "keywords": [
            "sports",
            "tennis",
            "ball",
            "racquet"
        ],
        "index": 1029
    },
    {
        "name": "flying_disc",
        "code": "🥏",
        "keywords": [
            "flying_disc"
        ],
        "index": 1030
    },
    {
        "name": "bowling",
        "code": "🎳",
        "keywords": [
            "bowling",
            "ball",
            "game"
        ],
        "index": 1031
    },
    {
        "name": "cricket_game",
        "code": "🏏",
        "keywords": [
            "cricket_game",
            "ball",
            "bat",
            "cricket",
            "game"
        ],
        "index": 1032
    },
    {
        "name": "field_hockey",
        "code": "🏑",
        "keywords": [
            "field_hockey",
            "ball",
            "field",
            "game",
            "hockey",
            "stick"
        ],
        "index": 1033
    },
    {
        "name": "ice_hockey",
        "code": "🏒",
        "keywords": [
            "ice_hockey",
            "game",
            "hockey",
            "ice",
            "puck",
            "stick"
        ],
        "index": 1034
    },
    {
        "name": "lacrosse",
        "code": "🥍",
        "keywords": [
            "lacrosse"
        ],
        "index": 1035
    },
    {
        "name": "ping_pong",
        "code": "🏓",
        "keywords": [
            "ping_pong",
            "ball",
            "bat",
            "game",
            "paddle",
            "table tennis"
        ],
        "index": 1036
    },
    {
        "name": "badminton",
        "code": "🏸",
        "keywords": [
            "badminton",
            "birdie",
            "game",
            "racquet",
            "shuttlecock"
        ],
        "index": 1037
    },
    {
        "name": "boxing_glove",
        "code": "🥊",
        "keywords": [
            "boxing_glove",
            "boxing",
            "glove"
        ],
        "index": 1038
    },
    {
        "name": "martial_arts_uniform",
        "code": "🥋",
        "keywords": [
            "martial_arts_uniform",
            "judo",
            "karate",
            "martial arts",
            "taekwondo",
            "uniform"
        ],
        "index": 1039
    },
    {
        "name": "goal_net",
        "code": "🥅",
        "keywords": [
            "goal_net",
            "goal",
            "net"
        ],
        "index": 1040
    },
    {
        "name": "golf",
        "code": "⛳",
        "keywords": [
            "golf",
            "flag",
            "hole"
        ],
        "index": 1041
    },
    {
        "name": "ice_skate",
        "code": "⛸️",
        "keywords": [
            "skating",
            "ice_skate"
        ],
        "index": 1042
    },
    {
        "name": "fishing_pole_and_fish",
        "code": "🎣",
        "keywords": [
            "fishing_pole_and_fish",
            "entertainment",
            "fish",
            "pole"
        ],
        "index": 1043
    },
    {
        "name": "diving_mask",
        "code": "🤿",
        "keywords": [
            "diving_mask"
        ],
        "index": 1044
    },
    {
        "name": "running_shirt_with_sash",
        "code": "🎽",
        "keywords": [
            "marathon",
            "running_shirt_with_sash",
            "running",
            "sash",
            "shirt"
        ],
        "index": 1045
    },
    {
        "name": "ski",
        "code": "🎿",
        "keywords": [
            "ski",
            "snow"
        ],
        "index": 1046
    },
    {
        "name": "sled",
        "code": "🛷",
        "keywords": [
            "sled"
        ],
        "index": 1047
    },
    {
        "name": "curling_stone",
        "code": "🥌",
        "keywords": [
            "curling_stone"
        ],
        "index": 1048
    },
    {
        "name": "dart",
        "code": "🎯",
        "keywords": [
            "target",
            "dart",
            "activity",
            "bull",
            "bullseye",
            "entertainment",
            "eye",
            "game",
            "hit"
        ],
        "index": 1049
    },
    {
        "name": "yo_yo",
        "code": "🪀",
        "keywords": [
            "yo_yo"
        ],
        "index": 1050
    },
    {
        "name": "kite",
        "code": "🪁",
        "keywords": [
            "kite"
        ],
        "index": 1051
    },
    {
        "name": "8ball",
        "code": "🎱",
        "keywords": [
            "pool",
            "billiards",
            "8ball",
            "8",
            "8 ball",
            "ball",
            "billiard",
            "eight",
            "game"
        ],
        "index": 1052
    },
    {
        "name": "crystal_ball",
        "code": "🔮",
        "keywords": [
            "fortune",
            "crystal_ball",
            "ball",
            "crystal",
            "fairy tale",
            "fantasy",
            "tool"
        ],
        "index": 1053
    },
    {
        "name": "magic_wand",
        "code": "🪄",
        "keywords": [
            "magic_wand"
        ],
        "index": 1054
    },
    {
        "name": "nazar_amulet",
        "code": "🧿",
        "keywords": [
            "nazar_amulet"
        ],
        "index": 1055
    },
    {
        "name": "video_game",
        "code": "🎮",
        "keywords": [
            "play",
            "controller",
            "console",
            "video_game",
            "entertainment",
            "game",
            "video game"
        ],
        "index": 1056
    },
    {
        "name": "joystick",
        "code": "🕹️",
        "keywords": [
            "joystick"
        ],
        "index": 1057
    },
    {
        "name": "slot_machine",
        "code": "🎰",
        "keywords": [
            "slot_machine",
            "activity",
            "game",
            "slot"
        ],
        "index": 1058
    },
    {
        "name": "game_die",
        "code": "🎲",
        "keywords": [
            "dice",
            "gambling",
            "game_die",
            "die",
            "entertainment",
            "game"
        ],
        "index": 1059
    },
    {
        "name": "jigsaw",
        "code": "🧩",
        "keywords": [
            "jigsaw"
        ],
        "index": 1060
    },
    {
        "name": "teddy_bear",
        "code": "🧸",
        "keywords": [
            "teddy_bear"
        ],
        "index": 1061
    },
    {
        "name": "pinata",
        "code": "🪅",
        "keywords": [
            "pinata"
        ],
        "index": 1062
    },
    {
        "name": "nesting_dolls",
        "code": "🪆",
        "keywords": [
            "nesting_dolls"
        ],
        "index": 1063
    },
    {
        "name": "spades",
        "code": "♠️",
        "keywords": [
            "spades",
            "card",
            "game",
            "spade",
            "suit"
        ],
        "index": 1064
    },
    {
        "name": "hearts",
        "code": "♥️",
        "keywords": [
            "hearts",
            "card",
            "game",
            "heart",
            "suit"
        ],
        "index": 1065
    },
    {
        "name": "diamonds",
        "code": "♦️",
        "keywords": [
            "diamonds",
            "card",
            "diamond",
            "game",
            "suit"
        ],
        "index": 1066
    },
    {
        "name": "clubs",
        "code": "♣️",
        "keywords": [
            "clubs",
            "card",
            "club",
            "game",
            "suit"
        ],
        "index": 1067
    },
    {
        "name": "chess_pawn",
        "code": "♟️",
        "keywords": [
            "chess_pawn"
        ],
        "index": 1068
    },
    {
        "name": "black_joker",
        "code": "🃏",
        "keywords": [
            "black_joker",
            "card",
            "entertainment",
            "game",
            "joker",
            "playing"
        ],
        "index": 1069
    },
    {
        "name": "mahjong",
        "code": "🀄",
        "keywords": [
            "mahjong",
            "game",
            "red"
        ],
        "index": 1070
    },
    {
        "name": "flower_playing_cards",
        "code": "🎴",
        "keywords": [
            "flower_playing_cards",
            "activity",
            "card",
            "entertainment",
            "flower",
            "game",
            "japanese",
            "playing"
        ],
        "index": 1071
    },
    {
        "name": "performing_arts",
        "code": "🎭",
        "keywords": [
            "theater",
            "drama",
            "performing_arts",
            "activity",
            "art",
            "entertainment",
            "mask",
            "performing",
            "theatre"
        ],
        "index": 1072
    },
    {
        "name": "framed_picture",
        "code": "🖼️",
        "keywords": [
            "framed_picture"
        ],
        "index": 1073
    },
    {
        "name": "art",
        "code": "🎨",
        "keywords": [
            "design",
            "paint",
            "art",
            "activity",
            "entertainment",
            "museum",
            "painting",
            "palette"
        ],
        "index": 1074
    },
    {
        "name": "thread",
        "code": "🧵",
        "keywords": [
            "thread"
        ],
        "index": 1075
    },
    {
        "name": "sewing_needle",
        "code": "🪡",
        "keywords": [
            "sewing_needle"
        ],
        "index": 1076
    },
    {
        "name": "yarn",
        "code": "🧶",
        "keywords": [
            "yarn"
        ],
        "index": 1077
    },
    {
        "name": "knot",
        "code": "🪢",
        "keywords": [
            "knot"
        ],
        "index": 1078
    },
    {
        "code": "objects",
        "header": true,
        "index": 1079
    },
    {
        "name": "eyeglasses",
        "code": "👓",
        "keywords": [
            "glasses",
            "eyeglasses",
            "clothing",
            "eye",
            "eyewear"
        ],
        "index": 1080
    },
    {
        "name": "dark_sunglasses",
        "code": "🕶️",
        "keywords": [
            "dark_sunglasses"
        ],
        "index": 1081
    },
    {
        "name": "goggles",
        "code": "🥽",
        "keywords": [
            "goggles"
        ],
        "index": 1082
    },
    {
        "name": "lab_coat",
        "code": "🥼",
        "keywords": [
            "lab_coat"
        ],
        "index": 1083
    },
    {
        "name": "safety_vest",
        "code": "🦺",
        "keywords": [
            "safety_vest"
        ],
        "index": 1084
    },
    {
        "name": "necktie",
        "code": "👔",
        "keywords": [
            "shirt",
            "formal",
            "necktie",
            "clothing"
        ],
        "index": 1085
    },
    {
        "name": "shirt",
        "code": "👕",
        "keywords": [
            "shirt",
            "tshirt",
            "clothing"
        ],
        "index": 1086
    },
    {
        "name": "jeans",
        "code": "👖",
        "keywords": [
            "pants",
            "jeans",
            "clothing",
            "trousers"
        ],
        "index": 1087
    },
    {
        "name": "scarf",
        "code": "🧣",
        "keywords": [
            "scarf"
        ],
        "index": 1088
    },
    {
        "name": "gloves",
        "code": "🧤",
        "keywords": [
            "gloves"
        ],
        "index": 1089
    },
    {
        "name": "coat",
        "code": "🧥",
        "keywords": [
            "coat"
        ],
        "index": 1090
    },
    {
        "name": "socks",
        "code": "🧦",
        "keywords": [
            "socks"
        ],
        "index": 1091
    },
    {
        "name": "dress",
        "code": "👗",
        "keywords": [
            "dress",
            "clothing"
        ],
        "index": 1092
    },
    {
        "name": "kimono",
        "code": "👘",
        "keywords": [
            "kimono",
            "clothing"
        ],
        "index": 1093
    },
    {
        "name": "sari",
        "code": "🥻",
        "keywords": [
            "sari"
        ],
        "index": 1094
    },
    {
        "name": "one_piece_swimsuit",
        "code": "🩱",
        "keywords": [
            "one_piece_swimsuit"
        ],
        "index": 1095
    },
    {
        "name": "swim_brief",
        "code": "🩲",
        "keywords": [
            "swim_brief"
        ],
        "index": 1096
    },
    {
        "name": "shorts",
        "code": "🩳",
        "keywords": [
            "shorts"
        ],
        "index": 1097
    },
    {
        "name": "bikini",
        "code": "👙",
        "keywords": [
            "beach",
            "bikini",
            "clothing",
            "swim"
        ],
        "index": 1098
    },
    {
        "name": "womans_clothes",
        "code": "👚",
        "keywords": [
            "womans_clothes",
            "clothing",
            "woman"
        ],
        "index": 1099
    },
    {
        "name": "purse",
        "code": "👛",
        "keywords": [
            "purse",
            "clothing",
            "coin"
        ],
        "index": 1100
    },
    {
        "name": "handbag",
        "code": "👜",
        "keywords": [
            "bag",
            "handbag",
            "clothing"
        ],
        "index": 1101
    },
    {
        "name": "pouch",
        "code": "👝",
        "keywords": [
            "bag",
            "pouch",
            "clothing"
        ],
        "index": 1102
    },
    {
        "name": "shopping",
        "code": "🛍️",
        "keywords": [
            "bags",
            "shopping"
        ],
        "index": 1103
    },
    {
        "name": "school_satchel",
        "code": "🎒",
        "keywords": [
            "school_satchel",
            "activity",
            "bag",
            "satchel",
            "school"
        ],
        "index": 1104
    },
    {
        "name": "thong_sandal",
        "code": "🩴",
        "keywords": [
            "thong_sandal"
        ],
        "index": 1105
    },
    {
        "name": "mans_shoe",
        "code": "👞",
        "keywords": [
            "mans_shoe",
            "shoe",
            "clothing",
            "man"
        ],
        "index": 1106
    },
    {
        "name": "athletic_shoe",
        "code": "👟",
        "keywords": [
            "sneaker",
            "sport",
            "running",
            "athletic_shoe",
            "athletic",
            "clothing",
            "shoe"
        ],
        "index": 1107
    },
    {
        "name": "hiking_boot",
        "code": "🥾",
        "keywords": [
            "hiking_boot"
        ],
        "index": 1108
    },
    {
        "name": "flat_shoe",
        "code": "🥿",
        "keywords": [
            "flat_shoe"
        ],
        "index": 1109
    },
    {
        "name": "high_heel",
        "code": "👠",
        "keywords": [
            "shoe",
            "high_heel",
            "clothing",
            "heel",
            "woman"
        ],
        "index": 1110
    },
    {
        "name": "sandal",
        "code": "👡",
        "keywords": [
            "shoe",
            "sandal",
            "clothing",
            "woman"
        ],
        "index": 1111
    },
    {
        "name": "ballet_shoes",
        "code": "🩰",
        "keywords": [
            "ballet_shoes"
        ],
        "index": 1112
    },
    {
        "name": "boot",
        "code": "👢",
        "keywords": [
            "boot",
            "clothing",
            "shoe",
            "woman"
        ],
        "index": 1113
    },
    {
        "name": "crown",
        "code": "👑",
        "keywords": [
            "king",
            "queen",
            "royal",
            "crown",
            "clothing"
        ],
        "index": 1114
    },
    {
        "name": "womans_hat",
        "code": "👒",
        "keywords": [
            "womans_hat",
            "clothing",
            "hat",
            "woman"
        ],
        "index": 1115
    },
    {
        "name": "tophat",
        "code": "🎩",
        "keywords": [
            "hat",
            "classy",
            "tophat",
            "activity",
            "clothing",
            "entertainment",
            "top"
        ],
        "index": 1116
    },
    {
        "name": "mortar_board",
        "code": "🎓",
        "keywords": [
            "education",
            "college",
            "university",
            "graduation",
            "mortar_board",
            "activity",
            "cap",
            "celebration",
            "clothing",
            "hat"
        ],
        "index": 1117
    },
    {
        "name": "billed_cap",
        "code": "🧢",
        "keywords": [
            "billed_cap"
        ],
        "index": 1118
    },
    {
        "name": "military_helmet",
        "code": "🪖",
        "keywords": [
            "military_helmet"
        ],
        "index": 1119
    },
    {
        "name": "rescue_worker_helmet",
        "code": "⛑️",
        "keywords": [
            "rescue_worker_helmet"
        ],
        "index": 1120
    },
    {
        "name": "prayer_beads",
        "code": "📿",
        "keywords": [
            "prayer_beads",
            "beads",
            "clothing",
            "necklace",
            "prayer",
            "religion"
        ],
        "index": 1121
    },
    {
        "name": "lipstick",
        "code": "💄",
        "keywords": [
            "makeup",
            "lipstick",
            "cosmetics"
        ],
        "index": 1122
    },
    {
        "name": "ring",
        "code": "💍",
        "keywords": [
            "wedding",
            "marriage",
            "engaged",
            "ring",
            "diamond",
            "romance"
        ],
        "index": 1123
    },
    {
        "name": "gem",
        "code": "💎",
        "keywords": [
            "diamond",
            "gem",
            "jewel",
            "romance"
        ],
        "index": 1124
    },
    {
        "name": "mute",
        "code": "🔇",
        "keywords": [
            "sound",
            "volume",
            "mute",
            "quiet",
            "silent",
            "speaker"
        ],
        "index": 1125
    },
    {
        "name": "speaker",
        "code": "🔈",
        "keywords": [
            "speaker",
            "volume"
        ],
        "index": 1126
    },
    {
        "name": "sound",
        "code": "🔉",
        "keywords": [
            "volume",
            "sound",
            "low",
            "speaker",
            "wave"
        ],
        "index": 1127
    },
    {
        "name": "loud_sound",
        "code": "🔊",
        "keywords": [
            "volume",
            "loud_sound",
            "3",
            "entertainment",
            "high",
            "loud",
            "speaker",
            "three"
        ],
        "index": 1128
    },
    {
        "name": "loudspeaker",
        "code": "📢",
        "keywords": [
            "announcement",
            "loudspeaker",
            "communication",
            "loud",
            "public address"
        ],
        "index": 1129
    },
    {
        "name": "mega",
        "code": "📣",
        "keywords": [
            "mega",
            "cheering",
            "communication",
            "megaphone"
        ],
        "index": 1130
    },
    {
        "name": "postal_horn",
        "code": "📯",
        "keywords": [
            "postal_horn",
            "communication",
            "entertainment",
            "horn",
            "post",
            "postal"
        ],
        "index": 1131
    },
    {
        "name": "bell",
        "code": "🔔",
        "keywords": [
            "sound",
            "notification",
            "bell"
        ],
        "index": 1132
    },
    {
        "name": "no_bell",
        "code": "🔕",
        "keywords": [
            "volume",
            "off",
            "no_bell",
            "bell",
            "forbidden",
            "mute",
            "no",
            "not",
            "prohibited",
            "quiet",
            "silent"
        ],
        "index": 1133
    },
    {
        "name": "musical_score",
        "code": "🎼",
        "keywords": [
            "musical_score",
            "activity",
            "entertainment",
            "music",
            "score"
        ],
        "index": 1134
    },
    {
        "name": "musical_note",
        "code": "🎵",
        "keywords": [
            "musical_note",
            "activity",
            "entertainment",
            "music",
            "note"
        ],
        "index": 1135
    },
    {
        "name": "notes",
        "code": "🎶",
        "keywords": [
            "music",
            "notes",
            "activity",
            "entertainment",
            "note"
        ],
        "index": 1136
    },
    {
        "name": "studio_microphone",
        "code": "🎙️",
        "keywords": [
            "podcast",
            "studio_microphone"
        ],
        "index": 1137
    },
    {
        "name": "level_slider",
        "code": "🎚️",
        "keywords": [
            "level_slider"
        ],
        "index": 1138
    },
    {
        "name": "control_knobs",
        "code": "🎛️",
        "keywords": [
            "control_knobs"
        ],
        "index": 1139
    },
    {
        "name": "microphone",
        "code": "🎤",
        "keywords": [
            "sing",
            "microphone",
            "activity",
            "entertainment",
            "karaoke",
            "mic"
        ],
        "index": 1140
    },
    {
        "name": "headphones",
        "code": "🎧",
        "keywords": [
            "music",
            "earphones",
            "headphones",
            "activity",
            "earbud",
            "entertainment",
            "headphone"
        ],
        "index": 1141
    },
    {
        "name": "radio",
        "code": "📻",
        "keywords": [
            "podcast",
            "radio",
            "entertainment",
            "video"
        ],
        "index": 1142
    },
    {
        "name": "saxophone",
        "code": "🎷",
        "keywords": [
            "saxophone",
            "activity",
            "entertainment",
            "instrument",
            "music",
            "sax"
        ],
        "index": 1143
    },
    {
        "name": "accordion",
        "code": "🪗",
        "keywords": [
            "accordion"
        ],
        "index": 1144
    },
    {
        "name": "guitar",
        "code": "🎸",
        "keywords": [
            "rock",
            "guitar",
            "activity",
            "entertainment",
            "instrument",
            "music"
        ],
        "index": 1145
    },
    {
        "name": "musical_keyboard",
        "code": "🎹",
        "keywords": [
            "piano",
            "musical_keyboard",
            "activity",
            "entertainment",
            "instrument",
            "keyboard",
            "music"
        ],
        "index": 1146
    },
    {
        "name": "trumpet",
        "code": "🎺",
        "keywords": [
            "trumpet",
            "activity",
            "entertainment",
            "instrument",
            "music"
        ],
        "index": 1147
    },
    {
        "name": "violin",
        "code": "🎻",
        "keywords": [
            "violin",
            "activity",
            "entertainment",
            "instrument",
            "music"
        ],
        "index": 1148
    },
    {
        "name": "banjo",
        "code": "🪕",
        "keywords": [
            "banjo"
        ],
        "index": 1149
    },
    {
        "name": "drum",
        "code": "🥁",
        "keywords": [
            "drum",
            "drumsticks",
            "music"
        ],
        "index": 1150
    },
    {
        "name": "long_drum",
        "code": "🪘",
        "keywords": [
            "long_drum"
        ],
        "index": 1151
    },
    {
        "name": "iphone",
        "code": "📱",
        "keywords": [
            "smartphone",
            "mobile",
            "iphone",
            "cell",
            "communication",
            "phone",
            "telephone"
        ],
        "index": 1152
    },
    {
        "name": "calling",
        "code": "📲",
        "keywords": [
            "call",
            "incoming",
            "calling",
            "arrow",
            "cell",
            "communication",
            "mobile",
            "phone",
            "receive",
            "telephone"
        ],
        "index": 1153
    },
    {
        "name": "phone",
        "code": "☎️",
        "keywords": [
            "phone",
            "telephone"
        ],
        "index": 1154
    },
    {
        "name": "telephone_receiver",
        "code": "📞",
        "keywords": [
            "phone",
            "call",
            "telephone_receiver",
            "communication",
            "receiver",
            "telephone"
        ],
        "index": 1155
    },
    {
        "name": "pager",
        "code": "📟",
        "keywords": [
            "pager",
            "communication"
        ],
        "index": 1156
    },
    {
        "name": "fax",
        "code": "📠",
        "keywords": [
            "fax",
            "communication"
        ],
        "index": 1157
    },
    {
        "name": "battery",
        "code": "🔋",
        "keywords": [
            "power",
            "battery"
        ],
        "index": 1158
    },
    {
        "name": "electric_plug",
        "code": "🔌",
        "keywords": [
            "electric_plug",
            "electric",
            "electricity",
            "plug"
        ],
        "index": 1159
    },
    {
        "name": "computer",
        "code": "💻",
        "keywords": [
            "desktop",
            "screen",
            "computer",
            "pc",
            "personal"
        ],
        "index": 1160
    },
    {
        "name": "desktop_computer",
        "code": "🖥️",
        "keywords": [
            "desktop_computer"
        ],
        "index": 1161
    },
    {
        "name": "printer",
        "code": "🖨️",
        "keywords": [
            "printer"
        ],
        "index": 1162
    },
    {
        "name": "keyboard",
        "code": "⌨️",
        "keywords": [
            "keyboard",
            "computer"
        ],
        "index": 1163
    },
    {
        "name": "computer_mouse",
        "code": "🖱️",
        "keywords": [
            "computer_mouse"
        ],
        "index": 1164
    },
    {
        "name": "trackball",
        "code": "🖲️",
        "keywords": [
            "trackball"
        ],
        "index": 1165
    },
    {
        "name": "minidisc",
        "code": "💽",
        "keywords": [
            "minidisc",
            "computer",
            "disk",
            "entertainment",
            "minidisk",
            "optical"
        ],
        "index": 1166
    },
    {
        "name": "floppy_disk",
        "code": "💾",
        "keywords": [
            "save",
            "floppy_disk",
            "computer",
            "disk",
            "floppy"
        ],
        "index": 1167
    },
    {
        "name": "cd",
        "code": "💿",
        "keywords": [
            "cd",
            "blu-ray",
            "computer",
            "disk",
            "dvd",
            "optical"
        ],
        "index": 1168
    },
    {
        "name": "dvd",
        "code": "📀",
        "keywords": [
            "dvd",
            "blu-ray",
            "cd",
            "computer",
            "disk",
            "entertainment",
            "optical"
        ],
        "index": 1169
    },
    {
        "name": "abacus",
        "code": "🧮",
        "keywords": [
            "abacus"
        ],
        "index": 1170
    },
    {
        "name": "movie_camera",
        "code": "🎥",
        "keywords": [
            "film",
            "video",
            "movie_camera",
            "activity",
            "camera",
            "cinema",
            "entertainment",
            "movie"
        ],
        "index": 1171
    },
    {
        "name": "film_strip",
        "code": "🎞️",
        "keywords": [
            "film_strip"
        ],
        "index": 1172
    },
    {
        "name": "film_projector",
        "code": "📽️",
        "keywords": [
            "film_projector"
        ],
        "index": 1173
    },
    {
        "name": "clapper",
        "code": "🎬",
        "keywords": [
            "film",
            "clapper",
            "activity",
            "entertainment",
            "movie"
        ],
        "index": 1174
    },
    {
        "name": "tv",
        "code": "📺",
        "keywords": [
            "tv",
            "entertainment",
            "television",
            "video"
        ],
        "index": 1175
    },
    {
        "name": "camera",
        "code": "📷",
        "keywords": [
            "photo",
            "camera",
            "entertainment",
            "video"
        ],
        "index": 1176
    },
    {
        "name": "camera_flash",
        "code": "📸",
        "keywords": [
            "photo",
            "camera_flash",
            "camera",
            "flash",
            "video"
        ],
        "index": 1177
    },
    {
        "name": "video_camera",
        "code": "📹",
        "keywords": [
            "video_camera",
            "camera",
            "entertainment",
            "video"
        ],
        "index": 1178
    },
    {
        "name": "vhs",
        "code": "📼",
        "keywords": [
            "vhs",
            "entertainment",
            "tape",
            "video",
            "videocassette"
        ],
        "index": 1179
    },
    {
        "name": "mag",
        "code": "🔍",
        "keywords": [
            "search",
            "zoom",
            "mag",
            "glass",
            "magnifying",
            "tool"
        ],
        "index": 1180
    },
    {
        "name": "mag_right",
        "code": "🔎",
        "keywords": [
            "mag_right",
            "glass",
            "magnifying",
            "search",
            "tool"
        ],
        "index": 1181
    },
    {
        "name": "candle",
        "code": "🕯️",
        "keywords": [
            "candle"
        ],
        "index": 1182
    },
    {
        "name": "bulb",
        "code": "💡",
        "keywords": [
            "idea",
            "light",
            "bulb",
            "comic",
            "electric"
        ],
        "index": 1183
    },
    {
        "name": "flashlight",
        "code": "🔦",
        "keywords": [
            "flashlight",
            "electric",
            "light",
            "tool",
            "torch"
        ],
        "index": 1184
    },
    {
        "name": "izakaya_lantern",
        "code": "🏮",
        "keywords": [
            "izakaya_lantern",
            "lantern",
            "bar",
            "japanese",
            "light",
            "red"
        ],
        "index": 1185
    },
    {
        "name": "diya_lamp",
        "code": "🪔",
        "keywords": [
            "diya_lamp"
        ],
        "index": 1186
    },
    {
        "name": "notebook_with_decorative_cover",
        "code": "📔",
        "keywords": [
            "notebook_with_decorative_cover",
            "book",
            "cover",
            "decorated",
            "notebook"
        ],
        "index": 1187
    },
    {
        "name": "closed_book",
        "code": "📕",
        "keywords": [
            "closed_book",
            "book",
            "closed"
        ],
        "index": 1188
    },
    {
        "name": "book",
        "code": "📖",
        "keywords": [
            "book",
            "open_book",
            "open"
        ],
        "index": 1189
    },
    {
        "name": "green_book",
        "code": "📗",
        "keywords": [
            "green_book",
            "book",
            "green"
        ],
        "index": 1190
    },
    {
        "name": "blue_book",
        "code": "📘",
        "keywords": [
            "blue_book",
            "blue",
            "book"
        ],
        "index": 1191
    },
    {
        "name": "orange_book",
        "code": "📙",
        "keywords": [
            "orange_book",
            "book",
            "orange"
        ],
        "index": 1192
    },
    {
        "name": "books",
        "code": "📚",
        "keywords": [
            "library",
            "books",
            "book"
        ],
        "index": 1193
    },
    {
        "name": "notebook",
        "code": "📓",
        "keywords": [
            "notebook"
        ],
        "index": 1194
    },
    {
        "name": "ledger",
        "code": "📒",
        "keywords": [
            "ledger",
            "notebook"
        ],
        "index": 1195
    },
    {
        "name": "page_with_curl",
        "code": "📃",
        "keywords": [
            "page_with_curl",
            "curl",
            "document",
            "page"
        ],
        "index": 1196
    },
    {
        "name": "scroll",
        "code": "📜",
        "keywords": [
            "document",
            "scroll",
            "paper"
        ],
        "index": 1197
    },
    {
        "name": "page_facing_up",
        "code": "📄",
        "keywords": [
            "document",
            "page_facing_up",
            "page"
        ],
        "index": 1198
    },
    {
        "name": "newspaper",
        "code": "📰",
        "keywords": [
            "press",
            "newspaper",
            "communication",
            "news",
            "paper"
        ],
        "index": 1199
    },
    {
        "name": "newspaper_roll",
        "code": "🗞️",
        "keywords": [
            "press",
            "newspaper_roll"
        ],
        "index": 1200
    },
    {
        "name": "bookmark_tabs",
        "code": "📑",
        "keywords": [
            "bookmark_tabs",
            "bookmark",
            "mark",
            "marker",
            "tabs"
        ],
        "index": 1201
    },
    {
        "name": "bookmark",
        "code": "🔖",
        "keywords": [
            "bookmark",
            "mark"
        ],
        "index": 1202
    },
    {
        "name": "label",
        "code": "🏷️",
        "keywords": [
            "tag",
            "label"
        ],
        "index": 1203
    },
    {
        "name": "moneybag",
        "code": "💰",
        "keywords": [
            "dollar",
            "cream",
            "moneybag",
            "bag",
            "money"
        ],
        "index": 1204
    },
    {
        "name": "coin",
        "code": "🪙",
        "keywords": [
            "coin"
        ],
        "index": 1205
    },
    {
        "name": "yen",
        "code": "💴",
        "keywords": [
            "yen",
            "bank",
            "banknote",
            "bill",
            "currency",
            "money",
            "note"
        ],
        "index": 1206
    },
    {
        "name": "dollar",
        "code": "💵",
        "keywords": [
            "money",
            "dollar",
            "bank",
            "banknote",
            "bill",
            "currency",
            "note"
        ],
        "index": 1207
    },
    {
        "name": "euro",
        "code": "💶",
        "keywords": [
            "euro",
            "bank",
            "banknote",
            "bill",
            "currency",
            "money",
            "note"
        ],
        "index": 1208
    },
    {
        "name": "pound",
        "code": "💷",
        "keywords": [
            "pound",
            "bank",
            "banknote",
            "bill",
            "currency",
            "money",
            "note"
        ],
        "index": 1209
    },
    {
        "name": "money_with_wings",
        "code": "💸",
        "keywords": [
            "dollar",
            "money_with_wings",
            "bank",
            "banknote",
            "bill",
            "fly",
            "money",
            "note",
            "wings"
        ],
        "index": 1210
    },
    {
        "name": "credit_card",
        "code": "💳",
        "keywords": [
            "subscription",
            "credit_card",
            "bank",
            "card",
            "credit",
            "money"
        ],
        "index": 1211
    },
    {
        "name": "receipt",
        "code": "🧾",
        "keywords": [
            "receipt"
        ],
        "index": 1212
    },
    {
        "name": "chart",
        "code": "💹",
        "keywords": [
            "chart",
            "bank",
            "currency",
            "graph",
            "growth",
            "market",
            "money",
            "rise",
            "trend",
            "upward",
            "yen"
        ],
        "index": 1213
    },
    {
        "name": "envelope",
        "code": "✉️",
        "keywords": [
            "letter",
            "email",
            "envelope",
            "e-mail"
        ],
        "index": 1214
    },
    {
        "name": "email",
        "code": "📧",
        "keywords": [
            "email",
            "e-mail",
            "communication",
            "letter",
            "mail"
        ],
        "index": 1215
    },
    {
        "name": "incoming_envelope",
        "code": "📨",
        "keywords": [
            "incoming_envelope",
            "communication",
            "e-mail",
            "email",
            "envelope",
            "incoming",
            "letter",
            "mail",
            "receive"
        ],
        "index": 1216
    },
    {
        "name": "envelope_with_arrow",
        "code": "📩",
        "keywords": [
            "envelope_with_arrow",
            "arrow",
            "communication",
            "down",
            "e-mail",
            "email",
            "envelope",
            "letter",
            "mail",
            "outgoing",
            "sent"
        ],
        "index": 1217
    },
    {
        "name": "outbox_tray",
        "code": "📤",
        "keywords": [
            "outbox_tray",
            "box",
            "communication",
            "letter",
            "mail",
            "outbox",
            "sent",
            "tray"
        ],
        "index": 1218
    },
    {
        "name": "inbox_tray",
        "code": "📥",
        "keywords": [
            "inbox_tray",
            "box",
            "communication",
            "inbox",
            "letter",
            "mail",
            "receive",
            "tray"
        ],
        "index": 1219
    },
    {
        "name": "package",
        "code": "📦",
        "keywords": [
            "shipping",
            "package",
            "box",
            "communication",
            "parcel"
        ],
        "index": 1220
    },
    {
        "name": "mailbox",
        "code": "📫",
        "keywords": [
            "mailbox",
            "closed",
            "communication",
            "flag",
            "mail",
            "postbox"
        ],
        "index": 1221
    },
    {
        "name": "mailbox_closed",
        "code": "📪",
        "keywords": [
            "mailbox_closed",
            "closed",
            "communication",
            "flag",
            "lowered",
            "mail",
            "mailbox",
            "postbox"
        ],
        "index": 1222
    },
    {
        "name": "mailbox_with_mail",
        "code": "📬",
        "keywords": [
            "mailbox_with_mail",
            "communication",
            "flag",
            "mail",
            "mailbox",
            "open",
            "postbox"
        ],
        "index": 1223
    },
    {
        "name": "mailbox_with_no_mail",
        "code": "📭",
        "keywords": [
            "mailbox_with_no_mail",
            "communication",
            "flag",
            "lowered",
            "mail",
            "mailbox",
            "open",
            "postbox"
        ],
        "index": 1224
    },
    {
        "name": "postbox",
        "code": "📮",
        "keywords": [
            "postbox",
            "communication",
            "mail",
            "mailbox"
        ],
        "index": 1225
    },
    {
        "name": "ballot_box",
        "code": "🗳️",
        "keywords": [
            "ballot_box"
        ],
        "index": 1226
    },
    {
        "name": "pencil2",
        "code": "✏️",
        "keywords": [
            "pencil2"
        ],
        "index": 1227
    },
    {
        "name": "black_nib",
        "code": "✒️",
        "keywords": [
            "black_nib",
            "nib",
            "pen"
        ],
        "index": 1228
    },
    {
        "name": "fountain_pen",
        "code": "🖋️",
        "keywords": [
            "fountain_pen"
        ],
        "index": 1229
    },
    {
        "name": "pen",
        "code": "🖊️",
        "keywords": [
            "pen"
        ],
        "index": 1230
    },
    {
        "name": "paintbrush",
        "code": "🖌️",
        "keywords": [
            "paintbrush"
        ],
        "index": 1231
    },
    {
        "name": "crayon",
        "code": "🖍️",
        "keywords": [
            "crayon"
        ],
        "index": 1232
    },
    {
        "name": "memo",
        "code": "📝",
        "keywords": [
            "document",
            "note",
            "memo",
            "pencil",
            "communication"
        ],
        "index": 1233
    },
    {
        "name": "briefcase",
        "code": "💼",
        "keywords": [
            "business",
            "briefcase"
        ],
        "index": 1234
    },
    {
        "name": "file_folder",
        "code": "📁",
        "keywords": [
            "directory",
            "file_folder",
            "file",
            "folder"
        ],
        "index": 1235
    },
    {
        "name": "open_file_folder",
        "code": "📂",
        "keywords": [
            "open_file_folder",
            "file",
            "folder",
            "open"
        ],
        "index": 1236
    },
    {
        "name": "card_index_dividers",
        "code": "🗂️",
        "keywords": [
            "card_index_dividers"
        ],
        "index": 1237
    },
    {
        "name": "date",
        "code": "📅",
        "keywords": [
            "calendar",
            "schedule",
            "date"
        ],
        "index": 1238
    },
    {
        "name": "calendar",
        "code": "📆",
        "keywords": [
            "schedule",
            "calendar"
        ],
        "index": 1239
    },
    {
        "name": "spiral_notepad",
        "code": "🗒️",
        "keywords": [
            "spiral_notepad"
        ],
        "index": 1240
    },
    {
        "name": "spiral_calendar",
        "code": "🗓️",
        "keywords": [
            "spiral_calendar"
        ],
        "index": 1241
    },
    {
        "name": "card_index",
        "code": "📇",
        "keywords": [
            "card_index",
            "card",
            "index",
            "rolodex"
        ],
        "index": 1242
    },
    {
        "name": "chart_with_upwards_trend",
        "code": "📈",
        "keywords": [
            "graph",
            "metrics",
            "chart_with_upwards_trend",
            "chart",
            "growth",
            "trend",
            "upward"
        ],
        "index": 1243
    },
    {
        "name": "chart_with_downwards_trend",
        "code": "📉",
        "keywords": [
            "graph",
            "metrics",
            "chart_with_downwards_trend",
            "chart",
            "down",
            "trend"
        ],
        "index": 1244
    },
    {
        "name": "bar_chart",
        "code": "📊",
        "keywords": [
            "stats",
            "metrics",
            "bar_chart",
            "bar",
            "chart",
            "graph"
        ],
        "index": 1245
    },
    {
        "name": "clipboard",
        "code": "📋",
        "keywords": [
            "clipboard"
        ],
        "index": 1246
    },
    {
        "name": "pushpin",
        "code": "📌",
        "keywords": [
            "location",
            "pushpin",
            "pin"
        ],
        "index": 1247
    },
    {
        "name": "round_pushpin",
        "code": "📍",
        "keywords": [
            "location",
            "round_pushpin",
            "pin",
            "pushpin"
        ],
        "index": 1248
    },
    {
        "name": "paperclip",
        "code": "📎",
        "keywords": [
            "paperclip"
        ],
        "index": 1249
    },
    {
        "name": "paperclips",
        "code": "🖇️",
        "keywords": [
            "paperclips"
        ],
        "index": 1250
    },
    {
        "name": "straight_ruler",
        "code": "📏",
        "keywords": [
            "straight_ruler",
            "ruler",
            "straight edge"
        ],
        "index": 1251
    },
    {
        "name": "triangular_ruler",
        "code": "📐",
        "keywords": [
            "triangular_ruler",
            "ruler",
            "set",
            "triangle"
        ],
        "index": 1252
    },
    {
        "name": "scissors",
        "code": "✂️",
        "keywords": [
            "cut",
            "scissors",
            "tool"
        ],
        "index": 1253
    },
    {
        "name": "card_file_box",
        "code": "🗃️",
        "keywords": [
            "card_file_box"
        ],
        "index": 1254
    },
    {
        "name": "file_cabinet",
        "code": "🗄️",
        "keywords": [
            "file_cabinet"
        ],
        "index": 1255
    },
    {
        "name": "wastebasket",
        "code": "🗑️",
        "keywords": [
            "trash",
            "wastebasket"
        ],
        "index": 1256
    },
    {
        "name": "lock",
        "code": "🔒",
        "keywords": [
            "security",
            "private",
            "lock",
            "closed"
        ],
        "index": 1257
    },
    {
        "name": "unlock",
        "code": "🔓",
        "keywords": [
            "security",
            "unlock",
            "lock",
            "open"
        ],
        "index": 1258
    },
    {
        "name": "lock_with_ink_pen",
        "code": "🔏",
        "keywords": [
            "lock_with_ink_pen",
            "ink",
            "lock",
            "nib",
            "pen",
            "privacy"
        ],
        "index": 1259
    },
    {
        "name": "closed_lock_with_key",
        "code": "🔐",
        "keywords": [
            "security",
            "closed_lock_with_key",
            "closed",
            "key",
            "lock",
            "secure"
        ],
        "index": 1260
    },
    {
        "name": "key",
        "code": "🔑",
        "keywords": [
            "lock",
            "password",
            "key"
        ],
        "index": 1261
    },
    {
        "name": "old_key",
        "code": "🗝️",
        "keywords": [
            "old_key"
        ],
        "index": 1262
    },
    {
        "name": "hammer",
        "code": "🔨",
        "keywords": [
            "tool",
            "hammer"
        ],
        "index": 1263
    },
    {
        "name": "axe",
        "code": "🪓",
        "keywords": [
            "axe"
        ],
        "index": 1264
    },
    {
        "name": "pick",
        "code": "⛏️",
        "keywords": [
            "pick"
        ],
        "index": 1265
    },
    {
        "name": "hammer_and_pick",
        "code": "⚒️",
        "keywords": [
            "hammer_and_pick",
            "hammer",
            "pick",
            "tool"
        ],
        "index": 1266
    },
    {
        "name": "hammer_and_wrench",
        "code": "🛠️",
        "keywords": [
            "hammer_and_wrench"
        ],
        "index": 1267
    },
    {
        "name": "dagger",
        "code": "🗡️",
        "keywords": [
            "dagger"
        ],
        "index": 1268
    },
    {
        "name": "crossed_swords",
        "code": "⚔️",
        "keywords": [
            "crossed_swords",
            "crossed",
            "swords",
            "weapon"
        ],
        "index": 1269
    },
    {
        "name": "gun",
        "code": "🔫",
        "keywords": [
            "shoot",
            "weapon",
            "gun",
            "handgun",
            "pistol",
            "revolver",
            "tool"
        ],
        "index": 1270
    },
    {
        "name": "boomerang",
        "code": "🪃",
        "keywords": [
            "boomerang"
        ],
        "index": 1271
    },
    {
        "name": "bow_and_arrow",
        "code": "🏹",
        "keywords": [
            "archery",
            "bow_and_arrow",
            "archer",
            "arrow",
            "bow",
            "sagittarius",
            "tool",
            "weapon",
            "zodiac"
        ],
        "index": 1272
    },
    {
        "name": "shield",
        "code": "🛡️",
        "keywords": [
            "shield"
        ],
        "index": 1273
    },
    {
        "name": "carpentry_saw",
        "code": "🪚",
        "keywords": [
            "carpentry_saw"
        ],
        "index": 1274
    },
    {
        "name": "wrench",
        "code": "🔧",
        "keywords": [
            "tool",
            "wrench"
        ],
        "index": 1275
    },
    {
        "name": "screwdriver",
        "code": "🪛",
        "keywords": [
            "screwdriver"
        ],
        "index": 1276
    },
    {
        "name": "nut_and_bolt",
        "code": "🔩",
        "keywords": [
            "nut_and_bolt",
            "bolt",
            "nut",
            "tool"
        ],
        "index": 1277
    },
    {
        "name": "gear",
        "code": "⚙️",
        "keywords": [
            "gear",
            "tool"
        ],
        "index": 1278
    },
    {
        "name": "clamp",
        "code": "🗜️",
        "keywords": [
            "clamp"
        ],
        "index": 1279
    },
    {
        "name": "balance_scale",
        "code": "⚖️",
        "keywords": [
            "balance_scale",
            "balance",
            "justice",
            "libra",
            "scales",
            "tool",
            "weight",
            "zodiac"
        ],
        "index": 1280
    },
    {
        "name": "probing_cane",
        "code": "🦯",
        "keywords": [
            "probing_cane"
        ],
        "index": 1281
    },
    {
        "name": "link",
        "code": "🔗",
        "keywords": [
            "link"
        ],
        "index": 1282
    },
    {
        "name": "chains",
        "code": "⛓️",
        "keywords": [
            "chains"
        ],
        "index": 1283
    },
    {
        "name": "hook",
        "code": "🪝",
        "keywords": [
            "hook"
        ],
        "index": 1284
    },
    {
        "name": "toolbox",
        "code": "🧰",
        "keywords": [
            "toolbox"
        ],
        "index": 1285
    },
    {
        "name": "magnet",
        "code": "🧲",
        "keywords": [
            "magnet"
        ],
        "index": 1286
    },
    {
        "name": "ladder",
        "code": "🪜",
        "keywords": [
            "ladder"
        ],
        "index": 1287
    },
    {
        "name": "alembic",
        "code": "⚗️",
        "keywords": [
            "alembic",
            "chemistry",
            "tool"
        ],
        "index": 1288
    },
    {
        "name": "test_tube",
        "code": "🧪",
        "keywords": [
            "test_tube"
        ],
        "index": 1289
    },
    {
        "name": "petri_dish",
        "code": "🧫",
        "keywords": [
            "petri_dish"
        ],
        "index": 1290
    },
    {
        "name": "dna",
        "code": "🧬",
        "keywords": [
            "dna"
        ],
        "index": 1291
    },
    {
        "name": "microscope",
        "code": "🔬",
        "keywords": [
            "science",
            "laboratory",
            "investigate",
            "microscope",
            "tool"
        ],
        "index": 1292
    },
    {
        "name": "telescope",
        "code": "🔭",
        "keywords": [
            "telescope",
            "tool"
        ],
        "index": 1293
    },
    {
        "name": "satellite",
        "code": "📡",
        "keywords": [
            "signal",
            "satellite",
            "antenna",
            "communication",
            "dish"
        ],
        "index": 1294
    },
    {
        "name": "syringe",
        "code": "💉",
        "keywords": [
            "health",
            "hospital",
            "needle",
            "syringe",
            "doctor",
            "medicine",
            "shot",
            "sick",
            "tool"
        ],
        "index": 1295
    },
    {
        "name": "drop_of_blood",
        "code": "🩸",
        "keywords": [
            "drop_of_blood"
        ],
        "index": 1296
    },
    {
        "name": "pill",
        "code": "💊",
        "keywords": [
            "health",
            "medicine",
            "pill",
            "doctor",
            "sick"
        ],
        "index": 1297
    },
    {
        "name": "adhesive_bandage",
        "code": "🩹",
        "keywords": [
            "adhesive_bandage"
        ],
        "index": 1298
    },
    {
        "name": "stethoscope",
        "code": "🩺",
        "keywords": [
            "stethoscope"
        ],
        "index": 1299
    },
    {
        "name": "door",
        "code": "🚪",
        "keywords": [
            "door"
        ],
        "index": 1300
    },
    {
        "name": "elevator",
        "code": "🛗",
        "keywords": [
            "elevator"
        ],
        "index": 1301
    },
    {
        "name": "mirror",
        "code": "🪞",
        "keywords": [
            "mirror"
        ],
        "index": 1302
    },
    {
        "name": "window",
        "code": "🪟",
        "keywords": [
            "window"
        ],
        "index": 1303
    },
    {
        "name": "bed",
        "code": "🛏️",
        "keywords": [
            "bed"
        ],
        "index": 1304
    },
    {
        "name": "couch_and_lamp",
        "code": "🛋️",
        "keywords": [
            "couch_and_lamp"
        ],
        "index": 1305
    },
    {
        "name": "chair",
        "code": "🪑",
        "keywords": [
            "chair"
        ],
        "index": 1306
    },
    {
        "name": "toilet",
        "code": "🚽",
        "keywords": [
            "wc",
            "toilet"
        ],
        "index": 1307
    },
    {
        "name": "plunger",
        "code": "🪠",
        "keywords": [
            "plunger"
        ],
        "index": 1308
    },
    {
        "name": "shower",
        "code": "🚿",
        "keywords": [
            "bath",
            "shower",
            "water"
        ],
        "index": 1309
    },
    {
        "name": "bathtub",
        "code": "🛁",
        "keywords": [
            "bathtub",
            "bath"
        ],
        "index": 1310
    },
    {
        "name": "mouse_trap",
        "code": "🪤",
        "keywords": [
            "mouse_trap"
        ],
        "index": 1311
    },
    {
        "name": "razor",
        "code": "🪒",
        "keywords": [
            "razor"
        ],
        "index": 1312
    },
    {
        "name": "lotion_bottle",
        "code": "🧴",
        "keywords": [
            "lotion_bottle"
        ],
        "index": 1313
    },
    {
        "name": "safety_pin",
        "code": "🧷",
        "keywords": [
            "safety_pin"
        ],
        "index": 1314
    },
    {
        "name": "broom",
        "code": "🧹",
        "keywords": [
            "broom"
        ],
        "index": 1315
    },
    {
        "name": "basket",
        "code": "🧺",
        "keywords": [
            "basket"
        ],
        "index": 1316
    },
    {
        "name": "roll_of_paper",
        "code": "🧻",
        "keywords": [
            "toilet",
            "roll_of_paper"
        ],
        "index": 1317
    },
    {
        "name": "bucket",
        "code": "🪣",
        "keywords": [
            "bucket"
        ],
        "index": 1318
    },
    {
        "name": "soap",
        "code": "🧼",
        "keywords": [
            "soap"
        ],
        "index": 1319
    },
    {
        "name": "toothbrush",
        "code": "🪥",
        "keywords": [
            "toothbrush"
        ],
        "index": 1320
    },
    {
        "name": "sponge",
        "code": "🧽",
        "keywords": [
            "sponge"
        ],
        "index": 1321
    },
    {
        "name": "fire_extinguisher",
        "code": "🧯",
        "keywords": [
            "fire_extinguisher"
        ],
        "index": 1322
    },
    {
        "name": "shopping_cart",
        "code": "🛒",
        "keywords": [
            "shopping_cart",
            "cart",
            "shopping",
            "trolley"
        ],
        "index": 1323
    },
    {
        "name": "smoking",
        "code": "🚬",
        "keywords": [
            "cigarette",
            "smoking",
            "activity"
        ],
        "index": 1324
    },
    {
        "name": "coffin",
        "code": "⚰️",
        "keywords": [
            "funeral",
            "coffin"
        ],
        "index": 1325
    },
    {
        "name": "headstone",
        "code": "🪦",
        "keywords": [
            "headstone"
        ],
        "index": 1326
    },
    {
        "name": "funeral_urn",
        "code": "⚱️",
        "keywords": [
            "funeral_urn"
        ],
        "index": 1327
    },
    {
        "name": "moyai",
        "code": "🗿",
        "keywords": [
            "stone",
            "moyai",
            "face",
            "statue"
        ],
        "index": 1328
    },
    {
        "name": "placard",
        "code": "🪧",
        "keywords": [
            "placard"
        ],
        "index": 1329
    },
    {
        "code": "symbols",
        "header": true,
        "index": 1330
    },
    {
        "name": "atm",
        "code": "🏧",
        "keywords": [
            "atm",
            "automated",
            "bank",
            "teller"
        ],
        "index": 1331
    },
    {
        "name": "put_litter_in_its_place",
        "code": "🚮",
        "keywords": [
            "put_litter_in_its_place",
            "litter",
            "litterbox"
        ],
        "index": 1332
    },
    {
        "name": "potable_water",
        "code": "🚰",
        "keywords": [
            "potable_water",
            "drink",
            "potable",
            "water"
        ],
        "index": 1333
    },
    {
        "name": "wheelchair",
        "code": "♿",
        "keywords": [
            "accessibility",
            "wheelchair",
            "access"
        ],
        "index": 1334
    },
    {
        "name": "mens",
        "code": "🚹",
        "keywords": [
            "mens",
            "lavatory",
            "man",
            "restroom",
            "wc"
        ],
        "index": 1335
    },
    {
        "name": "womens",
        "code": "🚺",
        "keywords": [
            "womens",
            "lavatory",
            "restroom",
            "wc",
            "woman"
        ],
        "index": 1336
    },
    {
        "name": "restroom",
        "code": "🚻",
        "keywords": [
            "toilet",
            "restroom",
            "lavatory",
            "wc"
        ],
        "index": 1337
    },
    {
        "name": "baby_symbol",
        "code": "🚼",
        "keywords": [
            "baby_symbol",
            "baby",
            "changing"
        ],
        "index": 1338
    },
    {
        "name": "wc",
        "code": "🚾",
        "keywords": [
            "toilet",
            "restroom",
            "wc",
            "closet",
            "lavatory",
            "water"
        ],
        "index": 1339
    },
    {
        "name": "passport_control",
        "code": "🛂",
        "keywords": [
            "passport_control",
            "control",
            "passport"
        ],
        "index": 1340
    },
    {
        "name": "customs",
        "code": "🛃",
        "keywords": [
            "customs"
        ],
        "index": 1341
    },
    {
        "name": "baggage_claim",
        "code": "🛄",
        "keywords": [
            "airport",
            "baggage_claim",
            "baggage",
            "claim"
        ],
        "index": 1342
    },
    {
        "name": "left_luggage",
        "code": "🛅",
        "keywords": [
            "left_luggage",
            "baggage",
            "left luggage",
            "locker",
            "luggage"
        ],
        "index": 1343
    },
    {
        "name": "warning",
        "code": "⚠️",
        "keywords": [
            "wip",
            "warning"
        ],
        "index": 1344
    },
    {
        "name": "children_crossing",
        "code": "🚸",
        "keywords": [
            "children_crossing",
            "child",
            "crossing",
            "pedestrian",
            "traffic"
        ],
        "index": 1345
    },
    {
        "name": "no_entry",
        "code": "⛔",
        "keywords": [
            "limit",
            "no_entry",
            "entry",
            "forbidden",
            "no",
            "not",
            "prohibited",
            "traffic"
        ],
        "index": 1346
    },
    {
        "name": "no_entry_sign",
        "code": "🚫",
        "keywords": [
            "block",
            "forbidden",
            "no_entry_sign",
            "entry",
            "no",
            "not",
            "prohibited"
        ],
        "index": 1347
    },
    {
        "name": "no_bicycles",
        "code": "🚳",
        "keywords": [
            "no_bicycles",
            "bicycle",
            "bike",
            "forbidden",
            "no",
            "not",
            "prohibited",
            "vehicle"
        ],
        "index": 1348
    },
    {
        "name": "no_smoking",
        "code": "🚭",
        "keywords": [
            "no_smoking",
            "forbidden",
            "no",
            "not",
            "prohibited",
            "smoking"
        ],
        "index": 1349
    },
    {
        "name": "do_not_litter",
        "code": "🚯",
        "keywords": [
            "do_not_litter",
            "forbidden",
            "litter",
            "no",
            "not",
            "prohibited"
        ],
        "index": 1350
    },
    {
        "name": "non-potable_water",
        "code": "🚱",
        "keywords": [
            "non-potable_water",
            "drink",
            "forbidden",
            "no",
            "not",
            "potable",
            "prohibited",
            "water"
        ],
        "index": 1351
    },
    {
        "name": "no_pedestrians",
        "code": "🚷",
        "keywords": [
            "no_pedestrians",
            "forbidden",
            "no",
            "not",
            "pedestrian",
            "prohibited"
        ],
        "index": 1352
    },
    {
        "name": "no_mobile_phones",
        "code": "📵",
        "keywords": [
            "no_mobile_phones",
            "cell",
            "communication",
            "forbidden",
            "mobile",
            "no",
            "not",
            "phone",
            "prohibited",
            "telephone"
        ],
        "index": 1353
    },
    {
        "name": "underage",
        "code": "🔞",
        "keywords": [
            "underage",
            "18",
            "age restriction",
            "eighteen",
            "forbidden",
            "no",
            "not",
            "prohibited"
        ],
        "index": 1354
    },
    {
        "name": "radioactive",
        "code": "☢️",
        "keywords": [
            "radioactive"
        ],
        "index": 1355
    },
    {
        "name": "biohazard",
        "code": "☣️",
        "keywords": [
            "biohazard"
        ],
        "index": 1356
    },
    {
        "name": "arrow_up",
        "code": "⬆️",
        "keywords": [
            "arrow_up"
        ],
        "index": 1357
    },
    {
        "name": "arrow_upper_right",
        "code": "↗️",
        "keywords": [
            "arrow_upper_right",
            "arrow",
            "direction",
            "intercardinal",
            "northeast"
        ],
        "index": 1358
    },
    {
        "name": "arrow_right",
        "code": "➡️",
        "keywords": [
            "arrow_right"
        ],
        "index": 1359
    },
    {
        "name": "arrow_lower_right",
        "code": "↘️",
        "keywords": [
            "arrow_lower_right",
            "arrow",
            "direction",
            "intercardinal",
            "southeast"
        ],
        "index": 1360
    },
    {
        "name": "arrow_down",
        "code": "⬇️",
        "keywords": [
            "arrow_down"
        ],
        "index": 1361
    },
    {
        "name": "arrow_lower_left",
        "code": "↙️",
        "keywords": [
            "arrow_lower_left",
            "arrow",
            "direction",
            "intercardinal",
            "southwest"
        ],
        "index": 1362
    },
    {
        "name": "arrow_left",
        "code": "⬅️",
        "keywords": [
            "arrow_left"
        ],
        "index": 1363
    },
    {
        "name": "arrow_upper_left",
        "code": "↖️",
        "keywords": [
            "arrow_upper_left",
            "arrow",
            "direction",
            "intercardinal",
            "northwest"
        ],
        "index": 1364
    },
    {
        "name": "arrow_up_down",
        "code": "↕️",
        "keywords": [
            "arrow_up_down",
            "arrow"
        ],
        "index": 1365
    },
    {
        "name": "left_right_arrow",
        "code": "↔️",
        "keywords": [
            "left_right_arrow",
            "arrow"
        ],
        "index": 1366
    },
    {
        "name": "leftwards_arrow_with_hook",
        "code": "↩️",
        "keywords": [
            "return",
            "leftwards_arrow_with_hook"
        ],
        "index": 1367
    },
    {
        "name": "arrow_right_hook",
        "code": "↪️",
        "keywords": [
            "arrow_right_hook"
        ],
        "index": 1368
    },
    {
        "name": "arrow_heading_up",
        "code": "⤴️",
        "keywords": [
            "arrow_heading_up",
            "arrow",
            "up"
        ],
        "index": 1369
    },
    {
        "name": "arrow_heading_down",
        "code": "⤵️",
        "keywords": [
            "arrow_heading_down",
            "arrow",
            "down"
        ],
        "index": 1370
    },
    {
        "name": "arrows_clockwise",
        "code": "🔃",
        "keywords": [
            "arrows_clockwise",
            "arrow",
            "clockwise",
            "reload"
        ],
        "index": 1371
    },
    {
        "name": "arrows_counterclockwise",
        "code": "🔄",
        "keywords": [
            "sync",
            "arrows_counterclockwise",
            "anticlockwise",
            "arrow",
            "counterclockwise",
            "withershins"
        ],
        "index": 1372
    },
    {
        "name": "back",
        "code": "🔙",
        "keywords": [
            "back",
            "arrow"
        ],
        "index": 1373
    },
    {
        "name": "end",
        "code": "🔚",
        "keywords": [
            "end",
            "arrow"
        ],
        "index": 1374
    },
    {
        "name": "on",
        "code": "🔛",
        "keywords": [
            "on",
            "arrow",
            "mark"
        ],
        "index": 1375
    },
    {
        "name": "soon",
        "code": "🔜",
        "keywords": [
            "soon",
            "arrow"
        ],
        "index": 1376
    },
    {
        "name": "top",
        "code": "🔝",
        "keywords": [
            "top",
            "arrow",
            "up"
        ],
        "index": 1377
    },
    {
        "name": "place_of_worship",
        "code": "🛐",
        "keywords": [
            "place_of_worship",
            "religion",
            "worship"
        ],
        "index": 1378
    },
    {
        "name": "atom_symbol",
        "code": "⚛️",
        "keywords": [
            "atom_symbol"
        ],
        "index": 1379
    },
    {
        "name": "om",
        "code": "🕉️",
        "keywords": [
            "om"
        ],
        "index": 1380
    },
    {
        "name": "star_of_david",
        "code": "✡️",
        "keywords": [
            "star_of_david",
            "david",
            "jew",
            "jewish",
            "religion",
            "star"
        ],
        "index": 1381
    },
    {
        "name": "wheel_of_dharma",
        "code": "☸️",
        "keywords": [
            "wheel_of_dharma",
            "buddhist",
            "dharma",
            "religion",
            "wheel"
        ],
        "index": 1382
    },
    {
        "name": "yin_yang",
        "code": "☯️",
        "keywords": [
            "yin_yang"
        ],
        "index": 1383
    },
    {
        "name": "latin_cross",
        "code": "✝️",
        "keywords": [
            "latin_cross"
        ],
        "index": 1384
    },
    {
        "name": "orthodox_cross",
        "code": "☦️",
        "keywords": [
            "orthodox_cross",
            "christian",
            "cross",
            "religion"
        ],
        "index": 1385
    },
    {
        "name": "star_and_crescent",
        "code": "☪️",
        "keywords": [
            "star_and_crescent"
        ],
        "index": 1386
    },
    {
        "name": "peace_symbol",
        "code": "☮️",
        "keywords": [
            "peace_symbol"
        ],
        "index": 1387
    },
    {
        "name": "menorah",
        "code": "🕎",
        "keywords": [
            "menorah",
            "candelabrum",
            "candlestick",
            "religion"
        ],
        "index": 1388
    },
    {
        "name": "six_pointed_star",
        "code": "🔯",
        "keywords": [
            "six_pointed_star",
            "fortune",
            "star"
        ],
        "index": 1389
    },
    {
        "name": "aries",
        "code": "♈",
        "keywords": [
            "aries",
            "ram",
            "zodiac"
        ],
        "index": 1390
    },
    {
        "name": "taurus",
        "code": "♉",
        "keywords": [
            "taurus",
            "bull",
            "ox",
            "zodiac"
        ],
        "index": 1391
    },
    {
        "name": "gemini",
        "code": "♊",
        "keywords": [
            "gemini",
            "twins",
            "zodiac"
        ],
        "index": 1392
    },
    {
        "name": "cancer",
        "code": "♋",
        "keywords": [
            "cancer",
            "crab",
            "zodiac"
        ],
        "index": 1393
    },
    {
        "name": "leo",
        "code": "♌",
        "keywords": [
            "leo",
            "lion",
            "zodiac"
        ],
        "index": 1394
    },
    {
        "name": "virgo",
        "code": "♍",
        "keywords": [
            "virgo",
            "maiden",
            "virgin",
            "zodiac"
        ],
        "index": 1395
    },
    {
        "name": "libra",
        "code": "♎",
        "keywords": [
            "libra",
            "balance",
            "justice",
            "scales",
            "zodiac"
        ],
        "index": 1396
    },
    {
        "name": "scorpius",
        "code": "♏",
        "keywords": [
            "scorpius",
            "scorpio",
            "scorpion",
            "zodiac"
        ],
        "index": 1397
    },
    {
        "name": "sagittarius",
        "code": "♐",
        "keywords": [
            "sagittarius",
            "archer",
            "zodiac"
        ],
        "index": 1398
    },
    {
        "name": "capricorn",
        "code": "♑",
        "keywords": [
            "capricorn",
            "goat",
            "zodiac"
        ],
        "index": 1399
    },
    {
        "name": "aquarius",
        "code": "♒",
        "keywords": [
            "aquarius",
            "bearer",
            "water",
            "zodiac"
        ],
        "index": 1400
    },
    {
        "name": "pisces",
        "code": "♓",
        "keywords": [
            "pisces",
            "fish",
            "zodiac"
        ],
        "index": 1401
    },
    {
        "name": "ophiuchus",
        "code": "⛎",
        "keywords": [
            "ophiuchus",
            "bearer",
            "serpent",
            "snake",
            "zodiac"
        ],
        "index": 1402
    },
    {
        "name": "twisted_rightwards_arrows",
        "code": "🔀",
        "keywords": [
            "shuffle",
            "twisted_rightwards_arrows",
            "arrow",
            "crossed"
        ],
        "index": 1403
    },
    {
        "name": "repeat",
        "code": "🔁",
        "keywords": [
            "loop",
            "repeat",
            "arrow",
            "clockwise"
        ],
        "index": 1404
    },
    {
        "name": "repeat_one",
        "code": "🔂",
        "keywords": [
            "repeat_one",
            "arrow",
            "clockwise",
            "once"
        ],
        "index": 1405
    },
    {
        "name": "arrow_forward",
        "code": "▶️",
        "keywords": [
            "arrow_forward"
        ],
        "index": 1406
    },
    {
        "name": "fast_forward",
        "code": "⏩",
        "keywords": [
            "fast_forward",
            "arrow",
            "double",
            "fast",
            "forward"
        ],
        "index": 1407
    },
    {
        "name": "next_track_button",
        "code": "⏭️",
        "keywords": [
            "next_track_button"
        ],
        "index": 1408
    },
    {
        "name": "play_or_pause_button",
        "code": "⏯️",
        "keywords": [
            "play_or_pause_button"
        ],
        "index": 1409
    },
    {
        "name": "arrow_backward",
        "code": "◀️",
        "keywords": [
            "arrow_backward"
        ],
        "index": 1410
    },
    {
        "name": "rewind",
        "code": "⏪",
        "keywords": [
            "rewind",
            "arrow",
            "double"
        ],
        "index": 1411
    },
    {
        "name": "previous_track_button",
        "code": "⏮️",
        "keywords": [
            "previous_track_button"
        ],
        "index": 1412
    },
    {
        "name": "arrow_up_small",
        "code": "🔼",
        "keywords": [
            "arrow_up_small",
            "arrow",
            "button",
            "red"
        ],
        "index": 1413
    },
    {
        "name": "arrow_double_up",
        "code": "⏫",
        "keywords": [
            "arrow_double_up",
            "arrow",
            "double"
        ],
        "index": 1414
    },
    {
        "name": "arrow_down_small",
        "code": "🔽",
        "keywords": [
            "arrow_down_small",
            "arrow",
            "button",
            "down",
            "red"
        ],
        "index": 1415
    },
    {
        "name": "arrow_double_down",
        "code": "⏬",
        "keywords": [
            "arrow_double_down",
            "arrow",
            "double",
            "down"
        ],
        "index": 1416
    },
    {
        "name": "pause_button",
        "code": "⏸️",
        "keywords": [
            "pause_button"
        ],
        "index": 1417
    },
    {
        "name": "stop_button",
        "code": "⏹️",
        "keywords": [
            "stop_button"
        ],
        "index": 1418
    },
    {
        "name": "record_button",
        "code": "⏺️",
        "keywords": [
            "record_button"
        ],
        "index": 1419
    },
    {
        "name": "eject_button",
        "code": "⏏️",
        "keywords": [
            "eject_button"
        ],
        "index": 1420
    },
    {
        "name": "cinema",
        "code": "🎦",
        "keywords": [
            "film",
            "movie",
            "cinema",
            "activity",
            "camera",
            "entertainment"
        ],
        "index": 1421
    },
    {
        "name": "low_brightness",
        "code": "🔅",
        "keywords": [
            "low_brightness",
            "brightness",
            "dim",
            "low"
        ],
        "index": 1422
    },
    {
        "name": "high_brightness",
        "code": "🔆",
        "keywords": [
            "high_brightness",
            "bright",
            "brightness"
        ],
        "index": 1423
    },
    {
        "name": "signal_strength",
        "code": "📶",
        "keywords": [
            "wifi",
            "signal_strength",
            "antenna",
            "bar",
            "cell",
            "communication",
            "mobile",
            "phone",
            "signal",
            "telephone"
        ],
        "index": 1424
    },
    {
        "name": "vibration_mode",
        "code": "📳",
        "keywords": [
            "vibration_mode",
            "cell",
            "communication",
            "mobile",
            "mode",
            "phone",
            "telephone",
            "vibration"
        ],
        "index": 1425
    },
    {
        "name": "mobile_phone_off",
        "code": "📴",
        "keywords": [
            "mute",
            "off",
            "mobile_phone_off",
            "cell",
            "communication",
            "mobile",
            "phone",
            "telephone"
        ],
        "index": 1426
    },
    {
        "name": "female_sign",
        "code": "♀️",
        "keywords": [
            "female_sign"
        ],
        "index": 1427
    },
    {
        "name": "male_sign",
        "code": "♂️",
        "keywords": [
            "male_sign"
        ],
        "index": 1428
    },
    {
        "name": "transgender_symbol",
        "code": "⚧️",
        "keywords": [
            "transgender_symbol"
        ],
        "index": 1429
    },
    {
        "name": "heavy_multiplication_x",
        "code": "✖️",
        "keywords": [
            "heavy_multiplication_x",
            "cancel",
            "multiplication",
            "multiply",
            "x"
        ],
        "index": 1430
    },
    {
        "name": "heavy_plus_sign",
        "code": "➕",
        "keywords": [
            "heavy_plus_sign",
            "math",
            "plus"
        ],
        "index": 1431
    },
    {
        "name": "heavy_minus_sign",
        "code": "➖",
        "keywords": [
            "heavy_minus_sign",
            "math",
            "minus"
        ],
        "index": 1432
    },
    {
        "name": "heavy_division_sign",
        "code": "➗",
        "keywords": [
            "heavy_division_sign",
            "division",
            "math"
        ],
        "index": 1433
    },
    {
        "name": "infinity",
        "code": "♾️",
        "keywords": [
            "infinity"
        ],
        "index": 1434
    },
    {
        "name": "bangbang",
        "code": "‼️",
        "keywords": [
            "bangbang"
        ],
        "index": 1435
    },
    {
        "name": "interrobang",
        "code": "⁉️",
        "keywords": [
            "interrobang",
            "exclamation",
            "mark",
            "punctuation",
            "question"
        ],
        "index": 1436
    },
    {
        "name": "question",
        "code": "❓",
        "keywords": [
            "confused",
            "question",
            "mark",
            "punctuation"
        ],
        "index": 1437
    },
    {
        "name": "grey_question",
        "code": "❔",
        "keywords": [
            "grey_question",
            "mark",
            "outlined",
            "punctuation",
            "question"
        ],
        "index": 1438
    },
    {
        "name": "grey_exclamation",
        "code": "❕",
        "keywords": [
            "grey_exclamation",
            "exclamation",
            "mark",
            "outlined",
            "punctuation"
        ],
        "index": 1439
    },
    {
        "name": "exclamation",
        "code": "❗",
        "keywords": [
            "bang",
            "exclamation",
            "heavy_exclamation_mark",
            "mark",
            "punctuation"
        ],
        "index": 1440
    },
    {
        "name": "wavy_dash",
        "code": "〰️",
        "keywords": [
            "wavy_dash",
            "dash",
            "punctuation",
            "wavy"
        ],
        "index": 1441
    },
    {
        "name": "currency_exchange",
        "code": "💱",
        "keywords": [
            "currency_exchange",
            "bank",
            "currency",
            "exchange",
            "money"
        ],
        "index": 1442
    },
    {
        "name": "heavy_dollar_sign",
        "code": "💲",
        "keywords": [
            "heavy_dollar_sign",
            "currency",
            "dollar",
            "money"
        ],
        "index": 1443
    },
    {
        "name": "medical_symbol",
        "code": "⚕️",
        "keywords": [
            "medical_symbol"
        ],
        "index": 1444
    },
    {
        "name": "recycle",
        "code": "♻️",
        "keywords": [
            "environment",
            "green",
            "recycle"
        ],
        "index": 1445
    },
    {
        "name": "fleur_de_lis",
        "code": "⚜️",
        "keywords": [
            "fleur_de_lis"
        ],
        "index": 1446
    },
    {
        "name": "trident",
        "code": "🔱",
        "keywords": [
            "trident",
            "anchor",
            "emblem",
            "ship",
            "tool"
        ],
        "index": 1447
    },
    {
        "name": "name_badge",
        "code": "📛",
        "keywords": [
            "name_badge",
            "badge",
            "name"
        ],
        "index": 1448
    },
    {
        "name": "beginner",
        "code": "🔰",
        "keywords": [
            "beginner",
            "chevron",
            "green",
            "japanese",
            "leaf",
            "tool",
            "yellow"
        ],
        "index": 1449
    },
    {
        "name": "o",
        "code": "⭕",
        "keywords": [
            "o",
            "circle"
        ],
        "index": 1450
    },
    {
        "name": "white_check_mark",
        "code": "✅",
        "keywords": [
            "white_check_mark",
            "check",
            "mark"
        ],
        "index": 1451
    },
    {
        "name": "ballot_box_with_check",
        "code": "☑️",
        "keywords": [
            "ballot_box_with_check",
            "ballot",
            "box",
            "check"
        ],
        "index": 1452
    },
    {
        "name": "heavy_check_mark",
        "code": "✔️",
        "keywords": [
            "heavy_check_mark",
            "check",
            "mark"
        ],
        "index": 1453
    },
    {
        "name": "x",
        "code": "❌",
        "keywords": [
            "x",
            "cancel",
            "mark",
            "multiplication",
            "multiply"
        ],
        "index": 1454
    },
    {
        "name": "negative_squared_cross_mark",
        "code": "❎",
        "keywords": [
            "negative_squared_cross_mark",
            "mark",
            "square"
        ],
        "index": 1455
    },
    {
        "name": "curly_loop",
        "code": "➰",
        "keywords": [
            "curly_loop",
            "curl",
            "loop"
        ],
        "index": 1456
    },
    {
        "name": "loop",
        "code": "➿",
        "keywords": [
            "loop",
            "curl",
            "double"
        ],
        "index": 1457
    },
    {
        "name": "part_alternation_mark",
        "code": "〽️",
        "keywords": [
            "part_alternation_mark"
        ],
        "index": 1458
    },
    {
        "name": "eight_spoked_asterisk",
        "code": "✳️",
        "keywords": [
            "eight_spoked_asterisk",
            "asterisk"
        ],
        "index": 1459
    },
    {
        "name": "eight_pointed_black_star",
        "code": "✴️",
        "keywords": [
            "eight_pointed_black_star",
            "star"
        ],
        "index": 1460
    },
    {
        "name": "sparkle",
        "code": "❇️",
        "keywords": [
            "sparkle"
        ],
        "index": 1461
    },
    {
        "name": "copyright",
        "code": "©️",
        "keywords": [
            "copyright"
        ],
        "index": 1462
    },
    {
        "name": "registered",
        "code": "®️",
        "keywords": [
            "registered"
        ],
        "index": 1463
    },
    {
        "name": "tm",
        "code": "™️",
        "keywords": [
            "trademark",
            "tm",
            "mark"
        ],
        "index": 1464
    },
    {
        "name": "hash",
        "code": "#️⃣",
        "keywords": [
            "number",
            "hash",
            "keycap",
            "pound"
        ],
        "index": 1465
    },
    {
        "name": "asterisk",
        "code": "*️⃣",
        "keywords": [
            "asterisk",
            "keycap",
            "star"
        ],
        "index": 1466
    },
    {
        "name": "zero",
        "code": "0️⃣",
        "keywords": [
            "zero",
            "0",
            "keycap"
        ],
        "index": 1467
    },
    {
        "name": "one",
        "code": "1️⃣",
        "keywords": [
            "one",
            "1",
            "keycap"
        ],
        "index": 1468
    },
    {
        "name": "two",
        "code": "2️⃣",
        "keywords": [
            "two",
            "2",
            "keycap"
        ],
        "index": 1469
    },
    {
        "name": "three",
        "code": "3️⃣",
        "keywords": [
            "three",
            "3",
            "keycap"
        ],
        "index": 1470
    },
    {
        "name": "four",
        "code": "4️⃣",
        "keywords": [
            "four",
            "4",
            "keycap"
        ],
        "index": 1471
    },
    {
        "name": "five",
        "code": "5️⃣",
        "keywords": [
            "five",
            "5",
            "keycap"
        ],
        "index": 1472
    },
    {
        "name": "six",
        "code": "6️⃣",
        "keywords": [
            "six",
            "6",
            "keycap"
        ],
        "index": 1473
    },
    {
        "name": "seven",
        "code": "7️⃣",
        "keywords": [
            "seven",
            "7",
            "keycap"
        ],
        "index": 1474
    },
    {
        "name": "eight",
        "code": "8️⃣",
        "keywords": [
            "eight",
            "8",
            "keycap"
        ],
        "index": 1475
    },
    {
        "name": "nine",
        "code": "9️⃣",
        "keywords": [
            "nine",
            "9",
            "keycap"
        ],
        "index": 1476
    },
    {
        "name": "keycap_ten",
        "code": "🔟",
        "keywords": [
            "keycap_ten",
            "10",
            "keycap",
            "ten"
        ],
        "index": 1477
    },
    {
        "name": "capital_abcd",
        "code": "🔠",
        "keywords": [
            "letters",
            "capital_abcd",
            "input",
            "latin",
            "uppercase"
        ],
        "index": 1478
    },
    {
        "name": "abcd",
        "code": "🔡",
        "keywords": [
            "abcd",
            "input",
            "latin",
            "letters",
            "lowercase"
        ],
        "index": 1479
    },
    {
        "name": "1234",
        "code": "🔢",
        "keywords": [
            "numbers",
            "1234",
            "input"
        ],
        "index": 1480
    },
    {
        "name": "symbols",
        "code": "🔣",
        "keywords": [
            "symbols",
            "input"
        ],
        "index": 1481
    },
    {
        "name": "abc",
        "code": "🔤",
        "keywords": [
            "alphabet",
            "abc",
            "input",
            "latin",
            "letters"
        ],
        "index": 1482
    },
    {
        "name": "a",
        "code": "🅰️",
        "keywords": [
            "a"
        ],
        "index": 1483
    },
    {
        "name": "ab",
        "code": "🆎",
        "keywords": [
            "ab",
            "blood"
        ],
        "index": 1484
    },
    {
        "name": "b",
        "code": "🅱️",
        "keywords": [
            "b"
        ],
        "index": 1485
    },
    {
        "name": "cl",
        "code": "🆑",
        "keywords": [
            "cl"
        ],
        "index": 1486
    },
    {
        "name": "cool",
        "code": "🆒",
        "keywords": [
            "cool"
        ],
        "index": 1487
    },
    {
        "name": "free",
        "code": "🆓",
        "keywords": [
            "free"
        ],
        "index": 1488
    },
    {
        "name": "information_source",
        "code": "ℹ️",
        "keywords": [
            "information_source",
            "i",
            "information"
        ],
        "index": 1489
    },
    {
        "name": "id",
        "code": "🆔",
        "keywords": [
            "id",
            "identity"
        ],
        "index": 1490
    },
    {
        "name": "m",
        "code": "Ⓜ️",
        "keywords": [
            "m"
        ],
        "index": 1491
    },
    {
        "name": "new",
        "code": "🆕",
        "keywords": [
            "fresh",
            "new"
        ],
        "index": 1492
    },
    {
        "name": "ng",
        "code": "🆖",
        "keywords": [
            "ng"
        ],
        "index": 1493
    },
    {
        "name": "o2",
        "code": "🅾️",
        "keywords": [
            "o2"
        ],
        "index": 1494
    },
    {
        "name": "ok",
        "code": "🆗",
        "keywords": [
            "yes",
            "ok"
        ],
        "index": 1495
    },
    {
        "name": "parking",
        "code": "🅿️",
        "keywords": [
            "parking"
        ],
        "index": 1496
    },
    {
        "name": "sos",
        "code": "🆘",
        "keywords": [
            "help",
            "emergency",
            "sos"
        ],
        "index": 1497
    },
    {
        "name": "up",
        "code": "🆙",
        "keywords": [
            "up",
            "mark"
        ],
        "index": 1498
    },
    {
        "name": "vs",
        "code": "🆚",
        "keywords": [
            "vs",
            "versus"
        ],
        "index": 1499
    },
    {
        "name": "koko",
        "code": "🈁",
        "keywords": [
            "koko",
            "japanese"
        ],
        "index": 1500
    },
    {
        "name": "sa",
        "code": "🈂️",
        "keywords": [
            "sa"
        ],
        "index": 1501
    },
    {
        "name": "u6708",
        "code": "🈷️",
        "keywords": [
            "u6708"
        ],
        "index": 1502
    },
    {
        "name": "u6709",
        "code": "🈶",
        "keywords": [
            "u6709",
            "japanese"
        ],
        "index": 1503
    },
    {
        "name": "u6307",
        "code": "🈯",
        "keywords": [
            "u6307",
            "japanese"
        ],
        "index": 1504
    },
    {
        "name": "ideograph_advantage",
        "code": "🉐",
        "keywords": [
            "ideograph_advantage",
            "japanese"
        ],
        "index": 1505
    },
    {
        "name": "u5272",
        "code": "🈹",
        "keywords": [
            "u5272",
            "japanese"
        ],
        "index": 1506
    },
    {
        "name": "u7121",
        "code": "🈚",
        "keywords": [
            "u7121",
            "japanese"
        ],
        "index": 1507
    },
    {
        "name": "u7981",
        "code": "🈲",
        "keywords": [
            "u7981",
            "japanese"
        ],
        "index": 1508
    },
    {
        "name": "accept",
        "code": "🉑",
        "keywords": [
            "accept",
            "chinese"
        ],
        "index": 1509
    },
    {
        "name": "u7533",
        "code": "🈸",
        "keywords": [
            "u7533",
            "chinese"
        ],
        "index": 1510
    },
    {
        "name": "u5408",
        "code": "🈴",
        "keywords": [
            "u5408",
            "chinese"
        ],
        "index": 1511
    },
    {
        "name": "u7a7a",
        "code": "🈳",
        "keywords": [
            "u7a7a",
            "chinese"
        ],
        "index": 1512
    },
    {
        "name": "congratulations",
        "code": "㊗️",
        "keywords": [
            "congratulations",
            "chinese",
            "congratulation",
            "ideograph"
        ],
        "index": 1513
    },
    {
        "name": "secret",
        "code": "㊙️",
        "keywords": [
            "secret",
            "chinese",
            "ideograph"
        ],
        "index": 1514
    },
    {
        "name": "u55b6",
        "code": "🈺",
        "keywords": [
            "u55b6",
            "chinese"
        ],
        "index": 1515
    },
    {
        "name": "u6e80",
        "code": "🈵",
        "keywords": [
            "u6e80",
            "chinese"
        ],
        "index": 1516
    },
    {
        "name": "red_circle",
        "code": "🔴",
        "keywords": [
            "red_circle",
            "circle",
            "geometric",
            "red"
        ],
        "index": 1517
    },
    {
        "name": "orange_circle",
        "code": "🟠",
        "keywords": [
            "orange_circle"
        ],
        "index": 1518
    },
    {
        "name": "yellow_circle",
        "code": "🟡",
        "keywords": [
            "yellow_circle"
        ],
        "index": 1519
    },
    {
        "name": "green_circle",
        "code": "🟢",
        "keywords": [
            "green_circle"
        ],
        "index": 1520
    },
    {
        "name": "large_blue_circle",
        "code": "🔵",
        "keywords": [
            "large_blue_circle",
            "blue",
            "circle",
            "geometric"
        ],
        "index": 1521
    },
    {
        "name": "purple_circle",
        "code": "🟣",
        "keywords": [
            "purple_circle"
        ],
        "index": 1522
    },
    {
        "name": "brown_circle",
        "code": "🟤",
        "keywords": [
            "brown_circle"
        ],
        "index": 1523
    },
    {
        "name": "black_circle",
        "code": "⚫",
        "keywords": [
            "black_circle",
            "circle",
            "geometric"
        ],
        "index": 1524
    },
    {
        "name": "white_circle",
        "code": "⚪",
        "keywords": [
            "white_circle",
            "circle",
            "geometric"
        ],
        "index": 1525
    },
    {
        "name": "red_square",
        "code": "🟥",
        "keywords": [
            "red_square"
        ],
        "index": 1526
    },
    {
        "name": "orange_square",
        "code": "🟧",
        "keywords": [
            "orange_square"
        ],
        "index": 1527
    },
    {
        "name": "yellow_square",
        "code": "🟨",
        "keywords": [
            "yellow_square"
        ],
        "index": 1528
    },
    {
        "name": "green_square",
        "code": "🟩",
        "keywords": [
            "green_square"
        ],
        "index": 1529
    },
    {
        "name": "blue_square",
        "code": "🟦",
        "keywords": [
            "blue_square"
        ],
        "index": 1530
    },
    {
        "name": "purple_square",
        "code": "🟪",
        "keywords": [
            "purple_square"
        ],
        "index": 1531
    },
    {
        "name": "brown_square",
        "code": "🟫",
        "keywords": [
            "brown_square"
        ],
        "index": 1532
    },
    {
        "name": "black_large_square",
        "code": "⬛",
        "keywords": [
            "black_large_square",
            "geometric",
            "square"
        ],
        "index": 1533
    },
    {
        "name": "white_large_square",
        "code": "⬜",
        "keywords": [
            "white_large_square",
            "geometric",
            "square"
        ],
        "index": 1534
    },
    {
        "name": "black_medium_square",
        "code": "◼️",
        "keywords": [
            "black_medium_square"
        ],
        "index": 1535
    },
    {
        "name": "white_medium_square",
        "code": "◻️",
        "keywords": [
            "white_medium_square"
        ],
        "index": 1536
    },
    {
        "name": "black_medium_small_square",
        "code": "◾",
        "keywords": [
            "black_medium_small_square",
            "geometric",
            "square"
        ],
        "index": 1537
    },
    {
        "name": "white_medium_small_square",
        "code": "◽",
        "keywords": [
            "white_medium_small_square",
            "geometric",
            "square"
        ],
        "index": 1538
    },
    {
        "name": "black_small_square",
        "code": "▪️",
        "keywords": [
            "black_small_square"
        ],
        "index": 1539
    },
    {
        "name": "white_small_square",
        "code": "▫️",
        "keywords": [
            "white_small_square"
        ],
        "index": 1540
    },
    {
        "name": "large_orange_diamond",
        "code": "🔶",
        "keywords": [
            "large_orange_diamond",
            "diamond",
            "geometric",
            "orange"
        ],
        "index": 1541
    },
    {
        "name": "large_blue_diamond",
        "code": "🔷",
        "keywords": [
            "large_blue_diamond",
            "blue",
            "diamond",
            "geometric"
        ],
        "index": 1542
    },
    {
        "name": "small_orange_diamond",
        "code": "🔸",
        "keywords": [
            "small_orange_diamond",
            "diamond",
            "geometric",
            "orange"
        ],
        "index": 1543
    },
    {
        "name": "small_blue_diamond",
        "code": "🔹",
        "keywords": [
            "small_blue_diamond",
            "blue",
            "diamond",
            "geometric"
        ],
        "index": 1544
    },
    {
        "name": "small_red_triangle",
        "code": "🔺",
        "keywords": [
            "small_red_triangle",
            "geometric",
            "red"
        ],
        "index": 1545
    },
    {
        "name": "small_red_triangle_down",
        "code": "🔻",
        "keywords": [
            "small_red_triangle_down",
            "down",
            "geometric",
            "red"
        ],
        "index": 1546
    },
    {
        "name": "diamond_shape_with_a_dot_inside",
        "code": "💠",
        "keywords": [
            "diamond_shape_with_a_dot_inside",
            "comic",
            "diamond",
            "geometric",
            "inside"
        ],
        "index": 1547
    },
    {
        "name": "radio_button",
        "code": "🔘",
        "keywords": [
            "radio_button",
            "button",
            "geometric",
            "radio"
        ],
        "index": 1548
    },
    {
        "name": "white_square_button",
        "code": "🔳",
        "keywords": [
            "white_square_button",
            "button",
            "geometric",
            "outlined",
            "square"
        ],
        "index": 1549
    },
    {
        "name": "black_square_button",
        "code": "🔲",
        "keywords": [
            "black_square_button",
            "button",
            "geometric",
            "square"
        ],
        "index": 1550
    },
    {
        "code": "flags",
        "header": true,
        "index": 1551
    },
    {
        "name": "checkered_flag",
        "code": "🏁",
        "keywords": [
            "milestone",
            "finish",
            "checkered_flag",
            "checkered",
            "chequered",
            "flag",
            "racing"
        ],
        "index": 1552
    },
    {
        "name": "triangular_flag_on_post",
        "code": "🚩",
        "keywords": [
            "triangular_flag_on_post",
            "flag",
            "post"
        ],
        "index": 1553
    },
    {
        "name": "crossed_flags",
        "code": "🎌",
        "keywords": [
            "crossed_flags",
            "activity",
            "celebration",
            "cross",
            "crossed",
            "flag",
            "japanese"
        ],
        "index": 1554
    },
    {
        "name": "black_flag",
        "code": "🏴",
        "keywords": [
            "black_flag",
            "flag",
            "waving"
        ],
        "index": 1555
    },
    {
        "name": "white_flag",
        "code": "🏳️",
        "keywords": [
            "white_flag"
        ],
        "index": 1556
    },
    {
        "name": "rainbow_flag",
        "code": "🏳️‍🌈",
        "keywords": [
            "pride",
            "rainbow_flag"
        ],
        "index": 1557
    },
    {
        "name": "transgender_flag",
        "code": "🏳️‍⚧️",
        "keywords": [
            "transgender_flag"
        ],
        "index": 1558
    },
    {
        "name": "pirate_flag",
        "code": "🏴‍☠️",
        "keywords": [
            "pirate_flag"
        ],
        "index": 1559
    },
    {
        "name": "ascension_island",
        "code": "🇦🇨",
        "keywords": [
            "ascension_island",
            "ascension",
            "flag",
            "island"
        ],
        "index": 1560
    },
    {
        "name": "andorra",
        "code": "🇦🇩",
        "keywords": [
            "andorra",
            "flag"
        ],
        "index": 1561
    },
    {
        "name": "united_arab_emirates",
        "code": "🇦🇪",
        "keywords": [
            "united_arab_emirates",
            "emirates",
            "flag",
            "uae",
            "united"
        ],
        "index": 1562
    },
    {
        "name": "afghanistan",
        "code": "🇦🇫",
        "keywords": [
            "afghanistan",
            "flag"
        ],
        "index": 1563
    },
    {
        "name": "antigua_barbuda",
        "code": "🇦🇬",
        "keywords": [
            "antigua_barbuda",
            "antigua",
            "barbuda",
            "flag"
        ],
        "index": 1564
    },
    {
        "name": "anguilla",
        "code": "🇦🇮",
        "keywords": [
            "anguilla",
            "flag"
        ],
        "index": 1565
    },
    {
        "name": "albania",
        "code": "🇦🇱",
        "keywords": [
            "albania",
            "flag"
        ],
        "index": 1566
    },
    {
        "name": "armenia",
        "code": "🇦🇲",
        "keywords": [
            "armenia",
            "flag"
        ],
        "index": 1567
    },
    {
        "name": "angola",
        "code": "🇦🇴",
        "keywords": [
            "angola",
            "flag"
        ],
        "index": 1568
    },
    {
        "name": "antarctica",
        "code": "🇦🇶",
        "keywords": [
            "antarctica",
            "flag"
        ],
        "index": 1569
    },
    {
        "name": "argentina",
        "code": "🇦🇷",
        "keywords": [
            "argentina",
            "flag"
        ],
        "index": 1570
    },
    {
        "name": "american_samoa",
        "code": "🇦🇸",
        "keywords": [
            "american_samoa",
            "american",
            "flag",
            "samoa"
        ],
        "index": 1571
    },
    {
        "name": "austria",
        "code": "🇦🇹",
        "keywords": [
            "austria",
            "flag"
        ],
        "index": 1572
    },
    {
        "name": "australia",
        "code": "🇦🇺",
        "keywords": [
            "australia",
            "flag"
        ],
        "index": 1573
    },
    {
        "name": "aruba",
        "code": "🇦🇼",
        "keywords": [
            "aruba",
            "flag"
        ],
        "index": 1574
    },
    {
        "name": "aland_islands",
        "code": "🇦🇽",
        "keywords": [
            "aland_islands",
            "åland",
            "flag"
        ],
        "index": 1575
    },
    {
        "name": "azerbaijan",
        "code": "🇦🇿",
        "keywords": [
            "azerbaijan",
            "flag"
        ],
        "index": 1576
    },
    {
        "name": "bosnia_herzegovina",
        "code": "🇧🇦",
        "keywords": [
            "bosnia_herzegovina",
            "bosnia",
            "flag",
            "herzegovina"
        ],
        "index": 1577
    },
    {
        "name": "barbados",
        "code": "🇧🇧",
        "keywords": [
            "barbados",
            "flag"
        ],
        "index": 1578
    },
    {
        "name": "bangladesh",
        "code": "🇧🇩",
        "keywords": [
            "bangladesh",
            "flag"
        ],
        "index": 1579
    },
    {
        "name": "belgium",
        "code": "🇧🇪",
        "keywords": [
            "belgium",
            "flag"
        ],
        "index": 1580
    },
    {
        "name": "burkina_faso",
        "code": "🇧🇫",
        "keywords": [
            "burkina_faso",
            "burkina faso",
            "flag"
        ],
        "index": 1581
    },
    {
        "name": "bulgaria",
        "code": "🇧🇬",
        "keywords": [
            "bulgaria",
            "flag"
        ],
        "index": 1582
    },
    {
        "name": "bahrain",
        "code": "🇧🇭",
        "keywords": [
            "bahrain",
            "flag"
        ],
        "index": 1583
    },
    {
        "name": "burundi",
        "code": "🇧🇮",
        "keywords": [
            "burundi",
            "flag"
        ],
        "index": 1584
    },
    {
        "name": "benin",
        "code": "🇧🇯",
        "keywords": [
            "benin",
            "flag"
        ],
        "index": 1585
    },
    {
        "name": "st_barthelemy",
        "code": "🇧🇱",
        "keywords": [
            "st_barthelemy",
            "barthelemy",
            "barthélemy",
            "flag",
            "saint"
        ],
        "index": 1586
    },
    {
        "name": "bermuda",
        "code": "🇧🇲",
        "keywords": [
            "bermuda",
            "flag"
        ],
        "index": 1587
    },
    {
        "name": "brunei",
        "code": "🇧🇳",
        "keywords": [
            "brunei",
            "darussalam",
            "flag"
        ],
        "index": 1588
    },
    {
        "name": "bolivia",
        "code": "🇧🇴",
        "keywords": [
            "bolivia",
            "flag"
        ],
        "index": 1589
    },
    {
        "name": "caribbean_netherlands",
        "code": "🇧🇶",
        "keywords": [
            "caribbean_netherlands",
            "bonaire",
            "caribbean",
            "eustatius",
            "flag",
            "netherlands",
            "saba",
            "sint"
        ],
        "index": 1590
    },
    {
        "name": "brazil",
        "code": "🇧🇷",
        "keywords": [
            "brazil",
            "flag"
        ],
        "index": 1591
    },
    {
        "name": "bahamas",
        "code": "🇧🇸",
        "keywords": [
            "bahamas",
            "flag"
        ],
        "index": 1592
    },
    {
        "name": "bhutan",
        "code": "🇧🇹",
        "keywords": [
            "bhutan",
            "flag"
        ],
        "index": 1593
    },
    {
        "name": "bouvet_island",
        "code": "🇧🇻",
        "keywords": [
            "bouvet_island",
            "bouvet",
            "flag",
            "island"
        ],
        "index": 1594
    },
    {
        "name": "botswana",
        "code": "🇧🇼",
        "keywords": [
            "botswana",
            "flag"
        ],
        "index": 1595
    },
    {
        "name": "belarus",
        "code": "🇧🇾",
        "keywords": [
            "belarus",
            "flag"
        ],
        "index": 1596
    },
    {
        "name": "belize",
        "code": "🇧🇿",
        "keywords": [
            "belize",
            "flag"
        ],
        "index": 1597
    },
    {
        "name": "canada",
        "code": "🇨🇦",
        "keywords": [
            "canada",
            "flag"
        ],
        "index": 1598
    },
    {
        "name": "cocos_islands",
        "code": "🇨🇨",
        "keywords": [
            "keeling",
            "cocos_islands",
            "cocos",
            "flag",
            "island"
        ],
        "index": 1599
    },
    {
        "name": "congo_kinshasa",
        "code": "🇨🇩",
        "keywords": [
            "congo_kinshasa",
            "congo",
            "congo-kinshasa",
            "democratic republic of congo",
            "drc",
            "flag",
            "kinshasa",
            "republic"
        ],
        "index": 1600
    },
    {
        "name": "central_african_republic",
        "code": "🇨🇫",
        "keywords": [
            "central_african_republic",
            "central african republic",
            "flag",
            "republic"
        ],
        "index": 1601
    },
    {
        "name": "congo_brazzaville",
        "code": "🇨🇬",
        "keywords": [
            "congo_brazzaville",
            "brazzaville",
            "congo",
            "congo republic",
            "congo-brazzaville",
            "flag",
            "republic",
            "republic of the congo"
        ],
        "index": 1602
    },
    {
        "name": "switzerland",
        "code": "🇨🇭",
        "keywords": [
            "switzerland",
            "flag"
        ],
        "index": 1603
    },
    {
        "name": "cote_divoire",
        "code": "🇨🇮",
        "keywords": [
            "ivory",
            "cote_divoire",
            "cote ivoire",
            "côte ivoire",
            "flag",
            "ivory coast"
        ],
        "index": 1604
    },
    {
        "name": "cook_islands",
        "code": "🇨🇰",
        "keywords": [
            "cook_islands",
            "cook",
            "flag",
            "island"
        ],
        "index": 1605
    },
    {
        "name": "chile",
        "code": "🇨🇱",
        "keywords": [
            "chile",
            "flag"
        ],
        "index": 1606
    },
    {
        "name": "cameroon",
        "code": "🇨🇲",
        "keywords": [
            "cameroon",
            "flag"
        ],
        "index": 1607
    },
    {
        "name": "cn",
        "code": "🇨🇳",
        "keywords": [
            "china",
            "cn",
            "flag"
        ],
        "index": 1608
    },
    {
        "name": "colombia",
        "code": "🇨🇴",
        "keywords": [
            "colombia",
            "flag"
        ],
        "index": 1609
    },
    {
        "name": "clipperton_island",
        "code": "🇨🇵",
        "keywords": [
            "clipperton_island",
            "clipperton",
            "flag",
            "island"
        ],
        "index": 1610
    },
    {
        "name": "costa_rica",
        "code": "🇨🇷",
        "keywords": [
            "costa_rica",
            "costa rica",
            "flag"
        ],
        "index": 1611
    },
    {
        "name": "cuba",
        "code": "🇨🇺",
        "keywords": [
            "cuba",
            "flag"
        ],
        "index": 1612
    },
    {
        "name": "cape_verde",
        "code": "🇨🇻",
        "keywords": [
            "cape_verde",
            "cabo",
            "cape",
            "flag",
            "verde"
        ],
        "index": 1613
    },
    {
        "name": "curacao",
        "code": "🇨🇼",
        "keywords": [
            "curacao",
            "antilles",
            "curaçao",
            "flag"
        ],
        "index": 1614
    },
    {
        "name": "christmas_island",
        "code": "🇨🇽",
        "keywords": [
            "christmas_island",
            "christmas",
            "flag",
            "island"
        ],
        "index": 1615
    },
    {
        "name": "cyprus",
        "code": "🇨🇾",
        "keywords": [
            "cyprus",
            "flag"
        ],
        "index": 1616
    },
    {
        "name": "czech_republic",
        "code": "🇨🇿",
        "keywords": [
            "czech_republic",
            "czech republic",
            "flag"
        ],
        "index": 1617
    },
    {
        "name": "de",
        "code": "🇩🇪",
        "keywords": [
            "flag",
            "germany",
            "de"
        ],
        "index": 1618
    },
    {
        "name": "diego_garcia",
        "code": "🇩🇬",
        "keywords": [
            "diego_garcia",
            "diego garcia",
            "flag"
        ],
        "index": 1619
    },
    {
        "name": "djibouti",
        "code": "🇩🇯",
        "keywords": [
            "djibouti",
            "flag"
        ],
        "index": 1620
    },
    {
        "name": "denmark",
        "code": "🇩🇰",
        "keywords": [
            "denmark",
            "flag"
        ],
        "index": 1621
    },
    {
        "name": "dominica",
        "code": "🇩🇲",
        "keywords": [
            "dominica",
            "flag"
        ],
        "index": 1622
    },
    {
        "name": "dominican_republic",
        "code": "🇩🇴",
        "keywords": [
            "dominican_republic",
            "dominican republic",
            "flag"
        ],
        "index": 1623
    },
    {
        "name": "algeria",
        "code": "🇩🇿",
        "keywords": [
            "algeria",
            "flag"
        ],
        "index": 1624
    },
    {
        "name": "ceuta_melilla",
        "code": "🇪🇦",
        "keywords": [
            "ceuta_melilla",
            "ceuta",
            "flag",
            "melilla"
        ],
        "index": 1625
    },
    {
        "name": "ecuador",
        "code": "🇪🇨",
        "keywords": [
            "ecuador",
            "flag"
        ],
        "index": 1626
    },
    {
        "name": "estonia",
        "code": "🇪🇪",
        "keywords": [
            "estonia",
            "flag"
        ],
        "index": 1627
    },
    {
        "name": "egypt",
        "code": "🇪🇬",
        "keywords": [
            "egypt",
            "flag"
        ],
        "index": 1628
    },
    {
        "name": "western_sahara",
        "code": "🇪🇭",
        "keywords": [
            "western_sahara",
            "flag",
            "sahara",
            "west",
            "western sahara"
        ],
        "index": 1629
    },
    {
        "name": "eritrea",
        "code": "🇪🇷",
        "keywords": [
            "eritrea",
            "flag"
        ],
        "index": 1630
    },
    {
        "name": "es",
        "code": "🇪🇸",
        "keywords": [
            "spain",
            "es",
            "flag"
        ],
        "index": 1631
    },
    {
        "name": "ethiopia",
        "code": "🇪🇹",
        "keywords": [
            "ethiopia",
            "flag"
        ],
        "index": 1632
    },
    {
        "name": "eu",
        "code": "🇪🇺",
        "keywords": [
            "eu",
            "european_union",
            "european union",
            "flag"
        ],
        "index": 1633
    },
    {
        "name": "finland",
        "code": "🇫🇮",
        "keywords": [
            "finland",
            "flag"
        ],
        "index": 1634
    },
    {
        "name": "fiji",
        "code": "🇫🇯",
        "keywords": [
            "fiji",
            "flag"
        ],
        "index": 1635
    },
    {
        "name": "falkland_islands",
        "code": "🇫🇰",
        "keywords": [
            "falkland_islands",
            "falkland",
            "falklands",
            "flag",
            "island",
            "islas",
            "malvinas"
        ],
        "index": 1636
    },
    {
        "name": "micronesia",
        "code": "🇫🇲",
        "keywords": [
            "micronesia",
            "flag"
        ],
        "index": 1637
    },
    {
        "name": "faroe_islands",
        "code": "🇫🇴",
        "keywords": [
            "faroe_islands",
            "faroe",
            "flag",
            "island"
        ],
        "index": 1638
    },
    {
        "name": "fr",
        "code": "🇫🇷",
        "keywords": [
            "france",
            "french",
            "fr",
            "flag"
        ],
        "index": 1639
    },
    {
        "name": "gabon",
        "code": "🇬🇦",
        "keywords": [
            "gabon",
            "flag"
        ],
        "index": 1640
    },
    {
        "name": "gb",
        "code": "🇬🇧",
        "keywords": [
            "flag",
            "british",
            "gb",
            "uk",
            "britain",
            "cornwall",
            "england",
            "great britain",
            "ireland",
            "northern ireland",
            "scotland",
            "union jack",
            "united",
            "united kingdom",
            "wales"
        ],
        "index": 1641
    },
    {
        "name": "grenada",
        "code": "🇬🇩",
        "keywords": [
            "grenada",
            "flag"
        ],
        "index": 1642
    },
    {
        "name": "georgia",
        "code": "🇬🇪",
        "keywords": [
            "georgia",
            "flag"
        ],
        "index": 1643
    },
    {
        "name": "french_guiana",
        "code": "🇬🇫",
        "keywords": [
            "french_guiana",
            "flag",
            "french",
            "guiana"
        ],
        "index": 1644
    },
    {
        "name": "guernsey",
        "code": "🇬🇬",
        "keywords": [
            "guernsey",
            "flag"
        ],
        "index": 1645
    },
    {
        "name": "ghana",
        "code": "🇬🇭",
        "keywords": [
            "ghana",
            "flag"
        ],
        "index": 1646
    },
    {
        "name": "gibraltar",
        "code": "🇬🇮",
        "keywords": [
            "gibraltar",
            "flag"
        ],
        "index": 1647
    },
    {
        "name": "greenland",
        "code": "🇬🇱",
        "keywords": [
            "greenland",
            "flag"
        ],
        "index": 1648
    },
    {
        "name": "gambia",
        "code": "🇬🇲",
        "keywords": [
            "gambia",
            "flag"
        ],
        "index": 1649
    },
    {
        "name": "guinea",
        "code": "🇬🇳",
        "keywords": [
            "guinea",
            "flag"
        ],
        "index": 1650
    },
    {
        "name": "guadeloupe",
        "code": "🇬🇵",
        "keywords": [
            "guadeloupe",
            "flag"
        ],
        "index": 1651
    },
    {
        "name": "equatorial_guinea",
        "code": "🇬🇶",
        "keywords": [
            "equatorial_guinea",
            "equatorial guinea",
            "flag",
            "guinea"
        ],
        "index": 1652
    },
    {
        "name": "greece",
        "code": "🇬🇷",
        "keywords": [
            "greece",
            "flag"
        ],
        "index": 1653
    },
    {
        "name": "south_georgia_south_sandwich_islands",
        "code": "🇬🇸",
        "keywords": [
            "south_georgia_south_sandwich_islands",
            "flag",
            "georgia",
            "island",
            "south",
            "south georgia",
            "south sandwich"
        ],
        "index": 1654
    },
    {
        "name": "guatemala",
        "code": "🇬🇹",
        "keywords": [
            "guatemala",
            "flag"
        ],
        "index": 1655
    },
    {
        "name": "guam",
        "code": "🇬🇺",
        "keywords": [
            "guam",
            "flag"
        ],
        "index": 1656
    },
    {
        "name": "guinea_bissau",
        "code": "🇬🇼",
        "keywords": [
            "guinea_bissau",
            "bissau",
            "flag",
            "guinea"
        ],
        "index": 1657
    },
    {
        "name": "guyana",
        "code": "🇬🇾",
        "keywords": [
            "guyana",
            "flag"
        ],
        "index": 1658
    },
    {
        "name": "hong_kong",
        "code": "🇭🇰",
        "keywords": [
            "hong_kong",
            "china",
            "flag",
            "hong kong"
        ],
        "index": 1659
    },
    {
        "name": "heard_mcdonald_islands",
        "code": "🇭🇲",
        "keywords": [
            "heard_mcdonald_islands",
            "flag",
            "heard",
            "island",
            "mcdonald"
        ],
        "index": 1660
    },
    {
        "name": "honduras",
        "code": "🇭🇳",
        "keywords": [
            "honduras",
            "flag"
        ],
        "index": 1661
    },
    {
        "name": "croatia",
        "code": "🇭🇷",
        "keywords": [
            "croatia",
            "flag"
        ],
        "index": 1662
    },
    {
        "name": "haiti",
        "code": "🇭🇹",
        "keywords": [
            "haiti",
            "flag"
        ],
        "index": 1663
    },
    {
        "name": "hungary",
        "code": "🇭🇺",
        "keywords": [
            "hungary",
            "flag"
        ],
        "index": 1664
    },
    {
        "name": "canary_islands",
        "code": "🇮🇨",
        "keywords": [
            "canary_islands",
            "canary",
            "flag",
            "island"
        ],
        "index": 1665
    },
    {
        "name": "indonesia",
        "code": "🇮🇩",
        "keywords": [
            "indonesia",
            "flag"
        ],
        "index": 1666
    },
    {
        "name": "ireland",
        "code": "🇮🇪",
        "keywords": [
            "ireland",
            "flag"
        ],
        "index": 1667
    },
    {
        "name": "israel",
        "code": "🇮🇱",
        "keywords": [
            "israel",
            "flag"
        ],
        "index": 1668
    },
    {
        "name": "isle_of_man",
        "code": "🇮🇲",
        "keywords": [
            "isle_of_man",
            "flag",
            "isle of man"
        ],
        "index": 1669
    },
    {
        "name": "india",
        "code": "🇮🇳",
        "keywords": [
            "india",
            "flag"
        ],
        "index": 1670
    },
    {
        "name": "british_indian_ocean_territory",
        "code": "🇮🇴",
        "keywords": [
            "british_indian_ocean_territory",
            "british",
            "chagos",
            "flag",
            "indian ocean",
            "island"
        ],
        "index": 1671
    },
    {
        "name": "iraq",
        "code": "🇮🇶",
        "keywords": [
            "iraq",
            "flag"
        ],
        "index": 1672
    },
    {
        "name": "iran",
        "code": "🇮🇷",
        "keywords": [
            "iran",
            "flag"
        ],
        "index": 1673
    },
    {
        "name": "iceland",
        "code": "🇮🇸",
        "keywords": [
            "iceland",
            "flag"
        ],
        "index": 1674
    },
    {
        "name": "it",
        "code": "🇮🇹",
        "keywords": [
            "italy",
            "it",
            "flag"
        ],
        "index": 1675
    },
    {
        "name": "jersey",
        "code": "🇯🇪",
        "keywords": [
            "jersey",
            "flag"
        ],
        "index": 1676
    },
    {
        "name": "jamaica",
        "code": "🇯🇲",
        "keywords": [
            "jamaica",
            "flag"
        ],
        "index": 1677
    },
    {
        "name": "jordan",
        "code": "🇯🇴",
        "keywords": [
            "jordan",
            "flag"
        ],
        "index": 1678
    },
    {
        "name": "jp",
        "code": "🇯🇵",
        "keywords": [
            "japan",
            "jp",
            "flag"
        ],
        "index": 1679
    },
    {
        "name": "kenya",
        "code": "🇰🇪",
        "keywords": [
            "kenya",
            "flag"
        ],
        "index": 1680
    },
    {
        "name": "kyrgyzstan",
        "code": "🇰🇬",
        "keywords": [
            "kyrgyzstan",
            "flag"
        ],
        "index": 1681
    },
    {
        "name": "cambodia",
        "code": "🇰🇭",
        "keywords": [
            "cambodia",
            "flag"
        ],
        "index": 1682
    },
    {
        "name": "kiribati",
        "code": "🇰🇮",
        "keywords": [
            "kiribati",
            "flag"
        ],
        "index": 1683
    },
    {
        "name": "comoros",
        "code": "🇰🇲",
        "keywords": [
            "comoros",
            "flag"
        ],
        "index": 1684
    },
    {
        "name": "st_kitts_nevis",
        "code": "🇰🇳",
        "keywords": [
            "st_kitts_nevis",
            "flag",
            "kitts",
            "nevis",
            "saint"
        ],
        "index": 1685
    },
    {
        "name": "north_korea",
        "code": "🇰🇵",
        "keywords": [
            "north_korea",
            "flag",
            "korea",
            "north",
            "north korea"
        ],
        "index": 1686
    },
    {
        "name": "kr",
        "code": "🇰🇷",
        "keywords": [
            "korea",
            "kr",
            "flag",
            "south",
            "south korea"
        ],
        "index": 1687
    },
    {
        "name": "kuwait",
        "code": "🇰🇼",
        "keywords": [
            "kuwait",
            "flag"
        ],
        "index": 1688
    },
    {
        "name": "cayman_islands",
        "code": "🇰🇾",
        "keywords": [
            "cayman_islands",
            "cayman",
            "flag",
            "island"
        ],
        "index": 1689
    },
    {
        "name": "kazakhstan",
        "code": "🇰🇿",
        "keywords": [
            "kazakhstan",
            "flag"
        ],
        "index": 1690
    },
    {
        "name": "laos",
        "code": "🇱🇦",
        "keywords": [
            "laos",
            "flag"
        ],
        "index": 1691
    },
    {
        "name": "lebanon",
        "code": "🇱🇧",
        "keywords": [
            "lebanon",
            "flag"
        ],
        "index": 1692
    },
    {
        "name": "st_lucia",
        "code": "🇱🇨",
        "keywords": [
            "st_lucia",
            "flag",
            "lucia",
            "saint"
        ],
        "index": 1693
    },
    {
        "name": "liechtenstein",
        "code": "🇱🇮",
        "keywords": [
            "liechtenstein",
            "flag"
        ],
        "index": 1694
    },
    {
        "name": "sri_lanka",
        "code": "🇱🇰",
        "keywords": [
            "sri_lanka",
            "flag",
            "sri lanka"
        ],
        "index": 1695
    },
    {
        "name": "liberia",
        "code": "🇱🇷",
        "keywords": [
            "liberia",
            "flag"
        ],
        "index": 1696
    },
    {
        "name": "lesotho",
        "code": "🇱🇸",
        "keywords": [
            "lesotho",
            "flag"
        ],
        "index": 1697
    },
    {
        "name": "lithuania",
        "code": "🇱🇹",
        "keywords": [
            "lithuania",
            "flag"
        ],
        "index": 1698
    },
    {
        "name": "luxembourg",
        "code": "🇱🇺",
        "keywords": [
            "luxembourg",
            "flag"
        ],
        "index": 1699
    },
    {
        "name": "latvia",
        "code": "🇱🇻",
        "keywords": [
            "latvia",
            "flag"
        ],
        "index": 1700
    },
    {
        "name": "libya",
        "code": "🇱🇾",
        "keywords": [
            "libya",
            "flag"
        ],
        "index": 1701
    },
    {
        "name": "morocco",
        "code": "🇲🇦",
        "keywords": [
            "morocco",
            "flag"
        ],
        "index": 1702
    },
    {
        "name": "monaco",
        "code": "🇲🇨",
        "keywords": [
            "monaco",
            "flag"
        ],
        "index": 1703
    },
    {
        "name": "moldova",
        "code": "🇲🇩",
        "keywords": [
            "moldova",
            "flag"
        ],
        "index": 1704
    },
    {
        "name": "montenegro",
        "code": "🇲🇪",
        "keywords": [
            "montenegro",
            "flag"
        ],
        "index": 1705
    },
    {
        "name": "st_martin",
        "code": "🇲🇫",
        "keywords": [
            "st_martin",
            "flag",
            "french",
            "martin",
            "saint"
        ],
        "index": 1706
    },
    {
        "name": "madagascar",
        "code": "🇲🇬",
        "keywords": [
            "madagascar",
            "flag"
        ],
        "index": 1707
    },
    {
        "name": "marshall_islands",
        "code": "🇲🇭",
        "keywords": [
            "marshall_islands",
            "flag",
            "island",
            "marshall"
        ],
        "index": 1708
    },
    {
        "name": "macedonia",
        "code": "🇲🇰",
        "keywords": [
            "macedonia",
            "flag"
        ],
        "index": 1709
    },
    {
        "name": "mali",
        "code": "🇲🇱",
        "keywords": [
            "mali",
            "flag"
        ],
        "index": 1710
    },
    {
        "name": "myanmar",
        "code": "🇲🇲",
        "keywords": [
            "burma",
            "myanmar",
            "flag"
        ],
        "index": 1711
    },
    {
        "name": "mongolia",
        "code": "🇲🇳",
        "keywords": [
            "mongolia",
            "flag"
        ],
        "index": 1712
    },
    {
        "name": "macau",
        "code": "🇲🇴",
        "keywords": [
            "macau",
            "china",
            "flag",
            "macao"
        ],
        "index": 1713
    },
    {
        "name": "northern_mariana_islands",
        "code": "🇲🇵",
        "keywords": [
            "northern_mariana_islands",
            "flag",
            "island",
            "mariana",
            "north",
            "northern mariana"
        ],
        "index": 1714
    },
    {
        "name": "martinique",
        "code": "🇲🇶",
        "keywords": [
            "martinique",
            "flag"
        ],
        "index": 1715
    },
    {
        "name": "mauritania",
        "code": "🇲🇷",
        "keywords": [
            "mauritania",
            "flag"
        ],
        "index": 1716
    },
    {
        "name": "montserrat",
        "code": "🇲🇸",
        "keywords": [
            "montserrat",
            "flag"
        ],
        "index": 1717
    },
    {
        "name": "malta",
        "code": "🇲🇹",
        "keywords": [
            "malta",
            "flag"
        ],
        "index": 1718
    },
    {
        "name": "mauritius",
        "code": "🇲🇺",
        "keywords": [
            "mauritius",
            "flag"
        ],
        "index": 1719
    },
    {
        "name": "maldives",
        "code": "🇲🇻",
        "keywords": [
            "maldives",
            "flag"
        ],
        "index": 1720
    },
    {
        "name": "malawi",
        "code": "🇲🇼",
        "keywords": [
            "malawi",
            "flag"
        ],
        "index": 1721
    },
    {
        "name": "mexico",
        "code": "🇲🇽",
        "keywords": [
            "mexico",
            "flag"
        ],
        "index": 1722
    },
    {
        "name": "malaysia",
        "code": "🇲🇾",
        "keywords": [
            "malaysia",
            "flag"
        ],
        "index": 1723
    },
    {
        "name": "mozambique",
        "code": "🇲🇿",
        "keywords": [
            "mozambique",
            "flag"
        ],
        "index": 1724
    },
    {
        "name": "namibia",
        "code": "🇳🇦",
        "keywords": [
            "namibia",
            "flag"
        ],
        "index": 1725
    },
    {
        "name": "new_caledonia",
        "code": "🇳🇨",
        "keywords": [
            "new_caledonia",
            "flag",
            "new",
            "new caledonia"
        ],
        "index": 1726
    },
    {
        "name": "niger",
        "code": "🇳🇪",
        "keywords": [
            "niger",
            "flag"
        ],
        "index": 1727
    },
    {
        "name": "norfolk_island",
        "code": "🇳🇫",
        "keywords": [
            "norfolk_island",
            "flag",
            "island",
            "norfolk"
        ],
        "index": 1728
    },
    {
        "name": "nigeria",
        "code": "🇳🇬",
        "keywords": [
            "nigeria",
            "flag"
        ],
        "index": 1729
    },
    {
        "name": "nicaragua",
        "code": "🇳🇮",
        "keywords": [
            "nicaragua",
            "flag"
        ],
        "index": 1730
    },
    {
        "name": "netherlands",
        "code": "🇳🇱",
        "keywords": [
            "netherlands",
            "flag"
        ],
        "index": 1731
    },
    {
        "name": "norway",
        "code": "🇳🇴",
        "keywords": [
            "norway",
            "flag"
        ],
        "index": 1732
    },
    {
        "name": "nepal",
        "code": "🇳🇵",
        "keywords": [
            "nepal",
            "flag"
        ],
        "index": 1733
    },
    {
        "name": "nauru",
        "code": "🇳🇷",
        "keywords": [
            "nauru",
            "flag"
        ],
        "index": 1734
    },
    {
        "name": "niue",
        "code": "🇳🇺",
        "keywords": [
            "niue",
            "flag"
        ],
        "index": 1735
    },
    {
        "name": "new_zealand",
        "code": "🇳🇿",
        "keywords": [
            "new_zealand",
            "flag",
            "new",
            "new zealand"
        ],
        "index": 1736
    },
    {
        "name": "oman",
        "code": "🇴🇲",
        "keywords": [
            "oman",
            "flag"
        ],
        "index": 1737
    },
    {
        "name": "panama",
        "code": "🇵🇦",
        "keywords": [
            "panama",
            "flag"
        ],
        "index": 1738
    },
    {
        "name": "peru",
        "code": "🇵🇪",
        "keywords": [
            "peru",
            "flag"
        ],
        "index": 1739
    },
    {
        "name": "french_polynesia",
        "code": "🇵🇫",
        "keywords": [
            "french_polynesia",
            "flag",
            "french",
            "polynesia"
        ],
        "index": 1740
    },
    {
        "name": "papua_new_guinea",
        "code": "🇵🇬",
        "keywords": [
            "papua_new_guinea",
            "flag",
            "guinea",
            "new",
            "papua new guinea"
        ],
        "index": 1741
    },
    {
        "name": "philippines",
        "code": "🇵🇭",
        "keywords": [
            "philippines",
            "flag"
        ],
        "index": 1742
    },
    {
        "name": "pakistan",
        "code": "🇵🇰",
        "keywords": [
            "pakistan",
            "flag"
        ],
        "index": 1743
    },
    {
        "name": "poland",
        "code": "🇵🇱",
        "keywords": [
            "poland",
            "flag"
        ],
        "index": 1744
    },
    {
        "name": "st_pierre_miquelon",
        "code": "🇵🇲",
        "keywords": [
            "st_pierre_miquelon",
            "flag",
            "miquelon",
            "pierre",
            "saint"
        ],
        "index": 1745
    },
    {
        "name": "pitcairn_islands",
        "code": "🇵🇳",
        "keywords": [
            "pitcairn_islands",
            "flag",
            "island",
            "pitcairn"
        ],
        "index": 1746
    },
    {
        "name": "puerto_rico",
        "code": "🇵🇷",
        "keywords": [
            "puerto_rico",
            "flag",
            "puerto rico"
        ],
        "index": 1747
    },
    {
        "name": "palestinian_territories",
        "code": "🇵🇸",
        "keywords": [
            "palestinian_territories",
            "flag",
            "palestine"
        ],
        "index": 1748
    },
    {
        "name": "portugal",
        "code": "🇵🇹",
        "keywords": [
            "portugal",
            "flag"
        ],
        "index": 1749
    },
    {
        "name": "palau",
        "code": "🇵🇼",
        "keywords": [
            "palau",
            "flag"
        ],
        "index": 1750
    },
    {
        "name": "paraguay",
        "code": "🇵🇾",
        "keywords": [
            "paraguay",
            "flag"
        ],
        "index": 1751
    },
    {
        "name": "qatar",
        "code": "🇶🇦",
        "keywords": [
            "qatar",
            "flag"
        ],
        "index": 1752
    },
    {
        "name": "reunion",
        "code": "🇷🇪",
        "keywords": [
            "reunion",
            "flag",
            "réunion"
        ],
        "index": 1753
    },
    {
        "name": "romania",
        "code": "🇷🇴",
        "keywords": [
            "romania",
            "flag"
        ],
        "index": 1754
    },
    {
        "name": "serbia",
        "code": "🇷🇸",
        "keywords": [
            "serbia",
            "flag"
        ],
        "index": 1755
    },
    {
        "name": "ru",
        "code": "🇷🇺",
        "keywords": [
            "russia",
            "ru",
            "flag"
        ],
        "index": 1756
    },
    {
        "name": "rwanda",
        "code": "🇷🇼",
        "keywords": [
            "rwanda",
            "flag"
        ],
        "index": 1757
    },
    {
        "name": "saudi_arabia",
        "code": "🇸🇦",
        "keywords": [
            "saudi_arabia",
            "flag",
            "saudi arabia"
        ],
        "index": 1758
    },
    {
        "name": "solomon_islands",
        "code": "🇸🇧",
        "keywords": [
            "solomon_islands",
            "flag",
            "island",
            "solomon"
        ],
        "index": 1759
    },
    {
        "name": "seychelles",
        "code": "🇸🇨",
        "keywords": [
            "seychelles",
            "flag"
        ],
        "index": 1760
    },
    {
        "name": "sudan",
        "code": "🇸🇩",
        "keywords": [
            "sudan",
            "flag"
        ],
        "index": 1761
    },
    {
        "name": "sweden",
        "code": "🇸🇪",
        "keywords": [
            "sweden",
            "flag"
        ],
        "index": 1762
    },
    {
        "name": "singapore",
        "code": "🇸🇬",
        "keywords": [
            "singapore",
            "flag"
        ],
        "index": 1763
    },
    {
        "name": "st_helena",
        "code": "🇸🇭",
        "keywords": [
            "st_helena",
            "flag",
            "helena",
            "saint"
        ],
        "index": 1764
    },
    {
        "name": "slovenia",
        "code": "🇸🇮",
        "keywords": [
            "slovenia",
            "flag"
        ],
        "index": 1765
    },
    {
        "name": "svalbard_jan_mayen",
        "code": "🇸🇯",
        "keywords": [
            "svalbard_jan_mayen",
            "flag",
            "jan mayen",
            "svalbard"
        ],
        "index": 1766
    },
    {
        "name": "slovakia",
        "code": "🇸🇰",
        "keywords": [
            "slovakia",
            "flag"
        ],
        "index": 1767
    },
    {
        "name": "sierra_leone",
        "code": "🇸🇱",
        "keywords": [
            "sierra_leone",
            "flag",
            "sierra leone"
        ],
        "index": 1768
    },
    {
        "name": "san_marino",
        "code": "🇸🇲",
        "keywords": [
            "san_marino",
            "flag",
            "san marino"
        ],
        "index": 1769
    },
    {
        "name": "senegal",
        "code": "🇸🇳",
        "keywords": [
            "senegal",
            "flag"
        ],
        "index": 1770
    },
    {
        "name": "somalia",
        "code": "🇸🇴",
        "keywords": [
            "somalia",
            "flag"
        ],
        "index": 1771
    },
    {
        "name": "suriname",
        "code": "🇸🇷",
        "keywords": [
            "suriname",
            "flag"
        ],
        "index": 1772
    },
    {
        "name": "south_sudan",
        "code": "🇸🇸",
        "keywords": [
            "south_sudan",
            "flag",
            "south",
            "south sudan",
            "sudan"
        ],
        "index": 1773
    },
    {
        "name": "sao_tome_principe",
        "code": "🇸🇹",
        "keywords": [
            "sao_tome_principe",
            "flag",
            "principe",
            "príncipe",
            "sao tome",
            "são tomé"
        ],
        "index": 1774
    },
    {
        "name": "el_salvador",
        "code": "🇸🇻",
        "keywords": [
            "el_salvador",
            "el salvador",
            "flag"
        ],
        "index": 1775
    },
    {
        "name": "sint_maarten",
        "code": "🇸🇽",
        "keywords": [
            "sint_maarten",
            "flag",
            "maarten",
            "sint"
        ],
        "index": 1776
    },
    {
        "name": "syria",
        "code": "🇸🇾",
        "keywords": [
            "syria",
            "flag"
        ],
        "index": 1777
    },
    {
        "name": "swaziland",
        "code": "🇸🇿",
        "keywords": [
            "swaziland",
            "flag"
        ],
        "index": 1778
    },
    {
        "name": "tristan_da_cunha",
        "code": "🇹🇦",
        "keywords": [
            "tristan_da_cunha",
            "flag",
            "tristan da cunha"
        ],
        "index": 1779
    },
    {
        "name": "turks_caicos_islands",
        "code": "🇹🇨",
        "keywords": [
            "turks_caicos_islands",
            "caicos",
            "flag",
            "island",
            "turks"
        ],
        "index": 1780
    },
    {
        "name": "chad",
        "code": "🇹🇩",
        "keywords": [
            "chad",
            "flag"
        ],
        "index": 1781
    },
    {
        "name": "french_southern_territories",
        "code": "🇹🇫",
        "keywords": [
            "french_southern_territories",
            "antarctic",
            "flag",
            "french"
        ],
        "index": 1782
    },
    {
        "name": "togo",
        "code": "🇹🇬",
        "keywords": [
            "togo",
            "flag"
        ],
        "index": 1783
    },
    {
        "name": "thailand",
        "code": "🇹🇭",
        "keywords": [
            "thailand",
            "flag"
        ],
        "index": 1784
    },
    {
        "name": "tajikistan",
        "code": "🇹🇯",
        "keywords": [
            "tajikistan",
            "flag"
        ],
        "index": 1785
    },
    {
        "name": "tokelau",
        "code": "🇹🇰",
        "keywords": [
            "tokelau",
            "flag"
        ],
        "index": 1786
    },
    {
        "name": "timor_leste",
        "code": "🇹🇱",
        "keywords": [
            "timor_leste",
            "east",
            "east timor",
            "flag",
            "timor-leste"
        ],
        "index": 1787
    },
    {
        "name": "turkmenistan",
        "code": "🇹🇲",
        "keywords": [
            "turkmenistan",
            "flag"
        ],
        "index": 1788
    },
    {
        "name": "tunisia",
        "code": "🇹🇳",
        "keywords": [
            "tunisia",
            "flag"
        ],
        "index": 1789
    },
    {
        "name": "tonga",
        "code": "🇹🇴",
        "keywords": [
            "tonga",
            "flag"
        ],
        "index": 1790
    },
    {
        "name": "tr",
        "code": "🇹🇷",
        "keywords": [
            "turkey",
            "tr",
            "flag"
        ],
        "index": 1791
    },
    {
        "name": "trinidad_tobago",
        "code": "🇹🇹",
        "keywords": [
            "trinidad_tobago",
            "flag",
            "tobago",
            "trinidad"
        ],
        "index": 1792
    },
    {
        "name": "tuvalu",
        "code": "🇹🇻",
        "keywords": [
            "tuvalu",
            "flag"
        ],
        "index": 1793
    },
    {
        "name": "taiwan",
        "code": "🇹🇼",
        "keywords": [
            "taiwan",
            "china",
            "flag"
        ],
        "index": 1794
    },
    {
        "name": "tanzania",
        "code": "🇹🇿",
        "keywords": [
            "tanzania",
            "flag"
        ],
        "index": 1795
    },
    {
        "name": "ukraine",
        "code": "🇺🇦",
        "keywords": [
            "ukraine",
            "flag"
        ],
        "index": 1796
    },
    {
        "name": "uganda",
        "code": "🇺🇬",
        "keywords": [
            "uganda",
            "flag"
        ],
        "index": 1797
    },
    {
        "name": "us_outlying_islands",
        "code": "🇺🇲",
        "keywords": [
            "us_outlying_islands",
            "america",
            "flag",
            "island",
            "minor outlying",
            "united",
            "united states",
            "us",
            "usa"
        ],
        "index": 1798
    },
    {
        "name": "united_nations",
        "code": "🇺🇳",
        "keywords": [
            "united_nations",
            "flag"
        ],
        "index": 1799
    },
    {
        "name": "us",
        "code": "🇺🇸",
        "keywords": [
            "flag",
            "united",
            "america",
            "us",
            "stars and stripes",
            "united states"
        ],
        "index": 1800
    },
    {
        "name": "uruguay",
        "code": "🇺🇾",
        "keywords": [
            "uruguay",
            "flag"
        ],
        "index": 1801
    },
    {
        "name": "uzbekistan",
        "code": "🇺🇿",
        "keywords": [
            "uzbekistan",
            "flag"
        ],
        "index": 1802
    },
    {
        "name": "vatican_city",
        "code": "🇻🇦",
        "keywords": [
            "vatican_city",
            "flag",
            "vatican"
        ],
        "index": 1803
    },
    {
        "name": "st_vincent_grenadines",
        "code": "🇻🇨",
        "keywords": [
            "st_vincent_grenadines",
            "flag",
            "grenadines",
            "saint",
            "vincent"
        ],
        "index": 1804
    },
    {
        "name": "venezuela",
        "code": "🇻🇪",
        "keywords": [
            "venezuela",
            "flag"
        ],
        "index": 1805
    },
    {
        "name": "british_virgin_islands",
        "code": "🇻🇬",
        "keywords": [
            "british_virgin_islands",
            "british",
            "flag",
            "island",
            "virgin"
        ],
        "index": 1806
    },
    {
        "name": "us_virgin_islands",
        "code": "🇻🇮",
        "keywords": [
            "us_virgin_islands",
            "america",
            "american",
            "flag",
            "island",
            "united",
            "united states",
            "us",
            "usa",
            "virgin"
        ],
        "index": 1807
    },
    {
        "name": "vietnam",
        "code": "🇻🇳",
        "keywords": [
            "vietnam",
            "flag",
            "viet nam"
        ],
        "index": 1808
    },
    {
        "name": "vanuatu",
        "code": "🇻🇺",
        "keywords": [
            "vanuatu",
            "flag"
        ],
        "index": 1809
    },
    {
        "name": "wallis_futuna",
        "code": "🇼🇫",
        "keywords": [
            "wallis_futuna",
            "flag",
            "futuna",
            "wallis"
        ],
        "index": 1810
    },
    {
        "name": "samoa",
        "code": "🇼🇸",
        "keywords": [
            "samoa",
            "flag"
        ],
        "index": 1811
    },
    {
        "name": "kosovo",
        "code": "🇽🇰",
        "keywords": [
            "kosovo",
            "flag"
        ],
        "index": 1812
    },
    {
        "name": "yemen",
        "code": "🇾🇪",
        "keywords": [
            "yemen",
            "flag"
        ],
        "index": 1813
    },
    {
        "name": "mayotte",
        "code": "🇾🇹",
        "keywords": [
            "mayotte",
            "flag"
        ],
        "index": 1814
    },
    {
        "name": "south_africa",
        "code": "🇿🇦",
        "keywords": [
            "south_africa",
            "flag",
            "south",
            "south africa"
        ],
        "index": 1815
    },
    {
        "name": "zambia",
        "code": "🇿🇲",
        "keywords": [
            "zambia",
            "flag"
        ],
        "index": 1816
    },
    {
        "name": "zimbabwe",
        "code": "🇿🇼",
        "keywords": [
            "zimbabwe",
            "flag"
        ],
        "index": 1817
    },
    {
        "name": "england",
        "code": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "keywords": [
            "england",
            "flag"
        ],
        "index": 1818
    },
    {
        "name": "scotland",
        "code": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "keywords": [
            "scotland",
            "flag"
        ],
        "index": 1819
    },
    {
        "name": "wales",
        "code": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "keywords": [
            "wales",
            "flag"
        ],
        "index": 1820
    }
];

export {skinTones};
export default emojis;
