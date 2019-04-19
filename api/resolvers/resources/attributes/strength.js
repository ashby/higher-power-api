const { prisma } = require( '../../../../generated/prisma-client' );
const { getStrength, mutateAttribute } = require( './utils' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    strength: async () => getStrength()
}, {
    mutateStrength: async ( parent, { data } ) => 
        await mutateAttribute( 'strength', data )
} );
