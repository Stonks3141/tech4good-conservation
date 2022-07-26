<script lang="ts" context="module">
  export async function load({ fetch }) {
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
  import Card, { PrimaryAction, Media } from '@smui/card';
  import type { Topic } from '$lib';
  export let topics: { id: string, topic: Topic}[];
</script>

<LayoutGrid class="card-display">
  {#each topics as {id, topic}}
    <Cell class="card-container">
      <div class="cell">
        <Card>
          <a href={`/topics/${id}`}>
            <PrimaryAction>
              <img {...topic.image} />
            </PrimaryAction>
          </a>
          <h2 class="mdc-typography--headline5">{topic.title}</h2>
        </Card>
      </div>
    </Cell>
  {/each}
</LayoutGrid>

<style>
  /* .cell {
    width: 200px;
  }*/
  h2 {
    padding: 1rem;
    margin: 0;
  }
</style>
