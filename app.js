/**
 * Abel Vectores - Tienda de Diseños Deportivos para Sublimación (CorelDRAW)
 * Senior Developer Quality JavaScript
 */

// 1. DATASET DE VECTORES DE POLOS DEPORTIVOS (10 Diseños Listos para Sublimar)
const VECTORS_DATA = [
  {
    id: "POL-001",
    title: "Camiseta de Fútbol 'Fénix'",
    category: "futbol",
    price: 20.00,
    image: "images/vector1.svg",
    formats: ["CDR", "PDF", "EPS"],
    nodes: 342,
    description: "Diseño dinámico de llamas y degradados de fuego. Patrón a escala real listo para sublimación textil.",
    longDescription: "Diseño premium para camisetas de fútbol con temática de fuego y degradados agresivos (rojo, naranja, amarillo). El archivo CorelDRAW incluye moldes a escala 1:1 (delantero, espalda, mangas y cuello) listos para arrastrar tus logos, auspiciadores e imprimir en plotter de sublimación en perfil CMYK.",
    details: {
      usabilidad: "Sublimación Textil, Confección Deportiva",
      tallas: "S, M, L, XL (Moldes escalables)",
      resolucion: "Vectores limpios de alta precisión"
    }
  },
  {
    id: "POL-002",
    title: "Camiseta de Fútbol 'Trueno'",
    category: "futbol",
    price: 20.00,
    image: "images/vector2.svg",
    formats: ["CDR", "PDF", "SVG"],
    nodes: 289,
    description: "Diseño con rayos eléctricos en tonos cian y morado. Totalmente editable en curvas.",
    longDescription: "Un diseño electrizante y moderno que destaca en la cancha. Cuenta con texturas de fondo y rayos vectorizados en capas separadas para que puedas cambiar los colores principales con un par de clics en CorelDRAW. Incluye patrón delantero, trasero y mangas.",
    details: {
      usabilidad: "Sublimación Textil, Camisetas Deportivas",
      tallas: "S, M, L, XL (Moldes 1:1)",
      resolucion: "CMYK optimizado para impresión"
    }
  },
  {
    id: "POL-003",
    title: "Camiseta de E-Sports 'Cyberpunk'",
    category: "esports",
    price: 25.00,
    image: "images/vector3.svg",
    formats: ["CDR", "AI", "EPS"],
    nodes: 412,
    description: "Jersey futurista con cuadrícula digital y acentos de color verde neón y magenta.",
    longDescription: "Diseñado especialmente para equipos de gaming y e-sports. Presenta un patrón hexagonal tecnológico de fondo y cortes dinámicos en hombros y costados. Los textos y números son 100% editables; no requiere instalar fuentes complejas ya que incluye curvas guías.",
    details: {
      usabilidad: "Sublimación Digital, Ropa Deportiva Gaming",
      tallas: "Completo escala 1:1 (Frente, Espalda, Mangas)",
      resolucion: "Sin pixelado, nodos cerrados"
    }
  },
  {
    id: "POL-004",
    title: "Camiseta de Básquetbol 'Caimán'",
    category: "basquet-otros",
    price: 22.00,
    image: "images/vector4.svg",
    formats: ["CDR", "AI", "SVG"],
    nodes: 198,
    description: "Jersey sin mangas con patrón de escamas texturizadas de caimán y detalles en amarillo.",
    longDescription: "Diseño robusto para baloncesto. Incluye silueta clásica de básquetbol sin mangas con bordes de cuello y sisa en combinación contrastante. La textura de escamas está vectorizada de manera eficiente para que no sobrecargue tu memoria RAM al abrir el archivo.",
    details: {
      usabilidad: "Sublimación Baloncesto, Ropa Deportiva",
      tallas: "Moldes sin mangas escala real 1:1",
      resolucion: "Colores CMYK puros para plotter"
    }
  },
  {
    id: "POL-005",
    title: "Camiseta de Running 'Aero Flow'",
    category: "basquet-otros",
    price: 18.00,
    image: "images/vector5.svg",
    formats: ["CDR", "PDF", "EPS"],
    nodes: 256,
    description: "Diseño atlético con líneas fluidas curvas degradadas en rosado, cian y azul oscuro.",
    longDescription: "Perfecto para maratones, eventos de running y ropa deportiva casual. Las líneas de flujo transmiten velocidad y dinamismo. Optimizado para impresión directa en telas dry-fit, microfibra o poliéster deportivo.",
    details: {
      usabilidad: "Sublimación Running, Eventos Deportivos",
      tallas: "Moldes completos para damas y varones",
      resolucion: "Vectores nativos CorelDRAW"
    }
  },
  {
    id: "POL-006",
    title: "Camiseta de Ciclismo 'Pro Speed'",
    category: "basquet-otros",
    price: 25.00,
    image: "images/vector6.svg",
    formats: ["CDR", "AI", "EPS"],
    nodes: 310,
    description: "Diseño de bloques de color geométricos y minimalistas con cremallera simulada.",
    longDescription: "Molde ajustado de ciclismo (fit) que incluye los bolsillos traseros clásicos vectorizados en el patrón de la espalda. Los colores rosa y amarillo flúor están configurados para resaltar al sublimarse en telas deportivas de alta gama.",
    details: {
      usabilidad: "Sublimación Ciclismo, Ciclomontañismo",
      tallas: "Patrón con bolsillos traseros incluidos 1:1",
      resolucion: "Líneas de costura de guía incluidas"
    }
  },
  {
    id: "POL-007",
    title: "Camiseta de Motocross 'Dirt Fire'",
    category: "motocross",
    price: 30.00,
    image: "images/vector7.svg",
    formats: ["CDR", "AI", "EPS"],
    nodes: 460,
    description: "Jersey de manga larga con estilo grunge agresivo, ángulos afilados en naranja y negro.",
    longDescription: "Diseño extremo para motocross y enduro. Cuenta con patrón de manga larga con puños ajustados. Los paneles del diseño están vectorizados de manera que los codos y hombros mantengan continuidad visual al coser las piezas.",
    details: {
      usabilidad: "Sublimación Motocross, Enduro, BMX",
      tallas: "Molde Manga Larga escala real 1:1",
      resolucion: "Alta definición en curvas agresivas"
    }
  },
  {
    id: "POL-008",
    title: "Camiseta de Fútbol 'Incaic' (Perú)",
    category: "futbol",
    price: 25.00,
    image: "images/vector8.svg",
    formats: ["CDR", "PDF", "SVG"],
    nodes: 380,
    description: "Diseño de colección con guardas y patrones incaicos dorados sobre fondo guinda oscuro.",
    longDescription: "Camiseta de edición especial inspirada en la iconografía precolombina peruana. Ideal para equipos amateur o ligas de fútbol 7. Los detalles dorados están diseñados para resaltar con una alta saturación de tinta en el papel de sublimación.",
    details: {
      usabilidad: "Sublimación Camisetas de Fútbol, Ropa Deportiva",
      tallas: "S, M, L, XL (Patrón completo delantero, espalda, mangas)",
      resolucion: "CMYK optimizado para tintas de sublimación"
    }
  },
  {
    id: "POL-009",
    title: "Camiseta de Voleibol 'Vortex'",
    category: "basquet-otros",
    price: 20.00,
    image: "images/vector9.svg",
    formats: ["CDR", "PDF", "EPS"],
    nodes: 275,
    description: "Diseño con ondas en espiral degradadas en morado, magenta y cian brillante.",
    longDescription: "Diseño dinámico pensado para equipos femeninos y masculinos de voleibol. El patrón del polo está diseñado con cortes entallados (ajustados al cuerpo) y líneas curvas que estilizan la figura del deportista al jugar.",
    details: {
      usabilidad: "Sublimación Voleibol, Atletismo",
      tallas: "Modelos entallados escala 1:1",
      resolucion: "Vectores limpios sin cruces de contorno"
    }
  },
  {
    id: "POL-010",
    title: "Camiseta de Fútbol 'Galaxia'",
    category: "futbol",
    price: 22.00,
    image: "images/vector10.svg",
    formats: ["CDR", "PDF", "SVG"],
    nodes: 530,
    description: "Nebulosa espacial con estrellas y tramas de líneas diagonales tecnológicas cruzadas.",
    longDescription: "Un diseño espectacular que simula el espacio profundo con constelaciones y polvos estelares vectoriales. Las tramas de puntos están optimizadas en CorelDRAW para que no se empasten durante el proceso de calandra o planchado textil.",
    details: {
      usabilidad: "Sublimación Sublimado Completo (All-Over Print)",
      tallas: "Patrón completo escala real 1:1",
      resolucion: "Colores RGB/CMYK ultra profundos"
    }
  }
];

