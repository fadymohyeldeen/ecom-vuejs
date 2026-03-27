<template>
  <div class="min-h-screen bg-white">
    <!-- Breadcrumb -->
    <div class="px-12 py-6 bg-section-bg text-sm text-text-secondary">
      <router-link to="/" class="hover:text-primary transition-colors"
        >Home</router-link
      >
      <span class="mx-2">/</span>
      <span class="text-text-primary font-medium">Products</span>
    </div>

    <div class="px-12 py-10 flex gap-10">
      <!-- Sidebar Filters -->
      <aside class="w-64 flex-shrink-0 hidden lg:block">
        <div class="mb-8">
          <h3
            class="text-lg font-bold text-text-primary mb-4 pb-2 border-b border-gray-200"
          >
            Categories
          </h3>
          <ul class="space-y-3">
            <li class="flex items-center justify-between group cursor-pointer">
              <span
                class="text-sm text-text-secondary group-hover:text-primary transition-colors"
                >All Categories</span
              >
            </li>
            <li
              v-for="(c, index) in categories"
              :key="index"
              class="flex items-center justify-between group cursor-pointer"
            >
              <span
                class="text-sm text-text-secondary group-hover:text-primary transition-colors capitalize"
              >
                {{ c }}
              </span>
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h3
            class="text-lg font-bold text-text-primary mb-4 pb-2 border-b border-gray-200"
          >
            Price Range
          </h3>
          <div class="flex items-center gap-2 mb-4">
            <input
              type="number"
              placeholder="Min"
              class="w-full border border-gray-200 rounded px-2 py-1.5 text-sm outline-none focus:border-primary"
            />
            <span class="text-text-secondary">-</span>
            <input
              type="number"
              placeholder="Max"
              class="w-full border border-gray-200 rounded px-2 py-1.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <button
            class="w-full bg-gray-100 text-text-primary font-medium text-sm py-2 rounded hover:bg-gray-200 transition-colors"
          >
            Apply Filter
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1">
        <!-- Toolbar -->
        <div
          class="flex items-center justify-between mb-8 pb-4 border-b border-gray-100"
        >
          <h1 class="text-2xl font-bold text-text-primary">
            {{ products.length }} Products Found
          </h1>
          <div class="flex items-center gap-4">
            <span class="text-sm text-text-secondary">Sort by:</span>
            <select
              class="border border-gray-200 rounded-md py-1.5 px-3 text-sm text-text-primary outline-none focus:border-primary bg-transparent"
            >
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ProductCard v-for="p in products" :key="p.id" :product="p" />
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-16 pb-8">
          <button
            v-if="products.length === limit"
            @click="loadMore"
            class="px-6 py-2.5 rounded-full border border-gray-200 text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer font-medium"
          >
            Load More
          </button>
          <button
            v-if="products.length < limit"
            class="px-6 py-2.5 rounded-full border border-gray-200 text-text-secondary cursor-default font-medium"
          >
            No More Products
          </button>
        </div>
      </main>
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
      limit: 10,
      products: [],
      categories: [],
    };
  },
  async created() {
    const { data } = await api.get(`/products?limit=${this.limit}`);
    this.products = data;
    const { data: categories } = await api.get("/products/categories");
    this.categories = categories;
  },
  methods: {
    async loadMore() {
      this.limit += 5;
      const { data } = await api.get(`/products?limit=${this.limit}`);
      this.products = data;
    },
  },
};
</script>
