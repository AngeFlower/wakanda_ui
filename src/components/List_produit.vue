<template>
	<div>

<div class="small-container">
    <div class="row row-2">
        <h2>All Products</h2>
        <select>
            <option>Default sorting</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option></option>
            <option></option>
        </select>
    </div>
    <div class="row">
            
            <div v-for = "produit in $store.state.produits" :key="produit.id" :value="produit.id" class="col-4">
            	<div @click="detailprod(produit.id)">
            		
            	
                    <img :src="produit.image_devant" alt="">
                    <h4>{{ produit.name }}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>{{produit.prix}}</p>
    		</div> 
        </div>
        
        
    </div>
    <div class="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>&#8594;</span>
    </div>
</div>
    

	</div>
	
</template>

<script type="">
	import axios from 'axios'
	export default{
		mounted(){
			this.fetchProduit()
		},
		methods:{
			fetchProduit(){
				axios.get(this.url+'/produit/',this.headers)
				.then((response)=>{
					this.$store.state.produits=response.data
					console.log(response.data) 
				})
				.catch((error)=>{
					console.log(error)
				})
			},
			detailprod(id){
				this.$router.push("/produit/"+id)
			}
		}
	}

</script>

<style type="">
	

</style>