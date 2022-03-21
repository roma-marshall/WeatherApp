<template>
  <div class="app">
    <WeatherBoard />
    <hr class="divider" />
  </div>
</template>

<script>
import WeatherBoard from "@/components/WeatherBoard";

export default {
  name: 'App',
  components: {
    WeatherBoard
  }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-size: 22px;
  font-family: 'Nunito', serif;
  text-align: center;
  background: lightblue;
  height: 700px;
  width: 370px;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.divider {
  margin: 30px auto;
  width: 50%;
  background-color: #bebebe;
  border: none;
  border-radius: 3px;
  height: 5px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
}
</style>
