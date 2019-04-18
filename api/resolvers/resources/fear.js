const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    fears: () => prisma.fears(),
    fear: ( _, { id } ) => prisma.fear( { id } )
}, {
    mutateFear: async ( parent, { id, data } ) => {
        if ( !id ) {
            const fear = await prisma.createFear( data );
            await handleHas( 'fear' );
            return fear;
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
