#!/bin/bash

# Start apache2
service apache2 start
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to apache2: $status"
  exit $status
fi

# Start dnsmasq
service dnsmasq start
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start dnsmasq: $status"
  exit $status
fi

#service dnsmasq start && service apache2 start
