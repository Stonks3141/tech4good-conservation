<script lang="ts">
  import type { TopAppBarComponentDev } from '@smui/top-app-bar';
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Drawer, { Content, AppContent, Scrim } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';
  import { MarkGithub16, LinkExternal16 } from 'svelte-octicons';
  import { title } from '$lib/stores';

  let topAppBar: TopAppBarComponentDev;
  let open = false;

  let pageTitle: string;
  title.subscribe((val) => (pageTitle = val));
  title.set('Conservation');
</script>

<div class="drawer-container">
  <Drawer variant="modal" fixed={false} bind:open>
    <Content>
      <List>
        <Item on:click={() => (open = false)}>
          <i class="material-icons" aria-hidden="true">arrow_backward</i>
        </Item>
        <Item href="/" on:click={() => (open = false)}>
          <Text>Home</Text>
        </Item>
        <Item href="/topics" on:click={() => (open = false)}>
          <Text>Explore</Text>
        </Item>
        <Item href="https://github.com/Stonks3141/tech4good-conservation">
          <MarkGithub16 />
          &nbsp;
          <LinkExternal16 />
        </Item>
      </List>
    </Content>
  </Drawer>
  <Scrim fixed={false} />

  <AppContent on:click={() => (open = false)} class="app-content">
    <TopAppBar bind:this={topAppBar} variant="standard">
      <Row>
        <Section>
          <IconButton on:click={() => (open = !open)} class="material-icons">menu</IconButton>
          <Title>{pageTitle}</Title>
        </Section>
        <Section align="end">
          <IconButton class="material-icons">search</IconButton>
        </Section>
      </Row>
    </TopAppBar>

    <main class="main-content">
      <AutoAdjust {topAppBar}>
        <slot />
      </AutoAdjust>
    </main>
  </AppContent>
</div>

<style>
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(svg) {
      fill: white;
    }
  }
</style>
