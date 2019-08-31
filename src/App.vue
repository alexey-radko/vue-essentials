<template>
    


    <div id="app" class='container mt-200'> 
    <navbar :cards="cards"
    @toggle="toggleSliderStatus"
    @delete="deleteItem"
    :cartQty="cartQty"
    :cartTotal="cartTotal"
    
    
    > </navbar> 
    <h1 class ="mt-5 mb-4">My Shop</h1>
    <p class="animated fadeInRight"> See what we have for you!</p>
    
    <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum" > </price-slider>
    <product-list :products="products" :maximum="maximum" @add="addItem" > </product-list>
    </div>
  
  
</template>

<script>
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import ProductList from "./components/Products"
import PriceSlider from "./components/Price-Slider"
export default {
  name: 'app',
  components:{
    Price,
    ProductList,
    PriceSlider,
    Navbar
  },
  data () {
    return {
      maximum:100,
      products: null,
      cards:[],
      sliderStatus:false
    }
  },
  mounted:  function() {
    fetch("https://hplussport.com/api/products/order/price")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  },
  computed:{
    cartTotal: function(){
            var sum = 0;
            for(let key in this.cards){
                
                sum += (this.cards[key].product.price * this.cards[key].qty);
            }
            return sum;
        },
        cartQty: function(){
            var qty = 0;
            for(let key in this.cards){
                
                qty += (this.cards[key].qty);
            }
            return qty;
        }
  },
  methods:{
     deleteItem: function(index){
            console.log("pushed");
            if(this.cards[index].qty>1){
                this.cards[index].qty--; 
            } else {
                this.cards.splice(index, 1);
            }
        },
    toggleSliderStatus: function(){
      this.sliderStatus = !this.sliderStatus
    },
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


