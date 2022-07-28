<svg width="160" height="179" viewBox="0 -20 160 159" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="smoke">
    <circle id="smoke3" cx="19" cy="55" r="15" fill="#949494" fill-opacity="0.5" />
    <circle id="smoke2" cx="19" cy="35" r="15" fill="#949494" fill-opacity="0.5" />
    <circle id="smoke1" cx="19" cy="15" r="15" fill="#949494" fill-opacity="0.5" />
  </g>
  <g>
    <path d="M3.03333 60H35.5333L39 159H0L3.03333 60Z" fill="#D9D9D9" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.62391 106L2.14478 89H36.5488L37.1441 106H1.62391Z"
      fill="#EE1E1E"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M36.0586 75H2.57374L3.03333 60H35.5333L36.0586 75Z"
      fill="#EE1E1E"
    />
    <path d="M87.5 81H0V0.5L28.5 30V0.5L59 30V0.5L87.5 30V81Z" transform="translate(50,80)" fill="#D9D9D9"/>
  </g>
</svg>

<style>
  #smoke3 {
    animation: fadeUpLower 1s linear infinite;
    opacity: 0;
  }
  #smoke2 {
    animation: fadeUpMiddle 1s linear infinite;
    opacity: 1;
  }
  #smoke1 {
    animation: fadeUpTop 1s linear infinite;
    opacity: 1;
  }
  @keyframes fadeUpLower {
    to {
      opacity: 1;
      transform: translateY(-20px);
    }
  }
  @keyframes fadeUpMiddle {
    to {
      transform: translateY(-20px);
    }
  }
  @keyframes fadeUpTop {
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
</style>
