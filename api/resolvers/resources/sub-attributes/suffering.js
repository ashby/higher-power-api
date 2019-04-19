const { prisma } = require( '../../../../generated/prisma-client' );
const { handleHas } = require( '../../utils' );

module.exports = ( register ) => register( {
    sufferings: () => prisma.sufferings(),
    suffering: ( _, { id } ) => prisma.suffering( { id } )
}, {
    mutateSuffering: async ( parent, { id, data } ) => {
        if ( !id ) {
            const suffering = await prisma.createSuffering( data );
            await handleHas( 'suffering', data.attribute );
            return suffering;
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

