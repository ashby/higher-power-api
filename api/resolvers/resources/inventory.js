const { prisma } = require( '../../../generated/prisma-client' );

module.exports = ( register ) => register( {
    inventory: async ( _, data ) => {
        const has = {
            resentment: await prisma.has()
        }
        //const defect = await prisma.defect();
        //const resentment = await prisma.resentment();
        // const obsession = await prisma.obsession();
        // const experience = await prisma.experience();
        // const strength = await prisma.strength();
        // const hope = await prisma.hope();
        const anger = await prisma.angers();
        console.log( anger );
        return {
            //defect,
            resentment: {
                anger
            },
            // obsession,
            // experience,
            // strength,
            // hope
        }
    }
} );
