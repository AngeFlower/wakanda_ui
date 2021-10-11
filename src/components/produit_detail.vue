
<template>
    <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img :src="produit.image_devant" id="productImg">
                <div class="small-img-row">
                    <div class="small-img-col">
                        <img :src="produit.image_devant "
                            class="small-img" width="100%">
                    </div>
                    <div class="small-img-col">
                        <img :src="  produit.image_arriere " class="small-img" width="100%">
                    </div>
                    <div class="small-img-col">
                        <img :src="  produit.image_face " class="small-img"
                            width="100%">
                    </div>
                </div>
            </div>
            <div class="col-2">
                <h1>{{ produit.name }}</h1>
                <h3>{{produit.marque.name}}</h3>
                <h4>{{ produit.prix}}</h4>
                <select>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>L</option>
                    <option>M</option>
                    <option>S</option>
                </select>
                <div class="btn" style="margin-right: 10px;" @click="Diminuer">-</div>
                <input v-model="quantite" style="width: 90px" type="Integer" placeholder="Quantite" name="Quantite">
                <div class="btn" @click="Augmenter">+</div>
                <div>Prix total {{quantite * produit.prix}} FBU </div>
                <button class="btn" style="margin-left: 10px;" @click="ajouter">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script >
    import axios from"axios"
    export default{
        data(){

            return{
                id:null,
                produit:null,
                quantite:1,
                total:0
            }

        },
        mounted(){
            this.fetchProduit()
        },
        methods:{
            Diminuer(){
                if (this.quantite>1) { 
                this.quantite --;
                this.total = this.quantite * this.produit.prix
                }
            },
            Augmenter(){
                this.quantite ++;
                this.total = this.quantite * this.produit.prix
            },
            fetchProduit(){
                axios.get(this.url+'/produit/'+this.$route.params.id+"/",this.headers)
                .then((response)=>{
                    this.produit=response.data
                    console.log(response.data) 
                })
                .catch((error)=>{
                    console.log(error)
                })
            },
            ajouter(){
                console.log(this.$store.state.cart)
                console.log(this.produit.id)
                let id = -1
                for(let i=0;i<this.$store.state.cart.length;i++){
                    if(this.$store.state.cart[i].produit.id===this.produit.id){
                        id=i;
                    }
                }
                if (id!=-1) {
                    this.$store.state.cart[id].quantite+=this.quantite
                }
                else{ 
                    this.$store.state.cart.push({
                        "user": this.user,
                        "produit": this.produit,
                        "quantite": this.quantite,
                        "amount": this.amount
                    })
                }

            }
    }
}
    
</script>

<style type=""></style>