const Mutation = {};
const Query = {};

function registerResolvers( queries = {}, mutations = {} ) {
    Object.assign( Query, queries );
    Object.assign( Mutation, mutations );
};

require( './resources/signup' )( registerResolvers );
require( './resources/login' )( registerResolvers );
//require( './resources/user' )( registerResolvers );

require( './resources/cast' )( registerResolvers );
require( './resources/inventory' )( registerResolvers );
require( './resources/higher-power' )( registerResolvers );

require( './resources/thought' )( registerResolvers );
require( './resources/feeling' )( registerResolvers );
require( './resources/path' )( registerResolvers );
require( './resources/process' )( registerResolvers );
require( './resources/source' )( registerResolvers );
require( './resources/character' )( registerResolvers );

module.exports = {
    Query,
    Mutation
};