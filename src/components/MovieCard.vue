<script>

export default {
  name: 'MovieCard',
  props: {
    data: String
  }
}
</script>

<template>
  <div class="movieCard">
    <p>{{ data }}</p>
  </div>
</template>
