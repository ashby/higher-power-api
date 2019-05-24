const app = require( 'test/app' );
const { createThought } =  require( 'test/framework' );

describe( 'Thought', () => {
    describe( 'Thoughts query', () => {
        const ids = [];
        beforeAll( async () => {
            await createThought();
        } );

        fit( 'returns a list of Thought objects', async () => {   
            const response = await app.queryRequest(
                `query {
                    thoughts {
                        id
                        character
                        thought
                        quality
                        source
                        process
                        path
                        feeling
                        userId
                    }
                }`,
            );
            ids.push( response.thoughts.id );
            expect( response.thoughts.length ).toBeGreaterThan( 0 );
        } );
    } );

    describe( 'Thought query', () => {
        let model;
        const ids = [];
        const ThoughtName = `Thought-${new Date().getTime()}`;
        beforeAll( async () => {
            model = await createThought();
            ids.push( model.id );
        } );

        it( 'should return a Thought with a given name', async () => {
            
            const response = await app.queryRequest(
                `query($name: String!) {
                    thought(name: $name) {
                        id
                        name
                        studio
                        purchasable
                        properties
                        createdAt
                        updatedAt
                    }
                }`,
                { name: model.name }
            );
            expect( response.thought ).toEqual( model );
        } );

        it( 'should return null if not given a valid name', async () => {
            
            const response = await app.queryRequest(
                `query($name: String!) {
                    thought(name: $name) {
                        id
                        name
                        studio
                        purchasable
                        properties
                    }
                }`,
                { name: 'not-there' }
            );
            expect( response.thought ).toEqual( null );
        } );
    } );

    describe( 'mutateThought mutation', () => {
        it( 'should mutate a Thought with the new data', async () => {
            
            const thought = await createThought();

            const newName = `thought-mutation-1-new-name-${new Date().getTime()}`;
            const response = await app.queryRequest(
                `mutation($data: ThoughtInput!) {
                    mutateThought(data: $data) {
                        id
                        name
                        studio
                        purchasable
                        properties
                    }
                }`,
                { data: { id: thought.id, name: newName, studio: true, purchasable: false } }
            );

            expect( response ).toEqual( {
                mutateThought: {
                    studio: thought.studio,
                    purchasable: Thought.purchasable,
                    name: newName,
                    id: thought.id,
                    properties: thought.properties
                }
            } );
        } );

        it( 'should create a new thought if an ID is omitted', async () => {
            
            const ThoughtName = `thought-mutation-2-${new Date().getTime()}`;
            const { mutateThought } = await app.queryRequest(
                `mutation($data: ThoughtInput!) {
                    mutateThought(data: $data) {
                        id
                        name
                        studio
                        purchasable
                        properties
                    }
                }`,
                { data: { name: ThoughtName, studio: true, purchasable: false } }
            );

            const { thought } = await app.queryRequest(
                `query($name: String!) {
                    thought(name: $name) { name }
                }`,
                { name: mutateThought.name }
            );

            expect( thought ).toEqual( { name: mutateThought.name } );
        } );
    } );
} );
