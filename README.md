# Higher Power API

#### Development

Start docker container:

`docker-compose up`

Make sure you have the correct version of node installed and utilized:

`nvm install 10.15.1`

`nvm use`

Build prisma dependency files:

`yarn generate`

<<<<<<< HEAD
Deploy server:
=======
Run development environment ( note: you may have to create an account with prisma to host your demo db up on the nets):
>>>>>>> 118bb13bd260b630cbebbbcd5b86c3e798f73e40

`prisma deploy:dev`

Start development environment:

`yarn start:dev`

Go to the playground:

`yarn playground`

Check out the database( * will be whatever you set endpoint path to in [prisma.yml](https://github.com/ashby/higher-power-api/blob/master/prisma.yml) ):

`https://eu1.prisma.sh/ashby-utting-73eac0/higher-power/*/_admin`

If changes to the schema have been made, the database will need to be cleared:

`yarn restart:dev` 

or

`prisma delete`

or

`prisma reset -f`

And in some cases, redeployed:

`yarn prisma-deploy:dev`


[Documentation](https://github.com/ashby/self/blob/master/README.md)
<<<<<<< HEAD

Use the playground:

`yarn playground`

Singup and/or Login:

```
mutation{
	signup( email: "asdfas@gmail.com", password:"aksjdfhk"){
    token
    userId
  }
}

mutation{
	login( email: "asdfas@gmail.com", password:"aksjdfhk"){
    token
    userId
  }
}
```

Assign `Authorization` token in "Query Variables HTTP Headers":

```
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjandraWhnZ2ZqeWNwMGIxMjFhd2U2NTh1IiwiaWF0IjoxNTU5ODE2ODU5fQ.gPBvMfbEE9f4LNdCGSEX3Syt58G5Ve8cpZ0AzvNUkqw"
}
```

Create a thought, make sure to correctly include userId:

```
mutation{
  mutateThought(
    data: {
      thought: "I hope this works"
      character: "genie",
      quality: true,
      process: "wish"
      source: "dream",
      path: "hope",
      feeling: "experience",
      userId: "cjwkihggfjycp0b121awe658u",
    }
  ){
    thought
    id
    character
    quality
    process
    source
    feeling
    userId
    path
    createdAt
    updatedAt
    amendedAt
    sharedAt
  }
}
```

Query the thought through Cast:

```
query{
  cast(
    userId: "cjwkihggfjycp0b121awe658u"
  ){
    characters{
      id
      key
      title
      description
      process {
      	id
      	key
      	title
        sources{
          id
          key
          title
          feelings{
			id
            key
            title
            thoughts{
              thought
              id
              character
              quality
              process
              source
              feeling
              userId
              path
            }
          }
        }
      }
    }
  }
}
```

Query the thought through Inventory:

```
query{
  inventory(
    userId: "cjwkihggfjycp0b121awe658u"
  ){
    paths{
      id
      key
      title
      feelings{
        id
        key
        title
        thoughts{
          thought
          id
          character
          quality
          process
          source
          feeling
          userId
          path
        }
      }
    }
  }
}
```

Query whole higher power:

```
query{
    higherPower(
        userId: "cjwkihggfjycp0b121awe658u"
    ){
        cast{
            characters{
            id
            key
            title
            description
            process {
                id
                key
                title
                sources{
                    id
                    key
                    title
                    feelings{
                        id
                        key
                        title
                        thoughts{
                            thought
                            id
                            character
                            quality
                            process
                            source
                            feeling
                            userId
                            path
                            }
                        }
                    }
                }
            }
        }
        inventory{
            paths{
            id
            key
            title
            feelings{
                id
                key
                title
                thoughts{
                    thought
                    id
                    character
                    quality
                    process
                    source
                    feeling
                    userId
                    path
                    }
                }
            }
        }
    }
}
```

=======
>>>>>>> 118bb13bd260b630cbebbbcd5b86c3e798f73e40
