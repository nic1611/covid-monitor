<template>
  <div class="about">
    <b-container>
      <h6 class="mt-4">Painel Covid-19</h6>
      <div class="d-block mt-3 p-3 div-center shadow">
        <h6>
          Casos recuperados
        </h6>
        <h2>
          {{ casosBrasil.casosRecuperados }}
        </h2>
        <h6>
          Casos em acompanhamento
        </h6>
        <h3>
          {{ casosBrasil.casosEmMonitoramento }}
        </h3>
      </div>
      <div class="d-block m-3 p-3 div-center-second shadow">
        <h6>
          CASOS CONFIRMADOS
        </h6>
        <h5>
          {{ casosBrasil.casosConfirmados }}
        </h5>
        <h6>
          ÓBITOS CONFIRMADOS
        </h6>
        <h5>
          {{ casosBrasil.mortesTotais }}
        </h5>
      </div>
      <box-content />
      <footer-new />
    </b-container>
  </div>
</template>

<script lang="ts" src="./About.ts" />

<style src="./About.css" />
