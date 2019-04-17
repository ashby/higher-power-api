const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    defect: async () => {
        const trauma = await prisma.traumas();
        const toxicity = await prisma.toxicities();
        const suffering = await prisma.sufferings();
        const defect = {
            trauma,
            toxicity,
            suffering
        };
        return defect;
    }
}, {
    mutateDefect: async ( parent, { data } ) => {
        let defect;
        if ( !data.id ) {
            defect.id = 'defect';
            return prisma.createDefect( defect );
        }
        return prisma.updateDefect( {
            data: defect,
            where: { id: data.id }
        } );
    }
} );
