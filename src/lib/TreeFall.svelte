<script lang="ts">
  export let width: string = '120';
  export let height: string = '120';
</script>

<svg {width} {height} viewBox="5 24 67 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect id="lower" x="68" y="87" width="13" height="10" fill="#4F1300" fill-opacity="0.5" />
    <g id="upper">
      <rect
        id="Rectangle 1"
        x="68"
        y="76"
        width="13"
        height="11"
        fill="#4F1300"
        fill-opacity="0.5"
      />
      <path
        id="Vector 1"
        d="M99.9743 84H60.8755H51L62.8909 64.7432H51L68.7356 44.0676H59.6662L75.3864 24L91.7112 44.0676H81.2311L97.5559 64.7432H86.8742C90.8378 71.1622 99.0069 84 99.9743 84Z"
        fill="#18AD00"
        fill-opacity="0.5"
      />
    </g>
  </g>
</svg>

<style>
  svg {
    cursor: pointer;
  }
  #upper {
    transform-origin: 68px 87px;
    animation: fall 2s ease-in infinite;
  }
  @keyframes fall {
    0%,
    63%,
    100% {
      transform: rotate(0);
    }
    12%,
    50% {
      transform: rotate(-100deg);
    }
  }
</style>
