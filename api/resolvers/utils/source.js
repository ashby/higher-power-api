const { prisma } = require( '../../../generated/prisma-client' );

const getSources = async ( sources = [] ) => {
    const values = {};
    const sourcesPromises = sources.map( async source => {
        const value = await prisma[ source.plural ]();
        values[ source.singular ] = value;
    } );
    await Promise.all( sourcesPromises );
    return values;
};

module.exports = {
    getSources
};