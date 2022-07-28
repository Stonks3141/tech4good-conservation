<script lang="ts" context="module">
  export async function load({ fetch }: { fetch: any }) {
    const res = await fetch('/topics/index.json');
    let ids = await res.json();

    let topics = await Promise.all(
      ids.map(async (topic: string) => await (await fetch(`/topics/${topic}/index.json`)).json())
    );

    return {
      stuff: { title: 'Explore' },
      props: {
        topics: topics.map((topic, i) => ({ id: ids[i], topic })),
      },
    };
  }
</script>

<script lang="ts">
  import Card, { PrimaryAction, Actions } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import type { Topic } from '$lib';

  export let topics: { id: string; topic: Topic }[];
</script>

<div class="outer">
  <div class="card-display">
    {#each topics as { id, topic }}
      <div class="card-container">
        <Card>
          <a href={`/explore/${id}`}>
            <PrimaryAction>
              <img {...topic.image} />
            </PrimaryAction>
          </a>
          <h2 class="mdc-typography--headline5">{topic.title}</h2>
          <Actions fullBleed>
            <Button href={`/explore/${id}`}>
              <Label>Learn More</Label>
              <i class="material-icons" aria-hidden="true">arrow_forward</i>
            </Button>
          </Actions>
        </Card>
      </div>
    {/each}
  </div>
</div>

<style>
  h2 {
    padding: 1rem;
    margin: 0;
  }
  .card-display {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  .card-container {
    width: 384px;
    max-width: 100%;
  }
  .outer {
  }
  img {
    height: 268px;
    object-fit: cover;
  }
</style>
