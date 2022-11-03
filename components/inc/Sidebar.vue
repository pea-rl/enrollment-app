<template>
  <div>
  <b-button v-b-toggle.sidebar-right>Menu</b-button>
  <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
    <div class="px-3 py-2">
      <ul class="navbar-nav me-auto link">
        <li class="nav-item">
          <NuxtLink to="/home" class="nav-link">Home</NuxtLink>
        </li> 
        <li class="nav-item">
          <NuxtLink to="/dashboard" class="nav-link">Dashboard</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/student" class="nav-link">Student List</NuxtLink>
        </li>
      </ul>
    </div>
  </b-sidebar>
</div>
</template>