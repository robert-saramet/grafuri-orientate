<script>
  import Navbar from "@/pages/home/Navbar.svelte";
  import Landing from "@/pages/home/Landing.svelte";
  import Footer from "@/pages/home/Footer.svelte";
  import Theory from "@/pages/home/Theory.svelte";
</script>

<main class="overflow-x-hidden">
  <Navbar />
  <div class="w-screen carousel carousel-horizontal rounded-box">
    <div class="carousel-item w-full"><Landing /></div>
    <div class="carousel-item w-full"><Theory /></div>
  </div>
  <Footer />
</main>
