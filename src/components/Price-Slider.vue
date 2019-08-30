<template>
  <transition
    name="custom"
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOut"
  >
    <div v-if="sliderStatus">
      <div class="text-center" :class="sliderState">
        <label for="formMax">Maximum</label>
        <input id="formMax" class="input-group-sm text-center" type="text" 
        @change="$emit('update:maximum', maxAm)"
        v-model="maxAm"  />
        <input type="range" class="form-control-range" min="50" max="200"
        @input="$emit('update:maximum', maxAm)"
         v-model="maxAm" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data:function(){
      return{
          maxAm:100
      }
  }  ,
  name: "priceSlider",
  props:["sliderStatus"],
  computed:{
      sliderState: function(){
            return this.sliderStatus ? ' animation': 'd-none';
        }
        
  }
};
</script>

<style>
</style>