<template>
  <div>
    <h2>Home Page</h2>

    <div class="card" style="width: 18rem;">
      <img src="~/static/images/CTUlogo.png" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <NuxtLink to="/dashboard" class="btn btn-primary">Dashboard</NuxtLink>
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

</style>