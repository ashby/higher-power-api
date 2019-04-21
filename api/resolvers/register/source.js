const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { SOURCE } = require( '../constants/sources' );

const query = async ( singular, plural ) => ( {
    [ plural ]: () => prisma[ plural ](),
    [ singular ]: ( _, { id } ) => prisma[ singluar ]( { id } )
} );

const mutateSource = async ( source, data ) => {
    const name = upperCase( source );
    if ( !data.id ) {
        const response = await prisma[ `create${name}` ]( data );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id }
    } );
}

const mutate = ( singular ) => ( { 
    [ `mutate${upperCase( singular )}` ]: async ( parent, { data } ) => 
        await mutateSource( singular, data )
} );

const registerSource = ( singular, plural, register ) => register( 
    query( singular, plural ), 
    mutate( singular )
);

module.exports = {
    registerSource
};
