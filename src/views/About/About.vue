<template>
  <div class="about">
    <b-container>
      <h6 class="mt-4 text-center">Painel Covid-19</h6>
      <b-row align-h="center" class="d-flex justify-content-around">
        <b-col class="d-block mt-3 px-3 py-4 div-center shadow rounded col-11 col-md-4">
          <div class="mb-3">
            <h6>Casos recuperados</h6>
            <h2>
              {{ Intl.NumberFormat().format(casosBrasil.casosRecuperados)
              .toString().replace(/\s/gim, '.') }}
            </h2>
          </div>
          <div>
            <h6>Casos em acompanhamento</h6>
            <h3>
              {{ Intl.NumberFormat().format(casosBrasil.casosEmMonitoramento)
              .toString().replace(/\s/gim, '.') }}
            </h3>
          </div>
        </b-col>
        <b-col class="d-block mt-3 col-12 col-md-7">
          <div class="div-center-white mb-3 d-flex justify-content-around shadow rounded p-3">
            <div class="d-block">
              <h6>CASOS CONFIRMADOS</h6>
              <h2>
                {{ Intl.NumberFormat().format(casosBrasil.casosConfirmados)
                .toString().replace(/\s/gim, '.') }}
              </h2>
            </div>
            <div class="d-block">
              <h6>CASOS NOVOS</h6>
              <h3>
                {{ Intl.NumberFormat().format(casosBrasil.casosNovos)
                .toString().replace(/\s/gim, '.') }}
              </h3>
            </div>
          </div>
          <div class="div-center-black d-flex justify-content-around shadow rounded p-3">
            <div class="d-block">
              <h6>ÓBITOS CONFIRMADOS</h6>
              <h2>
                {{ Intl.NumberFormat().format(casosBrasil.mortesTotais)
                .toString().replace(/\s/gim, '.') }}
              </h2>
            </div>
            <div class="d-block">
              <h6>ÓBITOS NOVOS</h6>
              <h3>
                {{ Intl.NumberFormat().format(casosBrasil.obitosNovos)
                .toString().replace(/\s/gim, '.') }}
              </h3>
            </div>
          </div>
        </b-col>
      </b-row>
      <box-content />
      <footer-new />
    </b-container>
  </div>
</template>

<script lang="ts" src="./About.ts" />

<style src="./About.css" />
