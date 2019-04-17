const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    courages: () => prisma.courages(),
    courage: ( _, { id } ) => prisma.courage( { id } )
}, {
    mutateCourage: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createCourage( data );
        }
        const courage = {
            ...data
        };
        return prisma.updateCourage( {
            data: courage,
            where: { id }
        } );
    }
} );
