<template>
    <div>
     <span>{{ this.prefix + Number.parseFloat(this.value * this.conversion).toFixed(this.precision) }}</span>
    </div>
</template>

<script>
export default {
    
     
   
   
    props:{
        value:Number,
        prefix:{
            type:String,
            default:'$'
        }, 
        precision:{
            type:Number,
            default:2
        },
        conversion:{
            type:Number,
            default:1
        } 
    },

}
</script>

<style>

</style>