<template>
  
  <div class="body">
    
    <sidebar/>

    <h2 class="title">Home Page</h2>
    <div class="center"  >
      <div class="card cardhome">
        <img src="~/static/images/CTUlogo.png" class="card-img-top" style="width: 50%; height: 50%; align-items: center; padding: 20px;">
        <div class="card-body">
          <h5 class="card-title text">Card title</h5>
          <p class="card-text text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <NuxtLink to="/dashboard" class="btn btn-primary">Dashboard</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./inc/Sidebar.vue";
export default {
  name: 'home',
  components: { Sidebar }
}
</script>

<style>
.body {
  background-color: #fec261;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.title {
  font-weight: 700;
  align-items: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  font-style: normal;
  line-height: 40px;
  color: #051E2E;
  text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.25);
  margin: 5px;
}
.center {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 2%;
    position: relative;
}
.cardhome {
  background-color: #06283d;
  position: relative;
  width: 400px;
  border: #06283d;
  box-shadow: inset 10px 15px 25px 5px rgba(28, 18, 78, 0.37);
  filter: drop-shadow(12px 12px 18px rgba(18, 24, 68, 0.508));
  margin: 0px;
}
.text {
  color:#fec261;
}
</style>