# LAMP-env

Main documentation is here: http://jmcoimbra.github.io/LAMP-env/

This repo intention is to provide a local environment to develop websites using LAMP (Linux, Apache, MySQL and PHP). "localhost" is going to be used as a Top Level Domain (TLD).

I accept help to update our LAMP best practices and also to get it "dockerized" and "vagranted-up".

Let's have a good development.

Cheers!

# Docker

To use our dockers you can jump in and just start everything with the commands below, _considering you are in the root folder of this repo_:

```bash
cd docker-compose
doker-compose up
```

It will grab our two provided Dockerfiles inside the folders `apache` and `dnsmask`, so you will get an Apache server and a dnsmask config to make your local environment a "localhost" TLD.
