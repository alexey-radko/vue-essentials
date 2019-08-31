<template>
<div> 

 <transition-group
    tag="div"
    enter-active-class="animated fadeInRight"
    leave-active-class = "animated fadeOutRight"
>
    <div class="products" v-for="(item, index) in products" :key="index"
        v-if="item.price<=Number(maximum)">

    <div class="card" style="width:400px">
        <h2>{{item.name}}</h2>
        <img class="card-img-top" :src="item.image" :alt="item.name" style="width:100%">
        <div class="card-body">
            <p class="card-text">{{item.description}}</p>
            <h4 class="card-title"  ><price 
                :value="Number(item.price)"
                :prefix="'Euro '" 
                :precision="2" 
                :conversion="0.89"> </price>   <span> / </span>
                <price 
                :value="Number(item.price)"
                ></price>
            </h4>    
            <button type="button" class="btn btn-primary" @click="$parent.$emit('add', item)" >+</button>
            <a href="#" class="btn btn-primary">Buy</a>
        </div>
    </div>
    <br>

</div>
</transition-group>
</div>
</template>

<script>
import Price from "./Price"
export default {
    name:"product-list",
    data: function(){
        return {
            
            
        }
    },
    props:['products', 'maximum'],
    components:{
        Price
    }

}
</script>

<style>

</style>template