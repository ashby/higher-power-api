const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    angers: () => prisma.angers(),
    anger: ( _, { id } ) => prisma.anger( { id } )
}, {
    mutateAnger: async ( parent, { data } ) => {
        if ( !data.id ) {
            return prisma.createAnger( data );
        }
        const anger = {
            id: data.id,
            name: data.name,
            description: data.description,
            attribute: data.attribute,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            sharedAt: data.sharedAt,
            amendedAt: data.amendedAt,
            resolvedAt: data.resolvedAt
        } 
        return prisma.updateAnger( {
            data: anger,
            where: { id: data.id }
        } );
    }
} );
