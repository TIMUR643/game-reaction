<template>
  <v-container fill-height color="white">
    <v-row no-gutters justify="center">
      <h1>Проверка тренажера</h1>
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
  }),
  methods: {
    send() {
      this.$emit('send-message')
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