// 2. CONFIGURACIÓN DE ESTADO DE LA APLICACIÓN
const state = {
  currentPage: 1,
  itemsPerPage: 6, // Muestra 6 por página (Página 1: 6, Página 2: 4)
  currentCategory: 'all',
  searchQuery: '',
  whatsappNumber: '982296407'
};

// 3. SELECTORES DEL DOM
const catalogGrid = document.getElementById('catalogGrid');
const paginationContainer = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const header = document.querySelector('.header');

// Modal Elements
const detailModal = document.getElementById('detailModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalId = document.getElementById('modalId');
const modalFormats = document.getElementById('modalFormats');
const modalNodes = document.getElementById('modalNodes');
const modalUsabilidad = document.getElementById('modalUsabilidad');
const modalMateriales = document.getElementById('modalMateriales');
const modalBuyBtn = document.getElementById('modalBuyBtn');

// Contact Form Elements
const contactForm = document.getElementById('contactForm');

// 4. LÓGICA DE WHATSAPP URL GENERATION
function generateWhatsAppUrl(vector) {
  const message = `Hola Abel Vectores, estoy interesado en comprar el vector de diseño de polo deportivo:\n` +
                  `*${vector.title}*\n` +
                  `• Código: *${vector.id}*\n` +
                  `• Precio del Vector: *S/. ${vector.price.toFixed(2)}*\n` +
                  `• Formato: *CorelDRAW (${vector.formats[0]})*\n\n` +
                  `¿Me envías la información para el depósito (Yape/Plin/Cuenta)?`;
  
  return `https://wa.me/51${state.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// 5. FUNCIONES DE RENDERIZACIÓN
function renderCatalog() {
  // Limpiar contenedor
  catalogGrid.innerHTML = '';

  // Filtrar elementos por categoría y por búsqueda
  const filteredData = VECTORS_DATA.filter(vector => {
    const matchesCategory = state.currentCategory === 'all' || vector.category === state.currentCategory;
    const matchesSearch = vector.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          vector.description.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          vector.id.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Si no hay resultados
  if (filteredData.length === 0) {
    catalogGrid.innerHTML = `
      <div class="empty-catalog">
        <i class="fas fa-search-minus"></i>
        <h3>No se encontraron diseños de polos</h3>
        <p>Intenta buscar otra camiseta o cambiar la categoría seleccionada.</p>
      </div>
    `;
    paginationContainer.innerHTML = '';
    return;
  }

  // Calcular límites de paginación
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / state.itemsPerPage);
  
  // Ajustar la página actual si excede el número total de páginas filtradas
  if (state.currentPage > totalPages) {
    state.currentPage = totalPages || 1;
  }

  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Renderizar las tarjetas
  paginatedData.forEach(vector => {
    const card = document.createElement('article');
    card.className = 'vector-card';
    
    // Crear insignias de formato
    const formatBadgesHTML = vector.formats.map(f => {
      const cls = f.toLowerCase() === 'cdr' ? 'cdr' : (f.toLowerCase() === 'svg' ? 'svg' : '');
      return `<span class="format-badge ${cls}">${f}</span>`;
    }).join('');

    const waUrl = generateWhatsAppUrl(vector);

    card.innerHTML = `
      <div class="vector-img-wrapper" onclick="showVectorDetails('${vector.id}')">
        <div class="vector-formats">${formatBadgesHTML}</div>
        <img src="${vector.image}" alt="${vector.title}" loading="lazy">
        <button class="quick-view-btn">
          <i class="fas fa-expand"></i> Ver Detalles
        </button>
      </div>
      <div class="vector-body">
        <span class="vector-category">${vector.category.toUpperCase()}</span>
        <h3 class="vector-title">${vector.title}</h3>
        <p class="vector-desc">${vector.description}</p>
        <div class="vector-footer">
          <div class="vector-price">
            <span class="price-label">Vectores 1:1</span>
            <span class="price-val">S/. ${vector.price.toFixed(2)}</span>
          </div>
          <a href="${waUrl}" target="_blank" class="btn-whatsapp">
            <i class="fab fa-whatsapp"></i> Comprar
          </a>
        </div>
      </div>
    `;
    catalogGrid.appendChild(card);
  });

  // Renderizar los controles de paginación
  renderPagination(totalItems);
}

function renderPagination(totalItems) {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(totalItems / state.itemsPerPage);

  if (totalPages <= 1) return; // No se requiere paginación para 1 sola página

  // Botón Anterior
  const prevBtn = document.createElement('button');
  prevBtn.className = 'page-btn';
  prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevBtn.disabled = state.currentPage === 1;
  prevBtn.addEventListener('click', () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      renderCatalog();
      scrollToCatalog();
    }
  });
  paginationContainer.appendChild(prevBtn);

  // Botones de Páginas
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `page-btn ${state.currentPage === i ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.addEventListener('click', () => {
      state.currentPage = i;
      renderCatalog();
      scrollToCatalog();
    });
    paginationContainer.appendChild(pageBtn);
  }

  // Botón Siguiente
  const nextBtn = document.createElement('button');
  nextBtn.className = 'page-btn';
  nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextBtn.disabled = state.currentPage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (state.currentPage < totalPages) {
      state.currentPage++;
      renderCatalog();
      scrollToCatalog();
    }
  });
  paginationContainer.appendChild(nextBtn);
}

