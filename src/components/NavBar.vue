<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <router-link to="/">VueShop</router-link>
    </div>
    <div class="navbar__links">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
    </div>
    <div class="navbar__search">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="Search..." />
    </div>
    <div class="navbar__actions">
      <router-link to="/cart" class="cart-btn">
        <span>🛒</span>
        <span class="cart-count">0</span>
      </router-link>
      <router-link to="/login" class="btn-login">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  height: 64px;
  background-color: #e5e5e5;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Logo */
.navbar__logo a {
  font-size: 1.3rem;
  font-weight: 700;
  color: #111111;
  text-decoration: none;
  letter-spacing: -0.5px;
}

.navbar__logo a span {
  color: #6c63ff;
}

/* Links */
.navbar__links {
  display: flex;
  gap: 32px;
}

.navbar__links a {
  color: #555555;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

.navbar__links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #6c63ff;
  transition: width 0.2s;
}

.navbar__links a:hover::after,
.navbar__links a.router-link-exact-active::after {
  width: 100%;
}

.navbar__links a:hover,
.navbar__links a.router-link-exact-active {
  color: #111111;
}

/* Search */
.navbar__search {
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 24px;
  padding: 8px 16px;
  gap: 8px;
  width: 240px;
  transition: box-shadow 0.2s;
}

.navbar__search:focus-within {
  box-shadow: 0 0 0 2px #6c63ff40;
}

.search-icon {
  font-size: 0.85rem;
}

.navbar__search input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.88rem;
  color: #111111;
  width: 100%;
}

.navbar__search input::placeholder {
  color: #aaaaaa;
}

/* Actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cart-btn {
  position: relative;
  text-decoration: none;
  font-size: 1.2rem;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: #6c63ff;
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 700;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-login {
  background-color: #6c63ff;
  color: #ffffff !important;
  padding: 8px 22px;
  border-radius: 24px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.1s;
}

.btn-login:hover {
  background-color: #5a52d5;
  transform: translateY(-1px);
}
</style>
