<template>
  <nav
    class="flex justify-between items-center px-12 h-16 bg-[#e5e5e5] border-b border-[#f0f0f0] sticky top-0 z-[100]"
  >
    <div>
      <router-link
        to="/"
        class="text-[1.3rem] font-bold text-[#111111] no-underline tracking-[-0.5px]"
        >VueShop</router-link
      >
    </div>
    <div class="flex gap-8">
      <router-link
        to="/"
        class="text-[#555555] no-underline text-[0.9rem] font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-[width] after:duration-200 hover:after:w-full [&.router-link-exact-active]:after:w-full hover:text-[#111111] [&.router-link-exact-active]:text-[#111111]"
        >Home</router-link
      >
      <router-link
        to="/products"
        class="text-[#555555] no-underline text-[0.9rem] font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-[width] after:duration-200 hover:after:w-full [&.router-link-exact-active]:after:w-full hover:text-[#111111] [&.router-link-exact-active]:text-[#111111]"
        >Products</router-link
      >
    </div>
    <div
      class="flex items-center bg-[#f7f7f7] rounded-3xl py-2 px-4 gap-2 w-[240px] transition-[box-shadow] duration-200 focus-within:shadow-[0_0_0_2px_#6c63ff40]"
    >
      <span class="text-[0.85rem]">🔍</span>
      <input
        type="text"
        placeholder="Search..."
        class="border-none outline-none bg-transparent text-[0.88rem] text-[#111111] w-full placeholder:text-[#aaaaaa]"
      />
    </div>
    <div class="flex items-center gap-4">
      <router-link to="/cart" class="relative no-underline text-[1.2rem]">
        <span>🛒</span>
        <span
          class="absolute -top-1.5 -right-2 bg-primary text-white text-[0.65rem] font-bold w-4 h-4 rounded-full flex items-center justify-center"
          >0</span
        >
      </router-link>
      <router-link
        to="/login"
        class="bg-primary !text-white py-2 px-[22px] rounded-3xl text-[0.88rem] font-semibold no-underline transition-all duration-200 hover:bg-[#5a52d5] hover:-translate-y-[1px]"
        >Login</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
