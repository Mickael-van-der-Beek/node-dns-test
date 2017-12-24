'use strict';

const dns = require('dns');

const hostname = 'google';

dns.lookup(hostname, (err, ipAddresses) => {
  if (err) {
    console.log('[error] lookup: ', err);
  } else {
    console.log('[success] lookup: ', ipAddresses);
  }

  dns.resolve(hostname, (err, ipAddresses) => {
    if (err) {
      console.log('[error] resolve: ', err);
    } else {
      console.log('[success] resolve: ', ipAddresses);
    }
  });
});
