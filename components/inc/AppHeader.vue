<template>
  <div>
  <nav class="nav navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbrand" href="#">CTU Enrollment</a>
    <button class="navbar-toggler navlinkcollpase" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto link">
        <li class="nav-item">
          <NuxtLink to="/home" class="nav-link">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/dashboard" class="nav-link">Dashboard</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
        </li>
      </ul>
    </div>
    
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
  background-color: #FF9F29;
  height: 70px;
  align-items: center;
  width: 100%;
}
.navbrand {
  font-weight: 700;
  align-items: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  color: #000000;
  margin-right: 50px;
}
.link {
  font-weight: 700;
  align-items: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  color: #b1afad;
}
.navlinkcollapse {
  color: #000000;
}
</style>