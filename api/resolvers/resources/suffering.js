const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    sufferings: () => prisma.sufferings(),
    suffering: ( _, { id } ) => prisma.suffering( { id } )
}, {
    mutateSuffering: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createSuffering( data );
        }
        const suffering = {
            ...data
        };
        return prisma.updateSuffering( {
            data: suffering,
            where: { id }
        } );
    }
} );

