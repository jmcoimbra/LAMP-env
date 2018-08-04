# Dockerfile source

This folder holds the Dockerfile used to build the image in [Docker Hub](<url>).

The command below will make you work with localhost as a top level domain (TLD) only for your machine (tested in Ubuntu 16.04):

```bash
docker run -d -p 80:80 -p 443:443 -p 53535:53/tcp -p 53535:53/udp --cap-add=NET_ADMIN --restart always --mount type=bind,source=/var/www,target=/var/www lamp-env:latest
```