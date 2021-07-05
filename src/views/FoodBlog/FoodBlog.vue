<template>
  <v-container>
    <v-col>
      <v-row align="center" justify="center">
        <v-dialog v-model="dialog" persistent max-width="350px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn small color="primary" dark v-bind="attrs" v-on="on">
              Add Recipe
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Add Recipe</span>
            </v-card-title>
            <v-divider></v-divider>

            <v-form
              ref="form"
              @submit.prevent="submitForm"
              class="pa-2"
              enctype="multipart/form-data"
            >
              <v-text-field
                v-model="post.title"
                label="Title"
                prepend-icon="mdi-note"
                :rules="rules"
              >
              </v-text-field>
              <v-select
                v-model="post.category"
                :items="categoryArray"
                label="Category"
                prepend-icon="mdi-view-list"
                :rules="rules"
              >
              </v-select>
              <v-textarea
                v-model="post.content"
                label="Content"
                prepend-icon="mdi-note-plus"
                :rules="rules"
              >
              </v-textarea>
              <v-file-input
                @change="selectFile"
                label="Select Image"
                :rules="rules"
                show-size
                counter
                multiple
              >
              </v-file-input>
              <v-btn
                type="submit"
                class="mt-3"
                color="primary"
                :disabled="
                  !post.category ||
                    !post.title ||
                    !post.content ||
                    post.image == null
                "
                >Save</v-btn
              >
              <v-btn
                color="blue darken-1"
                class="mt-3"
                text
                @click="cancelDialog"
              >
                CANCEL
              </v-btn></v-form
            >
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
    <v-col>
      <v-card class="scroll" flat outlined>
        <v-snackbar
          v-model="snackbar"
          v-if="this.$route.params.message"
          :timeout="timeout"
        >
          {{ this.$route.params.message }}
          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
        <v-row no-gutters>
          <v-col
            class="pa-2"
            cols="3"
            v-for="post in posts.slice().reverse()"
            :key="post._id"
          >
            <v-card :to="{ name: 'post', params: { id: post._id } }">
              <v-img aspect-ratio="2" :src="`/${post.image}`"></v-img>
              <v-btn class="ml-4 mt-3" small outlined color="indigo">
                {{ post.category }}</v-btn
              >
              <v-card-title>
                {{ post.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-col
          ><v-row justify="center">
            <VueApexCharts
              width="380"
              type="donut"
              :options="chartOptions"
              :series="series"
            ></VueApexCharts></v-row
        ></v-col>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import API from "@/api";
export default {
  components: {
    VueApexCharts,
  },
  data() {
    return {
      series: [],
      chartOptions: {
        labels: ["Dairy", "Meat", "Fish", "Dessert", "Vegan"],
      },

      counterDairy: Number,
      counterMeat: Number,
      counterFish: Number,
      counterDessert: Number,
      counterVegan: Number,
      snackbar: true,
      formData: "",
      timeout: 2000,
      posts: [],
      dialog: false,
      rules: [(v) => !!v || "This field is required"],
      post: {
        title: "",
        category: "",
        content: "",
        image: null,
      },
      categoryArray: ["Dairy", "Meat", "Fish", "Dessert", "Vegan"],
    };
  },
  async created() {
    await this.initialize();
  },
  computed: {
    scrollbarTheme() {
      return "dark";
    },
  },
  methods: {
    async initialize() {
      this.posts = await API.getAllPost();
      this.chartDonutData();
    },

    chartDonutData() {
      this.counterDairy = this.posts.filter(
        (el) => el.category == "Dairy"
      ).length;
      this.counterMeat = this.posts.filter(
        (el) => el.category == "Meat"
      ).length;
      this.counterFish = this.posts.filter(
        (el) => el.category == "Fish"
      ).length;
      this.counterDessert = this.posts.filter(
        (el) => el.category == "Dessert"
      ).length;
      this.counterVegan = this.posts.filter(
        (el) => el.category == "Vegan"
      ).length;

      this.series = [
        this.counterDairy,
        this.counterMeat,
        this.counterFish,
        this.counterDessert,
        this.counterVegan,
      ];
    },
    selectFile(file) {
      this.post.image = file[0];
    },
    async submitForm() {
      this.formData = new FormData();
      this.formData.append("image", this.post.image);
      this.formData.append("title", this.post.title);
      this.formData.append("category", this.post.category);
      this.formData.append("content", this.post.content);

      const response = await API.addPost(this.formData);
      this.dialog = false;
      this.initialize();
      this.reset();
    },
    cancelDialog() {
      this.dialog = false;
      this.reset();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
