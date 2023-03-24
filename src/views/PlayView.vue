<template>
  <v-container fill-height color="white">
    <v-row no-gutters justify="center">
      <h1>Игровой режим</h1>
    </v-row>
    <v-row no-gutters justify="center">
      <v-slider v-model="level" label="Выбрать уровень" vertical track-color="primary" :tick-labels="ticks" :max="2" step="1"></v-slider>
    </v-row>
    <v-row no-gutters justify="center">
      <v-btn class="very-big" :disabled="!availableSend" fab color="green darken-3" @click="send()">
        <v-icon class="very-big" color="white">
          mdi-play
        </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'PlayView',
  props: {
    availableSend: Boolean
  },
  data: () => ({
    level: 0,
    levels: [
      {
        id: 0,
        title: 'Легкий',
        value: 4000,
      },
      {
        id: 1,
        title: 'Средний',
        value: 2000,
      },
      {
        id: 2,
        title: 'Сложный',
        value: 1000,
      },
    ]
  }),
  computed: {
    ticks() {
      return this.levels.map(x => x.title);
    },
    valueLevel() {
      return this.levels.find(x => x.id === this.level).value;
    }

  },
  methods: {
    send() {
      this.$emit('send-message', this.valueLevel)
    },
  }
}

</script>

<style scoped>
.very-big {
  font-size: 150px !important;
  height: 150px !important;
  width: 150px !important;
}

div>>>.v-slider__thumb {
  height: 14px;
  width: 14px;
  margin-left: -1px;
}

div>>>.v-slider--vertical .v-slider__track-container {
  width: 5px;
}

.v-input>>>.v-label {
  margin-left: 50px !important; 
}

.v-input>>>.v-slider {
  margin-right: 100px !important; 
}
</style>
