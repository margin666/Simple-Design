<script setup lang="ts">
const handleActive = (name:string, label:string, e:HTMLElement) => {
  console.log(name)
  console.log(label)
  console.log(e)
}
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
  <SimButtonGroup type="primary" size="small">
    <SimButton type="success">success</SimButton>
    <SimButton type="warning">success2</SimButton>
    <SimButton type="primary">success3</SimButton>
    <SimButton type="danger">success3</SimButton>
  </SimButtonGroup>
  <SimTabs @on-click="handleActive" size="small" active="jerry">
      <SimTab name="jerry">jerry</SimTab>
      <SimTab name="tom">tom</SimTab>
  </SimTabs>
  <SimTabs @on-click="handleActive" size="default" active="bbb">
      <SimTab name="aaa">AAA</SimTab>
      <SimTab name="bbb">BBB</SimTab>
      <SimTab label="eee" name="ccc">CCC</SimTab>
  </SimTabs>
  <!-- <SimRow>
    <SimCol :span="12">
      wqewq
    </SimCol>
    <SimCol :span="10">
      wqewq
    </SimCol>
  </SimRow> -->
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
