<template>
  <div>
    <h2 class="title">Home Page</h2>

    <div class="center">
      <div class="card cardhome" style="width: 18rem;">
        <img src="~/static/images/CTUlogo.png" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <NuxtLink to="/dashboard" class="btn btn-primary">Dashboard</NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
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
  background-color: #FEC261;
  position: relative;
  width: 800px;
  border: #FEC261;
  box-shadow: inset 10px 15px 25px 5px rgba(217, 148, 38, 0.5);
  filter: drop-shadow(12px 12px 18px rgba(0, 0, 0, 0.25));
  margin: 50px;
}
</style>