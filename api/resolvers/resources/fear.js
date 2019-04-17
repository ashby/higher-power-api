const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    fears: () => prisma.fears(),
    fear: ( _, { id } ) => prisma.fear( { id } )
}, {
    mutateFear: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createFear( data );
        }
        const fear = {
            ...data
        } ;
        return prisma.updateFear( {
            data: fear,
            where: { id }
        } );
    }
} );
