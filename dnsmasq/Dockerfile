FROM andyshinn/dnsmasq

LABEL maintainer="jmcoimbra.eng.br"

# Installing & configuring dnsmasq
#RUN apt-get update; \
#	apt-get install -y dnsmasq;

COPY ./dnsmasq.conf /etc/dnsmasq.conf

####### DEV STUFF #######
#RUN apt-get install curl vim lsof -y

# Finalizing...
EXPOSE 53 53/udp

ENTRYPOINT ["dnsmasq", "-k"]
