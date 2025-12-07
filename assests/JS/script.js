const dishes = [
  { name: 'Margherita Pizza', type: 'veg', img: 'https://images.unsplash.com/photo-1601924582975-7aa6edc76f0c?q=80' },
  { name: 'Chicken Biryani', type: 'nonveg', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80' },
  { name: 'Pasta Alfredo', type: 'veg', img: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8e8d?q=80' },
  { name: 'Grilled Chicken', type: 'nonveg', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80' }
];

const menu = document.getElementById("menu-grid");

// Show all dishes initially
render(dishes);

// Render cards
function render(list) {
  menu.innerHTML = list.map(d => `
    <div class="card">
      <img src="${d.img}">
      <h3>${d.name}</h3>
      <p>${d.type.toUpperCase()}</p>
    </div>
  `).join("");
}

// Filter dishes
function filterDish(type) {
  if (type === "all") {
    render(dishes);
  } else {
    render(dishes.filter(item => item.type === type));
  }
}

// Search dish
function searchDish() {
  const q = document.getElementById("q").value.toLowerCase();
  render(dishes.filter(d => d.name.toLowerCase().includes(q)));
}
