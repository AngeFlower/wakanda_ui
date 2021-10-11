<template>
	<div class="form-container user-form">
        <input class="form-control" v-model="username" type="text" name="" placeholder="username"><br>
        <input class="form-control" v-model="firstname" type="text" name="" placeholder="firstname"><br>
        <input class="form-control" v-model="lastname" type="text" name="" placeholder="lastname"><br>
        <input class="form-control" v-model="password" type="password" name="" placeholder="password"><br>
        <input class="form-control" v-model="tel" type="text" name="" placeholder="tel"><br>
        <label>avatar</label>
        <input class="form-control-file" ref="file" @change="e=>Fichier(e)" type="file" name=""><br>
        <button class="btn" @click="ajouter">Enregistrer</button>

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
                console.log(this.$store.state.user)
            	let data = new FormData()
                data.append("user.username",this.username)
                data.append("user.first_name",this.firstname)
                data.append("user.last_name",this.lastname)
                data.append("user.password",this.password)
                data.append("tel",this.tel)
                data.append("avatar",this.avatar)

                axios.post(this.url+'/utilisateur/',data,this.headers)
                .then((response)=>{
                    this.$store.state.utilisateur.push(response.data)
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

<style scoped>
    .user-form{
        height: auto;
    }
	

</style>