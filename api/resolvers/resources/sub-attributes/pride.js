const { prisma } = require( '../../../../generated/prisma-client' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    prides: () => prisma.prides(),
    pride: ( _, { id } ) => prisma.pride( { id } )
}, {
    mutatePride: async ( parent, { id, data } ) => {
        if ( !id ) {
            const pride = await prisma.createPride( data );
            await handleHas( 'pride', data.attribute );
            return pride;
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
