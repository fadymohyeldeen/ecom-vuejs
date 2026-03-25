<template>
  <div class="home">
    <section class="hero">
      <div class="hero__content">
        <h1>Discover Your <span>Style</span></h1>
        <p>
          Shop the latest trends with the best prices, delivered to your door.
        </p>
        <router-link to="/products" class="btn-cta">Shop Now</router-link>
      </div>
    </section>

    <section class="featured">
      <div class="featured__header">
        <h2>Featured Products</h2>
        <router-link to="/products">View all →</router-link>
      </div>
      <div class="featured__grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 420px;
  background: linear-gradient(135deg, #f5f5ff 0%, #ffffff 100%);
  text-align: center;
  padding: 0 24px;
}

.hero__content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: #111111;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.hero__content h1 span {
  color: #6c63ff;
}

.hero__content p {
  font-size: 1.1rem;
  color: #666666;
  margin-bottom: 32px;
}

.btn-cta {
  background-color: #6c63ff;
  color: #ffffff;
  padding: 14px 36px;
  border-radius: 32px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.1s;
  display: inline-block;
}

.btn-cta:hover {
  background-color: #5a52d5;
  transform: translateY(-2px);
}

.featured {
  padding: 64px 48px;
  background-color: #fafafa;
}

.featured__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.featured__header h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111111;
}

.featured__header a {
  color: #6c63ff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.featured__header a:hover {
  text-decoration: underline;
}

.featured__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
}
</style>

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
    const { data } = await api.get("/products?limit=18");
    this.products = data;
  },
};
</script>
