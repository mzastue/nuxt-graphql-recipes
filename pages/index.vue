<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="author in authors" :key="author.id">
          {{author.name}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import fetchAuthors from '~/apollo/queries/fetchAuthors';

export default {
  apollo: {
    authors: {
      prefetch: true,
      query: fetchAuthors
    }
  }
}
</script>
