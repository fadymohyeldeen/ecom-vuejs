<template>
  <router-link
    :to="`/products/${product.id}`"
    class="flex flex-col h-full bg-white no-underline group border border-gray-100 p-2 rounded-2xl"
  >
    <!-- Image Section -->
    <div
      class="relative w-full pt-[100%] bg-[#F0F0F0] rounded-xl overflow-hidden mb-4"
    >
      <img
        :src="validImage"
        :alt="product.title"
        @error="onImageError"
        class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Content Section -->
    <div class="flex flex-col flex-1 px-1">
      <!-- Category -->
      <span class="text-xs text-gray-400 capitalize mb-1">{{
        product.category
      }}</span>

      <!-- Title -->
      <h3
        class="text-[17px] sm:text-lg font-bold text-black leading-snug line-clamp-1 mb-1.5 capitalize"
      >
        {{ product.title }}
      </h3>

      <!-- Rating -->
      <div class="flex items-center gap-1.5 mb-2">
        <div class="flex items-center text-[#FFC633]">
          <svg
            v-for="i in 5"
            :key="i"
            class="w-4 h-4"
            :class="
              i <= Math.round(product.rating.rate)
                ? 'fill-current'
                : 'text-gray-300 fill-current'
            "
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <span class="text-sm text-black font-medium">
          {{ product.rating.rate }}<span class="text-gray-400">/5</span>
        </span>
        <span class="text-xs text-gray-400">({{ product.rating.count }})</span>
      </div>

      <!-- Price -->
      <div class="flex items-center gap-3 mt-auto">
        <span class="text-xl sm:text-2xl font-bold text-black">
          ${{ product.price }}
        </span>
        <span class="text-xl sm:text-2xl font-bold text-gray-400 line-through">
          ${{ Math.round(product.price * 1.3) }}
        </span>
        <span
          class="text-xs font-bold text-[#FF3333] bg-[#FF3333]/10 px-3 py-1 rounded-full ml-auto md:ml-1"
        >
          -30%
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    validImage() {
      const img = this.product?.image;
      if (!img) {
        return "https://placehold.co/400x400/F0F0F0/AAAAAA?text=No+Image";
      }
      return img;
    },
  },
  methods: {
    onImageError(e) {
      e.target.src = "https://placehold.co/400x400/F0F0F0/AAAAAA?text=No+Image";
    },
  },
};
</script>
