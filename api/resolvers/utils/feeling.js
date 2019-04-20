const { prisma } = require( '../../../generated/prisma-client' );

const getFeelings = async ( feelings = [] ) => {
    const values = {};
    const feelingPromises = feelings.map( async ( feeling ) => {
        const value = await prisma[ feeling.plural ]();
        values[ feeling.singular ] = value;
    } );
    await Promise.all( feelingPromises );
    return values;
};

module.exports = {
    getFeelings
}