const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { handleHas, getHas } = require( '../utils/has' );

const query = async ( singular, plural ) => ( {
    [ plural ]: () => prisma[ plural ](),
    [ singular ]: ( _, { id } ) => prisma[ singluar ]( { id } )
} );

const mutateFeeling = async ( subpath, id, data ) => {
    const name = upperCase( subpath );
    if ( !id ) {
        const response = await prisma[ `create${name}` ]( data );
        await handleHas( subpath, data.path );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id }
    } );
}

const mutate = ( singular ) => ( { 
    [ `mutate${upperCase( singular )}` ]: async ( parent, { id, data } ) => 
        await mutateFeeling( singular, id, data )
} );

const registerFeeling = ( singular, plural, register ) => register( 
    query( singular, plural ), 
    mutate( singular )
);

module.exports = {
    registerFeeling
};
