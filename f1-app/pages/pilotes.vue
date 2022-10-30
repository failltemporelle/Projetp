<template>
  <bar />
  <div class="flex flex-row flex-wrap place-content-center">
    <div v-for="item in this.f1.points" class="card w-60 bg-red-700 shadow-xl ml-6 mt-6">
      <span class="indicator-item badge badge-primary text-teal-50" >{{ item.points }} Points  </span>
      <div class="card-body">
        <p>{{ item.Driver.givenName }} {{ item.Driver.familyName }}</p>
        <!-- <p>{{ item.Driver.driverId }}</p> -->
      </div>
    </div>
  </div>


  <div class="overflow-x-auto ml-9 mt-6">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Position</th>
        <th>Name</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="item in this.f1.points">
        <td>{{item.position}}</td>
        <td>{{ item.Driver.givenName }} {{ item.Driver.familyName }}</td>
        <th>{{item.points}}</th>
      </tr>
    </tbody>
  </table>
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
