<script>
  export let ImageSvg;
  export let rating;
  export let title;
  export let description;

  import Rating from "./Rating.svelte";
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row gap-x-32 gap-y-12">
    <ImageSvg />
    <div>
      <h1 class="text-5xl font-bold">{title}</h1>
      <p class="py-6 max-w-3xl">{description}</p>
      <div class="flex flex-row gap-8">
        <button class="btn btn-primary">Află mai mult</button>
        <Rating />
      </div>
    </div>
  </div>
</div>
