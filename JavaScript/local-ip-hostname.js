const os = require('os');
const dns = require('dns');

// Get Local IP Address
const networkInterfaces = os.networkInterfaces();
for (const interfaceName in networkInterfaces) {
  const iface = networkInterfaces[interfaceName].find(info => info.family === 'IPv4' && !info.internal);
  if (iface) {
    console.log(`Local IP Address: ${iface.address}`);
  }
}

// Get Hostname
dns.lookup(os.hostname(), (err, address, family) => {
  if (err) console.error('Error resolving hostname:', err);
  else console.log(`Hostname: ${os.hostname()}, IP: ${address}`);
});
