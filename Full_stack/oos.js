const os = require('os');

console.log('--- OS MODULE OPERATIONS ---');
console.log('Operating System:', os.type());        // OS type (Windows/Linux/Mac)
console.log('Platform:', os.platform());            // Platform type (win32/darwin/linux)
console.log('Architecture:', os.arch());            // CPU Architecture (x64/arm/etc.)
console.log('Total Memory (GB):', (os.totalmem() / 1e9).toFixed(2));
console.log('Free Memory (GB):', (os.freemem() / 1e9).toFixed(2));
console.log('Home Directory:', os.homedir());       // Path to the home directory
console.log('System Uptime (sec):', os.uptime());   // System uptime in seconds
console.log('CPU Details:', os.cpus());       