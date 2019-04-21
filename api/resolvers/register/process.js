const { prisma } = require( '../../../generated/prisma-client' );
const { upperCase } = require( '../utils' );
const { PROCESS } = require( '../constants/processes' );

const query = async ( singular, plural ) => ( {
    [ plural ]: () => prisma[ plural ](),
    [ singular ]: ( _, { id } ) => prisma[ singluar ]( { id } )
} );

const mutateProcess = async ( process, data ) => {
    data = {
        ...PROCESS[ process ],
        ...data
    };
    const name = upperCase( process );
    if ( !data.id  ) {
        data.id = process;
        const response = await prisma[ `create${name}` ]( data );
        return response;
    }
    return prisma[ `update${name}` ]( {
        data,
        where: { id: data.id }
    } );
}

const mutate = ( singular ) => ( { 
    [ `mutate${upperCase( singular )}` ]: async ( parent, { id, data } ) => 
        await mutateProcess( singular, id, data )
} );

const registerProcess = ( singular, plural, register ) => register( 
    query( singular, plural ), 
    mutate( singular )
);

module.exports = {
    registerProcess,
    mutateProcess
};