<template>
  <div class="min-h-screen bg-gray-50 px-12 py-12">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-[#111111] mb-1">All Products</h1>
      <p class="text-sm text-gray-400">{{ products.length }} products found</p>
    </div>
    <div class="grid grid-cols-6 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductListView",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const { data } = await api.get("/products");
    this.products = data;
  },
};
</script>
