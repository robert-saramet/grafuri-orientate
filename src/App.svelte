<script>
  import Navbar from "@/lib/components/Navbar.svelte";
  import Footer from "@/lib/components/Footer.svelte";
  import CookieBanner from "@/lib/components/CookieBanner.svelte";

  import Landing from "@/pages/home/Landing.svelte";
  import Theory from "@/pages/home/Theory.svelte";
</script>

<main class="overflow-x-hidden">
  <Navbar />
  <div class="w-screen carousel carousel-horizontal rounded-box">
    <div class="carousel-item w-full"><Landing /></div>
    <div class="carousel-item w-full"><Theory /></div>
  </div>
  <CookieBanner />
  <Footer />
</main>
