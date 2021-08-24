<template>
	<div>
		<label>name</label>
		<input v-model ="name" type="text" name="name">
		<label>prix</label>
		<input v-model ="prix" type="integer" name="prix">
		<label>date</label>
		<input v-model ="date" type="date" name="date">
		<label>categorie</label>
		<select v-model = "categorie">
			<option disabled>.................</option>
			<option v-for="categorie in $store.state.categorie" :key="categorie.id" :value="categorie.id">{{categorie.name}}</option>
		</select>
		<label>marque</label>
		<select v-model = "marque">
			<option disabled>.................</option>
			<option v-for="marque in $store.state.marque" :key="marque.id" :value="marque.id">{{marque.name}}</option>
		</select>
		<label>image_devant</label>
		<input ref="file" @change="e=>Fichier(e)" type="file" name="">
		<label>image_arriere</label>
		<input ref="file" @change="e=>Fichier(e)" type="file" name="">
		<label>image_face</label>
		<input ref="file" @change="e=>Fichier(e)" type="file" name="">
		<button @click="ajouter">Enregistrer</button>
	</div>
	
</template>

<script type="">
	import axios from "axios"
	export default{
		data(){
			return{
				name:"",
				prix:"",
				date:"",
				categorie:"",
				marque:"",
				image_devant:[],
				image_arriere:[],
				image_face:[],
			 }
		},
		mounted(){
			this.fetchMarque()
			this.fetchCategorie()

		},
		methods:{
			fetchMarque(){
				axios.get(this.url+'/marque/',this.headers)
				.then((response)=>{
					this.$store.state.marque=response.data
					console.log(response.data) 
				})
				.catch((error)=>{
					console.log(error)
				})
			},
			fetchCategorie(){
				axios.get(this.url+'/categorie/',this.headers)
				.then((response)=>{
					console.log(response.data)
					this.$store.state.categorie=response.data
					console.log(this.$store.state.categorie)
				})
				.catch((error)=>{
					console.log(error)
				})
			},
			ajouter(){
				console.log(".")
			}
		}

	}

</script>

<style type="">
	

</style>