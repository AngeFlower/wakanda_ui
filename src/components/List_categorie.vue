<template>
	<div class="small-container">
		<div class="row row-2">
        <h2>All Categories</h2>
		<div class="row">
			<div v-for = "categorie in $store.state.categorie" :key="categorie.id" :value="categorie.id" class="col-4">
                    <h4>{{ categorie.name }}</h4>		
		</div>
	</div>
</div>
</div>
</template>

<script >
	import axios from"axios"
	export default{
		mounted(){
			this.fetchCategorie()
		},
		methods:{
			fetchCategorie(){
				axios.get(this.url+'/categorie/',this.headers)
				.then((response)=>{
					this.$store.state.categorie=response.data
					console.log(response.data) 
				})
				.catch((error)=>{
					console.log(error)
				})
			}
		}

	}
</script>

<style>
	
</style>