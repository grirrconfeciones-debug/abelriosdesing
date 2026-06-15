import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyByOA9ljORBHe7SsjQtFgfx6a-4ZJL1bXs",
  authDomain: "abel-vectores.firebaseapp.com",
  projectId: "abel-vectores",
  storageBucket: "abel-vectores.firebasestorage.app",
  messagingSenderId: "278953902562",
  appId: "1:278953902562:web:e141d82507a2776f7039bb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const WHATSAPP_NUMBER = "51982296407";

let VECTORS_DATA = [];
const state = {
  currentCategory: 'all',
  currentType: 'all',
  searchQuery: '',
  adminSearch: '',
  adminCategory: 'all'
};

const urlParams = new URLSearchParams(window.location.search);
const isSecretKeyPresent = urlParams.get('admin') === 'abel123';

const loginSection = document.getElementById('loginSection');
const adminPanel = document.getElementById('adminPanel');
const catalogSection = document.getElementById('catalogo');

const typeSelect = document.getElementById('type');
const downloadUrlGroup = document.getElementById('downloadUrlGroup');
const downloadUrlInput = document.getElementById('downloadUrl');

function toggleDownloadField() {
  if (!typeSelect || !downloadUrlGroup || !downloadUrlInput) return;

  if (typeSelect.value === 'gratis') {
    downloadUrlGroup.style.display = 'flex';
    downloadUrlInput.required = true;
  } else {
    downloadUrlGroup.style.display = 'none';
    downloadUrlInput.required = false;
    downloadUrlInput.value = '';
  }
}

if (typeSelect) {
  typeSelect.addEventListener('change', toggleDownloadField);
  toggleDownloadField();
}

function showLoginSection() {
  if (loginSection) loginSection.style.display = 'flex';
  if (adminPanel) adminPanel.style.display = 'none';
  if (catalogSection) catalogSection.style.display = 'none';
}

function showAdminPanel() {
  if (loginSection) loginSection.style.display = 'none';
  if (adminPanel) adminPanel.style.display = 'block';
  if (catalogSection) catalogSection.style.display = 'none';
  renderAdminList();
}

function showCatalog() {
  if (loginSection) loginSection.style.display = 'none';
  if (adminPanel) adminPanel.style.display = 'none';
  if (catalogSection) catalogSection.style.display = 'block';
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    showAdminPanel();
  } else if (isSecretKeyPresent) {
    showLoginSection();
  } else {
    showCatalog();
  }
});

const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const passwordToggle = document.getElementById('passwordToggle');

if (passwordToggle) {
  passwordToggle.addEventListener('click', () => {
    const passInput = document.getElementById('adminPass');
    const icon = passwordToggle.querySelector('i');

    if (passInput.type === 'password') {
      passInput.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passInput.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const pass = document.getElementById('adminPass').value;

    try {
      loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
      loginBtn.disabled = true;

      await signInWithEmailAndPassword(auth, email, pass);
      location.reload();
    } catch (e) {
      alert("Acceso denegado. Credenciales incorrectas.");
      loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Entrar';
      loginBtn.disabled = false;
    }
  });
}

document.getElementById('logoutBtn')?.addEventListener('click', () => {
  signOut(auth).then(() => {
    location.href = "/";
  });
});

function showEmptyState(containerId, message = 'No hay diseños disponibles aún') {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-inbox"></i>
        <p>${message}</p>
      </div>
    `;
  }
}

function updateDesignCount() {
  const countEl = document.getElementById('designCount');
  if (countEl) {
    countEl.textContent = `${VECTORS_DATA.length} diseño${VECTORS_DATA.length !== 1 ? 's' : ''}`;
  }
}

function typeLabel(type) {
  return type === 'compra' ? 'Compra' : 'Gratis';
}

function openVectorAction(vector) {
  const type = (vector.type || 'gratis').toLowerCase();

  if (type === 'gratis') {
    if (vector.downloadUrl) {
      window.open(vector.downloadUrl, '_blank');
    } else {
      alert("Este diseño gratis no tiene enlace de descarga.");
    }
    return;
  }

  const message = encodeURIComponent(`Hola, quiero comprar este diseño: ${vector.title}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

async function fetchVectores() {
  try {
    const querySnapshot = await getDocs(collection(db, "vectores"));
    VECTORS_DATA = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));

    renderCatalog();
    renderAdminList();
    updateDesignCount();

    console.log('✅ Datos cargados:', VECTORS_DATA.length, 'diseños');
  } catch (error) {
    console.error("Error fetching vectores:", error);
    showEmptyState('catalogGrid');
    showEmptyState('adminListGrid');
  }
}

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = VECTORS_DATA.filter(v => {
    const cat = (v.category || '').toLowerCase();
    const title = (v.title || '').toLowerCase();
    const type = (v.type || 'gratis').toLowerCase();

    const matchCat = state.currentCategory === 'all' || cat === state.currentCategory;
    const matchType = state.currentType === 'all' || type === state.currentType;
    const matchSearch = title.includes(state.searchQuery.toLowerCase());

    return matchCat && matchType && matchSearch;
  });

  if (filtered.length === 0) {
    showEmptyState('catalogGrid', 'No se encontraron diseños');
    return;
  }

  filtered.forEach(v => {
    const type = (v.type || 'gratis').toLowerCase();
    const isFree = type === 'gratis';

    const card = document.createElement('article');
    card.className = 'vector-card';
    card.innerHTML = `
      <img src="${v.image}" alt="${v.title}" loading="lazy">
      <div class="vector-card-content">
        <span class="vector-badge ${isFree ? 'badge-free' : 'badge-buy'}">
          ${typeLabel(type)}
        </span>
        <h3>${v.title}</h3>
        <p>${isFree ? 'Gratis' : `S/. ${parseFloat(v.price || 0).toFixed(2)}`}</p>
        <button type="button" class="detail-btn">
          <i class="fas ${isFree ? 'fa-download' : 'fa-cart-shopping'}"></i>
          ${isFree ? 'Descargar gratis' : 'Comprar por WhatsApp'}
        </button>
      </div>
    `;

    card.querySelector('.detail-btn').addEventListener('click', () => openVectorAction(v));
    grid.appendChild(card);
  });
}

