// Validate IP Address
// Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", 
// where each X is a number from 0 to 255.

// For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while 
// "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

// Examples:

// ip = '192.168.0.1'
// output: true

// ip = '0.0.0.0'
// output: true

// ip = '123.24.59.99'
// output: true

// ip = '192.168.123.456'
// output: false

/* Valid IP address: 
  1. integer needs to be between 0 and 255
  2. has only 4 integers
  3. check that X is an integer
  4. needs a dot between 4 integers
  5. check that X does not have leading zeroes
  6. X should not be empty
*/

function validateIP(ip) {
  const ips = ip.split('.');

  // check length
  if (ips.length !== 4) return false;

  for (let i = 0; i < ips.length; i++) {
    let val = Number(ips[i]);

    // if val cannot be converted to a number, returns NaN
    if (isNaN(val)) return false;

    // if val is btw 0 - 255, valid
    if (val < 0 || val > 255) return false;

    // if val is empty, return false
    if (ips[i] === '') return false;

    // if val has leading zeroes, it is not a number
    if (ips[i].length > 1 && ips[i][0] === "0") return false;
  }

  return true;
}

// Time complexity: O(N) linear where N is the number of string characters in ip
// Space complexity: O(N) at split operation