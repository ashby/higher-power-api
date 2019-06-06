const { prisma } = require( '../generated/prisma-client' );
const uuid = require( 'uuid/v4' );
const { signup } = require( '../api/resolvers/resources/auth/signup' );

const framework = {
    createUser: async ( opts = {} ) => {
        const email = uuid();
        
        const data = Object.assign( {
            email: `${email}@higher-power.com`,
            password: 'Testing123456!!'
        }, opts );
        return await signup( data );
    },
    createCharacter: async ( opts = { process } ) => {
        const key = `character-${uuid()}`;
        const { userId } = await framework.createUser();
        const data = Object.assign( {
            key,
            title: `${key}-title`,
            description: `${key} description`,
            process: opts.process || uid(),
            userId
        }, opts );
        return await prisma.createCharacter( data );
    },
    createPath: async ( opts = { feelings} ) => {
        const key = `path-${uuid()}`;
        const { userId } = await framework.createUser();
        const data = Object.assign( {
            key,
            title: `${key}-title`,
            feelings: opts.feelings || [ uuid() ],
            userId
        }, opts );
        return await prisma.createPath( data );
    },
    createFeeling: async ( opts = { thoughts } ) => {
        const key = `feeling-${uuid()}`;
        const { userId } = await framework.createUser();
        const data = Object.assign( {
            key,
            title: `${key}-title`,
            thoughts: opts.thoughts || [ uuid() ],
            userId,
        }, opts );
        return await prisma.createFeeling( data );
    },
    createProcess: async ( opts = { sources } ) => {
        const key = `process-${uuid()}`;
        const { userId } = await framework.createUser();
        const data = Object.assign( {
            key,
            title: `${key}-title`,
            sources: opts.sources || [ uuid() ],
            userId
        }, opts );
        return await prisma.createProcess( data );
    },
    createSource: async ( opts = { feelings } ) => {
        const key = `source-${uuid()}`;
        const { userId } = await framework.createUser();
        const data = Object.assign( {
            key,
            title: `${key}-title`,
            feelings: opts.feelings || [ uuid() ],
            userId
        }, opts );
        return await prisma.createSource( data );
    },
    createThought: async ( opts = {} ) => {
        const { userId } = await framework.createUser();
        const data = Object.assign( {
            character: uuid(),
            thought: 'My thought',
            quality: true,
            source: uuid(),
            process: uuid(),
            path: uuid(),
            feeling: uuid(),
            userId
        }, opts );
        return await prisma.createProcess( data );
    }
};

module.exports = framework;
