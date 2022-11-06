<template>
    <navbar />


    <div class="flex flex-row flex-wrap place-content-center">
        <div v-for="item in this.f1.course" class="card w-60 bg-red-700 shadow-xl ml-6 mt-6">
            <div class="card-body">
                <p> {{ item.raceName }}</p>
                <p> {{ item.date }}</p>
                <p> {{ item.round }}</p>
                <p> {{ item.season }}</p>
            </div>
        </div>
    </div>


    <div class="flex flex-row flex-wrap place-content-center">
        <div v-for="item in this.f1.classement" class="card w-60 bg-red-700 shadow-xl ml-6 mt-6">
            <div class="card-body">
                <!-- <p> {{ item.Constructor.name }}</p> -->
                <p> {{ item.Driver.givenName }} {{ item.Driver.familyName }}</p>
                <p> Position départ : {{ item.grid }} Position arrivée : {{ item.position }}</p>
                <p> {{ item.status }}</p>
                <p> tour : {{item.FastestLap.lap}}</p>
                <p> Rank : {{item.FastestLap.rank}}</p>
                <p> LOP : {{item.FastestLap[0].AverageSpeed.rank}}</p> 
            </div>
        </div>
    </div>



</template>



<script>
export default {
    created() {
        this.getCourse();
    },
    data() {
        return {
            f1: {
                course: [],
                classement: [],
                temps: [],
            },
        };
    },

    methods: {
        getCourse() {
            this.f1.course = [];
            fetch("https://ergast.com/api/f1/current/last/results.json")
                .then((response) => response.json())
                .then((data) => {
                    this.f1.course = data.MRData.RaceTable.Races;
                    this.f1.classement = data.MRData.RaceTable.Races[0].Results;
                });

        },
    },
};
</script>
