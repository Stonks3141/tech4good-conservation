<script context="module" lang="ts">
  export const load = (_: any) => ({
    stuff: {
      title: 'Conservation',
    },
  });
</script>

<script lang="ts">
  import Button, { Label } from '@smui/button';
</script>

<div class="outer">
  <div style="flex-basis:10%" />
  <div class="inner">
    <p>
      As many governments continue their policies of inaction with regard to climate change and
      conservation, it becomes increasingly important for individuals to educate themselves and take
      their own actions. If drastic action is not taken now, a quarter of species are projected to
      become extinct by 2050. This app compiles information to aid you in learning about
      environmental problems and potential solutions.
    </p>
    <Button href="/explore" variant="raised">
      <Label>Explore</Label>
    </Button>
  </div>
  <div style="flex-basis:10%" />
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
  @media (prefers-color-scheme: dark) {
    .inner {
      background-color: black;
    }
  }
</style>
