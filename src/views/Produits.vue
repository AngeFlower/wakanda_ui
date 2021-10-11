<template>
	<div>
		<button v-if="$store.state.user.is_admin" class="btn" @click="show=!show">Ajouter les produits</button>
		<addproduit v-if="show"></addproduit>
		<listproduit></listproduit>
	</div>
</template>

<script type="">
	import listproduit from "../components/List_produit"
	import addproduit from "../components/Add_produit"	
	export default{
		mounted(){
			if($store.state.user.length==0){
				this.router.push("/login")
			}
		},
		data(){
			return{
				show:false,
			}

		},
		components:{
			listproduit,addproduit
		}

	}
	
</script>

<style type="">
	

</style>