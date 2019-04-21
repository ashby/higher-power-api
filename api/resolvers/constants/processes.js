const { SOURCE } = require( './sources' );

const PROCESSES = [
    { singular: 'act', plural: 'acts' },
    { singular: 'affliction', plural: 'afflictions' },
    { singular: 'body', plural: 'bodies' },
    { singular: 'construct', plural: 'constructs' },
    { singular: 'oath', plural: 'oaths' },
    { singular: 'shield', plural: 'shields' },
    { singular: 'stigmata', plural: 'stigmatas' },
    { singular: 'virtue', plural: 'virtues' },
    { singular: 'wish', plural: 'wishs' }
];

const ACT = [
    { singular: 'service', plural: 'services' },
    { singular: 'support', plural: 'supports' },
    { singular: 'sacrifice', plural: 'sacrifices' },
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

const PROCESS = {
    act: {
        service: SOURCE.service,
        support: SOURCE.support,
        sacrifice: SOURCE.sacrifice
    },
    affliction: {
        delirium: SOURCE.delirium,
        gash: SOURCE.gash,
        infection: SOURCE.infection,
        nightmare: SOURCE.nightmare,
        scar: SOURCE.scar,
        tremor: SOURCE.tremor,
    },
    body: {
        brain: SOURCE.brain,
        face: SOURCE.face,
        gut: SOURCE.gut,
        heart: SOURCE.heart,
        mouth: SOURCE.mouth,
        skin: SOURCE.skin,
        sternum: SOURCE.sternum,
    },
    construct: {
        gate: SOURCE.gate,
        tower: SOURCE.tower,
        wall: SOURCE.wall,
    },
    oath: {
        campaign: SOURCE.campaign,
        crusade: SOURCE.crusade,
        pledge: SOURCE.pledge,
    },
    shield: {
        confusion: SOURCE.confusion,
        denial: SOURCE.denial,
        sarcasm: SOURCE.sarcasm,
        silence: SOURCE.silence,
    },
    stigmata: {
        cross: SOURCE.cross,
        crown: SOURCE.crown,
        nail: SOURCE.nail,
    },
    virtue: {
        love: SOURCE.love,
        mind: SOURCE.mind,
        soul: SOURCE.soul
    },
    wish: {
        dream: SOURCE.dream
    },
};

const EMPTY_PROCESS = {
    act: {
        service: {},
        support: {},
        sacrifice: {}
    },
    affliction: {
        delirium: {},
        gash: {},
        infection: {},
        nightmare: {},
        scar: {},
        tremor: {},
    },
    body: {
        brain: {},
        face: {},
        gut: {},
        heart: {},
        mouth: {},
        skin: {},
        sternum: {},
    },
    construct: {
        gate: {},
        tower: {},
        wall: {},
    },
    oath: {
        campaign: {},
        crusade: {},
        pledge: {},
    },
    shield: {
        confusion: {},
        denial: {},
        sarcasm: {},
        silence: {},
    },
    stigmata: {
        cross: {},
        crown: {},
        nail: {},
    },
    virtue: {
        love: {},
        mind: {},
        soul: {}
    },
    wish: {
        dream: {}
    },
};

module.exports = {
    PROCESSES,
    PROCESS,
    EMPTY_PROCESS,
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