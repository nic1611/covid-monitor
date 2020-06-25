<template>
  <div class="about">
    <b-container>
      <router-link to="/">
        <b-icon-arrow-left-square-fill class="h1 mt-3"/>
      </router-link>
      <h6 class="mt-4">Painel Covid-19</h6>
      <div class="d-block mt-3 p-3 div-center shadow-lg">
          <h6>
            Casos recuperados
          </h6>
          <h2>
            598.986
          </h2>
          <h6>
            Casos em acompanhamento
          </h6>
          <h3>
            480.098
          </h3>
      </div>
      <div class="d-block m-3 p-3 div-center-second shadow-lg">
          <h6>
            CASOS CONFIRMADOS
          </h6>
          <h5>
            1.085.083
          </h5>
          <h6>
            ÓBITOS CONFIRMADOS
          </h6>
          <h5>
           50.349
          </h5>
      </div>
      <footer-new/>
    </b-container>
  </div>
</template>

<script src="./About.ts" />

<style src="./About.css" />
