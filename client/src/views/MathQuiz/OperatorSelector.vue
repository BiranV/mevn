<template>
  <div>
    <v-container>
      <v-row align="center" justify="space-around">
        <v-col>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 3 : 1"
                outlined
                class="pa-2 rounded-xl"
                color="grey lighten-4"
              >
                <v-card-title class="justify-center">Easy</v-card-title>
                <v-btn
                  small
                  @click="$emit('changeOperator', '+')"
                  color="blue"
                  dark
                >
                  Addition
                </v-btn>
                <br />
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-card>
            </template></v-hover
          >
        </v-col>
        <v-col>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 3 : 1"
                outlined
                class="pa-2 rounded-xl"
                color="grey lighten-4"
              >
                <v-card-title class="justify-center">Medium</v-card-title>
                <v-btn
                  small
                  @click="$emit('changeOperator', '-')"
                  color="green"
                  dark
                >
                  Subtraction
                </v-btn>
                <br />
                <v-icon>
                  mdi-minus
                </v-icon>
              </v-card>
            </template></v-hover
          >
        </v-col>
      </v-row>
      <v-row align="center" justify="space-around">
        <v-col>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 3 : 1"
                outlined
                class="pa-2 rounded-xl"
                color="grey lighten-4"
              >
                <v-card-title class="justify-center">Hard</v-card-title>
                <v-btn
                  small
                  @click="$emit('changeOperator', '*')"
                  color="orange"
                  dark
                >
                  Multiplication
                </v-btn>
                <br />
                <v-icon>
                  mdi-multiplication
                </v-icon>
              </v-card>
            </template></v-hover
          >
        </v-col>
        <v-col>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 3 : 1"
                outlined
                class="pa-2 rounded-xl"
                color="grey lighten-4"
              >
                <v-card-title class="justify-center">Expert</v-card-title>
                <v-btn
                  small
                  @click="$emit('changeOperator', '/')"
                  color="red"
                  dark
                >
                  Division
                </v-btn>
                <br />
                <v-icon>
                  mdi-slash-forward
                </v-icon>
              </v-card>
            </template></v-hover
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.v-btn {
  width: 150px !important;
}
</style>
