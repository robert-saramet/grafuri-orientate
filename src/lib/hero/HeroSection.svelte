<script>
  export let ImageSvg;
  export let rating;
  export let title;
  export let description;
  export let disabled = true;

  import Rating from "./Rating.svelte";
  import TypeWriter from "svelte-typewriter";
  
  $: interval = 3000 / description.length;

  // Check if element is in viewport
  function actionWhenInViewport(e) {
  const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) {
      // Element in viewport
      disabled = false;
    }
  });

  observer.observe(e);

}
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row gap-x-32 gap-y-12">
    <ImageSvg />
    <div use:actionWhenInViewport>
      <TypeWriter mode="scramble" scrambleDuration={800} scrambleSlowdown={true} {disabled}>
        <h1 class="text-5xl font-bold">{title}</h1>
      </TypeWriter>
      <TypeWriter {interval} keepCursorOnFinish={2000} {disabled}>
        <p class="py-6 max-w-3xl">{description}</p>
      </TypeWriter>
      <div class="flex flex-row gap-8">
        <button class="btn btn-primary">Află mai mult</button>
        <Rating {rating} />
      </div>
    </div>
  </div>
</div>
