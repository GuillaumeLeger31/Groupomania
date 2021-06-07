<template>
<body>
  <div>
  <register/>
  </div>
  </body>
</template>


<script>
import register from "../components/register";

export default {
  name: "Home",
  components: {
    register,
  },
};

</script>

<style scoped>

body  {
 height: 100vh; 
}
</style>




