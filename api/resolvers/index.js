const Mutation = {};
const Query = {};

function registerResolvers( queries = {}, mutations = {} ) {
    Object.assign( Query, queries );
    Object.assign( Mutation, mutations );
}

require( './resources/has' )( registerResolvers );
require( './resources/inventory' )( registerResolvers );

require( './resources/attributes/defect' )( registerResolvers );
require( './resources/attributes/resentment' )( registerResolvers );
require( './resources/attributes/obsession' )( registerResolvers );
require( './resources/attributes/experience' )( registerResolvers );
require( './resources/attributes/strength' )( registerResolvers );
require( './resources/attributes/hope' )( registerResolvers );

require( './resources/sub-attributes/acceptance' )( registerResolvers );
require( './resources/sub-attributes/anger' )( registerResolvers );
require( './resources/sub-attributes/armor' )( registerResolvers );
require( './resources/sub-attributes/boundary' )( registerResolvers );
require( './resources/sub-attributes/compassion' )( registerResolvers );
require( './resources/sub-attributes/courage' )( registerResolvers );
require( './resources/sub-attributes/fear' )( registerResolvers );
require( './resources/sub-attributes/gratitude' )( registerResolvers );
require( './resources/sub-attributes/pride' )( registerResolvers );
require( './resources/sub-attributes/salvation' )( registerResolvers );
require( './resources/sub-attributes/self-pity' )( registerResolvers );
require( './resources/sub-attributes/suffering' )( registerResolvers );
require( './resources/sub-attributes/toxicity' )( registerResolvers );
require( './resources/sub-attributes/trauma' )( registerResolvers );
require( './resources/sub-attributes/vulnerability' )( registerResolvers );

module.exports = {
    Query,
    Mutation
};