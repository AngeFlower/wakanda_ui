<template>
	
<div class="small-container cart-page">
    <table>
        <tr>
            <th>Product</th>
            <th>Prix Unitaire</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
         <tr v-for="item in this.$store.state.cart" :key="item.id">
            <td>
                <div class="cart-info">
                    <img :src="item.produit.image_devant">
                    <div>
                        <p></p>
                        <small></small>
                        <br>
                        <a href="">Remove</a>
                    </div>
                </div>
            </td>
            <td>{{item.produit.prix}}</td>	
            
            <td>
                <p>	{{item.quantite}}</p>
            </td>
            <td></td>
        </tr>
       
    </table>
    <div class="total-price">
        <table>
            <tr>
                <td>Total</td>
                <td>130,000 BIF</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>12,000 BIF</td>
            </tr>
            <tr>
                <td>Grand Total</td>
                <td>142,000 BIF</td>
            </tr>
        </table>
    </div>
</div>

 
	
</template>

<script >
	export default{
		mounted(){
			console.log(this.$store.state.cart)
		}
	}
	
</script>

<style>
	
</style>