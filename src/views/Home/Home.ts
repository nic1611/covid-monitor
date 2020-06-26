import { BIconArrowRightSquareFill } from "bootstrap-vue";

export default {
  name: "Home",
  components: {
    BIconArrowRightSquareFill
  },
  data() {
    return {
      dadosCovid:"",
    };
  },
  methods: {
    getDados(): void {
      fetch("")
      .then(response=>{return response.json})
      .then(json => {})
    }
  }
};
