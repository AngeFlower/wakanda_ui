<template>
	<div>
		<button class="btn" @click="show=!show">Ajouter les marques</button>
		<AddMarque v-if="show"/>
		<listmarque></listmarque>
	</div>
</template>

<script type="">
	import listmarque from "../components/List_marque"
	import AddMarque from "../components/Add_marque"
	
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
			listmarque,AddMarque
		}

	}
	
</script>

<style type="">
	

</style>