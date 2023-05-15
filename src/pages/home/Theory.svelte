<script>
  import HeroSection from "@/lib/hero/HeroSection.svelte";
  import ImageSvg from "@/lib/hero/svg/analyze.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<HeroSection
  {ImageSvg}
  rating="3"
  title="Teorie"
  description="Această secțiune explică noțiunile de bază ale grafurilor, 
  cu accent pe extremitățile unui arc, vârfurile adiacente și incidența. 
  Extremitățile unui arc sunt nodurile care îl definesc. Dacă există un
  arc între două noduri, acestea se numesc noduri adiacente. Două arce
  sunt considerate incidente dacă au cel puțin o extremitate comună."
  on:visibleEvent={() => {
    dispatch("visibleEvent");
  }}
/>
