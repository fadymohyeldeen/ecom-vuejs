<template>
  <div class="home">
    <section
      class="flex items-center justify-center h-[420px] bg-gradient-to-br from-[#f5f5ff] to-[#ffffff] text-center px-6"
    >
      <div>
        <h1
          class="text-[3.5rem] font-[800] text-[#111111] tracking-[-1px] mb-4"
        >
          Discover Your <span class="text-primary">Style</span>
        </h1>
        <p class="text-[1.1rem] text-[#666666] mb-8">
          Shop the latest trends with the best prices, delivered to your door.
        </p>
        <router-link
          to="/products"
          class="bg-primary text-white py-[14px] px-9 rounded-[32px] text-[1rem] font-semibold no-underline transition-all duration-200 inline-block hover:bg-[#5a52d5] hover:-translate-y-0.5"
          >Shop Now</router-link
        >
      </div>
    </section>

    <section class="py-16 px-12 bg-[#fafafa]">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-[1.6rem] font-bold text-[#111111]">
          Featured Products
        </h2>
        <router-link
          to="/products"
          class="text-primary no-underline text-[0.9rem] font-semibold hover:underline"
          >View all →</router-link
        >
      </div>
      <div class="grid grid-cols-6 gap-6">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<script>
import api from "@/services/api";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "HomeView",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const { data } = await api.get("/products?limit=6");
    this.products = data;
  },
};
</script>
