<template>

  <div>
    <div class="container">
      <br>
      <div class="form-inline" action="#">
        <input type="text" id="form-name" v-model="item.name" placeholder="Name" class="form-control"> 
        <input type="text" v-model="item.course" placeholder="Course" class="form-control" v-on:keyup.enter="addItem" style="width:360px">
        <input type="text" v-model="item.year" placeholder="Year" class="form-control" v-on:keyup.enter="addItem" style="width:60px">
        <input type="text" v-model="item.section" placeholder="Section" class="form-control" v-on:keyup.enter="addItem" style="width:80px">
        <button @click="addItem"  class="imgbtn"><img src="~/static/images/add.png" class="imgbtn"/></button>
      </div>
        
      <br><br>
      <table class="table table-striped table-bordered table-sm">
        <thead class="thead-light">
          <th>Name</th>
          <th>Course</th>
          <th>Year</th>
          <th>Section</th>
          <th class="col-2">Edit/Del</th>
        </thead>
        <tr v-for="(item, index) in items" :key="item.name">
          <td>
            <input v-if="item.edit" type="text" v-model="item.name"  v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.name}} </span>
          </td>
          <td>
            <input v-if="item.edit" type="text" v-model="item.course" v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.course}} </span>
          </td>
          <td>
            <input v-if="item.edit" type="text" v-model="item.year" v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.year}} </span>
          </td>
          <td>
            <input v-if="item.edit" type="text" v-model="item.section" v-on:keyup.enter="item.edit = !item.edit">
            <span v-else>{{item.section}} </span>
          </td>
          <td>
            <button @click="item.edit = !item.edit" class="imgbtn"><img src="~/static/images/edit.png" class="imgbtn"/></button>
            <button @click="removeItem(index)" class="imgbtn"><img src="~/static/images/delete.png" class="imgbtn"/></button>
          </td>
        </tr>
      </table>
    </div>
  </div>
  </template> 
  
  <script>
  export default {
    data: function() {
      return {
        item: {name: "", course: "", year: "", section: "", edit: false},
        items: []
      }
    },
    methods:{
      addItem(){
        this.items.push({name:this.item.name, course:this.item.course, year:this.year, section:this.section, edit: false})
        this.item = [];
        
      },
      removeItem(index){
        this.items.splice(index, 1)
      }
    }
  };
  </script>
  
  <style>
  .form-inline input {
    margin-right:8px;
  }
  .imgbtn {
    border:0px; 
    background-color: transparent;
    width: 20px; 
    height: 20px;
    
  }
  </style>