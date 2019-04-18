const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas } = require( '../utils' );

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
            hope = await prisma.createHope( hope );;
            await handleHas( 'hope' );
            return hope;
        }
        return prisma.updateHope( {
            data: hope,
            where: { id: data.id }
        } );
    }
} );
