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
              <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
            </div>
            <div class="form-group">
              <input type="text" placeholder="Price" v-model="product.price" class="form-control">
            </div>
            <div class="form-group">
              <button @click="saveData" class="btn btn-primary">Save Data</button>
            </div>
          </div>
          <h3>Product lists</h3>
          <table class="table">
            <thead>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </thead>
              <tbody>
                <tr v-for="pro in prdts" :key="pro.name">
                  <td>{{pro.data().name}}</td>
                  <td>{{pro.data().price}}</td>
                  <td>
                    <button class="btn btn-primary" @click="editProduct(pro)" data-toggle="modal" data-target="#edit">Edit</button>
                    <button class="btn btn-danger" @click="deleteProduct(pro)">delete</button>
                  </td>
                </tr>
              </tbody>
          </table>
     </div>

    
<!-- Modal -->
<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterediteditTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterediteditTitle">Edit Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
              <input type="text" v-model="editPrt.name" placeholder="Product Name" class="form-control">
            </div>
            <div class="form-group">
              <input type="text" v-model="editPrt.price" placeholder="Price" class="form-control">
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="updateProduct">Save changes</button>
      </div>
    </div>
  </div>
</div>
 </div>
</template>

<script>
import {fb, db} from '../firebase';
import { constants } from 'crypto';
export default {
  name: "Product",
  props: {
    msg: String
  },
  data(){
    return {
      prdts: [],
      product: {
        name: null,
        price: null
      },
      editPrt:{
        name: null,
        price: null
      },
      activeItem: null
    }
  },
  created(){
    this.readData();
  },
  methods:{
    updateProduct(){
       db.collection("products").doc(this.activeItem).update(this.editPrt)
            .then(function() {
                $('#edit').modal('hide');
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    },
    editProduct(doc){
      this.editPrt = doc.data();
      this.activeItem = doc.id;
    },
    deleteProduct(doc){
      if(confirm('Are you sure?')){
        db.collection("products").doc(doc.id).delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
      }
    },
    readData(){
       db.collection("products").get().then((querySnapshot)=> {
          querySnapshot.forEach((doc) =>{
              // doc.data() is never undefined for query doc snapshots
             this.prdts.push(doc);
           console.log(doc.id);
          });
      });
    },
    saveData(){
            db.collection("products").add(this.product)
                    .then((docRef) =>{
                        console.log("Document written with ID: ", docRef.id);
                        this.reset();
                        this.readData();
                    })
                    .catch((error)=> {
                        console.error("Error adding document: ", error);
                    });
    },
    reset(){
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

