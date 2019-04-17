const Mutation = {};
const Query = {};

function registerResolvers( queries = {}, mutations = {} ) {
    Object.assign( Query, queries );
    Object.assign( Mutation, mutations );
}

require( './resources/has' )( registerResolvers );
require( './resources/inventory' )( registerResolvers );

require( './resources/defect' )( registerResolvers );
require( './resources/resentment' )( registerResolvers );
require( './resources/obsession' )( registerResolvers );
require( './resources/experience' )( registerResolvers );
require( './resources/strength' )( registerResolvers );
require( './resources/hope' )( registerResolvers );

require( './resources/acceptance' )( registerResolvers );
require( './resources/anger' )( registerResolvers );
require( './resources/armor' )( registerResolvers );
require( './resources/boundary' )( registerResolvers );
require( './resources/compassion' )( registerResolvers );
require( './resources/courage' )( registerResolvers );
require( './resources/fear' )( registerResolvers );
require( './resources/gratitude' )( registerResolvers );
require( './resources/pride' )( registerResolvers );
require( './resources/salvation' )( registerResolvers );
require( './resources/self-pity' )( registerResolvers );
require( './resources/suffering' )( registerResolvers );
require( './resources/toxicity' )( registerResolvers );
require( './resources/trauma' )( registerResolvers );
require( './resources/vulnerability' )( registerResolvers );

module.exports = {
    Query,
    Mutation
};