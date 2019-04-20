const HAS = {
    defect: false,
    discontent: false,
    resentment: false,
    obsession: false,
    experience: false,
    strength: false,
    hope: false,
    acceptance: false,
    anger: false,
    armor: false,
    boundary: false,
    compassion: false,
    courage: false,
    fear: false,
    fun: false,
    gratitude: false,
    irritability: false,
    impatience: false,
    joy: false,
    pride: false,
    salvaltion: false,
    selfPity: false,
    suffering: false,
    toxicity: false,
    trauma: false,
    vulnerability: false,
};
const PATHS = [
    'defect',
    'discontent',
    'resentment',
    'obsession',
    'experience',
    'strength',
    'hope'
];

const DEFECT = [
    { singular: 'trauma', plural: 'traumas' },
    { singular: 'toxicity', plural: 'toxicities' },
    { singular: 'suffering', plural: 'sufferings' }
];

const DISCONTENT = [
    { singular: 'irritability', plural: 'irritabilities' },
    { singular: 'impatience', plural: 'impatiences' }
];

const RESENTMENT = [
    { singular: 'anger', plural: 'angers' },
    { singular: 'selfPity', plural: 'selfPities' },
    { singular: 'fear', plural: 'fears' },
    { singular: 'pride', plural: 'prides' }
];

const OBSESSION = [
    { singular: 'suffering', plural: 'sufferings' },
    { singular: 'loyalty', plural: 'loyalties' },
    { singular: 'honor', plural: 'honors' },
    { singular: 'vulnerability', plural: 'vulnerabilities' }
];

const EXPERIENCE = [
    { singular: 'compassion', plural: 'compassions' }, 
    { singular: 'courage', plural: 'courages' },
    { singular: 'acceptance', plural: 'acceptances' },
    { singular: 'vulnerability', plural: 'vulnerabilities' },
    { singular: 'gratitude', plural: 'gratitudes' },
    { singular: 'suffering', plural: 'sufferings' }
];

const STRENGTH = [
    { singular: 'armor',  plural: 'armors' },
    { singular: 'boundary', plural: 'boundaries' },
    { singular: 'loyalty', plural: 'loyalties' },
    { singular: 'honor', plural: 'honors' },
    { singular: 'anger', plural: 'angers' },
    { singular: 'courage',  plural: 'courages' }
];

const HOPE = [
    { singular: 'salvation', plural: 'salvations' },
    { singular: 'fun', plural: 'funs' },
    { singular: 'joy', plural: 'joys' }
];

const CHARACTERS = [
    'conregant',
    'genie',
    'guardian',
    'martyr',
    'paladin',
    'seeker',
    'smith',
    'summoner',
    'victim',
    'volunteer'
];
const PROCESSES = [
    
];

const ACT = [

];

const AFFLICTION = [
    { singular: 'delirium', plural: 'deliriums' },
    { singular: 'gash', plural: 'gashs' },
    { singular: 'infection', plural: 'infections' },
    { singular: 'nightmare', plural: 'nightmares' },
    { singular: 'scar', plural: 'scars' },
    { singular: 'tremor', plural: 'tremors' },
];

const BODY = [
    { singular: 'brain', plural: 'brains' },
    { singular: 'face', plural: 'faces' },
    { singular: 'gut', plural: 'guts' },
    { singular: 'heart', plural: 'hearts' },
    { singular: 'mouth', plural: 'mouths' },
    { singular: 'skin', plural: 'skins' },
    { singular: 'sternum', plural: 'sternums' }
];

const CONSTRUCT = [
    { singular: 'gate', plural: 'gates' },
    { singular: 'tower', plural: 'towers' },
    { singular: 'wall', plural: 'walls' }
];

const OATH = [
    { singular: 'campaign', plural: 'campaigns' },
    { singular: 'crusade', plural: 'crusades' },
    { singular: 'pledge', plural: 'pledges' }
];

const SHIELD = [
    { singular: 'confusion', plural: 'confusions' },
    { singular: 'denial', plural: 'denials' },
    { singular: 'sarcasm', plural: 'sarcasms' },
    { singular: 'silence', plural: 'silences' }
];

const STIGMATA = [
    { singular: 'cross', plural: 'crosses' },
    { singular: 'crown', plural: 'crowns' },
    { singular: 'nail', plural: 'nails' }
];

const VIRTUE = [
    { singular: 'love', plural: 'loves' },
    { singular: 'mind', plural: 'minds' },
    { singular: 'soul', plural: 'souls' }
];

const WISH = [
    { singular: 'dream', plural: 'dreams' }
];

module.exports = { 
    HAS,
    PATHS,
    DEFECT,
    DISCONTENT,
    RESENTMENT,
    OBSESSION,
    EXPERIENCE,
    STRENGTH,
    HOPE,
    CHARACTERS,
    PROCESSES,
    ACT,
    AFFLICTION,
    BODY,
    CONSTRUCT,
    OATH,
    SHIELD,
    STIGMATA,
    VIRTUE,
    WISH
};