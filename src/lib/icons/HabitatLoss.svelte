<svg width="158" height="116" viewBox="0 0 158 116" fill="none">
  <rect width="158" height="116" fill="#428A45" />
  <path
    id="road"
    style="--order: 0"
    d="M34.5 68C18.0462 74.1702 3.16667 95.1667 0 100V115.5C2.16667 108.833 21.5337 83.9443 43 75C61 67.5 84.9235 68.6386 107 60C130 51 144.167 17.8333 149.5 0.5H139C136.833 13.6667 125.8 41 101 51C70 63.5 58.5 59 34.5 68Z"
    fill="#484848"
  />
  <g id="houses" style="--order: 1">
    <g style="--order: 1">
      <rect
        x="49"
        y="75.8755"
        width="26"
        height="18"
        transform="rotate(-8.57227 49 75.8755)"
        fill="#836655"
      />
    </g>
    <g style="--order: 2">
      <rect
        x="110"
        y="63.2121"
        width="26"
        height="18"
        transform="rotate(-38.5753 110 63.2121)"
        fill="#836655"
      />
    </g>
    <g style="--order: 3">
      <rect
        x="9.68289"
        y="56.7937"
        width="26"
        height="18"
        transform="rotate(-29.4988 9.68289 56.7937)"
        fill="#836655"
      />
    </g>
    <g style="--order: 4">
      <rect
        x="70"
        y="38.4644"
        width="26"
        height="18"
        transform="rotate(-16.684 70 38.4644)"
        fill="#836655"
      />
    </g>
  </g>
</svg>

<style>
  #road,
  #houses g {
    animation: slide 6s linear infinite;
    animation-delay: calc(var(--order) * 200ms);
  }
  @keyframes slide {
    10%,
    50% {
      transform: translateY(0);
    }
    0%,
    60%,
    100% {
      transform: translateY(100%);
    }
  }
</style>
