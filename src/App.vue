<template>
    


    <div id="app" class='container mt-200'> 
      <checkout class="mt-5"
      :cartTotal="cartTotal"
      :cards="cards"
      @add= "addItem"
      @delete= "deleteItem"
      
      ></checkout>
      <artikels
      @toggle="toggleSliderStatus"
      @delete="deleteItem"
      @add="addItem"
      :cards="cards"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      :sliderStatus="sliderStatus" 
      :maximum.sync="maximum"
      :products="products"  
      
      
      ></artikels>
    
    </div>
  
  
</template>

<script>
import Artikels from "./components/Artikels"
import Checkout from "./components/Checkout"
export default {
  name: 'app',
  components:{
   Artikels,
   Checkout
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


