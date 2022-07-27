<script lang="ts">
  import { title } from '$lib/stores';
  import Button, { Label } from '@smui/button';

  title.set('Conservation');
</script>

<div class="outer">
  <div style="flex-basis:10%" />
  <div class="inner">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Button href="/topics" variant="raised">
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
    background-color: black;
    opacity: 0.75;
  }
</style>
