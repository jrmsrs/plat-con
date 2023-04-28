<script lang="ts">
  export let loading: boolean = false
  let svgPlaceholderPath1 =
    'm 670.0207,347.29819 c 43.68161,41.90967 68.92453,99.45546 70.18135,159.97749 1.24907,60.52219 -21.59057,119.0634 -63.50024,162.74502 -41.90967,43.68161 -99.45546,68.92453 -159.97749,70.18135 -60.52219,1.24907 -119.0634,-21.59057 -162.74502,-63.50024 z M 370.10425,659.8951 c 39.22358,37.63248 91.79488,58.14321 146.13793,57.01818 54.34306,-1.12503 106.02044,-23.79395 143.65292,-63.01753 37.63248,-39.22358 58.14321,-91.79488 57.01818,-146.13793 -1.12503,-54.34306 -23.79395,-106.02044 -63.01753,-143.65292 z'
  let svgPlaceholderPath2 =
    'm 451.49584,453.95019 c 32.05997,-33.41547 85.13471,-34.51036 118.55397,-2.45435 L 453.95019,572.50416 c -33.41547,-32.05997 -34.51432,-85.13851 -2.45435,-118.55397 z m 20.16805,19.34993 c -21.37458,22.2783 -20.64206,57.66141 1.63623,79.03598 l 77.39976,-80.67221 c -22.2783,-21.37458 -57.66141,-20.64206 -79.03599,1.63623 z'
</script>

<div class={loading ? '' : 'hidden'}>
  <div class="h-screen w-screen z-20 fixed grid content-center pointer-events-none">
    <div
      class="h-48 w-48 rounded-3xl overflow-hidden m-auto bg-opacity-10 bg-zinc-100 backdrop-blur-md hover:transition"
    >
      <div class="flex">
        <svg
          class="text-zinc-100 z-20 fixed path1"
          fill="currentColor"
          viewBox="256 256 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgPlaceholderPath1} />
        </svg>
        <svg
          class="text-zinc-100 z-30 fixed path2"
          fill="currentColor"
          viewBox="256 256 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgPlaceholderPath2} />
        </svg>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes spin {
    to {
      transform: rotate(720deg);
    }
  }
  .path1 {
    animation: spin 1.6s ease-in infinite;
    transform-origin: 50%;
  }
  .path2 {
    animation: spin 1.1s ease-in infinite;
    transform-origin: 50%;
  }
</style>
