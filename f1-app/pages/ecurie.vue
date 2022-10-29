<template>
<bar />
  <div>
    <div class="flex flex-row flex-wrap place-content-center">
      <div
        v-for="item in this.f1.ecuries"
        class="card w-96 bg-base-100 shadow-xl ml-6 mt-6"
      >
        <div class="card-body">
          <p class="font-bold">{{ item.Constructor.name }}</p>
          <p>Points: {{ item.points }}</p>
          <div class="radial-progress text-primary" style="--value:100;">{{item.position}}</div>
          <progress class="progress w-56" value="{{item.points}}" max="700"></progress>
          <progress class="progress w-56" value= item.points max="700"></progress>
          <progress class="progress w-56" value="item.points" max="700"></progress>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    this.getpointE()
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
    getpointE() {
      this.f1.points = [];
      fetch("https://ergast.com/api/f1/2022/constructorStandings.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.f1.ecuries =
            data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          console.log(this.f1.ecuries);
        });
    },
  },
};
</script>
