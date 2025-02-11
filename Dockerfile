# Dockerfile for brianorwhatever/uni-resolver-driver-did-webvh

FROM oven/bun:1

# build uni-resolver-driver-did-webvh

WORKDIR /usr/src/app

COPY index.ts ./
COPY package.json ./
COPY bun.lockb ./

RUN bun install

# done

EXPOSE 8080

CMD [ "bun", "run", "start" ]
