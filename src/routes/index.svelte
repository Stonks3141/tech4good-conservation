<script context="module" lang="ts">
  export const load = (_: any) => ({
    stuff: {
      title: 'Conservation',
    },
  });
</script>

<script lang="ts">
  import Button, { Label } from '@smui/button';
  import TreeFall from '$lib/TreeFall.svelte';
  import SmokeStack from '$lib/SmokeStack.svelte';
  import HabitatLoss from '$lib/HabitatLoss.svelte';
  import Actions from '@smui/card/src/Actions.svelte';
</script>

<div class="outer">
  <div style="flex-basis:10%" />
  <div class="inner">
    <p>
      As many governments continue their policies of inaction with regard to climate change and
      conservation, it becomes increasingly important for individuals to educate themselves and take
      their own actions. At Grandfather Mountain. If drastic action is not taken now, a quarter of
      species are projected to become extinct by 2050. This app compiles information to aid you in
      learning about environmental problems and potential solutions.
    </p>
    <Button href="/explore" variant="raised">
      <Label>Explore</Label>
    </Button>
  </div>
  <div style="flex-basis:10%" />
</div>
<div class="lower">
  <h1>The Problem</h1>
  <p>
    Habitats are in a constant state of change both naturally and through human influence. Natural
    change can be managed but change made by humans is often devastating and irreversible. As
    species are lost and landscapes are destroyed people look for ways to conserve our existing
    resources. It is important to maintain the environment for future generations and to provide
    opportunities for education and the enjoyment of the environment.
  </p>
  <div id="icons">
    <div class="icon">
      <h5>Deforestation</h5>
      <a href="/explore/deforestation"><TreeFall /></a>
    </div>
    <div class="icon">
      <h5>Carbon Emissions</h5>
      <a href="/explore/carbon-emissions"><SmokeStack /></a>
    </div>
    <div class="icon">
      <h5>Habitat Destruction</h5>
      <a href="/explore/habitat-destruction"><HabitatLoss /></a>
    </div>
  </div>
</div>

<style>
  .outer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 100vh;
    background-image: url('https://res.cloudinary.com/dtpgi0zck/image/upload/s--qpJXlbS4--/c_fill,h_580,w_860/v1/EducationHub/photos/conserving-land-and-life.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 1.5rem;
    border-radius: 4px;
    background-color: white;
    opacity: 0.75;
  }
  .lower {
    width: 80%;
    margin: auto;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #icons {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .icon {
  }
  @media (prefers-color-scheme: dark) {
    .inner {
      background-color: black;
    }
  }
</style>
