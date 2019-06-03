# Dockerfile source

The command below will make you work with localhost as a top level domain (TLD) only for your machine (tested in Ubuntu 16.04):

```bash
docker run -d -p 80:80 -p 443:443 -p 53535:53/tcp -p 53535:53/udp --cap-add=NET_ADMIN --restart always --mount type=bind,source=/var/www,target=/var/www lamp-env:latest
```

Or you can use this `docker-compose.yml` to play with your OS as a TLD "localhost" running the following command in the terminal:

```bash
sudo mkdir /var/lib/local-mysql
cd docker-compose
doker-compose up
```

The `/var/lib/local-mysql` folder creation is necessary to hold all your MySQL data, so you can use this folder as a backup.

To connect in this MySQL Server you can use `mysql` command, eg:

```bash
mysql -h 127.0.0.1 -P 3306 -u root -p
```

And type the password located in `docker-compose.yml` for MySQL service (usually the lastest line of this file).

If you run an PHP app, then remember you will need to connect to MySQL throught the container, so you must use the name of the service as the MySQL Server host, eg.: `mysql:3306`.

### Reference

[docker-compose Overview](https://docs.docker.com/compose/overview/)

TBD: ~~This folder holds the Docker Compose used to build the image in [Docker Hub](<url>).~~
