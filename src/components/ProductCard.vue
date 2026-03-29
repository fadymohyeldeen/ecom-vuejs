<template>
  <router-link
    :to="`/products/${product.id}`"
    class="flex flex-col h-full bg-white no-underline group border border-gray-100 p-3 rounded-2xl hover:shadow-sm transition-shadow"
  >
    <!-- Image Section -->
    <div
      class="relative w-full pt-[100%] bg-[#F0F0F0] rounded-xl overflow-hidden mb-3"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
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
        class="text-sm font-semibold text-black leading-snug line-clamp-2 mb-2"
      >
        {{ product.title }}
      </h3>

      <!-- Rating -->
      <div class="flex items-center gap-1 mb-3">
        <div class="flex items-center text-[#FFC633]">
          <svg
            v-for="i in 5"
            :key="i"
            class="w-3.5 h-3.5"
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
        <span class="text-xs text-gray-500">{{ product.rating.rate }}</span>
        <span class="text-xs text-gray-400">({{ product.rating.count }})</span>
      </div>
      <!-- Price + Add to Cart -->
      <div class="mt-auto flex items-center justify-between pt-2">
        <span class="md:text-xl font-bold text-black sm:text-sm"
          >${{ product.price }}</span
        >
        <button
          @click.prevent="$emit('add-to-cart', product)"
          class="text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors whitespace-nowrap"
        >
          Add to Cart
        </button>
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
};
</script>
