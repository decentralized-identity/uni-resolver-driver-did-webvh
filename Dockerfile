# Dockerfile for brianorwhatever/uni-resolver-driver-did-tdw

FROM oven/bun:1

# build uni-resolver-driver-did-tdw

WORKDIR /usr/src/app

COPY index.ts ./
COPY package.json ./
COPY bun.lockb ./

RUN bun install

# done

EXPOSE 8080

CMD [ "bun", "run", "start" ]
