<template>
  <div style="height: 100vh; overflow: hidden;" >
    <Sidebar />
    <Nuxt />
  </div>
</template>

<script>
import Sidebar from '../components/inc/Sidebar.vue';


export default {
    name: "default",
    components: { Sidebar }
}

</script>