const { prisma } = require( '../../../generated/prisma-client' );

const handleFeeling = async ( key, data ) => {
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

const handlePath = async data => {
    if ( data.path ) {
        const pathKey = `${data.path}-${data.userId}`;
        const feelingKey = `${data.path}-${data.feeling}-${data.userId}`;
        const hasPath = await prisma.path( { key: pathKey } );
        if ( !hasPath ) {
            const path = {
                key: pathKey,
                title: data.path,
                feelings: { set: [ feelingKey ] },
                userId: data.userId
            };
            await prisma.createPath( path );
        } else {
            let { updatedAt, id, createdAt, ...path } = hasPath;
            const hasFeelingKey = path.feelings.find( feeling => feeling === feelingKey );
            if ( !hasFeelingKey ) {
                path.feelings.push( feelingKey );
            };
            path = {
                ...path,
                feelings: { set: path.feelings }
            };
            return prisma.updatePath( {
                data: path,
                where: { id: hasPath.id }
            } );
        }
    } else {
        return data;
    }
};

const handleSource = async data => {
    if ( data.source ) {
        const sourceKey = `${data.source}-${data.userId}`
        const feelingKey = `${data.source}-${data.feeling}-${data.userId}`; 
        const hasSource = await prisma.source( { key: sourceKey } );
        if ( !hasSource ) {
            const source = {
                key: sourceKey,
                title: data.source,
                feelings: { set: [ feelingKey ] },
                userId: data.userId
            };
            await prisma.createSource( source );
        } else {
            let { updatedAt, id, createdAt, ...source } = hasSource;
            const hasFeelingKey = source.feelings.find( feeling => feeling === feelingKey );
            if ( !hasFeelingKey ) {
                source.feelings.push( feelingKey );
            }
            source = {
                ...source,
                feelings: { set: source.feelings }
            };
            return prisma.updateSource( {
                data: source,
                where: { id: hasSource.id }
            } );
        }
    } else {
        return data;
    }
};

const handleProcess = async data => {
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

module.exports = {
    handleFeeling,
    handlePath,
    handleSource,
    handleProcess,
};