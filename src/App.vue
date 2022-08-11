<script setup lang="ts">
  const ef = () => console.log(2)
</script>

<template>
  <div class="box">
    <SimButton disabled>default</SimButton>
    <SimButton disabled size="small" type="danger">danger</SimButton>
    <SimButton disabled size="default" type="warning">warning</SimButton>
    <SimButton disabled size="large" type="success">success</SimButton>
    <SimButton size="large" type="success">success</SimButton>
    <SimButton type="info" disabled>info</SimButton>
    <SimButton type="primary" disabled>primary</SimButton>
  </div>
  <SimRow>
    <SimCol :span="12">
      wqewq
    </SimCol>
    <SimCol :span="10">
      wqewq
    </SimCol>
  </SimRow>
</template>

<style scoped>
.svg {
  display: inline-block;
  width: 20px;
  height: 20px;
  color: red;
}
.box {
  /* background-color: bisque; */

  /* width: 200px; */
  height: 100px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
}
</style>
