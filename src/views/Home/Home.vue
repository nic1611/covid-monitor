<template>
  <div class="home">
    <b-container>
      <b-row class="m-4" align-v="center" align-h="center">
        <h1>Covid Monitor</h1>
      </b-row>
      <router-link to="/about">
        <b-row class="m-1 item-region shadow-sm" align-v="center">
          <b-col class="item-flex">
            <b-icon-arrow-right-square-fill />
            <h6 class="item-flex">Centro-Oeste</h6>
          </b-col>
        </b-row>
      </router-link>
      <router-link to="/about">
        <b-row class="m-1 item-region shadow-sm" align-v="center">
          <b-col class="item-flex">
            <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
            <h6 class="item-flex">Sudoeste</h6>
          </b-col>
        </b-row>
      </router-link>
      <router-link to="/about">
        <b-row class="m-1 item-region shadow-sm" align-v="center">
          <b-col class="item-flex">
            <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
            <h6 class="item-flex">Norte</h6>
          </b-col>
        </b-row>
      </router-link>
      <router-link to="/about">
        <b-row class="m-1 item-region shadow-sm" align-v="center">
          <b-col class="item-flex">
            <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
            <h6 class="item-flex">Sul</h6>
          </b-col>
        </b-row>
      </router-link>
      <router-link to="/about">
        <b-row class="m-1 item-region shadow-sm" align-v="center">
          <b-col class="item-flex">
            <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
            <h6 class="item-flex">Nordeste</h6>
          </b-col>
        </b-row>
      </router-link>
    </b-container>
  </div>
</template>

<script src="./Home.ts" />

<style src="./Home.css" />
