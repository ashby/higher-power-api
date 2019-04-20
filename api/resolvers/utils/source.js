const { prisma } = require( '../../../generated/prisma-client' );
const { getHas } = require( './has' );

const getSources = async ( has, sources = [] ) => {
    if ( !has ) {
        has = await getHas();
    }
    const values = {};
    const sourcesPromises = sources.map( async source => {
        if ( has[ source.singular ] ) {
            const value = await prisma[ source.plural ]();
            values[ source.singular ] = value;
        }
    } );
    await Promise.all( sourcesPromises );
    return values;
};

module.exports = {
    getSources
};