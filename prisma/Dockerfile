FROM prismagraphql/prisma:1.29

RUN apk update && apk upgrade
RUN apk add --no-cache --update util-linux binutils findutils jq rsync curl wget git bash bash-completion grep nano openssl coreutils tar xz zip

RUN apk add --no-cache --update python python-dev py-pip
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir --upgrade awscli

RUN mkdir -p /util

COPY ./run-prisma.sh /util

ENTRYPOINT [ "/bin/sh", "-c", "/util/run-prisma.sh" ]
