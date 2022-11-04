<template>
    <navbar />
    <div v-for="item in this.f1.course">
        <p> {{item.raceName}}</p>
        <p> {{item.date}}</p>
        <p> {{item.round}}</p>
        <p> {{item.season}}</p>
    
    

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
            },
        };
    },

    methods: {
        getCourse() {
            this.f1.course = [];
            fetch("http://ergast.com/api/f1/current/last/results.json")
                .then((response) => response.json())
                .then((data) => {
                    this.f1.course = data.MRData.RaceTable.Races;
                    this.f1.position = data.MRData.RaceTable.Races[0].Results[1].grid; 
                    console.log(this.f1.position);
                    
                                });
        },
    },
};
</script>
