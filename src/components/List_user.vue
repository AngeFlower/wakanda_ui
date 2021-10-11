<template>
	<div class="small-container">
		<div class="row row-2">
        <h2>All Users</h2>
		<div class="row">
			<div v-for = "utilisateur in $store.state.utilisateur" :key="utilisateur.id" :value="utilisateur.id" class="col-4">
                    <h4>{{ utilisateur.user.username }}</h4>		
                    <h4>{{ utilisateur.user.first_name }}</h4>		
                    <h4>{{ utilisateur.user.last_name }}</h4>		
                    <h4>{{ utilisateur.user.password }}</h4>
                    <h4>{{ utilisateur.tel }}</h4>
                    <img :src="utilisateur.avatar" alt="">		
                    		
		</div>
	</div>
</div>
</div>
	
</template>

<script type="">
	import axios from"axios"
	export default{
		mounted(){
			this.fetchUtilisateur()
		},
		methods:{
			fetchUtilisateur(){
				axios.get(this.url+'/utilisateur/',this.headers)
				.then((response)=>{
					this.$store.state.utilisateur=response.data
					console.log(response.data) 
				})
				.catch((error)=>{
					console.log(error)
				})
			},
		}
	}
	

</script>

<style>
	

</style>