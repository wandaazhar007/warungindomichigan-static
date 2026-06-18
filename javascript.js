/* =============================================
   WARUNG INDO MICHIGAN — javascript.js
   ============================================= */

'use strict';

// ─── CONFIG ───────────────────────────────────
const WA_NUMBER = '16264614963';   // ganti dengan nomor WA asli (tanpa +)
const WA_GROUP = 'https://chat.whatsapp.com/REPLACE_WITH_REAL_LINK'; // ganti dengan link grup
const FB_LINK = 'https://www.facebook.com/levi.chen.11503/reels/';

const API_BASE = 'https://api-warungindomichigan-2026.up.railway.app';
// const API_BASE = 'http://localhost:5016';

// ─── PRODUCT DATA (loaded from API) ───────────
let PRODUCT_DATA = null;

async function loadProductData() {
  try {
    const [catRes, firstPageRes] = await Promise.all([
      fetch(`${API_BASE}/api/categories`),
      fetch(`${API_BASE}/api/products?limit=100&page=1`)
    ]);

    if (!catRes.ok || !firstPageRes.ok) throw new Error('API error');

    const categories = await catRes.json();
    const firstPage = await firstPageRes.json();

    let allProducts = firstPage.data;
    const { totalPages } = firstPage.meta;

    if (totalPages > 1) {
      const pageRequests = [];
      for (let p = 2; p <= totalPages; p++) {
        pageRequests.push(fetch(`${API_BASE}/api/products?limit=100&page=${p}`));
      }
      const pageResponses = await Promise.all(pageRequests);
      for (const res of pageResponses) {
        if (!res.ok) throw new Error('API error on page fetch');
        const json = await res.json();
        allProducts = allProducts.concat(json.data);
      }
    }

    // Build category map keyed by slug (matches cat.id in internal format)
    const catMap = {};
    categories.forEach(cat => {
      catMap[cat.slug] = {
        id: cat.slug,
        name: cat.name,
        icon: cat.icon || '📦',
        items: []
      };
    });

    // Distribute products into their categories
    allProducts.forEach(product => {
      const slug = product.category && product.category.slug;
      if (slug && catMap[slug]) {
        const price = parseFloat(product.price);
        catMap[slug].items.push({
          name: product.name,
          price: `$${price.toFixed(2)}`
        });
      }
    });

    PRODUCT_DATA = {
      categories: Object.values(catMap).filter(c => c.items.length > 0)
    };
  } catch (err) {
    console.warn('API tidak tersedia, menggunakan data lokal.', err);
    const res = await fetch('./products.json');
    PRODUCT_DATA = await res.json();
  }
}

// ─── STATE ────────────────────────────────────
let activeCategory = 'all';
let searchQuery = '';
let searchTimer = null;

// ─── DOM REFS ─────────────────────────────────
const navbar = document.getElementById('navbar');
const pillsWrap = document.getElementById('category-pills');
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const resultsInfo = document.getElementById('results-info');
const scrollTopBtn = document.getElementById('scroll-top');

// ─── NAVBAR SCROLL ────────────────────────────
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── HERO CTA ─────────────────────────────────
document.getElementById('hero-cta')?.addEventListener('click', () => {
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
});

