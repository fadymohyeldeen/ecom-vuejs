<template>
  <div
    class="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-200 flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
  >
    <div class="bg-[#f9f9f9] flex items-center justify-center p-6 h-[200px]">
      <img
        :src="product.image"
        :alt="product.title"
        class="max-h-full max-w-full object-contain"
      />
    </div>
    <div class="p-4 flex flex-col flex-1 gap-2">
      <span
        class="text-[0.72rem] font-semibold text-primary uppercase tracking-[0.5px]"
        >{{ product.category }}</span
      >
      <h3
        class="text-[0.9rem] font-semibold text-[#111111] leading-[1.4] line-clamp-2 flex-1"
      >
        {{ product.title }}
      </h3>
      <div class="flex items-center justify-between mt-2">
        <span class="text-[1.1rem] font-bold text-[#111111]"
          >${{ product.price }}</span
        >
        <button
          class="bg-primary text-white border-none py-2 px-[14px] rounded-[20px] text-[0.78rem] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#5a52d5] hover:-translate-y-[1px]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
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