function scrollToCatalog() {
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

// 6. LÓGICA DE DETALLE (MODAL)
window.showVectorDetails = function(vectorId) {
  const vector = VECTORS_DATA.find(v => v.id === vectorId);
  if (!vector) return;

  modalImg.src = vector.image;
  modalImg.alt = vector.title;
  modalCategory.textContent = vector.category.toUpperCase();
  modalTitle.textContent = vector.title;
  modalPrice.textContent = `S/. ${vector.price.toFixed(2)}`;
  modalDesc.textContent = vector.longDescription;
  modalId.textContent = vector.id;
  modalFormats.textContent = vector.formats.join(' / ');
  modalNodes.textContent = `${vector.nodes} Nodos`;
  modalUsabilidad.textContent = vector.details.usabilidad;
  modalMateriales.textContent = vector.details.tallas;
  
  modalBuyBtn.href = generateWhatsAppUrl(vector);

  // Mostrar modal con transiciones
  detailModal.style.display = 'flex';
  setTimeout(() => {
    detailModal.classList.add('open');
  }, 10);
  
  // Bloquear scroll de la página
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  detailModal.classList.remove('open');
  setTimeout(() => {
    detailModal.style.display = 'none';
  }, 400);
  // Habilitar scroll
  document.body.style.overflow = '';
}

// 7. EVENT LISTENERS
// Búsqueda en tiempo real
searchInput.addEventListener('input', (e) => {
  state.searchQuery = e.target.value;
  state.currentPage = 1;
  renderCatalog();
});

// Filtros de categoría
categoryFilters.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    // Quitar active de los anteriores
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    // Poner active al seleccionado
    e.target.classList.add('active');
    
    state.currentCategory = e.target.dataset.category;
    state.currentPage = 1;
    renderCatalog();
  }
});

