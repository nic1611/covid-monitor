<template>
  <div class="home">
    <b-container>
      <b-row class="mt-5 m-1 pl-3 pr-3">
        <b-col>
          <h6 class="item-uppercase item-bold text-center">estado</h6>
        </b-col>
        <b-col>
          <h6 class="item-uppercase item-bold text-center">casos</h6>
        </b-col>
        <b-col>
          <h6 class="item-uppercase item-bold text-center">óbitos</h6>
        </b-col>
      </b-row>
      <b-row
      v-for="caso in CasosEstados" :key="caso._id"
      class="mt-4 m-1 rounded shadow-sm pl-3 pr-3">
        <b-col>
          <h6 class="item-uppercase item-bold text-center">{{ caso.nome }}</h6>
        </b-col>
        <b-col>
          <h6 class="item-uppercase item-bold text-center">{{
             Intl.NumberFormat().format(caso.casosAcumulado)
             .toString().replace(/\s/gim, '.') }}</h6>
        </b-col>
        <b-col class="largura-30">
          <h6 class="item-uppercase item-bold text-center">{{
             Intl.NumberFormat().format(caso.obitosAcumulado)
             .toString().replace(/\s/gim, '.') }}</h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="./BoxContent.ts" />

<style src="./BoxContent.css" />
