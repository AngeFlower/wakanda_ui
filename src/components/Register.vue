<template>
	<div>
	<label>Username</label>
	<input type="text" v-model="username" name="">
	<label>First_name</label>
	<input type="text" v-model="first_name" name="">
	<label>Last_name</label>
	<input type="text" v-model="last_name" name="">
	<label>Password</label>
	<input type="password" v-model="password" name="">
	<label>Email</label>
	<input type="email" v-model="email" name="">
	<label>Tel</label>
	<input type="text" v-model="tel" name="">
	<label>Profil</label>
	<input type="file" accept=".jpeg,.jpg,.png" @change="e=>procesImage(e)" name="">
	<button @click="enregistrer">Enregistrer</button>
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
		enregistrer(){
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