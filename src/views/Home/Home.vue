<template>
  <div class="home">
    <b-container>
      <b-row class="mt-4" align-v="center" align-h="center">
        <h1>Covid Monitor</h1>
      </b-row>
      <b-row class="mt-4 m-1 rounded shadow pl-3 pr-3 d-block">
        <router-link to="/about">
          <b-row class="item-region" align-v="center">
            <b-col class="item-flex">
              <b-icon-arrow-right-square-fill />
              <h6 class="item-flex">Centro-Oeste</h6>
            </b-col>
          </b-row>
        </router-link>
        <router-link to="/about">
          <b-row class="item-region" align-v="center">
            <b-col class="item-flex">
              <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
              <h6 class="item-flex">Sudoeste</h6>
            </b-col>
          </b-row>
        </router-link>
        <router-link to="/about">
          <b-row class="item-region" align-v="center">
            <b-col class="item-flex">
              <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
              <h6 class="item-flex">Norte</h6>
            </b-col>
          </b-row>
        </router-link>
        <router-link to="/about">
          <b-row class="item-region" align-v="center">
            <b-col class="item-flex">
              <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
              <h6 class="item-flex">Sul</h6>
            </b-col>
          </b-row>
        </router-link>
        <router-link to="/about">
          <b-row class="item-region" align-v="center">
            <b-col class="item-flex">
              <b-icon-arrow-right-square-fill></b-icon-arrow-right-square-fill>
              <h6 class="item-flex">Nordeste</h6>
            </b-col>
          </b-row>
        </router-link>
      </b-row>
    </b-container>
  </div>
</template>

<script src="./Home.ts" />

<style src="./Home.css" />
