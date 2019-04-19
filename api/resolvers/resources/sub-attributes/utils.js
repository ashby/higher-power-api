const { prisma } = require( '../../../../generated/prisma-client' );
const { handleHas } = require( '../../utils' );

const mutateSubattribute = async ( subattribute, id, data ) => {
    const name = subattribute.charAt( 0 ).toUpperCase() + subattribute.slice( 1 );
    if ( !id ) {
        const response = await prisma[ `create${name}` ]( data );
        await handleHas( subattribute, data.attribute );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id }
    } );
}

module.exports = {
    mutateSubattribute
};