function renderAdminList() {
  const grid = document.getElementById('adminListGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = VECTORS_DATA.filter(v => {
    const cat = (v.category || '').toLowerCase();
    const title = (v.title || '').toLowerCase();

    const matchCat = state.adminCategory === 'all' || cat === state.adminCategory;
    const matchSearch = title.includes(state.adminSearch.toLowerCase());

    return matchCat && matchSearch;
  });

  console.log('📋 Renderizando lista admin:', filtered.length, 'diseños');

  if (filtered.length === 0) {
    showEmptyState('adminListGrid', 'No hay diseños en el panel');
    return;
  }

  filtered.forEach(v => {
    const type = (v.type || 'gratis').toLowerCase();

    const item = document.createElement('div');
    item.className = 'admin-list-item';
    item.innerHTML = `
      <img src="${v.image}" alt="${v.title}" class="admin-list-img">
      <div class="admin-list-info">
        <span class="admin-list-title">${v.title}</span>
        <span class="admin-list-category">${v.category || 'Sin categoría'}</span>
        <span class="vector-badge ${type === 'compra' ? 'badge-buy' : 'badge-free'}">${typeLabel(type)}</span>
      </div>
      <div class="admin-list-price">
        ${type === 'gratis' ? 'Gratis' : `S/. ${parseFloat(v.price || 0).toFixed(2)}`}
      </div>
      <div class="admin-list-actions">
        <button class="admin-action-btn edit" onclick="window.editVector('${v.id}')">
          <i class="fas fa-edit"></i> Editar
        </button>
        <button class="admin-action-btn delete" onclick="window.deleteVector('${v.id}')">
          <i class="fas fa-trash"></i> Eliminar
        </button>
      </div>
    `;
    grid.appendChild(item);
  });
}

const uploadForm = document.getElementById('uploadForm');

if (uploadForm) {
  uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const nuevo = {
      title: document.getElementById('title').value.trim(),
      price: Number(document.getElementById('price').value || 0),
      type,
      category: document.getElementById('category').value,
      image: document.getElementById('image').value.trim(),
      longDescription: document.getElementById('longDescription').value.trim(),
      createdAt: new Date().toISOString(),
      downloadUrl: type === 'gratis'
        ? document.getElementById('downloadUrl').value.trim()
        : ''
    };

    try {
      const uploadBtn = e.target.querySelector('button[type="submit"]');
      uploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subiendo...';
      uploadBtn.disabled = true;

      await addDoc(collection(db, "vectores"), nuevo);

      alert("✅ Diseño subido correctamente!");
      e.target.reset();
      toggleDownloadField();
      fetchVectores();

      uploadBtn.innerHTML = '<i class="fas fa-upload"></i> Subir Diseño';
      uploadBtn.disabled = false;
    } catch (error) {
      console.error("Error uploading:", error);
      alert("❌ Error al subir el diseño");

      const uploadBtn = e.target.querySelector('button[type="submit"]');
      uploadBtn.innerHTML = '<i class="fas fa-upload"></i> Subir Diseño';
      uploadBtn.disabled = false;
    }
  });
}

