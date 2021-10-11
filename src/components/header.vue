<template>
	    <div class="header">
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <a href="">
                        <img src=""
                            alt="" style="width: 200px; height: auto;">
                    </a>
                </div>
                <nav>
                    <ul id="menuItems">
                        <li> <router-link :to="{name:'Home'}"><a>Home</a></router-link></li>
                        <li><router-link :to="{name:'Produit'}"><a>Products</a></router-link></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Contacts</a></li>
                        <li><a href="">Account</a></li>
                        <li v-if="$store.state.user.is_admin">
                            <router-link :to="{name:'Categorie'}">
                                <a>Categories</a>
                            </router-link>
                        </li>
                          <li v-if="$store.state.user.is_admin">
                            <router-link :to="{name:'Marque'}">
                                <a>Marques</a>
                            </router-link>
                        </li>
                         <li v-if="$store.state.user.is_admin">
                            <router-link :to="{name:'Utilisateur'}">
                                <a>Utilisateurs</a>
                            </router-link>
                        </li>
                          <li v-if="$store.state.user.length !=0">
                            <router-link :to="{name:'Cart'}">
                                <a>Cart <SPAN id="cart">{{$store.state.cart.length}}</SPAN></a>
                            </router-link>
                        </li>

                        <li @click="deconnexion" v-if="$store.state.user.length !=0"><a >Deconnexion</a></li>
                        <li v-if="$store.state.user.length == 0">
                            <router-link :to="{name:'Login'}">
                                <a>Login</a>
                            </router-link>
                        </li>
                    </ul>
                    <img  class="menu" alt="" onclick="menuToggle()">
                </nav>
            </div>
        </div>
    </div>
	
</template>

<script >
	export default{

        methods:{
            deconnexion(){
                this.$store.state.user = null
                localStorage.removeItem('user')
                window.location="/"
            }
        },
        mounted(){
            console.log( this.$store.state.user)
        }
	}
	
</script>

<style scoped>
    #cart{
        width: 10px;
        height: 10px;
        padding: 5px;
        background-color: red;
        color: white; 
        border-radius: 50%;
    }
	
</style>