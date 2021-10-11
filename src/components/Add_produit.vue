<template>
	<div class="form-container product-form" >
		<input class="form-control" v-model ="name" type="text" name="name" placeholder="name">
		<input class="form-control" v-model ="prix" type="integer" name="prix" placeholder="prix">
		<input class="form-control" v-model ="date" type="date" name="date" placeholder="date">
		<label>categorie</label>
		<select class="form-control" v-model = "categorie" >
			<option disabled>.................</option>
			<option v-for="categorie in $store.state.categorie" :key="categorie.id" :value="categorie.id">{{categorie.name}}</option>
		</select><br>
		<label>marque</label>
		<select class="form-control" v-model = "marque" >
			<option disabled>.................</option>
			<option v-for="marque in $store.state.marque" :key="marque.id" :value="marque.id">{{marque.name}}</option>
		</select><br>
		<label>image_devant</label>
		<input class="form-control-file" ref="file" @change="e=>im1(e)" type="file" name="image_devant" >
		<label>image_arriere</label>
		<input class="form-control-file" ref="file" @change="e=>im2(e)" type="file" name="image_arriere" >
		<label>image_face</label>
		<input class="form-control-file" ref="file" @change="e=>im3(e)" type="file" name="image_face">
		<button class="btn" @click="ajouter">Enregistrer</button>
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
                    this.$store.state.produits.push(response.data)
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

<style scoped="">
	.product-form{
		width: 400px;
		height: auto;
	} 
	

</style>