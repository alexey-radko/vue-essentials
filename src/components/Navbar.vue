<template>
  <nav class="navbar navbar-expand-sm bg-light fixed-top">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link btn" href="#" v-on:click="showList()">Go back</a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn" href="#" @click="$parent.$emit('toggle')"  >Filtern</a>
      </li>
      <li class="nav-item">
        <div class="dropdown">
          <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
            Items:
            <span class="badge badge-light">{{cartQty}}</span>
            Summe:
            <span class="badge badge-light">
              <price
                :value="Number(cartTotal)"
                :prefix="'&euro;'"
                :precision="2"
                :conversion="0.89"
              ></price>
            </span>
          </button>
          <div class="dropdown-menu">
            <div class="dropdown-item" v-for="(index, item) in cards" :key="item.id">
              <span class="badge badge-light">{{index.qty}}</span>
              {{index.product.name}}
              <b>{{ Number(index.product.price) * index.qty }}</b>
              <a
                href="#"
                v-on:click.stop="$parent.$emit('delete', item)"
                class="badge badge-danger text-white mg-10"
              >–</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>


<script>
import Price from "./Price"
export default {
    name: "navbar",
    components:{
        Price
    },
    props:[
        'cartQty', 'cards', 'cartTotal'
    ]
};
</script>

<style>
</style>template