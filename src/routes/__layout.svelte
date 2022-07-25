<script lang="ts">
  import type { TopAppBarComponentDev } from '@smui/top-app-bar';
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  let topAppBar: TopAppBarComponentDev;
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Conservation</Title>
    </Section>
    <Section align="end">
      <IconButton class="material-icons">search</IconButton>
    </Section>
  </Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
  <slot />
</AutoAdjust>

<style>
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
</style>
