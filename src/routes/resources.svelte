<script lang="ts" context="module">
  export const load = async ({ fetch }: { fetch: any }) => ({
    props: {
      links: await (await fetch('/resources.json')).json(),
    },
    stuff: {
      title: 'Additional Resources',
    },
  });
</script>

<script lang="ts">
  export let links: string[];
</script>

<div>
  <h2>Additional Resources</h2>
  <p>These are some helpful links if you want to learn more.</p>
  <ul>
    {#each links as link}
      <li><a href={link}>{link}</a></li>
    {/each}
  </ul>
</div>

<style>
  div {
    width: 80%;
    margin: auto;
    margin-bottom: 100px;
  }
</style>
