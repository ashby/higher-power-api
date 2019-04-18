const { prisma } = require( '../../../generated/prisma-client' );
const { handleHas, getDefect } = require( '../utils' );

module.exports = ( register ) => register( {
    defect: async () => getDefect()
}, {
    mutateDefect: async ( parent, { data } ) => {
        let defect;
        if ( !data.id ) {
            defect.id = 'defect';
            defect = await prisma.createDefect( defect );
            await handleHas( 'defect' );
            return defect;
        }
        return prisma.updateDefect( {
            data: defect,
            where: { id: data.id }
        } );
    }
} );
