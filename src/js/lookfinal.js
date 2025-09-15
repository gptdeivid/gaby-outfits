// Look final page functionality
export function renderLook() {
  const container = document.getElementById('contenido');
  container.innerHTML = '';
  const data = JSON.parse(localStorage.getItem('lookFinal') || '[]');

  if (!data.length) {
    const p = document.createElement('p');
    p.textContent = 'Aún no has seleccionado un look.';
    container.appendChild(p);
    return;
  }

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;

    const info = document.createElement('div');
    info.className = 'info';

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = item.name;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const link = document.createElement('a');
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'Ver producto';

    link.appendChild(btn);
    actions.appendChild(link);
    info.appendChild(name);
    info.appendChild(actions);
    card.appendChild(img);
    card.appendChild(info);
    container.appendChild(card);
  });
}

// Clear selection
export function clearSelection() {
  localStorage.removeItem('lookFinal');
  renderLook();
}

// Initialize page
export function initLookFinal() {
  document.getElementById('limpiar').addEventListener('click', clearSelection);
  renderLook();
}