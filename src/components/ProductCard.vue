<template>
  <div class="product-card">
    <div class="product-card__image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="product-card__body">
      <span class="product-card__category">{{ product.category }}</span>
      <h3 class="product-card__title">{{ product.title }}</h3>
      <div class="product-card__footer">
        <span class="product-card__price">${{ product.price }}</span>
        <button class="product-card__btn">Add to Cart</button>
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

<style scoped>
.product-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.product-card__image {
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  height: 200px;
}

.product-card__image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.product-card__body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
}

.product-card__category {
  font-size: 0.72rem;
  font-weight: 600;
  color: #6c63ff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-card__title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #111111;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.product-card__price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111111;
}

.product-card__btn {
  background-color: #6c63ff;
  color: #ffffff;
  border: none;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.product-card__btn:hover {
  background-color: #5a52d5;
  transform: translateY(-1px);
}
</style>
