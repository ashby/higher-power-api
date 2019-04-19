const { prisma } = require( '../../../../generated/prisma-client' );
const { mutateSubattribute } = require( './utils' );

module.exports = ( register ) => register( {
    compassions: () => prisma.compassions(),
    compassion: ( _, { id } ) => prisma.compassion( { id } )
}, {
    mutateCompassion: async ( parent, { id, data } ) => 
        await mutateSubattribute( 'compassion', id, data )
} );
