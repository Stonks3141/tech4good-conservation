<script lang="ts" context="module">
  export const load = async ({
    params: { topic },
    fetch,
  }: {
    params: { topic: string };
    fetch: any;
  }) => {
    const data: Topic = await (await fetch(`/topics/${topic}/index.json`)).json();
    return {
      stuff: { title: data.title },
      props: {
        topic: {
          ...data,
          content: {
            importance: await (await fetch(`/topics/${topic}/importance.html`)).text(),
            solutions: await (await fetch(`/topics/${topic}/solutions.html`)).text(),
            help: await (await fetch(`/topics/${topic}/help.html`)).text(),
          },
        },
      },
    };
  };
</script>

<script lang="ts">
  import type { Topic, TopicExt } from '$lib';
  import Paper, { Title, Content } from '@smui/paper';

  export let topic: TopicExt;
  const {
    title,
    image,
    content: { importance, solutions },
  } = topic;
</script>

<img {...image} />
<div class="paper-container">
  <Paper>
    <Title>{title}</Title>
    <Content>
      <h6 id="importance">Why is it important?</h6>
      {@html importance}

      <h6 id="solutions">How could this problem be solved or mitigated?</h6>
      {@html solutions}
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
