<script lang="ts" context="module">
  export async function load({ params, fetch }) {
    const res = await fetch(`/topics/${params.topic}.json`);
    return {
      status: res.status,
      props: {
        topic: res.ok && (await res.json()),
      },
    };
  }
</script>

<script lang="ts">
  import type { Topic } from '$lib';
  export let topic: Topic;
  const { title, image, importance, help } = topic;
</script>

<img {...image} />
<h1>{title}</h1>

<h2>Why is it important?</h2>
<p>{importance}</p>

<h2>How you can help</h2>
<p>{help}</p>
