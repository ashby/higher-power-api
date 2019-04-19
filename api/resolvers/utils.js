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

const getSubAttributes = async ( has, subAttributes = [] ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const values = {};
    const subAttributePromises = subAttributes.map( async ( subAttribute ) => {
        let key, queries;
        if ( typeof subAttribute === 'object' ) {
            key = subAttribute.singular;
            queries = subAttribute.plural;
        } else {
            key = subAttribute;
            queries = `${subAttribute}s`;
        }
        if ( has[ key ] ) {
            const value = await prisma[ queries ]();
            values[ key ] = value;
        }
    } );
    await Promise.all( subAttributePromises );
    return values;
};

const getDefect = async ( has = false ) => await getSubAttributes( has, [
    'trauma', 
    { singular: 'toxicity', plural: 'toxicities' },
    'suffering'
] );
const getResentment = async ( has = false ) => await getSubAttributes( has, [
    'anger', 
    { singular: 'selfPity', plural: 'selfPities' },
    'fear',
    'pride'
] );

const getObsession = async ( has = false ) => await getSubAttributes( has, [
    'suffering', 
    { singular: 'loyalty', plural: 'loyalties' },
    'honor',
    { singular: 'vulnerability', plural: 'vulnerabilities' }
] );

const getExperience = async ( has = false ) => await getSubAttributes( has, [
    'compassion', 
    'courage', 
    'acceptance',
    { singular: 'vulnerability', plural: 'vulnerabilities' },
    'gratitude',
    'suffering'
] );

const getStrength = async ( has = false ) => await getSubAttributes( has, [
    'armor', 
    { singular: 'boundary', plural: 'boundaries' },
    { singular: 'loyalty', plural: 'loyalties' },
    'honor',
    'anger',
    'courage'
] );

const getHope = async ( has = false ) => await getSubAttributes( has, [
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