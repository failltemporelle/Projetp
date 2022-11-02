<template>
    <navbar />
    <div>
        <div class="flex flex-row flex-wrap place-content-center">
            <div v-for="item in this.science.element" class="card w-60 bg-334195 shadow-xl ml-6 mt-6">
                <div class="card-body">
                    <p class="font-bold">{{ item.name }}</p>
                    <p> {{item.atomicNumber}}</p>
                    <p> {{item.cpkHexColor}}</p> 
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