window.editVector = async function (id) {
  const vector = VECTORS_DATA.find(v => v.id === id);
  if (!vector) return;

  const title = prompt("Editar nombre:", vector.title);
  if (!title) return;

  const price = prompt("Editar precio:", vector.price);
  if (!price) return;

  const type = prompt("Editar tipo (gratis/compra):", vector.type || 'gratis');
  if (!type) return;

  const category = prompt("Editar categoría (futbol/esports/motocross):", vector.category);
  if (!category) return;

  const image = prompt("Editar URL de imagen:", vector.image);
  if (!image) return;

  const description = prompt("Editar descripción:", vector.longDescription || "");
  const downloadUrl = type.toLowerCase() === 'gratis'
    ? prompt("Editar URL de descarga:", vector.downloadUrl || "")
    : "";

  try {
    await updateDoc(doc(db, "vectores", id), {
      title: title.trim(),
      price: Number(price || 0),
      type: type.toLowerCase(),
      category: category.trim().toLowerCase(),
      image: image.trim(),
      longDescription: (description || '').trim(),
      downloadUrl: downloadUrl ? downloadUrl.trim() : ''
    });

    alert("✅ Diseño actualizado correctamente!");
    fetchVectores();
  } catch (error) {
    console.error("Error updating:", error);
    alert("❌ Error al actualizar el diseño");
  }
};

window.deleteVector = async function (id) {
  const vector = VECTORS_DATA.find(v => v.id === id);
  if (!vector) return;

  const confirmDelete = confirm(`⚠️ ¿Eliminar "${vector.title}"? Esta acción no se puede revertir.`);
  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "vectores", id));
    alert("✅ Diseño eliminado correctamente!");
    fetchVectores();
  } catch (error) {
    console.error("Error deleting:", error);
    alert("❌ Error al eliminar el diseño");
  }
};

const publicFilter = document.getElementById('publicFilter');
const publicTypeFilter = document.getElementById('publicTypeFilter');
const publicSearch = document.getElementById('publicSearch');

if (publicFilter) {
  publicFilter.addEventListener('change', (e) => {
    state.currentCategory = e.target.value;
    renderCatalog();
  });
}

if (publicTypeFilter) {
  publicTypeFilter.addEventListener('change', (e) => {
    state.currentType = e.target.value;
    renderCatalog();
  });
}

if (publicSearch) {
  publicSearch.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    renderCatalog();
  });
}

const adminFilter = document.getElementById('adminFilter');
const adminSearch = document.getElementById('adminSearch');

if (adminFilter) {
  adminFilter.addEventListener('change', (e) => {
    state.adminCategory = e.target.value;
    renderAdminList();
  });
}

if (adminSearch) {
  adminSearch.addEventListener('input', (e) => {
    state.adminSearch = e.target.value.trim();
    renderAdminList();
  });
}

window.openModal = function (id) {
  const vector = VECTORS_DATA.find(v => v.id === id);
  if (!vector) return;

  const type = (vector.type || 'gratis').toLowerCase();

  document.getElementById('modalTitle').textContent = vector.title;
  document.getElementById('modalImg').src = vector.image;
  document.getElementById('modalDescription').textContent = vector.longDescription || 'Sin descripción disponible';
  document.getElementById('modalPrice').textContent = type === 'gratis' ? 'Gratis' : `S/. ${parseFloat(vector.price || 0).toFixed(2)}`;
  const modalType = document.getElementById('modalType');
  if (modalType) modalType.textContent = typeLabel(type);

  document.getElementById('detailModal').style.display = 'flex';
};

document.getElementById('modalClose')?.addEventListener('click', () => {
  document.getElementById('detailModal').style.display = 'none';
});

document.getElementById('detailModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'detailModal') {
    e.target.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('detailModal').style.display = 'none';
  }
});

console.log('🚀 Iniciando Abel Vectores...');
console.log('🔑 Secret key presente:', isSecretKeyPresent);
fetchVectores();

if (!document.querySelector('.fa-spin')) {
  const style = document.createElement('style');
  style.textContent = `
    .fa-spin {
      animation: fa-spin 2s infinite linear;
    }
    @keyframes fa-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

console.log('✅ Abel Vectores app.js loaded successfully');