<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-img :src="`/${post.image}`" max-height="200" max-width="400"></v-img>
        <v-container>
          <v-col align="center">
            <v-btn small outlined color="primary">{{ post.category }}</v-btn>
          </v-col>
        </v-container>

        <h1>{{ post.title }}</h1>

        <v-card-text class="grey--text">
          <p>{{ post.content }}</p>
        </v-card-text>
        <v-container>
          <v-row>
            <v-col align="center">
              <v-dialog v-model="dialogEdit" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="green" text dark v-bind="attrs" v-on="on">
                    Edit
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Edit Recipe</span>
                  </v-card-title>

                  <v-form
                    ref="form"
                    @submit.prevent="updateForm"
                    class="pa-5"
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
                      show-size
                      counter
                      multiple
                    >
                    </v-file-input>
                    <v-img :src="`/${post.image}`" width="120"></v-img>
                    <v-btn type="submit" class="mt-3" color="primary"
                      >Save</v-btn
                    >
                    <v-btn
                      color="blue darken-1"
                      class="mt-3"
                      text
                      @click="cancelDialogEdit"
                    >
                      CANCEL
                    </v-btn></v-form
                  >
                </v-card>
              </v-dialog>

              <v-btn color="red" text @click="deletePost(post._id)"
                >Delete</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
        <v-btn small color="primary" dark to="/foodblog">
          BACK
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import API from "@/api";

export default {
  data() {
    return {
      dialogEdit: false,
      rules: [(v) => !!v || "This field is required"],
      post: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      categoryArray: ["Dairy", "Meat", "Fish", "Dessert", "Vegan"],
    };
  },
  async created() {
    const response = await API.getPostByID(this.$route.params.id);
    this.post = response;
  },
  methods: {
    async deletePost(id) {
      const response = await API.deletePost(id);
      this.$router.push({
        name: "foodblog",
        params: { message: response.message },
      });
    },
    selectFile(file) {
      this.image = file[0];
    },
    async updateForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("content", this.post.content);
      formData.append("old_image", this.post.image);

      const response = await API.updatePost(this.$route.params.id, formData);
      this.$router.push({
        name: "foodblog",
        params: { message: response.message },
      });
    },
    cancelDialogEdit() {
      this.dialogEdit = false;
    },
  },
};
</script>

<style></style>
