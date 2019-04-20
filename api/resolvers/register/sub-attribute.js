const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { handleHas } = require( '../utils/has' );

const query = async ( singular, plural ) => ( {
    [ plural ]: () => prisma[ plural ](),
    [ singular ]: ( _, { id } ) => prisma[ singluar ]( { id } )
} );

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

const mutate = ( singular ) => ( { 
    [ `mutate${upperCase( singular )}` ]: async ( parent, { id, data } ) => 
        await mutateSubattribute( singular, id, data )
} );

const registerSubattribute = ( singular, plural, register ) => register( 
    query( singular, plural ), 
    mutate( singular )
);

module.exports = {
    registerSubattribute
};
