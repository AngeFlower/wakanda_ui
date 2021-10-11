<template>
	<div class="form-container categorie-form ">
		<input class="form-control" v-model="name" type="text" name="" placeholder="name">
		<button class="btn" @click="ajouter">Enregistrer</button>
	</div>
	
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return{
				name:"",
			}
		},
		methods:{
			ajouter(){
				let data = new FormData()
            	data.append("name",this.name)
                axios.post(this.url+'/categorie/',data,this.headers)
                .then((response)=>{
                    this.$store.state.categorie.push(response.data)
                })
                .catch((error)=>{
                    console.log(error)
                })

			}
		}

	}
	
</script>

<style scoped>
 	.categorie-form{
 		height: auto;
 	}
	
</style>