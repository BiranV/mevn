<template>
  <v-container>
    <v-col align="center">
      <h1 class="shadow-nested">To Do List</h1>
    </v-col>

    <v-container>
      <v-col align="center" justify="center">
        <v-row align="center" justify="center" no-gutters>
          <v-card flat tile>
            <v-row justify="center" align="center">
              <v-text-field
                hide-details
                filled
                outlined
                rounded
                dense
                v-model="description"
                placeholder="Add a task"
                @keyup.enter="addItem()"
              />
              <v-btn
                color="green"
                small
                class="white--text ml-2"
                :disabled="!description"
                @click="addItem()"
                >ADD</v-btn
              >
            </v-row>
          </v-card>
        </v-row>

        <v-col align="center" justify="center">
          <v-card elevation="0">
            <v-container v-for="(item, index) in items" :key="item._id">
              <v-row align="center" justify="center">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      @dblclick="doneTask(item)"
                      color="blue lighten-5"
                      class="ma-2"
                      :elevation="hover ? 2 : 0"
                      width="400"
                    >
                      <v-card-text class="d-flex justify-space-between ma-2">
                        <v-avatar color="blue" rounded size="20">
                          <span class="white--text">{{ index + 1 }}</span>
                        </v-avatar>
                        <div v-if="isSelected(item)">
                          <v-text-field
                            hide-details
                            outlined
                            dense
                            v-model="editedDescription"
                            @keyup.enter="updateItem(item, index)"
                          />
                        </div>
                        <div v-else>
                          <h4>
                            {{
                              item.date
                                .substring(0, 10)
                                .split("-")
                                .reverse()
                                .join("/")
                            }}
                          </h4>
                          <span
                            :class="{
                              'text-decoration-line-through ':
                                item.done == true,
                            }"
                            >{{ item.description }}</span
                          >
                        </div>
                        <div>
                          <span v-if="isSelected(item)">
                            <v-icon @click="unselect()" size="20">
                              mdi-close
                            </v-icon>
                            <v-icon @click="updateItem(item, index)" size="20">
                              mdi-content-save
                            </v-icon></span
                          >
                          <span v-else>
                            <v-icon @click="select(item)" size="20">
                              mdi-pencil
                            </v-icon>
                            <v-icon @click="removeItem(item, index)" size="20">
                              mdi-delete
                            </v-icon></span
                          >
                        </div>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-hover>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-col>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      description: "",
      editedDescription: "",
      selected: {},
      snackbar: true,
      timeout: 2000,
    };
  },

  mounted() {
    this.initialize();
  },

  methods: {
    async initialize() {
      let arr = [];
      await axios.get("api/posts/").then((res) => {
        res.data.forEach((el) => {
          arr.push(el);
        });
        this.items = arr;
      });
    },
    async addItem() {
      await axios
        .post("api/posts/", {
          description: this.description,
        })
        .then(() => {
          this.initialize();
          this.items.push(response.data);
        });
      this.description = "";
    },
    async removeItem(item, index) {
      await axios.delete("api/posts/" + item._id).then(() => {
        this.items.splice(index, 1);
      });
    },
    async updateItem(item, index) {
      await axios
        .patch("api/posts/" + item._id, {
          description: this.editedDescription,
        })
        .then(() => {
          this.initialize();
          this.unselect();
        });
    },
    select(item) {
      this.selected = item;
      this.editedDescription = item.description;
    },
    isSelected(item) {
      return this.selected._id === item._id;
    },
    unselect() {
      this.selected = {};
      this.editedDescription = "";
    },
    async doneTask(item) {
      item.done = !item.done;
      await axios.patch("api/posts/" + item._id, {
        done: item.done,
      });
    },
  },
};
</script>
<style></style>
