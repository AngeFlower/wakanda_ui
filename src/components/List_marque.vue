<template>
	<div class="small-container">
		<div class="row row-2">
        <h2>All Marks</h2>
		<div class="row">
			<div v-for = "marque in $store.state.marque" :key="marque.id" :value="marque.id" class="col-4">
                    <img :src="marque.logo" alt="">
                    <h4>{{ marque.name }}</h4>		
		</div>
	</div>
</div>
</div>
</template>

<script >
	import axios from"axios"
	export default{
		mounted(){
			this.fetchMarque()
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
			}
		}

	}
</script>

<style>
	
</style>