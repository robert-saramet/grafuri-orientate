<script>
  export let ids;
  export let visibleId = ids[0];

  import CookieBanner from "@/lib/components/CookieBanner.svelte";

  $: prevId = ids[0];
  $: nextId = ids[1];
  $: {
    let visIdPos = ids.indexOf(visibleId);
    if (visIdPos == 0) {
      prevId = ids[visIdPos];
    } else {
      prevId = ids[visIdPos - 1];
    }
    if (visIdPos == ids.length - 1) {
      nextId = ids[visIdPos];
    } else {
      nextId = ids[visIdPos + 1];
    }
  }
</script>

<div class="fixed flex items-center bottom-0 right-0">
  <div class="sm:flex hidden justify-center mr-16 mb-6">
    <a
      href={"/#" + prevId}
      class="btn btn-circle mr-4 btn-sm hover:brightness-200 hover:shadow-lg"
      >❮</a
    >
    <a
      href={"/#" + nextId}
      class="btn btn-circle mr-4 btn-sm hover:brightness-200 hover:shadow-lg"
      >❯</a
    >
  </div>
  <CookieBanner />
</div>
