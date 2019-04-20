const { registerAttribute } = require( './register/attribute' );
const { registerSubattribute } = require( './register/sub-attribute' );

const Mutation = {};
const Query = {};

function registerResolvers( queries = {}, mutations = {} ) {
    Object.assign( Query, queries );
    Object.assign( Mutation, mutations );
}

require( './resources/has' )( registerResolvers );
require( './resources/inventory' )( registerResolvers );

registerAttribute( 'defect', registerResolvers );
registerAttribute( 'obsession', registerResolvers );
registerAttribute( 'experience', registerResolvers );
registerAttribute( 'strength', registerResolvers );
registerAttribute( 'hope', registerResolvers );
registerAttribute( 'resentment', registerResolvers );

registerSubattribute( 'acceptance', 'acceptances', registerResolvers );
registerSubattribute( 'anger', 'angers', registerResolvers );
registerSubattribute( 'armor', 'armors', registerResolvers );
registerSubattribute( 'boundary', 'boundaries', registerResolvers );
registerSubattribute( 'compassion', 'compassions', registerResolvers );
registerSubattribute( 'courage', 'courages', registerResolvers );
registerSubattribute( 'fear', 'fears', registerResolvers );
registerSubattribute( 'gratitude', 'gratitudes', registerResolvers );
registerSubattribute( 'pride', 'prides', registerResolvers );
registerSubattribute( 'salvation', 'salvations', registerResolvers );
registerSubattribute( 'selfPity', 'selfPitys', registerResolvers );
registerSubattribute( 'suffering', 'sufferings', registerResolvers );
registerSubattribute( 'toxicity', 'toxicities', registerResolvers );
registerSubattribute( 'trauma', 'traumas', registerResolvers );
registerSubattribute( 'vulnerability', 'vulnerabilities', registerResolvers );

module.exports = {
    Query,
    Mutation
};