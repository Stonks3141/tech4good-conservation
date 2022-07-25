<script lang="ts">
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
</script>

<TopAppBar>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Thing</Title>
    </Section>
  </Row>
</TopAppBar>

<slot />
