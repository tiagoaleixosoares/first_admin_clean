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
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-8" inputClass="w-full" :feedback="false"></Password>
                
                        <Button label="Sign In" class="w-full p-3 text-xl" @click="doLogin"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

async function auth(username,password) {
  
    var axios = require("axios")
                
    const login = {
        "username": username,
        "password": password
    }
    const headers = { 
        "Content-Type": "application/json"
    };

    let result_auth;
    result_auth = await axios.post("http://127.0.0.1:8000/authenticate", login, { headers });
    return result_auth

}

export default {   
    data() {
        return {
            username: '',
            password: '',
            isActive: true
        }
    },
    computed: {
        logoColor() {
            if (this.$appState.darkTheme) return 'white';
            return 'dark';
        }
    },
    methods: { 
      doLogin() {
        if (this.username === "" || this.password === "") {
            this.emptyFields = true;
            return;
        } else {
            auth(this.username,this.password)
                .then (run => {
                    if (run.data.login_result == 'OK') {    
                        this.$cookies.set("pint-user",{
                            "authenticated": true,
                            "username": this.username,
                            "password": this.password,
                        })
                        this.$router.push({ path: '/' })         
                    } else {
                        this.$cookies.set("pint-user",{
                            "authenticated": false,
                        })
                        this.$router.push({ path: '/accessdenied' })  
                    }
                });  
         }


      }
    },
    mounted(){
        console.log("Mounted LoginPage.vue")
    }        
}
</script>

