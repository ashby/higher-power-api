const { prisma } = require( '../../../generated/prisma-client' );
const querySources = require( './sources' );

const queryProcesses = async ( key ) => {
    const process = await prisma.process( { key } );
    const sources = process ? await querySources( process.sources ) : [];
    return {
        ...process,
        sources
    };
};

module.exports = queryProcesses;