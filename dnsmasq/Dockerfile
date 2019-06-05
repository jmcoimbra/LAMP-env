FROM andyshinn/dnsmasq

LABEL maintainer="jmcoimbra.eng.br"

COPY ./dnsmasq.conf /etc/dnsmasq.conf

####### DEV STUFF #######
#RUN apt-get install curl vim lsof -y

# Finalizing...
EXPOSE 53 53/udp

ENTRYPOINT ["dnsmasq", "-k"]
