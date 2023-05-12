<script>
  import BurgerMenuSvg from "./BurgerMenuSvg.svelte";
  import ArrowLeftMenuSvg from "./ArrowLeftMenuSvg.svelte";
  import NavbarInnerList from "./NavbarInnerList.svelte";
</script>

<div class="dropdown">
  <label tabindex="0" class="btn btn-ghost lg:hidden">
    <BurgerMenuSvg />
  </label>
  <ul
    tabindex="0"
    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
  >
    <NavbarInnerList Icon={ArrowLeftMenuSvg} />
  </ul>
</div>
