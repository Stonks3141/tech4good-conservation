<script lang="ts" context="module">
  export async function load({ fetch }: { fetch: any }) {
    const res = await fetch('/topics/manifest.json');
    let ids = await res.json();

    let topics = await Promise.all(
      ids.map(async (topic: string) => {
        const topicRes = await fetch(`/topics/${topic}.json`);
        return await topicRes.json();
      })
    );

    return {
      status: res.status,
      props: {
        topics: topics.map((topic, i) => ({ id: ids[i], topic })),
      },
    };
  }
</script>

<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Card, { PrimaryAction, Actions } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import type { Topic } from '$lib';
  export let topics: { id: string; topic: Topic }[];
</script>

<LayoutGrid class="card-display">
  {#each topics as { id, topic }}
    <Cell class="card-container">
      <Card>
        <a href={`/topics/${id}`}>
          <PrimaryAction>
            <img {...topic.image} />
          </PrimaryAction>
        </a>
        <h2 class="mdc-typography--headline5">{topic.title}</h2>
        <Actions fullBleed>
          <Button href={`/topics/${id}`}>
            <Label>Learn More</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
          </Button>
        </Actions>
      </Card>
    </Cell>
  {/each}
</LayoutGrid>

<style>
  h2 {
    padding: 1rem;
    margin: 0;
  }
</style>
