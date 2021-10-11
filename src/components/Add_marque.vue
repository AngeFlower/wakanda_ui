<template>
	<div class="form-container marque-form " >
		<input class="form-control" v-model="name" type="text" name="name" placeholder="name">
		<label>Logo</label>
		<input class="form-control-file" ref="file" @change="e=>Fichier(e)" type="file" name=""><br>
        <button class="btn" @click="ajouter">Enregistrer</button>
	</div>	

</template>

<script>
	import axios from"axios"
	export default{
		data(){
			return{
				name:"",
				logo:null,
			}
		},
		methods:{
			Fichier(e){
                this.logo=e.target.files[0]
            },
            ajouter(){
            	let data = new FormData()
            	data.append("name",this.name)
                data.append("logo",this.logo)
                axios.post(this.url+'/marque/',data,this.headers)
                .then((response)=>{
                    this.$store.state.marque.push(response.data)
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
		}
	}
	

</script>

<style scoped>
	.marque-form{
		height: auto;

	}
</style>