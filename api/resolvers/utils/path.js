const { prisma } = require( '../../../generated/prisma-client' );

const getFeelings = async ( has, feelings = [] ) => {
    if ( !has ) {
        has = await prisma.has( { id: 'has' } );
    }
    const values = {};
    const feelingPromises = feelings.map( async ( feeling ) => {
        let key, queries;
        if ( typeof feeling === 'object' ) {
            key = feeling.singular;
            queries = feeling.plural;
        } else {
            key = feeling;
            queries = `${feeling}s`;
        }
        if ( has[ key ] ) {
            const value = await prisma[ queries ]();
            values[ key ] = value;
        }
    } );
    await Promise.all( feelingPromises );
    return values;
};

const getDefect = async ( has = false ) => await getFeelings( has, [
    'trauma', 
    { singular: 'toxicity', plural: 'toxicities' },
    'suffering'
] );
const getDiscontent = async ( has = false ) => await getFeelings( has, [
    { singular: 'irritability', plural: 'irritabilities' },
    'impatience',
    'joy'
] );
const getResentment = async ( has = false ) => await getFeelings( has, [
    'anger', 
    { singular: 'selfPity', plural: 'selfPities' },
    'fear',
    'pride'
] );
const getObsession = async ( has = false ) => await getFeelings( has, [
    'suffering', 
    { singular: 'loyalty', plural: 'loyalties' },
    'honor',
    { singular: 'vulnerability', plural: 'vulnerabilities' }
] );
const getExperience = async ( has = false ) => await getFeelings( has, [
    'compassion', 
    'courage', 
    'acceptance',
    { singular: 'vulnerability', plural: 'vulnerabilities' },
    'gratitude',
    'suffering'
] );
const getStrength = async ( has = false ) => await getFeelings( has, [
    'armor', 
    { singular: 'boundary', plural: 'boundaries' },
    { singular: 'loyalty', plural: 'loyalties' },
    'honor',
    'anger',
    'courage'
] );
const getHope = async ( has = false ) => await getFeelings( has, [
    'salvation',
    'fun',
    'joy'
] );

const getPaths = {
    getDefect,
    getDiscontent,
    getResentment,
    getObsession,
    getExperience,
    getStrength,
    getHope,
};

module.exports = { getPaths };