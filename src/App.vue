<template>



    <div id="app" class='container mt-200'> 
    <h1>My Shop</h1>
    <p class="animated fadeInRight"> See what we have for you!</p>
    
    <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum" > </price-slider>
    <product-list :products="products" :maximum="maximum" @add="addItem" > </product-list>
    </div>
  
  
</template>

<script>
import Price from "./components/Price"
import ProductList from "./components/Products"
import PriceSlider from "./components/Price-Slider"
export default {
  name: 'app',
  components:{
    Price,
    ProductList,
    PriceSlider
  },
  data () {
    return {
      maximum:100,
      products: null,
      cards:[],
      sliderStatus:true
    }
  },
  mounted: function() {
    fetch("https://hplussport.com/api/products/order/price")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  },
  methods:{
    addItem: function(product){
      var productIndex;
      var existing = this.cards.filter(function(item, index){
          if(item.product.id == Number(product.id)){
              productIndex = index;
              return true;
          } else {
              return false;
          }
          
          
      });
      if(existing.length){
          this.cards[productIndex].qty++
      } else {
          this.cards.push({product:product, qty: 1});
      }
    }
  }
}
</script>


