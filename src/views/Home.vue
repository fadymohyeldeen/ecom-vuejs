<template>
  <div class="home bg-white font-sans">
    <!-- Hero Section -->
    <section class="relative bg-[#F2F0F1] overflow-hidden">
      <div
        class="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center"
      >
        <!-- Text content -->
        <div
          class="order-last lg:order-first flex-1 px-6 md:px-12 py-10 lg:py-20 lg:pr-16"
        >
          <h1
            class="text-[40px] md:text-6xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-tighter mb-6 uppercase"
          >
            Find products that match your needs
          </h1>
          <p
            class="text-[15px] md:text-base text-gray-500 mb-8 max-w-[480px] leading-relaxed"
          >
            Explore a wide range of high-quality products across multiple
            categories, carefully selected to fit your lifestyle and everyday
            needs.
          </p>
          <router-link
            to="/products"
            class="inline-flex items-center justify-center bg-black text-white py-4 px-14 rounded-full text-base font-medium transition-colors hover:bg-gray-800 w-full md:w-auto mb-10 md:mb-12"
          >
            Shop Now
          </router-link>

          <!-- Stats -->
          <div
            class="flex flex-wrap items-start justify-between gap-6 md:gap-0 w-full px-2"
          >
            <div class="flex flex-col items-start">
              <h3 class="text-3xl md:text-[40px] font-bold text-black mb-1">
                200+
              </h3>
              <p class="text-xs text-gray-500 font-medium">Trusted Brands</p>
            </div>

            <div
              class="hidden md:block w-px h-12 bg-gray-300 self-center"
            ></div>

            <div class="flex flex-col items-start">
              <h3 class="text-3xl md:text-[40px] font-bold text-black mb-1">
                5,000+
              </h3>
              <p class="text-xs text-gray-500 font-medium">
                Products Available
              </p>
            </div>

            <div
              class="hidden md:block w-px h-12 bg-gray-300 self-center"
            ></div>

            <div class="flex flex-col items-start">
              <h3 class="text-3xl md:text-[40px] font-bold text-black mb-1">
                50,000+
              </h3>
              <p class="text-xs text-gray-500 font-medium">Happy Customers</p>
            </div>
          </div>
        </div>

        <!-- Image content -->
        <div class="order-first lg:order-last w-full lg:w-1/2 lg:h-[600px]">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/bca6b0216037191.677940cf76f26.jpg"
            alt="Ecommerce products"
            class="w-full h-64 sm:h-80 lg:h-full object-cover object-top mix-blend-multiply"
          />
        </div>
      </div>
    </section>

    <!-- Brands Bar -->
    <section class="bg-black py-8 lg:py-10">
      <div
        class="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-10"
      >
        <h3
          v-for="(c, index) in categories"
          :key="index"
          class="text-white font-serif text-2xl lg:text-4xl font-bold capitalize"
        >
          {{ c }}
        </h3>
      </div>
    </section>

    <!-- New Arrivals Section -->
    <section
      class="max-w-[1440px] mx-auto px-6 md:px-12 py-16 lg:py-20 border-b border-gray-200"
    >
      <h2
        class="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-black text-center mb-10 lg:mb-14 uppercase tracking-tighter"
      >
        New Arrivals
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <ProductCard
          v-for="product in products.slice(0, 4)"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="flex justify-center mt-10">
        <router-link
          to="/products"
          class="border border-gray-300 text-black font-medium text-sm py-3 px-16 rounded-full hover:bg-black hover:text-white transition-colors inline-block"
        >
          View All
        </router-link>
      </div>
    </section>

    <!-- Top Selling Section -->
    <section class="max-w-[1440px] mx-auto px-6 md:px-12 py-16 lg:py-20">
      <h2
        class="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-black text-center mb-10 lg:mb-14 uppercase tracking-tighter"
      >
        Top Selling
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <ProductCard
          v-for="product in products.slice(4, 8)"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="flex justify-center mt-10">
        <router-link
          to="/products"
          class="border border-gray-300 text-black font-medium text-sm py-3 px-16 rounded-full hover:bg-black hover:text-white transition-colors inline-block"
        >
          View All
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "HomeView",
  components: {
    ProductCard,
  },
  data() {
    return {
      limit: 8,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    categories() {
      return this.$store.state.categories;
    },
  },
  async created() {
    try {
      await this.$store.dispatch("fetchProducts", this.limit);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {},
};
</script>
