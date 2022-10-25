<template>
    <bar />
    <div>
        <button http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" class="btn" @click="getpoints()">Points</button>
    </div>
    <div>
        <div class="flex flex-row flex-wrap place-content-center">
            <div v-for="item in this.f1.points" class="card w-96 bg-base-100 shadow-xl ml-6 mt-6">
                <div class="card-body">
                    <p> Points: {{ item.points }}</p>
                    <p class="font-bold">{{ item.Driver.givenName }} {{ item.Driver.familyName }}</p>
                    <p> Position: {{ item.position }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default ({
    data() {
        return {
            f1: {
                driver: [],
                points: [],
            },
        }
    },
    methods: {
        getpoints() {
            fetch('https://ergast.com/api/f1/2022/driverStandings.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.f1.points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    console.log(this.f1.points);

                })
        },


        // gettoken() {
        //     fetch('https://api.pro.wizconnected.com/api/oauth/token', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 "grant_type": "client_credentials",
        //                 "client_id": "client_id",
        //                 "client_secret": "client_secret"
        //             })
        //         })
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log(data)
        //             this.f1.token = data.access_token;
        //             console.log(this.f1.token);

        //         })
        // },
    }
})
</script>
