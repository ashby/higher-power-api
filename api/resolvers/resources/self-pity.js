const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    selfPitys: () => prisma.selfPitys(),
    selfPity: ( _, { id } ) => prisma.selfPity( { id } )
}, {
    mutateSelfPity: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createSelfPity( data );
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
