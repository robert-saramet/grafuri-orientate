<script>
  import Navbar from "./lib/sections/Navbar.svelte";
  import Landing from "./lib/sections/Landing.svelte";
  import Footer from "./lib/sections/Footer.svelte";
  import Theory from "./lib/sections/Theory.svelte";
</script>

<main>
  <Navbar />
  <div class="h-screen carousel carousel-vertical rounded-box">
    <div class="carousel-item h-full"><Landing /></div>
    <div class="carousel-item h-full"><Theory /></div>
  </div>
  <Footer />
</main>
