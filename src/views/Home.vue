<template>
  <div class="home">
    <b-container>
      <b-row class="m-4" align-v="center" align-h="center">
        <h1>Covid Monitor</h1>
      </b-row>
      <b-row class="mt-1 item-region" align-v="center">
        <b-col class="item-flex">
          <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
          <h6 class="item-flex">Centro-Oeste</h6>
        </b-col>
      </b-row>
      <b-row class="mt-1 item-region" align-v="center">
        <b-col class="item-flex">
          <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
          <h6 class="item-flex">Sudoeste</h6>
        </b-col>
      </b-row>
      <b-row class="mt-1 item-region" align-v="center">
        <b-col class="item-flex">
          <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
          <h6 class="item-flex">Norte</h6>
        </b-col>
      </b-row>
      <b-row class="mt-1 item-region" align-v="center">
        <b-col class="item-flex">
          <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
          <h6 class="item-flex">Sul</h6>
        </b-col>
      </b-row>
      <b-row class="mt-1 item-region" align-v="center">
        <b-col class="item-flex">
          <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
          <h6 class="item-flex">Nordeste</h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BIconArrowRightSquareFill } from 'bootstrap-vue';

export default {
  name: 'Home',
  components: {
    BIconArrowRightSquareFill,
  },
};
</script>

<style scoped>
.item-region {
  background-color: #DCDCDC;
  border-radius: 4px;
  height: 50px;
}

.item-flex{
  display: flex;
  padding: 0 10px;
}
</style>
