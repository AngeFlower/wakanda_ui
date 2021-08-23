<template>
    <div>
    <label>Username</label>
    <input type="text" v-model="username" name="">
    <label>Password</label>
    <input type="password" v-model="password" name="">
    <button @click="enregistrer">Enregistrer</button>
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
        enregistrer(){
            let data = new FormData()
            data.append('username',this.username)
            data.append('password',this.password)
            axios.post(this.url+'/login/',data,{'contentType':"multipat/form-data"})
                .then ((response)=>{
                    this.$store.state.user = response.data
                    console.log(this.$store.state.user)
                    console.log(this.user)
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