<script setup lang="ts">

</script>

<template>
  <div class="box">
    <div class="btns">
      <SimButton size="small">default small</SimButton>
      <SimButton size="default">default default</SimButton>
      <SimButton size="large">default large</SimButton>
    </div>
    <SimButton size="small">123</SimButton>
    <SimButton size="small" text>123</SimButton>
    <SimButton round type="primary" size="default"></SimButton>
    <SimButton disabled text type="primary" size="default">123</SimButton>
    <SimButton disabled type="danger" size="small">123</SimButton>
    <SimButton disabled text type="danger" size="small">123</SimButton>
    <SimButton disabled round text type="warning" size="small">123</SimButton>
    <SimButton disabled type="warning" size="small">123</SimButton>
    <SimButton disabled text type="success" size="small">123</SimButton>
    <SimButton disabled round type="success" size="small">123</SimButton>
    <SimButton disabled type="info" size="large">123</SimButton>
    <SimButton disabled circle type="info" text size="large">woshi</SimButton>
  </div>
</template>

<style scoped>
.box {
  background-color: bisque;

  /* width: 200px; */
  height: 100px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
}
</style>
