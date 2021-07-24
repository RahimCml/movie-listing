<script>

export default {
  name: 'MovieCard',
  props: {
    data: Object
  }
}
</script>

<template>
  <div class="movieCard">
    <div class="list">
      <div class="container">
        {{data.Title}}
      </div>
      <div class="container">
        {{data.Year}}
      </div>
    </div>
  </div>
</template>
