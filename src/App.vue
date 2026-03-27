<template>
  <div id="app" class="font-sans">
    <!-- Top Announcement Bar -->
    <div
      v-if="showAnnouncement"
      class="w-full bg-black text-white text-sm py-2.5 px-4 flex justify-between items-center z-[200] relative"
    >
      <div class="flex-1 text-center font-normal">
        Sign up and get 20% off to your first order.
        <a href="#" class="underline font-medium hover:text-gray-300 ml-1"
          >Sign Up Now</a
        >
      </div>
      <button
        @click="showAnnouncement = false"
        class="text-white hover:text-gray-300 hidden md:block"
        aria-label="Close"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <NavBar />

    <router-view class="min-h-screen" />
    <AppFooter />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    NavBar,
    AppFooter,
  },
  data() {
    return {
      showAnnouncement: true,
    };
  },
};
</script>
