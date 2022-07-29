<script lang="ts">
  import type { TopAppBarComponentDev } from '@smui/top-app-bar';
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Drawer, { Content, AppContent, Scrim } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';
  import { MarkGithub16 } from 'svelte-octicons';
  import { page } from '$app/stores';
  import { theme } from '$lib/stores';
  import { goto } from '$app/navigation';

  let topAppBar: TopAppBarComponentDev;
  let open = false;
</script>

<svelte:head>
  {#if $theme === 'light'}
    <link rel="stylesheet" href="/smui.css" />
  {:else if $theme === 'dark'}
    <link rel="stylesheet" href="/smui-dark.css" />
  {/if}
</svelte:head>

<div class="drawer-container">
  <Drawer variant="modal" fixed={false} bind:open>
    <Content>
      <List>
        <Item on:click={() => (open = false)}>
          <i class="material-icons" aria-hidden="true">arrow_back</i>
        </Item>
        <Item href="/" on:click={() => (open = false)}>
          <Text>Home</Text>
        </Item>
        <Item href="/explore" on:click={() => (open = false)}>
          <Text>Explore</Text>
        </Item>
        <Item href="/resources" on:click={() => (open = false)}>
          <Text>Additional Resources</Text>
        </Item>
        <Item
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Stonks3141/tech4good-conservation"
        >
          <div style={`fill: ${$theme === 'light' ? 'black' : 'white'}`}>
            <MarkGithub16 />
          </div>
          &nbsp;
          <i class="material-icons" aria-hidden="true" style="font-size: 1rem;">open_in_new</i>
        </Item>
      </List>
    </Content>
  </Drawer>
  <Scrim fixed={false} />
  <AppContent on:click={() => (open = false)} class="app-content">
    <TopAppBar bind:this={topAppBar} variant="standard">
      <Row>
        <Section>
          <IconButton
            on:click={() => {
              const url = window.location.pathname.split('/');
              goto('/' + url.slice(1, url.length - 1).join('/'));
            }}
            class="material-icons">arrow_back</IconButton
          >
          <IconButton on:click={() => (open = !open)} class="material-icons">menu</IconButton>
          <Title>{$page.stuff.title}</Title>
        </Section>
        <Section align="end">
          <IconButton
            on:click={() => ($theme === 'light' ? ($theme = 'dark') : ($theme = 'light'))}
            class="material-icons"
          >
            {#if $theme == 'light'}
              light_mode
            {:else if $theme == 'dark'}
              dark_mode
            {/if}
          </IconButton>
        </Section>
      </Row>
    </TopAppBar>
    <AutoAdjust {topAppBar}>
      <slot />
    </AutoAdjust>
  </AppContent>
</div>
