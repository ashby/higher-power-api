# Higher Power API

#### Development

Start docker container:

`docker-compose up`

Make sure you have the correct version of node installed and utilized:

`nvm install 10.15.1`

`nvm use`

Build prisma dependency files:

`yarn generate`

Run development environment ( note: you may have to create an account with prisma to host your demo db up on the nets):

`yarn run:dev`

Go to the playground:

`yarn playground`

Check out the database( * will be whatever you set endpoint path to in [prisma.yml](https://github.com/ashby/higher-power-api/blob/master/prisma.yml) ):

`https://eu1.prisma.sh/ashby-utting-73eac0/higher-power/*/_admin`

If changes to the schema have been made, the database will need to be cleared:

`yarn restart:dev`

And in some cases, redeployed:

`yarn prisma-deploy:dev`


[Documentation](https://github.com/ashby/self/blob/master/README.md)
