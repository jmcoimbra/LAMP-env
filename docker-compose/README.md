# Dockerfile source

This folder holds the Docker Compose used to build the image in [Docker Hub](<url>).

The command below will make you work with localhost as a top level domain (TLD) only for your machine (tested in Ubuntu 16.04):

```bash
docker run -d -p 80:80 -p 443:443 -p 53535:53/tcp -p 53535:53/udp --cap-add=NET_ADMIN --restart always --mount type=bind,source=/var/www,target=/var/www lamp-env:latest
```

Or you can use this `docker-compose.yml` to play with your OS as a TLD "localhost" running the following command in the terminal:

```bash
doker-compose up
```

### Reference

[docker-compose Overview](https://docs.docker.com/compose/overview/)
