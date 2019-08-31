<template>
    <div>
    <navbar :cards="cards"
    
    :cartQty="cartQty"
    :cartTotal="cartTotal"
    
    
    > </navbar> 
    <h1 class ="mt-5 mb-4">My Shop</h1>
    <p class="animated fadeInRight"> See what we have for you!</p>
    
    <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum" > </price-slider>
    <product-list :products="products" :maximum="maximum"  > </product-list>
    </div>
</template>

<script>
import Navbar from "./Navbar"
import Price from "./Price"
import ProductList from "./Products"
import PriceSlider from "./Price-Slider"
export default {
    name:"artikels",
    components:{
        Navbar,
        Price,
        ProductList,
        PriceSlider
    },
    props: [
    "cards",
    "maximum",
    "products",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState"
  ],

    
}
</script>