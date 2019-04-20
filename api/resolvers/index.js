const { registerPath } = require( './register/path' );
const { registerFeeling } = require( './register/feeling' );

const Mutation = {};
const Query = {};

function registerResolvers( queries = {}, mutations = {} ) {
    Object.assign( Query, queries );
    Object.assign( Mutation, mutations );
}

require( './resources/has' )( registerResolvers );
require( './resources/inventory' )( registerResolvers );

registerPath( 'defect', registerResolvers );
registerPath( 'discontent', registerResolvers );
registerPath( 'obsession', registerResolvers );
registerPath( 'experience', registerResolvers );
registerPath( 'strength', registerResolvers );
registerPath( 'hope', registerResolvers );
registerPath( 'resentment', registerResolvers );

registerFeeling( 'acceptance', 'acceptances', registerResolvers );
registerFeeling( 'anger', 'angers', registerResolvers );
registerFeeling( 'armor', 'armors', registerResolvers );
registerFeeling( 'boundary', 'boundaries', registerResolvers );
registerFeeling( 'compassion', 'compassions', registerResolvers );
registerFeeling( 'courage', 'courages', registerResolvers );
registerFeeling( 'fear', 'fears', registerResolvers );
registerFeeling( 'fun', 'funs', registerResolvers );
registerFeeling( 'gratitude', 'gratitudes', registerResolvers );
registerFeeling( 'impatience', 'impatiences', registerResolvers );
registerFeeling( 'irritability', 'irritabilities', registerResolvers );
registerFeeling( 'joy', 'joys', registerResolvers );
registerFeeling( 'pride', 'prides', registerResolvers );
registerFeeling( 'salvation', 'salvations', registerResolvers );
registerFeeling( 'selfPity', 'selfPitys', registerResolvers );
registerFeeling( 'suffering', 'sufferings', registerResolvers );
registerFeeling( 'toxicity', 'toxicities', registerResolvers );
registerFeeling( 'trauma', 'traumas', registerResolvers );
registerFeeling( 'vulnerability', 'vulnerabilities', registerResolvers );

module.exports = {
    Query,
    Mutation
};