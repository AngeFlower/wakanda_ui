<template>
	<div>
		<button class="btn" @click="show=!show">Ajouter les categories</button>
		<addcategorie v-if="show"/>
		<listcategorie></listcategorie>
	</div>
	
</template>

<script>
	import addcategorie from "../components/Add_categorie"
	import listcategorie from "../components/List_categorie"
	export default{
			data(){
			return{
				show:false,
			}
		},
		mounted(){
			if(!this.$store.state.user.is_admin){
				this.$router.push("/")
			}
		},
		components:{
			addcategorie,listcategorie,
		}

	}
	
</script>

<style>
	
</style>