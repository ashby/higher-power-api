const { prisma } = require( '../../../generated/prisma-client' );

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

module.exports = { getAttributes };