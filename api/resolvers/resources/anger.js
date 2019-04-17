const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    angers: () => prisma.angers(),
    anger: ( _, { id } ) => prisma.anger( { id } )
}, {
    mutateAnger: async ( parent, { id, data } ) => {
        if ( !id ) {
            return prisma.createAnger( data );
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
