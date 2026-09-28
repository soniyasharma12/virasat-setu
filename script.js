// --- DEMO DATASET ---
const HERITAGE_DATA = [
  {
    id: 'phulkari',
    name: 'Phulkari Embroidery',
    category: 'Craft',
    region: 'Patiala & Amritsar, Punjab',
    shortDesc: 'Traditional floral embroidery crafted with untwisted silk threads on coarse cotton cloth.',
    history: 'Phulkari literally translates to "flower work". Historically practiced by Punjabi women in homes, it was associated with joyous occasions like weddings and births.',
    importance: 'A vibrant symbol of maternal love, female solidarity, and Punjabi folk identity.',
    materials: 'Pat thread (untwisted silk), Khaddar (coarse handspun cotton), darn stitch.',
    challenges: 'Commercially printed imitations threaten traditional hand-stitched artisans.',
    artisan: 'Gurpreet Kaur (Patiala)',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'thathera',
    name: 'Thathera Metal Craft',
    category: 'Craft',
    region: 'Jandiala Guru, Punjab',
    shortDesc: 'UNESCO-recognized traditional technique of hammering brass and copper utensils.',
    history: 'Established during the reign of Maharaja Ranjit Singh, who encouraged skilled metal craftsmen to settle in Jandiala Guru.',
    importance: 'India’s only traditional craft technique inscribed on the UNESCO Intangible Cultural Heritage list.',
    materials: 'Brass, Copper, Kansa alloy, wooden mallets, hand-hammering tools.',
    challenges: 'Competition from cheap stainless steel and factory mass production.',
    artisan: 'Harjit Singh (Jandiala Guru)',
    img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bhangra',
    name: 'Bhangra Folk Dance',
    category: 'Dance',
    region: 'Majha & Malwa Regions',
    shortDesc: 'High-energy folk dance accompanied by the thunderous beats of the Dhol instrument.',
    history: 'Originating among Punjabi farmers celebrating the Vaisakhi harvest season.',
    importance: 'Global cultural ambassador for vitality, joy, and agricultural heritage.',
    materials: 'Dhol drum, Chimta, colourful Pagri (turban), Kurta and Tehmat outfit.',
    challenges: 'Modern pop dilution losing authentic traditional steps and rhythm variations.',
    artisan: 'Manmohan Preet (Ludhiana)',
    img: 'https://images.unsplash.com/photo-1543157145-f78c636d0232?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'giddha',
    name: 'Giddha Folk Dance',
    category: 'Dance',
    region: 'Pan-Punjab',
    shortDesc: 'Graceful folk dance performed by women featuring rhythmic clapping and Boliyaan (couplets).',
    history: 'Evolved as a celebratory expression during weddings, teeyan festival, and monsoon harvest.',
    importance: 'Captures female storytelling, wit, emotion, and community unity.',
    materials: 'Traditional Paranda hair ornament, colorful Salwar Kameez, brass thali.',
    challenges: 'Fewer community gatherings leading to reduced practice among urban youth.',
    artisan: 'Daljeet Kaur (Amritsar)',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'instruments',
    name: 'Punjabi Folk Instruments',
    category: 'Music',
    region: 'Malwa Region',
    shortDesc: 'Traditional musical devices including Algoza, Tumbi, Bugchu, and Algozey.',
    history: 'Crafted for centuries by itinerant minstrels and folk storytellers (Kaddis/Dhadi singers).',
    importance: 'Forms the acoustic foundation of Sufi music, folk legends, and oral history.',
    materials: 'Dried gourds, wood, goat skin parchment, brass wires.',
    challenges: 'Decreasing master instrument craftsmen causing shortages of authentic instruments.',
    artisan: 'Jaswant Craftsman (Jalandhar)',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vaisakhi',
    name: 'Vaisakhi Festival',
    category: 'Festival',
    region: 'Anandpur Sahib & Pan-Punjab',
    shortDesc: 'Spring harvest festival marking the founding of the Khalsa Pant in 1699.',
    history: 'Celebrated on April 13 or 14 annually to thank nature for bountiful crops.',
    importance: 'Deep spiritual, agricultural, and socio-cultural milestone.',
    materials: 'Yellow/Saffron attire, community Langar kitchens, Nagar Kirtan processions.',
    challenges: 'Preserving ecological awareness during large scale festive congregations.',
    artisan: 'Cultural Heritage Board',
    img: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=600&q=80'
  }
];

