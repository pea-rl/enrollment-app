<template>
  <div>
  <nav class="nav navbar navbar-expand-lg">
  <div class="container-fluid">
    <h1 class="navbrand">CTU Enrollment</h1>
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
  background: #FEC261;;
  height: 80px;
  align-items: center;
  width: 100%;
  left: 0px;
  top: 0px;
  box-shadow: inset 10px 15px 25px 5px rgba(217, 148, 38, 0.5);
}
.navbrand {
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
.link {
  font-weight: 700;
  align-items: flex-end;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  font-style: normal;
  line-height: 39px;
  font-weight: 700;
  color: #000000;
  margin: 15px;
}
.navlinkcollapse {
  color: #000000;
}
</style>