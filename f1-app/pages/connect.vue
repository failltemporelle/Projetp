<template>
    <Navbar />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Login now!</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text password">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary" @click="loginwithfirebase()">Login</button>
                        <button class="btn btn-primary mt-6">create account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>


export default {
    methods: {


        loginwithfrebase() {
            const firebaseConfig = {
                apiKey: "AIzaSyD85IkpvL-5w8SwBREfc60cfZENVaYxW3s",
                authDomain: "projet-d3942.firebaseapp.com",
                projectId: "projet-d3942",
                storageBucket: "projet-d3942.appspot.com",
                messagingSenderId: "442188871962",
                appId: "1:442188871962:web:9d57e23cbd5b975b04d4a3",
                measurementId: "G-STTTL46CFM"
            };


        }
    },
}
</script>