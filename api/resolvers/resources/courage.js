const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    courages: () => prisma.courages(),
    courage: ( _, { id } ) => prisma.courage( { id } )
}, {
    mutateCourage: async ( parent, { id, data } ) => {
        if ( !id ) {
            const courage = await prisma.createCourage( data );
            await handleHas( 'courage', data.attribute );
            return courage;
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
