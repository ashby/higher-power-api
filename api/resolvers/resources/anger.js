const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

module.exports = ( register ) => register( {
    angers: () => prisma.angers(),
    anger: ( _, { id } ) => prisma.anger( { id } )
}, {
    mutateAnger: async ( parent, { id, data } ) => {
        if ( !id ) {
            const anger = await prisma.createAnger( data );
            await handleHas( 'anger', data.attribute );
            return anger;
        }
        const anger = {
            ...data
        }; 
        return prisma.updateAnger( {
            data: anger,
            where: { id }
        } );
    }
} );
