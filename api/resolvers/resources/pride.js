const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    prides: () => prisma.prides(),
    pride: ( _, { id } ) => prisma.pride( { id } )
}, {
    mutatePride: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createPride( data );
        }
        const pride = {
            ...data
        };
        return prisma.updatePride( {
            data: pride,
            where: { id }
        } );
    }
} );
