const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { handleHas } = require( '../utils/has' );

const mutateAttribute = async ( attribute, data ) => {
    let response;
    const name = upperCase( attribute );
    if ( !data.id ) {
        response.id = attribute;
        response = await prisma[ `create${name}` ]( attribute );
        await handleHas( attribute );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id: data.id }
    } );
};

const registerAttribute = ( singular, register ) => register( {
    [ singular ]: async () => getAttributes[ `get${upperCase(singular)}` ]()
}, {
    [ `mutate${upperCase(singular)}` ]: async ( parent, { data } ) => 
        await mutateAttribute( singular, data )
} );

module.exports = {
    registerAttribute
};