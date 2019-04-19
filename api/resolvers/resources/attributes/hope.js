const { prisma } = require( '../../../../generated/prisma-client' );
const { getHope, mutateAttribute } = require( './utils' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    hope: async () => getHope()
}, {
    mutateHope: async ( parent, { data } ) => 
        await mutateAttribute( 'hope', data )
} );
