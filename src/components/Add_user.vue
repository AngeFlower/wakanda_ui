<template>
	<div>
		<label>Username</label>
        <input v-model="username" type="text" name="" placeholder="username"><br>
        <label>firstname</label>
        <input v-model="firstname" type="text" name="" placeholder="firstname"><br>
        <label>lastname</label>
        <input v-model="lastname" type="text" name="" placeholder="lastname"><br>
        <label>password</label>
        <input v-model="password" type="password" name="" placeholder="password"><br>
        <label>tel</label>
        <input v-model="tel" type="text" name="" placeholder="tel"><br>
        <label>avatar</label>
        <input ref="file" @change="e=>Fichier(e)" type="file" name=""><br>
        <button @click="ajouter">Enregistrer</button>

	</div>
	
</template>

<script >
	import axios from 'axios'
	export default{
		data(){
			return{
				username :"",
                firstname :"",
                lastname :"",
                password :"",
                tel :"",
                avatar :null,
			}
		},
		methods:{
			Fichier(e){
                this.avatar=e.target.files[0]
            },
            ajouter(){
            	let data = new FormData()
                data.append("user.username",this.username)
                data.append("user.first_name",this.firstname)
                data.append("user.last_name",this.lastname)
                data.append("user.password",this.password)
                data.append("tel",this.tel)
                data.append("avatar",this.avatar)

                axios.post(this.url+'/utilisateur/',data,this.headers)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })

            }
		},

		computed:{
			headers(){
			return{
				"Content-Type":"multipart/form-data"
			}	
			}
			
		}
	}
	

</script>

<style>
	

</style>