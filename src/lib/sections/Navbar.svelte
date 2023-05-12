<script>
  import MobileNavbarMenu from "../navbar/MobileNavbarMenu.svelte";
  import ArrowDownMenuSvg from "../navbar/ArrowDownMenuSvg.svelte";
  import NavbarInnerList from "../navbar/NavbarInnerList.svelte";
</script>

<header class="navbar bg-base-100" data-theme="business">
  <!-- Title and mobile menu -->
  <div class="navbar-start">
    <MobileNavbarMenu />
    <a class="btn btn-ghost normal-case text-xl">Grafurile Orientate</a>
  </div>

  <!-- Desktop navbar links -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <NavbarInnerList Icon={ArrowDownMenuSvg} />
    </ul>
  </div>

  <!-- Github button -->
  <div class="navbar-end">
    <a class="btn btn-outline" href="https://github.com/robert-saramet"
      >Github</a
    >
  </div>
</header>
