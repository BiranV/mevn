<template>
  <v-container>
    <v-col align="center">
      <h1 class="shadow-nested">Math Quiz</h1>
    </v-col>
    <v-container>
      <v-col align="center">
        <OperatorQuiz
          @back="clearOperator"
          :operator="operator"
          v-if="this.operator"
        />
        <OperatorSelector
          v-if="!this.operator"
          @changeOperator="changeOperator"
        />
      </v-col>
    </v-container>
  </v-container>
</template>

<script>
import OperatorQuiz from "./OperatorQuiz.vue";
import OperatorSelector from "./OperatorSelector";
export default {
  components: { OperatorSelector, OperatorQuiz },
  data() {
    return {
      operator: null,
    };
  },
  methods: {
    clearOperator() {
      this.operator = "";
    },
    changeOperator(operator) {
      this.operator = operator;
    },
  },
};
</script>
