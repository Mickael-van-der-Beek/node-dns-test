FROM node:9.2.0-slim

RUN mkdir -p /opt/src
WORKDIR /opt

COPY ./src /opt/src
