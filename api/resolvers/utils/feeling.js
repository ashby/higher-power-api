const { prisma } = require( '../../../generated/prisma-client' );
const { getHas } = require( './has' );

const getFeelings = async ( has, feelings = [] ) => {
    if ( !has ) {
        has = await getHas();
    }
    const values = {};
    const feelingPromises = feelings.map( async ( feeling ) => {
        if ( has[ feeling.singular ] ) {
            const value = await prisma[ feeling.plural ]();
            values[ feeling.singular ] = value;
        }
    } );
    await Promise.all( feelingPromises );
    return values;
};

module.exports = {
    getFeelings
}