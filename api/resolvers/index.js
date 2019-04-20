const { handleAttribute } = require( './resources/attribute' );
const { handleSubattribute } = require( './resources/sub-attribute' );

const Mutation = {};
const Query = {};

function registerResolvers( queries = {}, mutations = {} ) {
    Object.assign( Query, queries );
    Object.assign( Mutation, mutations );
}

require( './resources/has' )( registerResolvers );
require( './resources/inventory' )( registerResolvers );

handleAttribute( 'defect', registerResolvers );
handleAttribute( 'obsession', registerResolvers );
handleAttribute( 'experience', registerResolvers );
handleAttribute( 'strength', registerResolvers );
handleAttribute( 'hope', registerResolvers );
handleAttribute( 'resentment', registerResolvers );

handleSubattribute( 'acceptance', 'acceptances', registerResolvers );
handleSubattribute( 'anger', 'angers', registerResolvers );
handleSubattribute( 'armor', 'armors', registerResolvers );
handleSubattribute( 'boundary', 'boundaries', registerResolvers );
handleSubattribute( 'compassion', 'compassions', registerResolvers );
handleSubattribute( 'courage', 'courages', registerResolvers );
handleSubattribute( 'fear', 'fears', registerResolvers );
handleSubattribute( 'gratitude', 'gratitudes', registerResolvers );
handleSubattribute( 'pride', 'prides', registerResolvers );
handleSubattribute( 'salvation', 'salvations', registerResolvers );
handleSubattribute( 'selfPity', 'selfPitys', registerResolvers );
handleSubattribute( 'suffering', 'sufferings', registerResolvers );
handleSubattribute( 'toxicity', 'toxicities', registerResolvers );
handleSubattribute( 'trauma', 'traumas', registerResolvers );
handleSubattribute( 'vulnerability', 'vulnerabilities', registerResolvers );

module.exports = {
    Query,
    Mutation
};