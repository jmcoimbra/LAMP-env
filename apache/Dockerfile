FROM ubuntu:18.10

LABEL maintainer="jmcoimbra.eng.br"

### Installing Apache httpd
RUN apt-get update; \
	apt-get install -y apache2;

# Configuring httpd
COPY ./000-default.conf /etc/apache2/sites-enabled/000-default.conf
COPY ./apache2.conf /etc/apache2/apache2.conf
COPY ./ssl /etc/apache2/ssl
COPY ./default-ssl.conf /etc/apache2/sites-available/default-ssl.conf

RUN a2enmod rewrite; \
  a2enmod vhost_alias; \
	a2enmod ssl; \
	gpasswd -a root www-data; \
	chown -R root:www-data var/www; \
	a2ensite default-ssl.conf;

####### DEV STUFF #######
RUN apt-get install curl vim lsof -y

# Finalizing...
EXPOSE 80 443

CMD ["apachectl", "-D", "FOREGROUND"]
