<template>
  <div>
    <v-container>
      <v-row align="center" justify="space-around">
        <v-col>
          <v-btn small @click="$emit('changeOperator', '+')" color="blue" dark>
            Addition
          </v-btn>
          <br />
          <v-icon>
            mdi-plus
          </v-icon>
        </v-col>
        <v-col>
          <v-btn small @click="$emit('changeOperator', '-')" color="green" dark>
            Subtraction
          </v-btn>
          <br />
          <v-icon>
            mdi-minus
          </v-icon>
        </v-col>
        <v-col>
          <v-btn small @click="$emit('changeOperator', '*')" color="orange" dark>
            Multiplication
          </v-btn>
          <br />
          <v-icon>
            mdi-multiplication
          </v-icon>
        </v-col>
        <v-col>
          <v-btn small @click="$emit('changeOperator', '/')" color="red" dark>
            Division
          </v-btn>
          <br />
          <v-icon>
            mdi-slash-forward
          </v-icon>
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

<style></style>
