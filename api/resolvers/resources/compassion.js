const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    compassions: () => prisma.compassions(),
    compassion: ( _, { id } ) => prisma.compassion( { id } )
}, {
    mutateCompassion: async ( parent, { id, data } ) => {
        if ( !id ) {
            const compassion = prisma.createCompassion( data );
            await handleHas( 'compassion', data.attribute );
            return compassion;
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
