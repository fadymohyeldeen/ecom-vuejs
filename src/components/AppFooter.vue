<template>
  <!-- Footer -->
  <footer class="bg-black text-white pt-16 pb-8 px-6 md:px-12 mt-20">
    <!-- Newsletter -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-12">
      <h2
        class="text-[28px] md:text-3xl font-extrabold uppercase tracking-widest max-w-lg leading-tight mb-6 md:mb-0 text-white"
      >
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <div class="flex flex-col md:flex-row w-full md:w-auto gap-4">
        <div class="relative w-full md:w-80">
          <svg
            class="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <input
            type="email"
            placeholder="Enter your email address"
            class="w-full bg-white text-black py-3 pl-12 pr-4 rounded-full outline-none focus:ring-2 focus:ring-gray-300 text-sm"
          />
        </div>
        <button
          class="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors text-sm"
        >
          Subscribe to Newsletter
        </button>
      </div>
    </div>

    <hr class="border-gray-800 mb-12" />

    <!-- Links -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
      <div class="col-span-2">
        <h3 class="text-3xl font-bold uppercase mb-4 text-white tracking-tight">
          VueSHOP
        </h3>
        <p class="text-sm text-gray-400 max-w-xs mb-6 leading-relaxed">
          We have clothes that suits your style and which you're proud to wear.
          From women to men.
        </p>
        <div class="flex gap-4">
          <a
            href="#"
            class="w-8 h-8 bg-white text-black hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <span class="sr-only">Twitter</span>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-8 h-8 bg-white text-black hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <span class="sr-only">Facebook</span>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-8 h-8 bg-white text-black hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <span class="sr-only">Instagram</span>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h4
          class="font-medium text-white mb-4 uppercase tracking-wider text-sm"
        >
          Company
        </h4>
        <ul class="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="#" class="hover:text-white transition-colors">About</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Features</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Works</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Career</a>
          </li>
        </ul>
      </div>

      <div>
        <h4
          class="font-medium text-white mb-4 uppercase tracking-wider text-sm"
        >
          Help
        </h4>
        <ul class="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Customer Support</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Delivery Details</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Terms & Conditions</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Privacy Policy</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h4
          class="font-medium text-white mb-4 uppercase tracking-wider text-sm"
        >
          FAQ
        </h4>
        <ul class="space-y-3 text-gray-400 text-sm">
          <li>
            <a href="#" class="hover:text-white transition-colors">Account</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Manage Deliveries</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Orders</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Payments</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
    >
      <p>Shop.co © 2000-2026, All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
