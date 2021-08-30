<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <footers></footers>
  </div>
</template>

<script >
  import headers from "./components/header.vue"
  import footers from "./components/footer.vue"

  export default{
    components:{
          headers,footers,
    },
    mounted(){
      var user = JSON.parse(localStorage.getItem('user'));
      if(user){
        this.$store.state.user = user;
      }
      console.log(this.$store.state.user)
    },

    watch:{
      "$store.state.user":{
        deep:true,
        handler(new_val){
          if(!!new_val){
            localStorage.setItem("user",JSON.stringify(new_val));
          }
          else{
            localStorage.removeItem('user')
          }
        }
      }
    }

  };
</script>

<style src="./assets/style.css">
</style>
