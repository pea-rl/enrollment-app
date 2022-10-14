<template>
  <div>
  <nav class="nav navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbrand" href="#">CTU Enrollment</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!--
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
        </li>
      </ul>
    </div>
    -->
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.nav {
  background-color: #B22727;
  height: 60px;
  align-items: center;
  width: 100%;
}
.navbrand {
  font-weight: 700;
  align-items: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  color: #F7F5F2;
  
}


</style>