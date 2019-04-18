const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    gratitudes: () => prisma.gratitudes(),
    gratitude: ( _, { id } ) => prisma.gratitude( { id } )
}, {
    mutateGratitude: async ( parent, { id, data } ) => {
        if ( !id ) {
            const gratitude = await prisma.createGratitude( data );
            await handleHas( 'gratitude', data.attribute );
            return gratitude;
        }
        const gratitude = {
            ...data
        };
        return prisma.updateGratitude( {
            data: gratitude,
            where: { id }
        } );
    }
} );
