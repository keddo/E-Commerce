<template>
 <div class="Product">
     <div class="container">
          <div class="intro">
            <div class="row">
              <div class="col-md-6">
                <h3>Products Page</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, minus! Quia vero enim nulla labore maxime quibusdam nesciunt alias, placeat quae, assumenda nam culpa libero, minus fuga corporis officiis tempora!</p>
              </div>
              <div class="col-md-6">
                <img src="/img/svg/product.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>


          <hr>

          <h3>BASIC CRUD (CREATE/READ/UPDATE/DELETE) IN FIREBASE AND VUE</h3>
          <div class="product-test">
            <div class="form-group">
              <input type="text" placeholder="Product Name" v-model="name" class="form-control">
            </div>
            <div class="form-group">
              <input type="text" placeholder="Price" v-model="price" class="form-control">
            </div>
            <div class="form-group">
              <button @click="saveData" class="btn btn-primary">Save Data</button>
            </div>
          </div>
     </div>
 </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    msg: String
  },
  data(){
    return {
      name: null,
      price: null
    }
  },
  methods:{
    saveData(){
      console.log('save data to firebase cloud service');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

