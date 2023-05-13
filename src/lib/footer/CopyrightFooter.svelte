<script>
  import HashtagSvg from "./HashtagSvg.svelte";
</script>

<!-- Copyright footer -->
<footer class="footer items-center p-4 bg-neutral text-neutral-content">
  <div class="items-center grid-flow-col">
    <HashtagSvg />
    <p>
      Copyright © 2023 - <a
        class="link link-hover"
        href="https://github.com/robert-saramet">Robert Saramet</a
      >
    </p>
  </div>
</footer>

<div class="divider my-0 bg-black fill-slate-300" data-theme="business" />

<!-- Sitemap footer -->
<footer class="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span class="footer-title">Site</span>
    <a class="link link-hover">Introducere</a>
    <a class="link link-hover">Teorie</a>
    <a class="link link-hover">Probleme</a>
  </div>
  <div>
    <span class="footer-title">Despre mine</span>
    <a class="link link-hover" href="https://github.com/robert-saramet"
      >Github</a
    >
    <a class="link link-hover">Contact</a>
    <a class="link link-hover" href="http://dunarea-info.ro/">Liceu</a>
  </div>
  <div>
    <span class="footer-title">Legal</span>
    <a class="link link-hover">Surse</a>
    <a
      class="link link-hover"
      href="https://github.com/robert-saramet/grafuri-orientate/blob/main/LICENSE"
      >Licență</a
    >
    <a class="link link-hover">GDPR</a>
  </div>
</footer>
