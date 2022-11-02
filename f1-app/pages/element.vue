<template>
    <navbar />
    <div>
        <div class="flex flex-row flex-wrap place-content-center">
            <div v-for="item in this.science.element"
                class="text-slate-50 card w-60 bg-emerald-700 shadow-xl ml-6 mt-6">
                <div class="card-body">
                    <p class="font-bold">{{ item.name }}</p>
                    <p> {{ item.atomicNumber }}</p>
                    <p> {{ item.cpkHexColor }}</p>
                    <p> {{ item.symbol }}</p>
                    <p> {{ item.groupBlock }}</p>


                    <a href="#my-modal-2" class="btn">View element</a>
                    <!-- Put this part before </body> tag -->
                    <div class="modal" id="my-modal-2">
                        <div class="modal-box">
                            <h1> C'est du {{item.name}}</h1>
                            <img src ="@/assets/carbon.png"/>
                            
                            
                            <div class="modal-action">
                                <a href="#" class="btn">Yay!</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>










<script>

export default {
    created() {
        this.element();
    },
    data() {
        return {
            science: {
                element: [],
            },
        };
    },
    methods: {
        element() {
            fetch('https://periodic-table-elements-info.herokuapp.com/elements')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.science.element = data;
                });

        },
    },
};


</script>
