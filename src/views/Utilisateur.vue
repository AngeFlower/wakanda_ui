<template>
	<div>
		<button class="btn" @click="show=!show">Ajouter les utilisateurs</button>
	<adduser v-if="show"></adduser>
	<listuser></listuser>
	</div>
	
	
</template>

<script type="">
	import adduser from "../components/Add_user"
	import listuser from "../components/List_user"
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
			adduser,listuser,
		}

	}
</script>

<style type="">
	

</style>