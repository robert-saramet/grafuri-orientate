<script>
  import HeroSection from "@/lib/hero/HeroSection.svelte";
  import ImageSvg from "@/lib/hero/svg/feeling_proud.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<HeroSection
  {ImageSvg}
  rating="5"
  title="Grafurile Orientate"
  description="În teoria grafurilor, un graf orientat este un graf ale cărui muchii au
  asociat un sens. Este format din vârfuri și arce, spre deosebire de
  grafurile neorientate, care sunt formate din noduri și muchii."
  on:visibleEvent={() => {
    dispatch("visibleEvent");
  }}
/>
