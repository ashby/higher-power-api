# Higher Power API

#### Development

Start docker container:

`docker-compose up`

Make sure you have the correct version of node installed and utilized:

`nvm install 10.15.1`

`nvm use`

Build prisma dependency files:

`yarn generate`

Run development environment:

`yarn run:dev`

If changes to the schema have been made, the database will need to be cleared:

`yarn restart:dev`

And in some cases, redeployed:

`yarn prisma-deploy:dev`


[Documentation](https://github.com/ashby/self/blob/master/README.md)