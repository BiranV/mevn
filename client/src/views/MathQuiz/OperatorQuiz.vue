<template>
  <div>
    <div>
      <v-container>
        <v-avatar v-if="this.operator" color="grey lighten-2" rounded size="36">
          {{ this.operator }}
        </v-avatar>
      </v-container>
      <div v-if="isQuizStarted">
        <v-container>
          <h1>
            {{ operandLeft }} {{ operator }} {{ operandRight }}
          </h1></v-container
        >
        <v-container>
          <v-btn
            @click="selectAnswer(answer)"
            v-for="(answer, index) in answers"
            :key="index"
          >
            {{ answer }}
          </v-btn>
        </v-container>
        <h3>Score: {{ score }}</h3>

        <circular-count-down-timer
          :initial-value="60"
          :steps="60"
          @finish="finished()"
          ref="countdown"
        ></circular-count-down-timer>
      </div>
      <div v-else="!isQuizStarted">
        <v-container>
          <v-btn @click="startQuiz()" color="green" dark>
            Start
          </v-btn>
        </v-container>
      </div>
    </div>

    <v-container>
      <v-btn small text @click="$emit('back')" color="primary" dark>
        Back
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import CircularCountDownTimer from "vue-circular-count-down-timer";
export default {
  props: ["operator"],
  timeLeft: {
    type: Number,
    required: true,
  },

  data() {
    return {
      total: false,
      totalScore: 0,
      mistake: false,
      score: 0,
      answers: [],
      isQuizStarted: false,
      operandLeft: "",
      operandRight: "",
      expectedAnswer: "",
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    showAlert(title, text, type) {
      this.$fire({
        title: title,
        text: text,
        type: type,
        timer: 3000,
      });
    },
    finished() {
      this.isQuizStarted = false;

      this.totalScore = this.score;

      this.showAlert("Good Job!", `Total Score: ${this.totalScore}`, "success");

      this.score = 0;
    },
    updateCountdown() {
      this.$refs.countdown.updateTime(-5);
    },
    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
    selectAnswer(answerSelected) {
      if (answerSelected !== this.expectedAnswer) {
        this.mistake = true;

        this.showAlert(
          "Oops!",
          `The correct answer is: ${this.expectedAnswer}`,
          "error"
        );
        this.updateCountdown();
        this.startQuiz();
      } else {
        this.score += 3;
        this.startQuiz();
      }
    },
    startQuiz() {
      this.isQuizStarted = true;
      this.operandLeft = parseInt(1 + Math.random() * 15);
      this.operandRight = parseInt(1 + Math.random() * 15);

      const methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
      };
      const methodToUse = methods[this.operator];

      this.answers = [];
      this.answers.push(methodToUse(this.operandLeft + 1, this.operandRight));
      this.answers.push(methodToUse(this.operandLeft - 1, this.operandRight));
      this.answers.push(methodToUse(this.operandLeft + 2, this.operandRight));
      this.answers.push(methodToUse(this.operandLeft - 2, this.operandRight));

      this.expectedAnswer = methodToUse(this.operandLeft, this.operandRight);
      this.answers[
        parseInt(Math.random() * this.answers.length)
      ] = this.expectedAnswer;
    },
    tryAgain() {
      this.score = 0;
      this.startQuiz();
    },
  },
};
</script>
<style>
#container > div > div:nth-child(3) {
  visibility: hidden !important;
}
#container > div > svg > circle.circle_animation {
  stroke: #ff6565;
}
</style>