// ─── FADE-UP OBSERVER ─────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ─── SKELETON ─────────────────────────────────
function buildSkeletons(count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<div class="skeleton-card">
      <div class="skeleton skeleton-line w-30"></div>
      <div class="skeleton skeleton-line w-80"></div>
      <div class="skeleton skeleton-line w-60"></div>
      <div class="skeleton skeleton-line h-20 w-30"></div>
      <div class="skeleton skeleton-line h-30 w-100"></div>
    </div>`;
  }
  return html;
}

function showSkeletons(count) {
  productGrid.innerHTML = buildSkeletons(count || 12);
}

// ─── BUILD PILLS ──────────────────────────────
function buildCategoryPills() {
  const cats = PRODUCT_DATA.categories;
  const total = cats.reduce((a, c) => a + c.items.length, 0);

  let html = `<button class="cat-pill active" data-id="all" onclick="selectCategory('all')">
    <span class="pill-icon">🏪</span> Semua
    <span class="pill-count">${total}</span>
  </button>`;

  cats.forEach(cat => {
    html += `<button class="cat-pill" data-id="${cat.id}" onclick="selectCategory('${cat.id}')">
      <span class="pill-icon">${cat.icon}</span> ${cat.name}
      <span class="pill-count">${cat.items.length}</span>
    </button>`;
  });

  pillsWrap.innerHTML = html;
}

// ─── SELECT CATEGORY ──────────────────────────
window.selectCategory = function (id) {
  activeCategory = id;
  searchInput.value = '';
  searchQuery = '';

  pillsWrap.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.id === id);
  });

  showSkeletons(8);
  setTimeout(() => renderProducts(), 380);
};

// ─── LIVE SEARCH ──────────────────────────────
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchQuery = e.target.value.trim().toLowerCase();

  if (searchQuery) {
    activeCategory = 'all';
    pillsWrap.querySelectorAll('.cat-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.id === 'all');
    });
  }

  searchTimer = setTimeout(() => renderProducts(), 260);
});

// ─── RENDER ───────────────────────────────────
function renderProducts() {
  const cats = PRODUCT_DATA.categories;
  const matched = [];

  cats.forEach(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return;
    cat.items.forEach(item => {
      const hay = (item.name + ' ' + cat.name).toLowerCase();
      if (!searchQuery || hay.includes(searchQuery)) {
        matched.push({ ...item, catName: cat.name, catIcon: cat.icon });
      }
    });
  });

  // results info
  if (searchQuery) {
    resultsInfo.textContent = `${matched.length} produk ditemukan untuk "${searchInput.value.trim()}"`;
  } else if (activeCategory !== 'all') {
    const cat = cats.find(c => c.id === activeCategory);
    resultsInfo.textContent = `${matched.length} produk dalam kategori ${cat ? cat.name : ''}`;
  } else {
    resultsInfo.textContent = `Menampilkan ${matched.length} produk`;
  }

  if (matched.length === 0) {
    productGrid.innerHTML = `<div class="no-results">
      <div class="nr-icon">🔍</div>
      <h3>Produk tidak ditemukan</h3>
      <p>Coba kata kunci lain atau pilih kategori berbeda.</p>
    </div>`;
    return;
  }


  productGrid.innerHTML = matched.map(item => {
    const qty = getCartQty(item.name);
    return `<div class="product-card" data-product-name="${item.name.replace(/"/g, '&quot;')}" data-price="${item.price}" data-cat-name="${item.catName}" data-cat-icon="${item.catIcon}">
      <div class="product-cat-tag">${item.catIcon} ${item.catName}</div>
      <div class="product-name">${highlight(item.name, searchQuery)}</div>
      <div class="product-price">${item.price}</div>
      <div class="card-btn-wrap">${buildCardBtn(item.name, item.price, item.catName, item.catIcon, qty)}</div>
    </div>`;
  }).join('');

  // stagger fade-in
  requestAnimationFrame(() => {
    productGrid.querySelectorAll('.product-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(14px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 22);
    });
  });
}

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:#FFF5CC;color:#00274C;border-radius:2px;padding:0 2px;">$1</mark>');
}

// ─── WA / FB HELPERS ──────────────────────────
window.openWAOrder = function () {
  const msg = encodeURIComponent('Halo Warung Indo Michigan! 🙏 Saya ingin melihat daftar produk yang tersedia. Terima kasih!');
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank', 'noopener');
};

window.joinWAGroup = function () {
  window.open(WA_GROUP, '_blank', 'noopener');
};

window.openFacebook = function () {
  window.open(FB_LINK, '_blank', 'noopener');
};

// ═══════════════════════════════════════════════
// CART SYSTEM
// ═══════════════════════════════════════════════
const CART_KEY = 'wim_cart_v1';

// Load cart from localStorage (persists across refresh)
let cart = [];
try {
  const saved = localStorage.getItem(CART_KEY);
  if (saved) cart = JSON.parse(saved);
} catch (e) { cart = []; }

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { }
}

function getCartItem(name) {
  return cart.find(i => i.name === name) || null;
}

function getCartQty(name) {
  const item = getCartItem(name);
  return item ? item.qty : 0;
}

function addToCart(name, price, catName, catIcon) {
  const existing = getCartItem(name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, catName, catIcon, qty: 1 });
  }
  saveCart();
  updateCartUI();
  bumpBadge();
  renderCardButton(name);
}

function decreaseFromCart(name) {
  const existing = getCartItem(name);
  if (!existing) return;
  existing.qty--;
  if (existing.qty <= 0) cart = cart.filter(i => i.name !== name);
  saveCart();
  updateCartUI();
  renderCardButton(name);
}

function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  saveCart();
  updateCartUI();
  renderCardButton(name);
}

// ─── TOTAL ────────────────────────────────────
function getCartTotal() {
  return cart.reduce((sum, item) => {
    const num = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return sum + num * item.qty;
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ─── BADGE ────────────────────────────────────
function bumpBadge() {
  const badge = document.getElementById('nav-cart-badge');
  if (!badge) return;
  badge.classList.remove('bump');
  // Force reflow
  void badge.offsetWidth;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 280);
}

// ─── UPDATE ALL UI ────────────────────────────
function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();

  // Badge
  const badge = document.getElementById('nav-cart-badge');
  if (badge) badge.textContent = count;

  // Header count
  const headerCount = document.getElementById('cart-header-count');
  if (headerCount) headerCount.textContent = `${count} item`;

  // Total
  const totalEl = document.getElementById('cart-total-value');
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  // Checkout btn disabled state
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

  // Render cart items list
  renderCartItems();
}

// ─── RENDER CART ITEMS ────────────────────────
function renderCartItems() {
  const body = document.getElementById('cart-body');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Keranjang masih kosong</h3>
        <p>Yuk tambahkan produk Indonesia favoritmu!</p>
        <button class="cart-empty-btn" onclick="goToProducts()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          Cari Produk
        </button>
      </div>`;
    return;
  }

  body.innerHTML = cart.map(item => {
    const subtotal = (parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.qty).toFixed(2);
    return `
      <div class="cart-item">
        <div class="cart-item-icon">${item.catIcon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-cat">${item.catName}</div>
          <div class="cart-item-price">${item.price} × ${item.qty} = <span class="cart-item-subtotal">$${subtotal}</span></div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="cartDecrease('${escQ(item.name)}')" aria-label="Kurangi">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="cartIncrease('${escQ(item.name)}')" aria-label="Tambah">+</button>
        </div>
      </div>`;
  }).join('');
}

