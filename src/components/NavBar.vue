<template>
  <header class="sticky top-0 z-[100] bg-white font-sans w-full">
    <!-- Main Navbar -->
    <nav
      class="flex justify-between items-center px-6 md:px-12 h-24 bg-white max-w-[1440px] mx-auto"
    >
      <!-- Logo -->
      <div class="flex-shrink-0 flex items-center gap-4">
        <!-- Mobile menu icon -->
        <button class="md:hidden text-black" @click="menuOpen = !menuOpen">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="menuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <router-link
          to="/"
          class="text-[32px] font-extrabold text-black uppercase tracking-tighter no-underline"
        >
          VUESHOP
        </router-link>
      </div>

      <!-- Center Links -->
      <div class="hidden md:flex items-center gap-8">
        <router-link
          to="/products"
          class="text-black font-medium text-[15px] hover:text-gray-600 transition-colors"
          >All Products</router-link
        >
        <router-link
          to="/products"
          class="text-black font-medium text-[15px] hover:text-gray-600 transition-colors"
          >On Sale</router-link
        >
        <router-link
          to="/products"
          class="text-black font-medium text-[15px] hover:text-gray-600 transition-colors"
          >New Arrivals</router-link
        >
        <router-link
          to="/products"
          class="text-black font-medium text-[15px] hover:text-gray-600 transition-colors"
          >Categories</router-link
        >
      </div>

      <!-- Right Section -->
      <div class="flex items-center gap-4 md:gap-6 flex-shrink-0">
        <!-- Desktop Search -->
        <div
          class="hidden lg:flex items-center bg-[#F0F0F0] rounded-full px-4 py-3 w-96 transition-all focus-within:ring-1 focus-within:ring-gray-300"
        >
          <svg
            class="w-5 h-5 text-gray-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for products..."
            class="bg-transparent border-none outline-none w-full text-black placeholder:text-gray-500 text-[15px]"
          />
        </div>

        <!-- Mobile Search Icon -->
        <button
          class="lg:hidden text-black hover:text-gray-600 transition-colors"
          @click="searchOpen = !searchOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <!-- Cart -->
        <router-link
          to="/cart"
          class="text-black hover:text-gray-600 transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
        </router-link>

        <!-- Account -->
        <button class="text-black hover:text-gray-600 transition-colors">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Search Bar -->
    <div v-if="searchOpen" class="lg:hidden px-6 pb-4 bg-white">
      <div
        class="flex items-center bg-[#F0F0F0] rounded-full px-4 py-3 focus-within:ring-1 focus-within:ring-gray-300"
      >
        <svg
          class="w-5 h-5 text-gray-500 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for products..."
          class="bg-transparent border-none outline-none w-full text-black placeholder:text-gray-500 text-[15px]"
          autofocus
        />
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
    >
      <router-link
        to="/products"
        @click.native="menuOpen = false"
        class="text-black font-medium text-[15px] hover:text-gray-600 transition-colors"
        >All Products</router-link
      >
      <router-link
        to="/products"
        @click.native="menuOpen = false"
        class="text-black font-medium text-[15px] hover:text-gray-600 transition-colors"
        >On Sale</router-link
      >
      <router-link
        to="/products"
        @click.native="menuOpen = false"
        class="text-black font-medium text-[15px] hover:text-gray-600 transition-colors"
        >New Arrivals</router-link
      >
      <router-link
        to="/products"
        @click.native="menuOpen = false"
        class="text-black font-medium text-[15px] hover:text-gray-600 transition-colors"
        >Categories</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuOpen: false,
      searchOpen: false,
    };
  },
};
</script>
