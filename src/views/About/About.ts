import Vue from 'vue';
import FooterNew from '../../Components/Footer/Footer.vue';
import BoxContent from '../../Components/BoxContent/BoxContent.vue';
import { CasosBrasil } from '../../types/CasosBrasil';

export default Vue.extend({
  name: 'About',
  components: {
    FooterNew,
    BoxContent,
  },
  data() {
    return {
      casosBrasil: {} as CasosBrasil,
    };
  },
  mounted() {
    this.getCasos();
  },
  methods: {
    getCasos() {
      const urlPainelGeral = 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi';
      fetch(urlPainelGeral).then((res) => res.json())
        .then((json) => {
          const casosRecuperadosJsonValue = json.confirmados.recuperados;
          const casosConfirmadosJsonValue = json.confirmados.total;
          const casosEmMonitoramentoJsonValue = json.confirmados.acompanhamento;
          const casosNovosJsonValue = json.confirmados.novos;
          // GetObitosValue
          const mortesTotalJsonValue = json.obitos.total;
          const obitosNovosJsonValue = json.obitos.novos;
          this.casosBrasil = {
            casosRecuperados: casosRecuperadosJsonValue,
            casosConfirmados: casosConfirmadosJsonValue,
            casosEmMonitoramento: casosEmMonitoramentoJsonValue,
            mortesTotais: mortesTotalJsonValue,
            casosNovos: casosNovosJsonValue,
            obitosNovos: obitosNovosJsonValue
          };
        });
    },
  },
});
