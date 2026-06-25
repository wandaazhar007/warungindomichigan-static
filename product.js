'use strict';

const API_BASE = 'https://api-warungindomichigan-2026.up.railway.app';
const WA_NUMBER = '16264614963';
const CART_KEY  = 'wim_cart_v1';

// ─── CART (shared localStorage dengan halaman utama) ───────────
let cart = [];
try {
  const saved = localStorage.getItem(CART_KEY);
  if (saved) cart = JSON.parse(saved);
} catch (e) { cart = []; }

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}

function getCartItem(name) { return cart.find(i => i.name === name) || null; }
function getCartQty(name)  { const i = getCartItem(name); return i ? i.qty : 0; }
function getCartCount()    { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartBadge() {
  const badge = document.getElementById('nav-cart-badge');
  if (badge) badge.textContent = getCartCount();
}

// ─── HELPERS ──────────────────────────────────────────────────
function fmt(price) {
  return `$${parseFloat(price).toFixed(2)}`;
}

function getSlug() {
  return new URLSearchParams(window.location.search).get('slug');
}

function escAttr(s) {
  return s.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ─── STOCK BADGE ──────────────────────────────────────────────
function stockBadge(stock, minStock) {
  if (stock === 0)         return `<span class="pd-stock pd-stock--out">✕ Out of Stock</span>`;
  if (stock <= minStock)   return `<span class="pd-stock pd-stock--low">⚠ Low Stock (${stock})</span>`;
  return                          `<span class="pd-stock pd-stock--ok">✓ In Stock (${stock})</span>`;
}

// ─── BUILD ACTION BUTTON ──────────────────────────────────────
function buildActionBtn(product, qty) {
  if ((product.stock ?? 0) === 0) {
    return `<button class="pd-add-btn" disabled>Out of Stock</button>`;
  }
  if (qty === 0) {
    return `<button class="pd-add-btn" id="pd-add-btn" onclick="pdAddToCart()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      Add to Cart
    </button>`;
  }
  return `<div class="pd-qty-control">
    <button class="qty-btn" onclick="pdDecrease()" aria-label="Decrease">−</button>
    <span class="qty-num">${qty}</span>
    <button class="qty-btn" onclick="pdIncrease()" aria-label="Increase">+</button>
  </div>`;
}

// ─── RENDER PRODUCT ───────────────────────────────────────────
let currentProduct = null;

function renderProduct(p) {
  currentProduct = p;

  const images = p.images || [];
  const primaryImg = images.find(i => i.isPrimary) || images[0] || null;

  const mainImgHtml = primaryImg
    ? `<img src="${primaryImg.url}" alt="${escAttr(p.name)}" class="pd-main-img" id="pd-main-img" onerror="this.parentNode.innerHTML='<div class=\\'pd-img-placeholder\\'>📦</div>'">`
    : `<div class="pd-img-placeholder">📦</div>`;

  const thumbsHtml = images.length > 1
    ? `<div class="pd-thumbs">${images.map(img =>
        `<button class="pd-thumb${img.isPrimary ? ' active' : ''}" onclick="switchImg('${escAttr(img.url)}', this)" aria-label="Lihat gambar">
          <img src="${escAttr(img.url)}" alt="${escAttr(img.altText || p.name)}" loading="lazy">
        </button>`
      ).join('')}</div>`
    : '';

  const priceHtml = p.comparePrice
    ? `<span class="pd-price">${fmt(p.price)}</span><span class="pd-compare">${fmt(p.comparePrice)}</span>`
    : `<span class="pd-price">${fmt(p.price)}</span>`;

  const tagsHtml = p.tags && p.tags.length
    ? `<div class="pd-tags">${p.tags.map(t => `<span class="pd-tag">${t}</span>`).join('')}</div>`
    : '';

  let metaRows = '';
  if (p.unit)        metaRows += `<div class="pd-meta-row"><span>Unit</span><span>${p.unit}</span></div>`;
  if (p.weightGrams) metaRows += `<div class="pd-meta-row"><span>Weight</span><span>${p.weightGrams} g</span></div>`;
  if (p.sku)         metaRows += `<div class="pd-meta-row"><span>SKU</span><span>${p.sku}</span></div>`;
  const metaHtml = metaRows ? `<div class="pd-meta">${metaRows}</div>` : '';

  const catIcon = p.category?.icon || '📦';
  const catName = p.category?.name || '';
  const qty = getCartQty(p.name);

  document.getElementById('pd-content').innerHTML = `
    <div class="pd-layout">
      <div class="pd-image-col">
        <div class="pd-image-wrap">${mainImgHtml}</div>
        ${thumbsHtml}
      </div>
      <div class="pd-info-col">
        <div class="pd-cat-tag">${catIcon} ${catName}</div>
        <h1 class="pd-name">${p.name}</h1>
        <div class="pd-price-row">${priceHtml}</div>
        ${stockBadge(p.stock ?? 0, p.minStock ?? 5)}
        ${p.description ? `<p class="pd-desc">${p.description}</p>` : ''}
        ${tagsHtml}
        ${metaHtml}
        <div id="pd-actions">${buildActionBtn(p, qty)}</div>
      </div>
    </div>
  `;

  document.title = `${p.name} — Warung Indo Michigan`;
}

// ─── CART ACTIONS ─────────────────────────────────────────────
window.pdAddToCart = function () {
  if (!currentProduct) return;
  const p = currentProduct;
  const existing = getCartItem(p.name);
  if (existing) {
    existing.qty++;
  } else {
    const images = p.images || [];
    const primaryImg = images.find(i => i.isPrimary) || images[0] || null;
    cart.push({
      name: p.name,
      price: fmt(p.price),
      catName: p.category?.name || '',
      catIcon: p.category?.icon || '📦',
      imageUrl: primaryImg?.url || null,
      qty: 1
    });
  }
  saveCart();
  updateCartBadge();
  refreshActions();
  showToast('Added to cart! 🛒');
};

window.pdIncrease = function () {
  if (!currentProduct) return;
  const existing = getCartItem(currentProduct.name);
  if (existing) { existing.qty++; saveCart(); updateCartBadge(); refreshActions(); }
};

window.pdDecrease = function () {
  if (!currentProduct) return;
  const existing = getCartItem(currentProduct.name);
  if (!existing) return;
  existing.qty--;
  if (existing.qty <= 0) cart = cart.filter(i => i.name !== currentProduct.name);
  saveCart();
  updateCartBadge();
  refreshActions();
};

function refreshActions() {
  const el = document.getElementById('pd-actions');
  if (el && currentProduct) el.innerHTML = buildActionBtn(currentProduct, getCartQty(currentProduct.name));
}

// ─── WA ORDER ─────────────────────────────────────────────────
window.orderViaWA = function () {
  if (!currentProduct) return;
  const msg = encodeURIComponent(
    `Hi Warung Indo Michigan! 🙏\n\nI'd like to order:\n*${currentProduct.name}* — ${fmt(currentProduct.price)}\n\nPlease confirm stock availability and delivery details. Thank you! 🙏`
  );
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank', 'noopener');
};

// ─── IMAGE SWITCH ─────────────────────────────────────────────
window.switchImg = function (url, btn) {
  const main = document.getElementById('pd-main-img');
  if (main) main.src = url;
  document.querySelectorAll('.pd-thumb').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

// ─── TOAST ────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('pd-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── SKELETON ─────────────────────────────────────────────────
function showSkeleton() {
  document.getElementById('pd-content').innerHTML = `
    <div class="pd-layout">
      <div class="pd-image-col">
        <div class="skeleton-block"></div>
      </div>
      <div class="pd-info-col" style="gap:14px">
        <div class="skeleton skeleton-line w-30" style="height:14px"></div>
        <div class="skeleton skeleton-line w-80" style="height:30px"></div>
        <div class="skeleton skeleton-line w-30" style="height:26px"></div>
        <div class="skeleton skeleton-line w-40" style="height:24px;border-radius:99px"></div>
        <div class="skeleton skeleton-line w-100" style="height:12px"></div>
        <div class="skeleton skeleton-line w-90" style="height:12px"></div>
        <div class="skeleton skeleton-line w-70" style="height:12px"></div>
        <div class="skeleton skeleton-line w-100" style="height:52px;border-radius:99px;margin-top:8px"></div>
      </div>
    </div>`;
}

// ─── ERROR ────────────────────────────────────────────────────
function showError(msg) {
  document.getElementById('pd-content').innerHTML = `
    <div class="pd-error">
      <div class="pd-error-icon">😕</div>
      <h2>${msg}</h2>
      <a href="index.html" class="pd-back-btn">← Back to Catalog</a>
    </div>`;
}

// ─── NAVBAR SCROLL ────────────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ─── INIT ─────────────────────────────────────────────────────
async function loadProduct() {
  const slug = getSlug();
  if (!slug) { window.location.href = 'index.html'; return; }

  showSkeleton();

  try {
    const res = await fetch(`${API_BASE}/api/products/${slug}`);
    if (res.status === 404) { showError('Product not found.'); return; }
    if (!res.ok) throw new Error('API error');
    const product = await res.json();
    renderProduct(product);
  } catch (err) {
    showError('Failed to load product. Please check your internet connection.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  loadProduct();
});
