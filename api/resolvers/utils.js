const { prisma } = require( '../../generated/prisma-client' );
const config = require( '../config' );

const HAS = {
    defect: false,
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
    gratitude: false,
    pride: false,
    salvaltion: false,
    selfPity: false,
    suffering: false,
    toxicity: false,
    trauma: false,
    vulnerability: false,
};

const handleHas =  async ( key, attribute ) => {
    if ( config.ENABLE_HAS ) {
        let has;
        has = await prisma.has( { id: 'has' } );
        const shouldUpdateHas = !!has && has.id && ( !has[ key ] || !has[ attribute ] );
        if ( shouldUpdateHas ) {
            has[ key ] = true;
            if ( attribute ) {  has[ attribute ] = true; }
            const { id, ...data } = has;
            await prisma.updateHas( {
                data,
                where: { id: has.id }
            } );
        } else if ( !has ) {
            HAS.id = 'has';
            HAS[ key ] = true;
            if ( attribute ) {  HAS[ attribute ] = true; }
            await prisma.createHas( HAS );
        }
    }
};

const getValues = async ( has, queries = [] ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const values = {};
    const queryPromises = queries.map( async ( query ) => {
        let key, queries;
        if ( typeof query === 'object' ) {
            key = query.singular;
            queries = query.plural;
        } else {
            key = query;
            queries = `${query}s`;
        }
        if ( has[ key ] ) {
            const value = await prisma[ queries ]();
            values[ key ] = value;
        }
    } );
    await Promise.all( queryPromises );
    return values;
};

const getDefect = async ( has = false ) => {
    const values = await getValues( has, [
        'trauma', 
        { singular: 'toxicity', plural: 'toxicities' },
        'suffering'
    ] );
    const defect = {
        ...values
    };
    return values;
};
const getResentment = async ( has = false ) => await getValues( has, [
    'anger', 
    { singular: 'selfPity', plural: 'selfPities' },
    'fear',
    'pride'
] );

const getObsession = async ( has = false ) => await getValues( has, [
    'suffering', 
    { singular: 'loyalty', plural: 'loyalties' },
    'honor',
    { singular: 'vulnerability', plural: 'vulnerabilities' }
] );

const getExperience = async ( has = false ) => await getValues( has, [
    'compassion', 
    'courage', 
    'acceptance',
    { singular: 'vulnerability', plural: 'vulnerabilities' },
    'gratitude',
    'suffering'
] );

const getStrength = async ( has = false ) => await getValues( has, [
    'armor', 
    { singular: 'boundary', plural: 'boundaries' },
    { singular: 'loyalty', plural: 'loyalties' },
    'honor',
    'anger',
    'courage'
] );

const getHope = async ( has = false ) => await getValues( has, [
    'salvation'
] );

const getAttributes = {
    getDefect,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope,
};

module.exports = {
    HAS,
    handleHas,
    getAttributes,
    getDefect,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope
};