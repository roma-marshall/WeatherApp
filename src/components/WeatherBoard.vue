<template>
  <div :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : 'cold'">
    <main>
      <div class="search-box">
        <input
            type="text"
            class="search-bar"
            placeholder="Search"
            v-model="query"
            @keypress="fetchWeather"
            v-focus
        />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }} °C</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api_key: 'faced93f83dc78f3d4efd19048b7a0bf',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  methods: {
    fetchWeather(e) {
      if (e.key === 'Enter') {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style scoped>
.search-bar {
  font-size: 16px;
  width: 80%;
  padding: 10px;
  margin-top: 15px;
  border: none;
  border-radius: 10px;
  background: mintcream;
  color: lightslategrey;
}

.search-bar:focus {
  outline: none;
}

.weather-wrap {
  margin-top: 50px;
}

.warm {
  background: lightcoral;
  border-radius: 30px;
  height: 100%;
}

.cold .location {
  text-shadow: 2px 2px lightslategrey;
}

.cold .weather-box {
  text-shadow: 4px 4px lightblue;
}

.location {
  font-size: 35px;
  color: mintcream;
  text-shadow: 2px 2px lightslategrey;
}

.weather-box {
  background: rgba(255, 255, 255, 0.5);
  margin: 15px 5%;
  border-radius: 5px;
  text-shadow: 4px 4px lightcoral;
  margin-top: 30px;
}

.date {
  font-size: 16px;
  color: mintcream;
  text-decoration: underline;
  margin-top: 10px;
}

.temp {
  font-size: 70px;
  color: mintcream;
}

.weather {
  font-size: 55px;
  color: mintcream;
}
</style>