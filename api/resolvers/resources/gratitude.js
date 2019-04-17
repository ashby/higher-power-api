const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    gratitudes: () => prisma.gratitudes(),
    gratitude: ( _, { id } ) => prisma.gratitude( { id } )
}, {
    mutateGratitude: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createGratitude( data );
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
