const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    selfPities: () => prisma.selfPities(),
    selfPity: ( _, { id } ) => prisma.selfPity( { id } )
}, {
    mutateSelfPity: async ( parent, { id, data } ) => {
        if ( !id ) {
            const selfPity = await prisma.createSelfPity( data );
            await handleHas( 'selfPity' );
            return selfPity;
        }
        const selfPity = {
            ...data
        };
        return prisma.updateSelfPity( {
            data: selfPity,
            where: { id }
        } );
    }
} );
