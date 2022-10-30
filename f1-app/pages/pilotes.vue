<template>
  <bar />
  <div>
    <div class="flex flex-row flex-wrap place-content-center">
      <!-- <div  v-for="item in this.f1.points" class="indicator">
      <span class="indicator-item badge badge-primary">{{item.points}}</span>
      <div class="card w-96 bg-primary ml-6 mt-6">
        <div class="card-body">
          <p>{{ item.Driver.givenName }} {{ item.Driver.familyName }}</p>
          <p>{{ item.Driver.driverId }}</p>
          <p>{{ item.points }} Points</p>
          <div class="card-actions ml-6 mt-6">
            <button class="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div> -->
      <div
        v-for="item in this.f1.points"
        class="card w-60 bg-red-700 shadow-xl ml-6 mt-6"
      >
        <span class="indicator-item badge badge-primary">{{
          item.points
        }}</span>
        <div class="card-body">
          <p>{{ item.Driver.givenName }} {{ item.Driver.familyName }}</p>
          <p>{{ item.Driver.driverId }}</p>
          <p>{{ item.points }} Points</p>
          <nuxt-img src="f1-app/assets/hamilton.jpg" />

        </div>
        <!-- <nuxt-img src="require(`~/assets/img/${item.Driver.driverId}.jpg`)" /> -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getpoints();
  },
  data() {
    return {
      f1: {
        driver: [],
        points: [],
        ecuries: [],
      },
    };
  },

  methods: {
    getpoints() {
      this.f1.ecuries = [];
      fetch("https://ergast.com/api/f1/2022/driverStandings.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.f1.points =
            data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          console.log(this.f1.points);
        });
    },
  },
};
</script>
