<script setup lang="ts">

</script>

<template>
  <div class="box">
    <SimButton text size="small">123</SimButton>
    <SimButton type="primary" size="default">123</SimButton>
    <SimButton type="danger" size="small">123</SimButton>
    <!-- <SimButton type="warning" size="small">123</SimButton> -->
    <SimButton type="success" size="small">123</SimButton>
    <!-- <SimButton type="info" size="large">123</SimButton> -->
  </div>
</template>

<style scoped>
.box {
  /* width: 200px; */
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
