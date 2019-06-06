const { prisma } = require( '../../../../../generated/prisma-client' );

const mutateProcess = async data => {
    if ( data.process ) {
        const processKey = `${data.process}-${data.userId}`;
        const sourceKey = `${data.source}-${data.userId}`;
        const hasProcess = await prisma.process( { key: processKey } );
        if ( !hasProcess ) {
            const process = {
                key: processKey,
                title: data.process,
                sources: { set: [ sourceKey ] },
                userId: data.userId
            };
            await prisma.createProcess( process );
        } 
    } else {
        return data;
    }
};

module.exports = mutateProcess;