function escQ(s) { return s.replace(/'/g, "\\'"); }

// expose for inline onclick in cart
window.cartIncrease = function (name) {
  const item = getCartItem(name);
  if (item) { item.qty++; saveCart(); updateCartUI(); renderCardButton(name); bumpBadge(); }
};

window.cartDecrease = function (name) {
  decreaseFromCart(name);
};

// ─── RE-RENDER ONE CARD BUTTON ────────────────
// After qty change, find all cards matching name and swap button
function renderCardButton(name) {
  const qty = getCartQty(name);
  document.querySelectorAll('.product-card').forEach(card => {
    if (card.dataset.productName !== name) return;
    const btnWrap = card.querySelector('.card-btn-wrap');
    if (!btnWrap) return;
    btnWrap.innerHTML = buildCardBtn(name, card.dataset.price, card.dataset.catName, card.dataset.catIcon, qty);
  });
}

function buildCardBtn(name, price, catName, catIcon, qty) {
  const cartIcon = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
  const safeN = escQ(name), safeP = escQ(price), safeCat = escQ(catName), safeIcon = escQ(catIcon);

  if (qty === 0) {
    return `<button class="btn-add-cart" onclick="addToCart('${safeN}','${safeP}','${safeCat}','${safeIcon}')">
              ${cartIcon} Tambah ke Keranjang
            </button>`;
  }
  return `<div class="qty-control">
            <button class="qty-btn" onclick="decreaseFromCart('${safeN}')" aria-label="Kurangi">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="addToCart('${safeN}','${safeP}','${safeCat}','${safeIcon}')" aria-label="Tambah">+</button>
          </div>`;
}

// ─── DRAWER OPEN / CLOSE ──────────────────────
window.openCart = function () {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  updateCartUI();
};

window.closeCart = function () {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('active');
  document.body.style.overflow = '';
};

// ─── CLEAR CART — custom modal ────────────────
window.clearCart = function () {
  if (cart.length === 0) return;
  openConfirmModal();
};

window.openConfirmModal = function () {
  const overlay = document.getElementById('confirm-overlay');
  if (!overlay) return;
  overlay.style.display = 'flex';
  // force reflow so transition fires
  void overlay.offsetWidth;
  overlay.classList.add('active');
};

window.closeConfirmModal = function () {
  const overlay = document.getElementById('confirm-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  // wait for fade-out transition then hide
  setTimeout(() => { overlay.style.display = 'none'; }, 240);
};

window.confirmClearCart = function () {
  closeConfirmModal();
  setTimeout(() => {
    cart = [];
    saveCart();
    updateCartUI();
    renderProducts(); // reset all card buttons to "Tambah"
  }, 120);
};

// ─── GO TO PRODUCTS (from empty cart) ────────
window.goToProducts = function () {
  closeCart();
  setTimeout(() => {
    const section = document.getElementById('products');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 320); // wait for drawer close animation
};

// ─── CHECKOUT VIA WHATSAPP ───────────────────
window.checkoutViaWA = function () {
  if (cart.length === 0) return;
  const total = getCartTotal();
  const totalCount = getCartCount();

  const lines = cart.map((item, i) => {
    const subtotal = (parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.qty).toFixed(2);
    return `${i + 1}. ${item.name}\n   ${item.price} × ${item.qty} = $${subtotal}`;
  }).join('\n');

  const msg =
    `Halo Warung Indo Michigan! 🙏

Saya ingin memesan produk berikut:

━━━━━━━━━━━━━━━━━━━━
🛒 *PESANAN SAYA*
━━━━━━━━━━━━━━━━━━━━
${lines}
━━━━━━━━━━━━━━━━━━━━
📦 Total Item : ${totalCount} item
💰 Total Harga: *$${total.toFixed(2)}*
━━━━━━━━━━━━━━━━━━━━

Mohon konfirmasi ketersediaan stok dan info pengiriman. Terima kasih! 🙏`;

  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
};

// ─── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  showSkeletons(12);
  updateCartUI(); // restore badge from localStorage on page load

  await loadProductData();

  buildCategoryPills();
  renderProducts();

  // Close cart/modal on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const confirmActive = document.getElementById('confirm-overlay')?.classList.contains('active');
      if (confirmActive) { closeConfirmModal(); return; }
      window.closeCart();
    }
  });
});
