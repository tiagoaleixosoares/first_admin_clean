process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const adr = 'ldaps://ldaps.edp.pt:636';
const username = 'cn=sadtpoweradp01,OU=SISTEMA,DC=edp,DC=pt';
const password = 'ReO1357$11';


async function test_ldap(user, pass) {

  // Import the ldapjs library
  const ldap = require('ldapjs');
        
  // Create a client instance and connect to the LDAP server
  const client = ldap.createClient({
    url: adr // Replace with your LDAP server details
  });

  // Bind to the LDAP server with the provided username and password
  let result = client.bind(user, pass, (err, auth) => {
    if (err) {
      this.errorMessage = 'Authentication failed. Please check your username and password.';
    } else {
      // Authentication successful, perform any further actions here
      // For example, redirect to another page or display a success message
      console.log('Authentication successful ldapjs');
      //console.log(auth);
    }
  })

  console.log ("3")
  console.log (result)
  
  return result

}


resultado = test_ldap(username,password);
console.log ("1")
console.log (resultado)




/*
var url = require('url');

try {
    parsedURL = new url.URL(adr)
  } catch (error) {
    throw new TypeError(urlStr + ' is an invalid LDAP url (scope)')
  }

if (!parsedURL.protocol || !(parsedURL.protocol === 'ldap:' || parsedURL.protocol === 'ldaps:')) { throw new TypeError(adr + ' is an invalid LDAP url (protocol)') }

const ActiveDirectory = require("activedirectory2");
var config = { url: adr,
            baseDN: 'OU=DGU,OU=EDP,DC=edp,DC=pt',
            username: 'cn=sadtpoweradp01,OU=SISTEMA,DC=edp,DC=pt',
            password: 'ReO1357$1',
            tlsOptions: { rejectUnauthorized: false } }

var ad = new ActiveDirectory(config);

console.log(ad);

ad.authenticate(username, password, function(err, auth) {
    if (err) {
        console.log('ERROR: '+JSON.stringify(err));
        return;
    }
    
    if (auth) {
        console.log('Authenticated ad!');
    }
    else {
        console.log('Authentication failed!');
    }
    }).then () {
      console.log('Authentication failed!asdads');
    } ;
*/
