const {
    PROCESS
} = require( './processes' );

const CHARACTERS = [
    { singular: 'congregant', plural: 'congregants' },
    { singular: 'genie', plural: 'genies' },
    { singular: 'guardian', plural: 'guardians' },
    { singular: 'martyr', plural: 'martyrs' },
    { singular: 'paladin', plural: 'paladins' },
    { singular: 'seeker', plural: 'seekers' },
    { singular: 'smith', plural: 'smiths' },
    { singular: 'summoner', plural: 'summoners' },
    { singular: 'victim', plural: 'victims' },
    { singular: 'volunteer', plural: 'volunteers' }
];

const CONGREGANT = {};
const GENIE = { wish: PROCESS.wish };
const GUARDIAN = { construct: PROCESS.construct };
const MARTYR = { stigmata: PROCESS.stigmata };
const PALADIN = { oath: PROCESS.oath };
const SEEKER = { virtue: PROCESS.virtue };
const SMITH = { shield: PROCESS.shield };
const SUMMONER = {};
const VICTIM = { affliction: PROCESS.affliction };
const VOLUNTEER = { act: PROCESS.act };

const CHARACTER = {
    congregant: CONGREGANT,
    genie: GENIE,
    guardian: GUARDIAN,
    martyr: MARTYR,
    paladin: PALADIN,
    seeker: SEEKER,
    smith: SMITH,
    summoner: SUMMONER,
    victim: VICTIM,
    volunteer: VOLUNTEER
};

module.exports = { 
    CHARACTERS,
    CHARACTER
};