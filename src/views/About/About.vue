<template>
  <div class="about">
    <b-container>
      <h6 class="mt-4">Painel Covid-19</h6>
      <div class="d-block mt-3 p-3 div-center shadow">
        <h6>
          Casos recuperados
        </h6>
        <h2>
          {{ Intl.NumberFormat().format(casosBrasil.casosRecuperados)
          .toString().replace(/\s/gim, '.') }}
        </h2>
        <h6>
          Casos em acompanhamento
        </h6>
        <h3>
          {{ Intl.NumberFormat().format(casosBrasil.casosEmMonitoramento)
          .toString().replace(/\s/gim, '.') }}
        </h3>
      </div>
      <div class="d-block m-3 p-3 div-center-second shadow">
        <h6>
          CASOS CONFIRMADOS
        </h6>
        <h5>
          {{ Intl.NumberFormat().format(casosBrasil.casosConfirmados)
          .toString().replace(/\s/gim, '.') }}
        </h5>
        <h6>
          ÓBITOS CONFIRMADOS
        </h6>
        <h5>
          {{ Intl.NumberFormat().format(casosBrasil.mortesTotais)
          .toString().replace(/\s/gim, '.') }}
        </h5>
      </div>
      <box-content />
      <footer-new />
    </b-container>
  </div>
</template>

<script lang="ts" src="./About.ts" />

<style src="./About.css" />
