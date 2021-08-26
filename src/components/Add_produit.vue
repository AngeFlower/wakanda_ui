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
		<input ref="file" @change="e=>im1(e)" type="file" name="">
		<label>image_arriere</label>
		<input ref="file" @change="e=>im2(e)" type="file" name="">
		<label>image_face</label>
		<input ref="file" @change="e=>im3(e)" type="file" name="">
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
				image_devant:null,
				image_arriere:null,
				image_face:null,
			 }
		},
		mounted(){
			this.fetchMarque()
			this.fetchCategorie()

		},
		methods:{
			im1(e){
                this.image_devant=e.target.files[0]
            },
            im2(e){
                this.image_arriere=e.target.files[0]
            },
            im3(e){
                this.image_face=e.target.files[0]
            },
            ajouter(){
            	console.log(this.$store.state.user)
            	let data = new FormData()
                data.append("name",this.name)
                data.append("prix",this.prix)
                data.append("date",this.date)
                data.append("categorie",this.categorie)
                data.append("marque",this.marque)
                data.append("image_devant",this.image_devant)
                data.append("image_arriere",this.image_arriere)
                data.append("image_face",this.image_face)
                data.append("utilisateur",this.$store.state.user.id)

                axios.post(this.url+'/produit/',data,this.headers)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })

            },
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
		}

	}

</script>

<style type="">
	

</style>