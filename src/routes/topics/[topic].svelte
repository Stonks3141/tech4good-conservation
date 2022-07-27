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
  import Paper, { Title, Content } from '@smui/paper';
  import { title as pageTitle } from '$lib/stores';

  export let topic: Topic;
  const { title, image, importance, solutions, help } = topic;

  pageTitle.set(title);
</script>

<img {...image} />
<div class="paper-container">
  <Paper>
    <Title>{title}</Title>
    <Content>
      <h6>Why is it important?</h6>
      {@html importance}

      <h6>What solutions already exist?</h6>
      {@html solutions}

      <h6>How can I help?</h6>
      {@html help}
    </Content>
  </Paper>
</div>

<style>
  img {
    width: 100%;
    height: 400px;
    opacity: 0.75;
    background-color: black;
    object-fit: cover;
  }
  .paper-container {
    margin: 20px 10%;
  }
</style>
