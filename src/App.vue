<template>
  <div id="app" class='container mt-200'>
    <h1>My Shop</h1>
    <p class="animated fadeInRight"> See what we have for you!</p>
    <price value="4"></price>
    <product-list :products="products" :maximum="maximum"  > </product-list>
    
  </div>
</template>

<script>
import Price from "./components/Price"
import ProductList from "./components/Products"
export default {
  name: 'app',
  components:{
    Price,
    ProductList
  },
  data () {
    return {
      maximum:100,
      products: null,
    }
  },
  mounted: function() {
    fetch("https://hplussport.com/api/products/order/price")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  }
}
</script>


