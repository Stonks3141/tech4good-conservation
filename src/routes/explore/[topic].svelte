<script lang="ts" context="module">
  export const load = async ({
    params: { topic },
    fetch,
  }: {
    params: { topic: string };
    fetch: any;
  }) => ({
    props: {
      topic: {
        ...(await (await fetch(`/topics/${topic}/index.json`)).json()),
        content: {
          importance: await (await fetch(`/topics/${topic}/importance.html`)).text(),
          solutions: await (await fetch(`/topics/${topic}/solutions.html`)).text(),
          help: await (await fetch(`/topics/${topic}/help.html`)).text(),
        },
      },
    },
  });
</script>

<script lang="ts">
  import type { TopicExt } from '$lib';
  import Paper, { Title, Content } from '@smui/paper';
  import { title as pageTitle } from '$lib/stores';

  export let topic: TopicExt;
  const {
    title,
    image,
    content: { importance, solutions, help },
  } = topic;

  pageTitle.set(title);
</script>

<img {...image} />
<div class="paper-container">
  <Paper>
    <Title>{title}</Title>
    <Content>
      <h6 id="importance">Why is it important?</h6>
      {@html importance}

      <h6 id="solutions">What solutions already exist?</h6>
      {@html solutions}

      <h6 id="help">How can I help?</h6>
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
