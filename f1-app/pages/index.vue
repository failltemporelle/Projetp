<template>
  <div>
    <html>
      <bar />
      <slot />
    </html>
    <NuxtLink to="/pilotes">Pilotes</NuxtLink>
    <NuxtLink to="/ecurie">Ecurie</NuxtLink>

  </div>
</template>



<script>
export default{


asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}



</script>
