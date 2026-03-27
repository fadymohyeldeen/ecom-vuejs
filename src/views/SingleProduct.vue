<template>
  <div class="min-h-screen bg-white">
    <!-- Breadcrumb -->
    <div class="px-12 py-6 bg-section-bg text-sm text-text-secondary">
      <router-link to="/" class="hover:text-primary transition-colors"
        >Home</router-link
      >
      <span class="mx-2">/</span>
      <router-link to="/products" class="hover:text-primary transition-colors"
        >Products</router-link
      >
      <span class="mx-2">/</span>
      <span class="text-text-primary font-medium capitalize">{{
        product?.title
      }}</span>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center items-center py-32">
      <div
        class="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"
      ></div>
    </div>

    <!-- Product Detail -->
    <div v-else-if="product" class="px-12 py-10">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Image Section -->
        <div class="w-full lg:w-1/2">
          <div
            class="relative w-full pt-[100%] bg-[#F0F0F0] rounded-2xl overflow-hidden"
          >
            <img
              :src="validImage"
              :alt="product.title"
              @error="onImageError"
              class="absolute inset-0 w-full h-full object-contain p-8"
            />
          </div>
        </div>

        <!-- Info Section -->
        <div class="w-full lg:w-1/2 flex flex-col">
          <!-- Category -->
          <span class="text-xs text-gray-400 capitalize mb-2">{{
            product.category
          }}</span>

          <!-- Title -->
          <h1
            class="text-2xl sm:text-3xl font-bold text-black leading-snug capitalize mb-4"
          >
            {{ product.title }}
          </h1>

          <!-- Rating -->
          <div class="flex items-center gap-1.5 mb-4">
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
            <span class="text-xs text-gray-400"
              >({{ product.rating.count }} reviews)</span
            >
          </div>

          <!-- Price -->
          <div class="flex items-center gap-3 mb-6">
            <span class="text-3xl font-bold text-black"
              >${{ product.price }}</span
            >
            <span class="text-3xl font-bold text-gray-300 line-through"
              >${{ Math.round(product.price * 1.3) }}</span
            >
            <span
              class="text-xs font-bold text-[#FF3333] bg-[#FF3333]/10 px-3 py-1 rounded-full"
              >-30%</span
            >
          </div>

          <div class="w-full h-px bg-gray-100 mb-6"></div>

          <!-- Description -->
          <p class="text-sm text-text-secondary leading-relaxed mb-6">
            {{ product.description }}
          </p>

          <!-- Highlights -->
          <ul class="space-y-2 mb-8">
            <li class="flex items-center gap-2 text-sm text-text-secondary">
              <span
                class="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs"
                >✓</span
              >
              Free shipping on orders over $50
            </li>
            <li class="flex items-center gap-2 text-sm text-text-secondary">
              <span
                class="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs"
                >✓</span
              >
              30-day free returns
            </li>
            <li class="flex items-center gap-2 text-sm text-text-secondary">
              <span
                class="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs"
                >✓</span
              >
              2-year warranty included
            </li>
          </ul>

          <div class="w-full h-px bg-gray-100 mb-6"></div>

          <!-- Quantity & Actions -->
          <div class="flex items-center gap-4 mb-4">
            <!-- Quantity -->
            <div
              class="flex items-center border border-gray-200 rounded-full overflow-hidden"
            >
              <button
                @click="decreaseQty"
                class="w-10 h-10 flex items-center justify-center text-xl text-text-secondary hover:bg-gray-100 transition-colors"
              >
                −
              </button>
              <span class="w-10 text-center font-medium text-black">{{
                quantity
              }}</span>
              <button
                @click="increaseQty"
                class="w-10 h-10 flex items-center justify-center text-xl text-text-secondary hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>

            <!-- Add to Cart -->
            <button
              @click="addToCart"
              class="flex-1 bg-black text-white font-semibold py-3 rounded-full hover:bg-primary transition-colors"
            >
              Add to Cart
            </button>

            <!-- Buy Now -->
            <button
              @click="buyNow"
              class="flex-1 bg-primary text-white font-semibold py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="mt-20">
        <div class="border-b border-gray-100 mb-10">
          <h2 class="text-2xl font-bold text-black mb-1">Customer Reviews</h2>
          <p class="text-sm text-gray-400 mb-6">
            What our customers are saying
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Review Card 1 -->
          <div class="border border-gray-100 rounded-2xl p-6">
            <div class="flex items-center gap-1 text-[#FFC633] mb-3">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="text-sm text-text-secondary leading-relaxed mb-4">
              "Absolutely love this product! The quality exceeded my
              expectations and it arrived quickly. Would definitely recommend to
              anyone."
            </p>
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500"
              >
                J
              </div>
              <div>
                <p class="text-sm font-semibold text-black">James R.</p>
                <p class="text-xs text-gray-400">
                  Verified Buyer · 2 weeks ago
                </p>
              </div>
            </div>
          </div>

          <!-- Review Card 2 -->
          <div class="border border-gray-100 rounded-2xl p-6">
            <div class="flex items-center gap-1 text-[#FFC633] mb-3">
              <svg
                v-for="i in 4"
                :key="i"
                class="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-current text-gray-300"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="text-sm text-text-secondary leading-relaxed mb-4">
              "Great value for the price. Packaging was solid and the item
              matches the description perfectly. Minor delay in shipping but
              overall happy."
            </p>
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500"
              >
                S
              </div>
              <div>
                <p class="text-sm font-semibold text-black">Sara M.</p>
                <p class="text-xs text-gray-400">
                  Verified Buyer · 1 month ago
                </p>
              </div>
            </div>
          </div>

          <!-- Review Card 3 -->
          <div class="border border-gray-100 rounded-2xl p-6">
            <div class="flex items-center gap-1 text-[#FFC633] mb-3">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="text-sm text-text-secondary leading-relaxed mb-4">
              "This is my second purchase from this store. Consistent quality
              every time. The product feels premium and works exactly as
              described."
            </p>
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500"
              >
                A
              </div>
              <div>
                <p class="text-sm font-semibold text-black">Alex T.</p>
                <p class="text-xs text-gray-400">
                  Verified Buyer · 3 weeks ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Not Found -->
    <div
      v-else
      class="flex justify-center items-center py-32 text-text-secondary"
    >
      Product not found.
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "SingleProduct",
  data() {
    return {
      product: null,
      loading: true,
      quantity: 1,
    };
  },
  async created() {
    try {
      const { data } = await api.get(`/products/${this.$route.params.id}`);
      this.product = data;
    } catch (e) {
      this.product = null;
    } finally {
      this.loading = false;
    }
  },
  computed: {
    validImage() {
      const img = this.product?.image;
      if (!img)
        return "https://placehold.co/400x400/F0F0F0/AAAAAA?text=No+Image";
      return img;
    },
  },
  methods: {
    onImageError(e) {
      e.target.src = "https://placehold.co/400x400/F0F0F0/AAAAAA?text=No+Image";
    },
    increaseQty() {
      this.quantity++;
    },
    decreaseQty() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>
