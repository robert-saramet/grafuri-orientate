<script>
  import HeroSection from "@/lib/hero/HeroSection.svelte";
  import ImageSvg from "@/lib/hero/svg/feeling_proud.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<HeroSection
  {ImageSvg}
  rating="2"
  title="Probleme"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui sed quis quam ad, culpa libero voluptatum laborum commodi, iusto autem facere quod fugiat illum, minima reprehenderit! Amet, mollitia quas."
  on:visibleEvent={() => {
    dispatch("visibleEvent");
  }}
/>
