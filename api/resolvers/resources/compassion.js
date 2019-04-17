const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    compassions: () => prisma.compassions(),
    compassion: ( _, { id } ) => prisma.compassion( { id } )
}, {
    mutateCompassion: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createCompassion( data );
        }
        const compassion = {
            ...data
        };
        return prisma.updateCompassion( {
            data: compassion,
            where: { id }
        } );
    }
} );
