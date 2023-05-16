<template>
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="col-12 mt-5 xl:mt-0 text-center">
                <img :src="'images/pint/banner.png'" alt="PINT logo" class="mb-5">
            </div>
            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">
                <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="text-center mb-5">
                        <!--<img src="layout/images/avatar.png" alt="Image" height="50" class="mb-3">-->
                        <div class="text-900 text-3xl font-medium mb-3">Welcome</div>
                        <span class="text-900 font-medium">Sign in to continue</span>
                    </div>
                
                    <div class="w-full md:w-10 mx-auto">
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Login</label>
                        <InputText id="email1" v-model="username" type="text" class="w-full mb-2" placeholder="Username" aria-describedby="username-help" />
                        <small id="username-help" class="block text-600 font-small mb-4">
                            Enter your username in the form: e12345 
                        </small>
                
                        <label for="password1" class="block text-900 text-xl font-medium  mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-8" inputClass="w-full" >
                        </Password>
                
                        <Button label="Sign In" class="w-full p-3 text-xl" @click="doLogin"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//const { authenticate } = require('ldap-authentication')

export default {
    
    
    data() {
        return {
            username: '',
            password: '',
            checked: false
        }
    },
    computed: {
        logoColor() {
            if (this.$appState.darkTheme) return 'white';
            return 'dark';
        }
    },
    methods: {
        /*async auth() {
            console.log ("Entrei ldap")
            
            const { authenticate } = require('ldap-authentication')
            
            let options = {
                ldapOpts: {
                url: 'ldaps://ldaps.edp.pt',
                // tlsOptions: { rejectUnauthorized: false }
                },
                adminDn: 'cn=sadtpoweradp01,ou=SISTEMA,dc=edp,dc=pt',
                adminPassword: 'ReO1357$1',
                userPassword: 'DIPlogic-1.3',
                userSearchBase: 'OU=DGU,OU=EDP,DC=edp,DC=pt',
                usernameAttribute: 'cn',
                username: 'e346549',
                // starttls: false
            }

            let user = await authenticate(options)
            console.log(user) 
        },*/
      doLogin() {
        if (this.username === "" || this.password === "") {
            this.emptyFields = true;
            return;
        } else {
            


            //console.log(authenticate);
            
            const ActiveDirectory = require("activedirectory2");

            console.log(ActiveDirectory);
            /*
                       
            var config = { url: 'ldaps://ldaps.edp.pt',
                        baseDN: 'OU=DGU,OU=EDP,DC=edp,DC=pt',
                        username: 'e346549',
                        password: 'DIPlogic-1.3' }
            console.log (config)
            
            var ad = new ActiveDirectory(config);
            
            console.log(ad);
            
            var username = 'ola';
            var password = 'mundo';

            ad.authenticate(username, password, function(err, auth) {
                if (err) {
                    console.log('ERROR: '+JSON.stringify(err));
                    return;
                }
                
                if (auth) {
                    console.log('Authenticated!');
                }
                else {
                    console.log('Authentication failed!');
                }
                });
*/
            //this.auth()
            /*
            var basicAuth = require('basic-auth');
            var LdapAuth = require('ldapauth-fork');

            var ldap = new LdapAuth({
                url: 'ldaps://ldaps.edp.pt:636',
                bindDN: 'cn=sadtpoweradp01,ou=SISTEMA,dc=edp,dc=pt',
                bindCredentials: 'ReO1357$1',
                searchBase: 'OU=DGU,OU=EDP,DC=edp,DC=pt',
                searchFilter: '(cn={{e346549}})',
                reconnect: true,
                });

            var rejectBasicAuth = function (res) {
                res.statusCode = 401;
                res.setHeader('WWW-Authenticate', 'Basic realm="Example"');
                res.end('Access denied');
                };

            var basicAuthMiddleware = function (req, res, next) {
                var credentials = basicAuth(req);
                if (!credentials) {
                    return rejectBasicAuth(res);
                }
            }


            ldap.authenticate("e346549", 'DIPlogic-1.3', function (err, user) {
                if (err) {
                    return rejectBasicAuth(res);
                }

                req.user = user;
                next();
            });
            */
            //LDAP.

            //alert("You are now logged in" + this.password);
            //Create Cookie
            this.$cookies.set("pint-user",{
                "authenticated": true,
                "username": this.username,
                "password": this.password,
            })
         }

        this.$router.push({ path: '/' })         

      }
    },
    mounted(){
        console.log("Entrei LoginPage.vue")
        console.log("Sai LoginPage.vue")
    }        
}
</script>