// Botón cerrar modal
modalClose.addEventListener('click', closeModal);
detailModal.addEventListener('click', (e) => {
  if (e.target === detailModal || e.target.classList.contains('modal-overlay')) {
    closeModal();
  }
});

// Escuchar tecla escape para cerrar modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && detailModal.classList.contains('open')) {
    closeModal();
  }
});

// Menú Móvil Hamburguesa
mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  mobileMenuBtn.classList.toggle('active');
});

// Cerrar menú móvil al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    mobileMenuBtn.classList.remove('active');
    
    // Quitar active de los otros enlaces
    document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
    link.classList.add('active');
  });
});

// Efecto de Header Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Highlight active section on scroll
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    
    if (scrollPosition >= top && scrollPosition < top + height) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Formulario de Contacto redirecciona a WhatsApp con mensaje personalizado
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMsg').value;
  
  const formattedText = `Hola Abel Vectores,\n` +
                        `Mi nombre es: *${name}*\n` +
                        `Correo: *${email}*\n` +
                        `Consulta sobre sublimación deportiva: *${message}*`;
                        
  const waUrl = `https://wa.me/51${state.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
  
  // Abrir chat de WhatsApp
  window.open(waUrl, '_blank');
  
  // Resetear formulario
  contactForm.reset();
});

// 8. INICIALIZAR APLICACIÓN
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
});
