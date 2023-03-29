<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <v-img contain height="1.5rem" width="1.5rem" :src="require('./assets/logo_white.png')"></v-img>
      <v-app-bar-title>
        Тренажер на реакцию
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon dark large :color="status.color" v-bind="attrs" v-on="on">
            {{ status.icon }}
          </v-icon>
        </template>
        <span>{{ status.message }}</span>
      </v-tooltip>
      <template v-slot:extension>
        <v-tabs fixed-tabs>
          <v-tab to="/play">Игра</v-tab>
          <v-tab to="/check">Проверка</v-tab>
          <v-tab to="/about">Инструкция</v-tab>

        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view :availableSend="connectSuccess" @send-message="sendMessage" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    connection: null,
    connectSuccess: false
  }),
  computed: {
    status() {
      return this.connectSuccess
        ? {
          color: 'green darken-3',
          icon: 'mdi-toggle-switch',
          message: 'Подключен к тренажеру',
        }
        : {
          color: 'red darken-3',
          icon: 'mdi-toggle-switch-off',
          message: 'Отсутствует подключение к тренажеру',
        }
    }
  },
  created: function () {

    let host = location.hostname;
    //let host = '192.168.200.225';
    this.connection = new WebSocket(`ws://${host}:1880/palki`)

    this.connection.onmessage = function (event) {
      console.log(event);
    }

    this.connection.onopen = function (event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }
    this.connectSuccess = true

  },
  methods: {
    sendMessage(payload) {
      console.log(payload)
      this.connection.send(payload);
    }
  }
};
</script>
