const Mutation = {};
const Query = {};

function registerResolvers( queries = {}, mutations = {} ) {
    Object.assign( Query, queries );
    Object.assign( Mutation, mutations );
}

require( './resources/anger' )( registerResolvers );
require( './resources/inventory' )( registerResolvers );
require( './resources/resentment' )( registerResolvers );

module.exports = {
    Query,
    Mutation
};