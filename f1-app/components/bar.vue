<template>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl">F1 </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a @click="RedirectPagePilote()">Pilotes</a></li>
      <li><a @click="RedirectPageEcurie()">Écuries</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Get started</a>
  </div>
</div>
</template>


<script>

export default ({
    methods: {

      RedirectPagePilote(){
        this.$router.push('/pilotes');

      },

      RedirectPageEcurie(){
        this.$router.push('/ecurie');

      },

    }
})
</script>