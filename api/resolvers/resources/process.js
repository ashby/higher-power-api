const { prisma } = require( '../../../generated/prisma-client' );

const query = () => ( {
    processes: () => prisma.processes(),
    process: ( _, { id } ) => prisma.process( { id } )
} );

const mutateProcess = async ( data ) => {
    if ( !data.id ) {
        data = await prisma.createProcess( data );
        return data;
    }
    const { id, ...feeling } = data;
    return prisma.updateProcess( {
        data: feeling,
        where: { id: data.id }
    } );
};

const mutate = () => ( { 
    mutateProcess: async ( parent, { data } ) => await mutateProcess( data )
} );

const registerProcess = register => register( query(), mutate() );

module.exports = registerProcess;