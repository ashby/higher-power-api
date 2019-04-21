
const SOURCES = [
    { singular: 'brain', plural: 'brains' },
    { singular: 'campaign', plural: 'campaigns' },
    { singular: 'confusion', plural: 'confusions' },
    { singular: 'cross', plural: 'crosss' },
    { singular: 'crown', plural: 'crowns' },
    { singular: 'crusade', plural: 'crusades' },
    { singular: 'delirium', plural: 'deliriums' },
    { singular: 'denial', plural: 'denials' },
    { singular: 'dream', plural: 'dreams' },
    { singular: 'face', plural: 'faces' },
    { singular: 'gash', plural: 'gashs' },
    { singular: 'gate', plural: 'gates' },
    { singular: 'gut', plural: 'guts' },
    { singular: 'heart', plural: 'hearts' },
    { singular: 'infection', plural: 'infections' },
    { singular: 'love', plural: 'loves' },
    { singular: 'mind', plural: 'minds' },
    { singular: 'mouth', plural: 'mouths' },
    { singular: 'nail', plural: 'nails' },
    { singular: 'nightmare', plural: 'nightmares' },
    { singular: 'pledge', plural: 'pledges' },
    { singular: 'sacrifice', plural: 'sacrifices' },
    { singular: 'sarcasm', plural: 'sarcasms' },
    { singular: 'scar', plural: 'scars' },
    { singular: 'service', plural: 'services' },
    { singular: 'silence', plural: 'silences' },
    { singular: 'skin', plural: 'skins' },
    { singular: 'soul', plural: 'souls' },
    { singular: 'sternum', plural: 'sternums' },
    { singular: 'support', plural: 'supports' },
    { singular: 'tower', plural: 'towers' },
    { singular: 'tremor', plural: 'tremors' },
    { singular: 'wall', plural: 'walls' }
];

const BODY_SOURCE = {
    anger: [],
    fear: [],
    pride: [],
    selfPity: []
};
const OATH_SOURCE = {
    loyalty: [],
    honor: []
};
const WISH_SOURCE = {
    salvation: []
};
const STIGMATA_SOURCE = {
    suffering: []
}
const CONSTRUCT_SOURCE = {
    boundary: []
};
const VIRTUE_SOURCE = {
    vulnerability: [],
    acceptance: []
};
const SHIELD_SOURCE = {
    armor: []
};
const AFFLICTION_SOURCE = {
    trauma: [],
    toxicity: []
};
const ACT_SOURCE = {
    courage: [],
    compassion: []
};

const BRAIN = BODY_SOURCE;
const CAMPAIGN = OATH_SOURCE;
const CONFUSION = SHIELD_SOURCE;
const CROSS = STIGMATA_SOURCE;
const CROWN = STIGMATA_SOURCE;
const CRUSADE = OATH_SOURCE;
const DELIRIUM = AFFLICTION_SOURCE;
const DENIAL = SHIELD_SOURCE;
const DREAM = WISH_SOURCE;
const FACE = BODY_SOURCE;
const GASH = AFFLICTION_SOURCE;
const GATE = CONSTRUCT_SOURCE;
const GUT = BODY_SOURCE;
const HEART = BODY_SOURCE;
const INFECTION = AFFLICTION_SOURCE;
const LOVE = VIRTUE_SOURCE;
const MIND = VIRTUE_SOURCE;
const MOUTH = BODY_SOURCE;
const NAIL = STIGMATA_SOURCE;
const NIGHTMARE = AFFLICTION_SOURCE;
const PLEDGE = OATH_SOURCE;
const SACRIFICE = ACT_SOURCE;
const SARCASM = SHIELD_SOURCE;
const SCAR = AFFLICTION_SOURCE;
const SERVICE = ACT_SOURCE;
const SILENCE = SHIELD_SOURCE;
const SKIN = BODY_SOURCE;
const SOUL = VIRTUE_SOURCE;
const STERNUM = BODY_SOURCE;
const SUPPORT = ACT_SOURCE;
const TOWER = CONSTRUCT_SOURCE;
const TREMOR = ACT_SOURCE;
const WALL = CONSTRUCT_SOURCE;

const SOURCE = {
    brain: BRAIN,
    campaign: CAMPAIGN,
    confusion: CONFUSION,
    cross: CROSS,
    crown: CROWN,
    crusade: CRUSADE,
    delirium: DELIRIUM,
    denial: DENIAL,
    dream: DREAM,
    face: FACE,
    gash: GASH,
    gate: GATE,
    gut: GUT,
    heart: HEART,
    infection: INFECTION,
    love: LOVE,
    mind: MIND,
    mouth: MOUTH,
    nail: NAIL,
    nightmare: NIGHTMARE,
    pledge: PLEDGE,
    sacrifice: SACRIFICE,
    sarcasm: SARCASM,
    scar: SCAR,
    service: SERVICE,
    silence: SILENCE,
    skin: SKIN,
    soul: SOUL,
    sternum: STERNUM,
    support: SUPPORT,
    tower: TOWER,
    tremor: TREMOR,
    wall: WALL
};

module.exports = { SOURCES, SOURCE };