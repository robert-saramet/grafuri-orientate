<script>
  import HeroSection from "@/lib/hero/HeroSection.svelte";
  import ImageSvg from "@/lib/hero/svg/analyze.svelte";
</script>

<HeroSection
  {ImageSvg}
  rating="3"
  title="Teorie"
  description="Această secțiune explică noțiunile de bază ale grafurilor, 
  cu accent pe extremitățile unui arc, vârfurile adiacente și incidența. 
  Extremitățile unui arc sunt nodurile care îl definesc. Mai specific, 
  nodul inițial al arcului se numește extremitate inițială, în timp ce 
  nodul final se numește extremitate finală. Dacă există un arc între 
  două noduri, acestea se numesc noduri adiacente. În ceea ce privește 
  incidența, două arce sunt considerate incidente dacă au cel puțin o 
  extremitate comună. De asemenea, un nod și un arc sunt considerate 
  incidente dacă acel nod face parte din extremitatea arcului."
/>
