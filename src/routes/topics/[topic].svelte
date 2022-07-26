<script lang="ts" context="module">
  export async function load({ params, fetch }: { params: { topic: string }; fetch: any }) {
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
  import { title as pageTitle } from '$lib/stores';

  export let topic: Topic;
  const { title, image, importance, help } = topic;

  pageTitle.set(title);
</script>

<img {...image} />
<h1>{title}</h1>

<h2>Why is it important?</h2>
<p>{@html importance}</p>

<h2>How you can help</h2>
<p>{@html help}</p>

<h2>See Also</h2>
<ul>
  {#each topic.seeAlso as href}
    {#await fetch(`/topics/${href}.json`) then res}
      {#await res.json() then data}
        <li><a href={`/topics/${href}`}>{data.title}</a></li>
      {/await}
    {/await}
  {/each}
</ul>
