const { prisma } = require( '../../../../../generated/prisma-client' );

const mutateFeeling = async ( key, data ) => {
    let feelingKey;
    switch ( key ) {
        case 'path':
            feelingKey = `${data.path}-${data.feeling}-${data.userId}`;
            break;
        case 'source':
            feelingKey = `${data.source}-${data.feeling}-${data.userId}`;
            break;
    }
    const hasFeeling = await prisma.feeling( { key: feelingKey } );
    if ( !hasFeeling ) {
        const feeling = {
            key: feelingKey,
            title: data.feeling,
            thoughts: { set: [ data.id ] },
            userId: data.userId
        };
        await prisma.createFeeling( feeling );

    } else {
        let { updatedAt, id, createdAt, ...feeling } = hasFeeling;
        feeling = {
            ...feeling,
            thoughts: {
                set: [ ...feeling.thoughts, data.id ]
            }
        };
        return prisma.updateFeeling( {
            data: feeling,
            where: { id: hasFeeling.id }
        } );
    }
};

module.exports = mutateFeeling;