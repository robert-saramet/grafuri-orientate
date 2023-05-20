<script>
  import Navbar from "@/lib/components/Navbar.svelte";
  import Footer from "@/lib/components/Footer.svelte";
  import BottomButtons from "@/lib/components/BottomButtons.svelte";

  import Landing from "@/pages/home/Landing.svelte";
  import Theory from "@/pages/home/Theory.svelte";
  import Problems from "@/pages/home/Problems.svelte";

  const pages = [Landing, Theory, Problems];
  const ids = ["landing", "theory", "problems"];

  $: visibleId = ids[0];
  function updateVisibleId(id) {
    console.log("updateVisibleId:" + id);
    visibleId = id;
  }
</script>

<main class="overflow-x-hidden">
  <Navbar />
  <!-- Hero section/slides -->
  <div class="w-screen carousel rounded-box">
    {#each pages as page, i}
      <div class="carousel-item w-full" id={ids[i]}>
        <svelte:component
          this={page}
          on:visibleEvent={() => updateVisibleId(ids[i])}
        />
      </div>
    {/each}
  </div>
  <BottomButtons {ids} {visibleId} />
  <Footer />
</main>
