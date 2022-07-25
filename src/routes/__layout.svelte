<script lang="ts">
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
</script>

<TopAppBar>
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

<slot />

<style>
  :global(html), :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
