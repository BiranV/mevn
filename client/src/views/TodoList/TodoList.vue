<template>
  <v-container>
    <v-col align="center">
      <h1 class="shadow-nested">To Do List</h1>
    </v-col>

    <v-container>
      <v-row align="center" justify="center">
        <v-card flat tile>
          <v-row justify="center" align="center">
            <v-text-field
              hide-details
              filled
              outlined
              rounded
              dense
              v-model="description"
              label="Add a task"
              @keyup.enter="addItem()"
            /><v-col>
              <v-btn
                color="green"
                class="white--text"
                :disabled="!description"
                @click="addItem()"
                >ADD</v-btn
              >
            </v-col></v-row
          >
        </v-card>
      </v-row>
    </v-container>
    <br />
    <v-col align="center" justify="center">
      <v-card elevation="0" class="scroll" max-height="400" width="500">
        <v-container v-for="(item, index) in items" :key="item._id">
          <v-row align="center" justify="center">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
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
                        v-model="newdescription"
                        @keyup.enter="updateItem(item, index)"
                      />
                    </div>
                    <div v-else>
                      {{ item.description }}
                    </div>
                    <div>
                      <span v-if="!isSelected(item)">
                        <v-icon @click="select(item)" size="20">
                          mdi-pencil
                        </v-icon>
                        <v-icon @click="removeItem(item, index)" size="20">
                          mdi-delete
                        </v-icon></span
                      >
                      <span v-else>
                        <v-icon @click="selected = {}" size="20">
                          mdi-close
                        </v-icon>
                        <v-icon @click="updateItem(item, index)" size="20">
                          mdi-content-save
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
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      description: "",
      newdescription: "",
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
      this.items = [];
      const res = await axios.get("api/posts/");
      res.data.forEach((el) => {
        this.items.push(el);
      });
    },
    async addItem() {
      const response = await axios.post("api/posts/", {
        description: this.description,
      });
      this.items.push(response.data);
      this.description = "";
    },
    async removeItem(item, index) {
      await axios.delete("api/posts/" + item._id);
      this.items.splice(index, 1);
    },
    updateItem(item, index) {
      let record = { description: this.newdescription };
      axios.put("api/posts/" + item._id, record).then(() => {
        this.initialize(item, index);
      });

      this.selected = {};
    },
    select(item) {
      this.selected = item;
      this.newdescription = item.description;
    },
    isSelected(item) {
      return this.selected._id === item._id;
    },
  },
};
</script>
<style>
.rounded-card {
  border-radius: 100px;
}
</style>
