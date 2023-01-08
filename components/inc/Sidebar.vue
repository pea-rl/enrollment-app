<template>
  <div>
    <div id="mySidenav" class="sidenav" :class="{ openNavClass: isActive }">
      <div class="brand">
        <h1 class="brand">CTU Enrollment</h1>
      </div>
      <ul class="navbar-nav me-auto link">
        <li class="nav-item sidenavbtn" @click="isActive = !isActive">
          <NuxtLink to="/home" class="nav-link">Home</NuxtLink>
        </li>
        <li class="nav-item" @click="isActive = !isActive">
          <NuxtLink to="/student" class="nav-link">Student List</NuxtLink>
        </li>
        <li class="nav-item" @click="isActive = !isActive">
          <NuxtLink to="/cloudstudent" class="nav-link">Cloud Student List</NuxtLink>
        </li>
        <li class="nav-item" @click="isActive = !isActive">
          <NuxtLink to="/login" class="nav-link">Logout</NuxtLink>
        </li>
      </ul>
    </div>

    <div id="main" :class="{ pushMainContent: isActive }">
      <span
        style="font-size: 30px; cursor: pointer; color: #06283d"
        @click="isActive = !isActive">&#9776; Menu</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {

  }
};
</script>

<style>
.brand {
  align-content: center;
  position: center;
  align-items: center;
  display: flex;
  justify-content: center;


  font-weight: 700;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  font-style: normal;
  line-height: 40px;
  color: #d8e4e9;
  text-shadow: 2px 1px 1px rgb(14, 11, 31);

}
.sidenavbtn {
  margin-top: 50px;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #b73e3e;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  width: 0;
}
.openNavClass {
  width: 250px;
}
.pushMainContent {
  margin-left: 250px;
}
.sidenav a {
  padding: 10px;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: #fec261;
  display: block;
  transition: 0.3s;
  margin-left: 40px;
}

.sidenav a:hover {
  color: #338476;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
  background-color: #fec261;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
