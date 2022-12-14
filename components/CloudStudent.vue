<template>
  <div class="body">
    <div class="container">
      <br />
      <div class="form-inline" action="#">
        <input
          type="text"
          id="form-name"
          v-model="item.name"
          placeholder="Name"
          class="form-control"/>
        <input
          type="text"
          v-model="item.course"
          placeholder="Course"
          class="form-control"
          style="width: 360px"/>
        <input
          type="text"
          v-model="item.year"
          placeholder="Year"
          class="form-control"
          style="width: 60px"/>
        <input
          type="text"
          v-model="item.section"
          placeholder="Section"
          class="form-control"
          style="width: 80px"/>

        <button @click="addItem" class="imgbtn">
          <img src="~/static/images/add.png" class="imgbtn" />
        </button>
      </div>

      <br /><br />
      <table class="table table-striped table-bordered table-sm tablerows" style="border: 0px; font-size: 13px;">
        <thead class="thead-light">
          <th style="background-color: #06283d; color: #d8e4e9;">Name</th>
          <th style="background-color: #06283d; color: #d8e4e9;">Course</th>
          <th style="background-color: #06283d; color: #d8e4e9;">Year</th>
          <th style="background-color: #06283d; color: #d8e4e9;">Section</th>
          <th class="col-2" style="background-color: #06283d; color: #d8e4e9;">Edit/Del</th>
        </thead>
        <tr v-for="(item, index) in items" :key="item.name">
          <td>
            <input
              v-if="item.edit"
              type="text"
              v-model="item.name"
              v-on:keyup.enter="item.edit = !item.edit"/>
            <span v-else>{{ item.name }} </span>
          </td>
          <td>
            <input
              v-if="item.edit"
              type="text"
              v-model="item.course"
              v-on:keyup.enter="item.edit = !item.edit"/>
            <span v-else>{{ item.course }} </span>
          </td>
          <td>
            <input
              v-if="item.edit"
              type="text"
              v-model="item.year"
              v-on:keyup.enter="item.edit = !item.edit"/>
            <span v-else>{{ item.year }} </span>
          </td>
          <td>
            <input
              v-if="item.edit"
              type="text"
              v-model="item.section"
              v-on:keyup.enter="item.edit = !item.edit"/>
            <span v-else>{{ item.section }} </span>
          </td>
          <td>
            <button @click="ItemEdit(item)" class="imgbtn">
              <img src="~/static/images/edit.png" class="imgbtn" />
            </button>
            <button @click="removeItem(item)" class="imgbtn">
              <img src="~/static/images/delete.png" class="imgbtn" />
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
const url = 'http://localhost:3002/cloud_student_data';
export default {
  data: function () {
    return {
      item: { id: 0, name: "", course: "", year: "", section: "", edit: false },
      items: [],
    };
  },
  methods: {
    async addItem() {
      await this.$axios.$post(url + '/insert', this.item)
      .then((res) => {
        console.log(res);
        this.item = { name: "", course: "", year: "", section: "", edit: false };
      })
      .catch((err) => console.log(err.response.data));
      await this.GetAllRecords();
    },
    async removeItem(item) {
      await this.$axios.$post(url + '/delete', {id: item.id})
      .then((res) => {
        console.log("res");
      })
      .catch((err) => console.log(err));

      await this.GetAllRecords();
    },
    async GetAllRecords(){
      await this.$axios.$get(url)
      .then((res) => {
        console.log(res);
        this.items = res;
      })
      .catch((err) => console.log(err));
      await this.GetCurrentID();
    },
    async ItemEdit(item){
      if(!item.edit)
      {
        item.edit = !item.edit;
      }
      else
      {
        item.edit = !item.edit;

        await this.$axios.$post(url + '/update', item)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        await this.GetAllRecords();
      }
    },
    async GetCurrentID(){
      this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
    }
  },
  async mounted() {
    await this.GetAllRecords();
  },
}
</script>

<style>
.body {
  background-color: #fec261;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.form-inline input {
  margin-right: 8px;
}
.imgbtn {
  border: 0px;
  background-color: transparent;
  width: 20px;
  height: 20px;
}
.tablerows {
  background: rgb(252, 250, 250);
}
.tableheader {
  background-color: #06283d;
  color: #d8e4e9;
}
</style>
