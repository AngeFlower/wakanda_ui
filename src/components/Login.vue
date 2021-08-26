<template>
   
    <div class="account-page">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <div class="form-container">
                        <div class="form-btn">
                            <span onclick="login()">Login</span>
                            <hr id="Indicator">
                        </div>
                        <form @submit.prevent="Login" >
                            <input v-model="username" type="text" name="username" placeholder="Username" >
                            <input v-model="password"  type="password" name="password" placeholder="Password">
                            <button @click="Login" type="submit" name="connexion" class="btn">Login</button>
                            <a href="">Forgot Password?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
    import axios from 'axios'
    export default{
    data(){
        return{
        username :"",
        password :"",
        user :[],
        }
    },
    mounted(){
        console.log("Login mounted")
    },
    methods:{
        Login(){
            let data = new FormData()
            data.append('username',this.username)
            data.append('password',this.password)
            axios.post(this.url+'/login/',data,{'contentType':"multipat/form-data"})
                .then ((response)=>{
                    this.$store.state.user = response.data
                    console.log(this.$store.state.user)
                    console.log(this.user)
                    this.$router.push('/produit')
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        },
    };

</script>

<style scoped>

</style>