<script>
	import '../app.postcss';
	import { DarkMode, Navbar, NavBrand } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Todo
    </span>
  </NavBrand>
	<DarkMode />
</Navbar>

<div class="max-w-3xl mx-auto p-3 my-8 sm:px-6 lg:px-8">
  <slot />
</div>
