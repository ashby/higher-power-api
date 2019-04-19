const { prisma } = require( '../../../../generated/prisma-client' );
const { getResentment, mutateAttribute } = require( './utils' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    resentment: async ( _, data ) => getResentment()
}, {
    mutateResentment: async ( parent, { data } ) => 
        await mutateAttribute( 'resentment', data )
} );