const ARTISAN_PROFILES = [
  {
    name: 'Sardarni Gurpreet Kaur',
    craft: 'Master Phulkari Embroidery Artisan',
    location: 'Patiala, Punjab',
    experience: '28 Years Experience',
    story: 'Inherited the art of Bagh stitch embroidery from her grandmother. Currently trains over 45 rural women to maintain economic independence.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Ustad Harjit Singh Thathera',
    craft: 'Hand-Hammered Brassware Specialist',
    location: 'Jandiala Guru, Punjab',
    experience: '35 Years Experience',
    story: 'Fourth-generation metal craftsman dedicated to conserving the UNESCO-inscribed traditional technique of beating copper and brass sheets.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  }
];

const MAP_LOCATIONS = [
  { id: 1, name: 'Amritsar', lat: 31.6340, lng: 74.8723, category: 'Place', desc: 'Home to the Golden Temple, traditional Phulkari markets, and authentic Punjabi cuisine.', insight: 'Major center for Phulkari embroidery and Punjabi Jutti markets.' },
  { id: 2, name: 'Jandiala Guru', lat: 31.5644, lng: 74.9818, category: 'Craft', desc: 'Famous for the UNESCO-recognized Thathera brass and copper utensil hammering craft.', insight: 'Only UNESCO intangible heritage craft cluster in Punjab.' },
  { id: 3, name: 'Ludhiana', lat: 30.9010, lng: 75.8573, category: 'Dance', desc: 'Hub for folk performance academies, Bhangra troupes, and textile innovation.', insight: 'Hosts major annual folk dance competitions and harvest melas.' },
  { id: 4, name: 'Patiala', lat: 30.3398, lng: 76.3869, category: 'Craft', desc: 'Renowned for Royal Phulkari Bagh designs, Parandas, and historical architecture.', insight: 'Famous for Qila Mubarak and traditional handcrafted Paranda tassels.' },
  { id: 5, name: 'Anandpur Sahib', lat: 31.2359, lng: 76.4988, category: 'Festival', desc: 'Spiritual city famous for Hola Mohalla martial arts and Vaisakhi heritage celebrations.', insight: 'Key center for Sikh heritage, martial arts, and festive congregations.' }
];

const QUIZ_QUESTIONS = [
  {
    q: 'Which region/city is world-famous for the UNESCO-recognized Thathera metal craft?',
    options: ['Jandiala Guru', 'Ludhiana', 'Pathankot', 'Bhatinda'],
    correct: 0
  },
  {
    q: 'What does "Phulkari" literally translate to in Punjabi?',
    options: ['Golden Thread', 'Flower Work', 'Royal Loom', 'Silk Garden'],
    correct: 1
  },
  {
    q: 'Which folk dance is traditionally performed by Punjabi farmers during harvest celebrations?',
    options: ['Giddha', 'Bhangra', 'Garba', 'Ghoomar'],
    correct: 1
  },
  {
    q: 'Which folk dance is primarily performed by women accompanied by rhythmic clapping and Boliyaan?',
    options: ['Bhangra', 'Gatka', 'Giddha', 'Chhau'],
    correct: 2
  },
  {
    q: 'Which festival marks the spring harvest season and founding of Khalsa in Punjab?',
    options: ['Diwali', 'Lohri', 'Teeyan', 'Vaisakhi'],
    correct: 3
  }
];

let leafMap = null;
let mapMarkers = [];
let userAnswers = {};

// --- TAB NAVIGATION ---
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  const target = document.getElementById(`tab-${tabId}`);
  if (target) target.classList.remove('hidden');

  const navBtn = document.getElementById(`nav-${tabId}`);
  if (navBtn) navBtn.classList.add('active');

  if (tabId === 'map' && !leafMap) {
    setTimeout(initMap, 200);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterCategoryAndNavigate(cat) {
  showTab('explore');
  const select = document.getElementById('categoryFilter');
  if (select) {
    select.value = cat;
    renderExploreCards();
  }
}

// --- RENDER FUNCTIONS ---
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = HERITAGE_DATA.slice(0, 3);
  grid.innerHTML = featured.map(item => `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition group flex flex-col justify-between">
      <div>
        <img src="${item.img}" alt="${item.name}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300">
        <div class="p-5">
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="bg-saffron-500/10 text-saffron-600 font-bold px-2.5 py-1 rounded-md">${item.category}</span>
            <span class="text-gray-500 font-medium">${item.region}</span>
          </div>
          <h4 class="font-serif font-bold text-lg text-maroon-800 mb-2">${item.name}</h4>
          <p class="text-xs text-gray-600 line-clamp-2">${item.shortDesc}</p>
        </div>
      </div>
      <div class="p-5 pt-0">
        <button onclick="openDetails('${item.id}')" class="w-full bg-paper hover:bg-saffron-500 hover:text-maroon-900 border border-saffron-500/30 text-maroon-800 font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1">
          Read Details <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function renderExploreCards() {
  const grid = document.getElementById('exploreGrid');
  if (!grid) return;

  const searchVal = (document.getElementById('exploreSearch')?.value || '').toLowerCase();
  const catVal = document.getElementById('categoryFilter')?.value || 'All';

  const filtered = HERITAGE_DATA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchVal) || item.shortDesc.toLowerCase().includes(searchVal);
    const matchesCat = catVal === 'All' || item.category === catVal;
    return matchesSearch && matchesCat;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center py-12 text-gray-500 font-medium">No cultural items found matching your filter.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition flex flex-col justify-between">
      <div>
        <img src="${item.img}" alt="${item.name}" class="w-full h-48 object-cover">
        <div class="p-5">
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="bg-saffron-500/10 text-saffron-600 font-bold px-2.5 py-1 rounded-md">${item.category}</span>
            <span class="text-gray-500 font-medium">${item.region}</span>
          </div>
          <h4 class="font-serif font-bold text-lg text-maroon-800 mb-2">${item.name}</h4>
          <p class="text-xs text-gray-600 mb-4">${item.shortDesc}</p>
        </div>
      </div>
      <div class="p-5 pt-0">
        <button onclick="openDetails('${item.id}')" class="w-full bg-saffron-500 hover:bg-saffron-600 text-maroon-900 font-bold py-2 rounded-xl text-xs transition">
          Read Full Story
        </button>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function openDetails(id) {
  const item = HERITAGE_DATA.find(x => x.id === id);
  if (!item) return;

  const container = document.getElementById('detailsContainer');
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <img src="${item.img}" alt="${item.name}" class="w-full h-80 lg:h-full object-cover">
      <div class="p-6 sm:p-8 space-y-6">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-saffron-500 text-maroon-900 text-xs font-bold px-3 py-1 rounded-full">${item.category}</span>
            <span class="text-xs text-gray-500 font-bold">${item.region}</span>
          </div>
          <h2 class="font-serif text-3xl font-bold text-maroon-800">${item.name}</h2>
        </div>

        <div class="space-y-4 text-sm text-gray-700">
          <div>
            <h4 class="font-bold text-maroon-800 uppercase text-xs tracking-wider mb-1">History & Origin</h4>
            <p>${item.history}</p>
          </div>
          <div>
            <h4 class="font-bold text-maroon-800 uppercase text-xs tracking-wider mb-1">Cultural Significance</h4>
            <p>${item.importance}</p>
          </div>
          <div>
            <h4 class="font-bold text-maroon-800 uppercase text-xs tracking-wider mb-1">Materials / Style</h4>
            <p>${item.materials}</p>
          </div>
          <div class="bg-red-50 border border-red-200 p-3 rounded-xl">
            <h4 class="font-bold text-red-800 uppercase text-xs tracking-wider mb-1">Present-Day Challenges</h4>
            <p class="text-xs text-red-700">${item.challenges}</p>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-xs text-gray-500">Representative Artisan:</p>
            <p class="font-bold text-sm text-maroon-800">${item.artisan}</p>
          </div>
          <button onclick="showTab('quiz')" class="bg-saffron-500 hover:bg-saffron-600 text-maroon-900 font-bold px-5 py-2.5 rounded-xl text-xs transition flex items-center gap-2">
            <i data-lucide="help-circle" class="w-4 h-4"></i> Take Quiz
          </button>
        </div>
      </div>
    </div>
  `;
  showTab('details');
  lucide.createIcons();
}

function renderArtisans() {
  const grid = document.getElementById('artisansGrid');
  if (!grid) return;
  grid.innerHTML = ARTISAN_PROFILES.map(art => `
    <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-md flex flex-col sm:flex-row gap-5 items-center sm:items-start">
      <img src="${art.img}" alt="${art.name}" class="w-24 h-24 rounded-full object-cover border-2 border-gold-500 flex-shrink-0">
      <div class="space-y-2 text-center sm:text-left flex-grow">
        <span class="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Demo Profile</span>
        <h3 class="font-serif font-bold text-lg text-maroon-800">${art.name}</h3>
        <p class="text-xs font-bold text-saffron-600">${art.craft}</p>
        <p class="text-xs text-gray-500">${art.location} • ${art.experience}</p>
        <p class="text-xs text-gray-600 italic">"${art.story}"</p>
        <button onclick="openInquiryModal('${art.name}')" class="mt-3 bg-maroon-800 hover:bg-maroon-900 text-white font-bold px-4 py-2 rounded-xl text-xs transition inline-flex items-center gap-1">
          <i data-lucide="mail" class="w-3.5 h-3.5"></i> Send Inquiry
        </button>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// --- LEAFLET MAP INTERACTION ---
function initMap() {
  if (leafMap) return;
  leafMap = L.map('leafletMap').setView([31.3260, 75.5762], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(leafMap);

  renderMapMarkers('All');
}

function renderMapMarkers(cat) {
  if (!leafMap) return;

  mapMarkers.forEach(m => leafMap.removeLayer(m));
  mapMarkers = [];

  const filtered = cat === 'All' ? MAP_LOCATIONS : MAP_LOCATIONS.filter(x => x.category === cat);

  filtered.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng]).addTo(leafMap);
    marker.bindPopup(`<b>${loc.name}</b><br>${loc.category}`);
    marker.on('click', () => {
      document.getElementById('mapCardTitle').innerText = loc.name;
      document.getElementById('mapCardCategory').innerText = `Category: ${loc.category}`;
      document.getElementById('mapCardDesc').innerText = loc.desc;
      document.getElementById('mapCardInsight').innerText = loc.insight;
    });
    mapMarkers.push(marker);
  });
}

function filterMapMarkers(cat) {
  renderMapMarkers(cat);
  document.querySelectorAll('.map-fbtn').forEach(btn => {
    if (btn.innerText.includes(cat) || (cat === 'All' && btn.innerText === 'All')) {
      btn.className = "map-fbtn px-3 py-1.5 rounded-lg text-xs font-bold bg-maroon-800 text-white";
    } else {
      btn.className = "map-fbtn px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
  });
}

// --- QUIZ ENGINE ---
function renderQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  container.innerHTML = QUIZ_QUESTIONS.map((q, idx) => `
    <div class="p-5 bg-paper rounded-2xl border border-gray-200 space-y-3">
      <p class="font-bold text-sm text-maroon-800">${idx + 1}. ${q.q}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${q.options.map((opt, oIdx) => `
          <button onclick="selectAnswer(${idx},${oIdx})" id="q_${idx}_o_${oIdx}" class="quiz-opt-btn text-left p-3 rounded-xl border border-gray-300 text-xs font-medium hover:border-saffron-500 transition bg-white">
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('') + `
    <button onclick="submitQuiz()" class="w-full bg-saffron-500 hover:bg-saffron-600 text-maroon-900 font-bold py-3 rounded-xl shadow-md transition text-sm">
      Submit Answers
    </button>
  `;
}

function selectAnswer(qIdx, oIdx) {
  userAnswers[qIdx] = oIdx;
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`q_${qIdx}_o_${i}`);
    if (btn) {
      if (i === oIdx) {
        btn.className = "quiz-opt-btn text-left p-3 rounded-xl border-2 border-saffron-500 bg-saffron-500/10 font-bold text-xs text-maroon-800 transition";
      } else {
        btn.className = "quiz-opt-btn text-left p-3 rounded-xl border border-gray-300 text-xs font-medium bg-white transition";
      }
    }
  }
}

function submitQuiz() {
  let score = 0;
  QUIZ_QUESTIONS.forEach((q, idx) => {
    if (userAnswers[idx] === q.correct) score++;
  });

  document.getElementById('quizContainer').classList.add('hidden');
  const resultDiv = document.getElementById('quizResult');
  resultDiv.classList.remove('hidden');

  document.getElementById('quizScoreNum').innerText = score;
  if (score >= 4) {
    document.getElementById('quizResultMessage').innerText = "Outstanding Heritage Scholar!";
    document.getElementById('quizResultDetail').innerText = "You have deep knowledge of Punjab's traditional crafts and folk arts.";
  } else {
    document.getElementById('quizResultMessage').innerText = "Good Effort!";
    document.getElementById('quizResultDetail').innerText = "Explore more heritage stories on VirasatSetu and try again!";
  }
}

function resetQuiz() {
  userAnswers = {};
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizContainer').classList.remove('hidden');
  renderQuiz();
}

// --- MODALS & FORMS ---
function openInquiryModal(artisanName) {
  document.getElementById('modalArtisanName').innerText = artisanName;
  document.getElementById('inquirySuccess').classList.add('hidden');
  document.getElementById('inquiryModal').classList.remove('hidden');
}

function closeInquiryModal() {
  document.getElementById('inquiryModal').classList.add('hidden');
}

function handleInquirySubmit(e) {
  e.preventDefault();
  document.getElementById('inquirySuccess').classList.remove('hidden');
  setTimeout(() => {
    closeInquiryModal();
  }, 2000);
}

function handleContributionSubmit(e) {
  e.preventDefault();
  const alert = document.getElementById('contribAlert');
  alert.classList.remove('hidden');
  e.target.reset();
  setTimeout(() => { alert.classList.add('hidden'); }, 4000);
}

function handleHomeSearch(e) {
  if (e.key === 'Enter') {
    const val = e.target.value;
    showTab('explore');
    const expSearch = document.getElementById('exploreSearch');
    if (expSearch) {
      expSearch.value = val;
      renderExploreCards();
    }
  }
}

// --- CHATBOT LOGIC ---
function toggleChatbot() {
  document.getElementById('chatPanel').classList.toggle('hidden');
}

function handleChatKey(e) {
  if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  const chatBox = document.getElementById('chatMessages');

  // User Message
  chatBox.innerHTML += `
    <div class="bg-maroon-800 text-white p-3 rounded-2xl max-w-[85%] ml-auto text-xs shadow-sm">
      ${text}
    </div>
  `;

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot Response Rule Engine
  setTimeout(() => {
    let reply = "I am Virasat Mitra, Punjab Heritage Assistant. You can ask me about Phulkari embroidery, Thathera craft, Bhangra, or Giddha!";
    const q = text.toLowerCase();

    if (q.includes('phulkari')) {
      reply = "Phulkari literally means 'flower work'. It is traditional embroidery from Patiala and Punjab made using untwisted silk threads on cotton cloth.";
    } else if (q.includes('thathera')) {
      reply = "Thathera craft of Jandiala Guru is an ancient metal-craft technique of hammering copper and brass. It is inscribed on UNESCO's Intangible Cultural Heritage list!";
    } else if (q.includes('bhangra')) {
      reply = "Bhangra is an energetic Punjabi folk dance performed during harvest celebrations like Vaisakhi, accompanied by the thunderous beats of the Dhol.";
    } else if (q.includes('giddha')) {
      reply = "Giddha is a traditional folk dance performed by Punjabi women with rhythmic clapping and short verses called Boliyaan.";
    } else if (q.includes('hello') || q.includes('hi') || q.includes('sat sri akal')) {
      reply = "Sat Sri Akal! How can I assist your exploration of Punjabi culture today?";
    }

    chatBox.innerHTML += `
      <div class="bg-white p-3 rounded-2xl border border-gray-200 max-w-[85%] text-gray-800 shadow-sm">
        ${reply}
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

// --- INITIALIZATION ---
window.onload = function() {
  renderFeatured();
  renderExploreCards();
  renderArtisans();
  renderQuiz();
  lucide.createIcons();
};