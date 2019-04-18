const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    traumas: () => prisma.traumas(),
    trauma: ( _, { id } ) => prisma.trauma( { id } )
}, {
    mutateTrauma: async ( parent, { id, data } ) => {
        if ( !id ) {
            const trauma = await prisma.createTrauma( data );
            await handleHas( 'trauma', data.attribute );
            return trauma;
        }
        const trauma = {
            ...data
        };
        return prisma.updateTrauma( {
            data: trauma,
            where: { id }
        } );
    }
} );