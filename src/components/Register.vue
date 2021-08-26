<template>
 <div>
    <div class="account-page">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <div class="form-container">
                        <div class="form-btn">
                            <span onclick="register()">Sign Up</span>
                            <hr id="Indicator">
                        </div>
                        <form @submit.prevent="Enregistrer">
                            <input v-model="username" type="text" name="username" placeholder="username">
                            <input v-model="first_name"  type="text" name="first_name" placeholder="first_name">
                            <input v-model="last_name" type="text" name="last_name" placeholder="last_name">
                            <input v-model="password"  type="password" name="password" placeholder="password">
                            <input v-model="email"  type="email" name="email" placeholder="email">
                            <input v-model="tel"  type="text" name="tel" placeholder="tel">
                            <input type="file" accept=".jpeg,.jpg,.png" @change="e=>procesImage(e)" name="">
                            <button @click="Enregistrer" name="enregistrer" type="submit" class="btn">Enregistrer</button>
                        </form>
                    </div>
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
        first_name :"",
        last_name :"",
        password :"",
        email :"",
        tel :"",
        avatar :null,
        }
    },
    methods:{
        Enregistrer(){
            let data = new FormData()
            data.append('username',this.username)
            data.append('first_name',this.first_name)
            data.append('last_name',this.last_name)
            data.append('password',this.password)
            data.append('email',this.email)
            data.append('tel',this.tel)
            data.append('avatar',this.avatar)
            axios.post('http://127.0.0.1:8000/api/register/',data,{'contentType':"multipat/form-data"})
                .then ((response)=>{
                    console.log(response)
                    this.$router.push('/')
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        },
        processImage(e){
            let image = e.target.files[0]
            if (image.size >300000){
                alert("Image ne depasse pas 300ko")
            }
            else {
                this.avatar = image;
            }
        }
    };

</script>

<style scoped>

</style>