const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    hope: async () => {
        const salvation = await prisma.salvations();
        const hope = {
            salvation
        };
        return hope;
    }
}, {
    mutateHope: async ( parent, { data } ) => {
        let hope;
        if ( !data.id ) {
            hope.id = 'hope';
            return prisma.createHope( hope );
        }
        return prisma.updateHope( {
            data: hope,
            where: { id: data.id }
        } );
    }
} );
