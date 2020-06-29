import Vue from 'vue';
import { CasosEstados } from '../../types/CasosEstados';

export default Vue.extend({
  name: 'BoxContent',
  components: {
  },
  data() {
    return {
      CasosEstados: {} as CasosEstados,
    };
  },
  mounted() {
    this.getDadosEstados();
  },
  filters: {
    adcPonto(numero: string) {
      return numero.replace(/\s/gim, '.');
    },
  },
  methods: {
    getDadosEstados() {
      const urlEstadosAPI = 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado';
      fetch(urlEstadosAPI).then((res) => res.json()).then((json) => {
        this.CasosEstados = json;
        console.log(this.CasosEstados);
      });
    },
  },
});
