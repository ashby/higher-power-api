const { prisma } = require( '../../../generated/prisma-client' );
const { getHas } = require( './has' );

const getSources = async ( has, sources = [] ) => {
    if ( !has ) {
        has = await getHas();
    }
    const values = {};
    const sourcesPromises = sources.map( async source => {
        let key, queries;
        if ( typeof source === 'object' ) {
            key = source.singular;
            queries = feeling.plural;
        } else {
            key = source;
            queries = `${source}s`;
        }
        if ( has[ key ] ) {
            const value = await prisma[ queries ]();
            values[ key ] = value;
        }
    } );
    await Promise.all( sourcesPromises );
    return values;
};

module.exports = {
    getSources
}