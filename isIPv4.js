/*
  Returns true if string entered is a valid IPv4 address

  Private address ranges:
    10.0.0.0 to 10.255.255.255
    172.16.0.0 to 172.31.255.255
    192.168.0.0 to 192.168.255.255

  isIPv4('192.168.1.43') => true


*/

function isIPv4(ip) {
return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
}

export default isIPv4;
