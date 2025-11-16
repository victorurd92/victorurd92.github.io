const selectJ1 = document.getElementById("jugador1");
const selectJ2 = document.getElementById("jugador2");
const cardJ1   = document.getElementById("card-j1");
const cardJ2   = document.getElementById("card-j2");
const btnBatalla = document.getElementById("btn-batalla");
const logArea  = document.getElementById("log-batalla");


function initSelectors() {
  NARUTO_CHARACTERS.forEach((pj) => {
    const opt1 = document.createElement("option");
    opt1.value = pj.id;
    opt1.textContent = pj.nombre;
    selectJ1.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = pj.id;
    opt2.textContent = pj.nombre;
    selectJ2.appendChild(opt2);
  });

  selectJ1.value = "naruto";
  selectJ2.value = "sasuke";
}

function getCharacterById(id) {
  return NARUTO_CHARACTERS.find((c) => c.id === id);
}

function renderCard(container, pj, etiquetaJugador) {
  if (!pj) return;

  container.innerHTML = `
    <header class="fighter-header">
      <div>
        <div class="fighter-name">${pj.nombre}</div>
        <div class="fighter-meta">${pj.equipo} • ${pj.aldea}</div>
      </div>
      <span class="fighter-tag">${etiquetaJugador}</span>
    </header>

    <div class="fighter-body">
      <div class="fighter-img-wrapper">
        <img src="${pj.imagen}" alt="${pj.nombre}">
      </div>
      <div>
        <p class="fighter-desc">${pj.descripcion}</p>
        <div class="stats">
          ${renderStat("Ataque", pj.ataque)}
          ${renderStat("Defensa", pj.defensa)}
          ${renderStat("Velocidad", pj.velocidad)}
          ${renderStat("Chakra", pj.chakra)}
        </div>
      </div>
    </div>

    <div class="hp-row">
      <div class="hp-label">Vida</div>
      <div class="hp-bar-bg">
        <div class="hp-bar-fill" data-hp-bar="true"></div>
      </div>
    </div>
  `;
}

function renderStat(label, value) {
  const porcentaje = Math.min(100, Math.max(0, value));
  return `
    <div class="stat-row">
      <span class="stat-label">${label}</span>
      <div class="stat-bar">
        <div class="stat-bar-fill" style="width:${porcentaje}%;"></div>
      </div>
      <span class="stat-value">${value}</span>
    </div>
  `;
}

function actualizarHP(container, porcentaje) {
  const bar = container.querySelector('[data-hp-bar="true"]');
  if (bar) {
    bar.style.width = `${Math.max(0, porcentaje)}%`;
  }
}

function marcarKO(container) {
  const ko = document.createElement("div");
  ko.className = "ko-label";
  ko.textContent = "K.O.";
  container.appendChild(ko);
}


function simularBatalla(p1, p2) {
  let hp1 = 100;
  let hp2 = 100;

  const base1 = (p1.ataque * 0.6) + (p1.velocidad * 0.4);
  const base2 = (p2.ataque * 0.6) + (p2.velocidad * 0.4);

  const defensa1 = p1.defensa;
  const defensa2 = p2.defensa;

  const rounds = [];
  let turno = 1;

  while (hp1 > 0 && hp2 > 0 && turno <= 20) {
    const crit1 = Math.random() < 0.15 ? 1.5 : 1;
    const crit2 = Math.random() < 0.15 ? 1.5 : 1;

    const daño1 = Math.max(5, (base1 * crit1 - defensa2 * 0.4) / 5);
    const daño2 = Math.max(5, (base2 * crit2 - defensa1 * 0.4) / 5);

    const primeroEsP1 = p1.velocidad >= p2.velocidad;

    if (primeroEsP1) {
      hp2 -= daño1;
      rounds.push(`${p1.nombre} golpea a ${p2.nombre} por ${daño1.toFixed(0)} de daño.`);
      if (hp2 <= 0) break;

      hp1 -= daño2;
      rounds.push(`${p2.nombre} responde a ${p1.nombre} por ${daño2.toFixed(0)} de daño.`);
    } else {
      hp1 -= daño2;
      rounds.push(`${p2.nombre} golpea primero a ${p1.nombre} por ${daño2.toFixed(0)} de daño.`);
      if (hp1 <= 0) break;

      hp2 -= daño1;
      rounds.push(`${p1.nombre} contraataca a ${p2.nombre} por ${daño1.toFixed(0)} de daño.`);
    }

    turno++;
  }

  const resultado = {
    hpFinal1: Math.max(0, hp1),
    hpFinal2: Math.max(0, hp2),
    ganador: hp1 > hp2 ? p1 : p2,
    perdedor: hp1 > hp2 ? p2 : p1,
    rounds
  };

  rounds.push(
    "",
    `${resultado.ganador.nombre} gana la batalla. El poder de ${resultado.perdedor.nombre} no fue suficiente.`
  );

  return resultado;
}

function actualizarUIBatalla() {
  const p1 = getCharacterById(selectJ1.value);
  const p2 = getCharacterById(selectJ2.value);

  if (!p1 || !p2 || p1.id === p2.id) {
    logArea.value = "Debes elegir dos personajes distintos para la batalla.";
    return;
  }

  renderCard(cardJ1, p1, "J1");
  renderCard(cardJ2, p2, "J2");

  const resultado = simularBatalla(p1, p2);

  actualizarHP(cardJ1, resultado.hpFinal1);
  actualizarHP(cardJ2, resultado.hpFinal2);

  if (resultado.hpFinal1 <= 0) marcarKO(cardJ1);
  if (resultado.hpFinal2 <= 0) marcarKO(cardJ2);

  logArea.value = resultado.rounds.join("\n");
  logArea.scrollTop = logArea.scrollHeight;
}


selectJ1.addEventListener("change", () => {
  const p1 = getCharacterById(selectJ1.value);
  if (p1) renderCard(cardJ1, p1, "J1");
});

selectJ2.addEventListener("change", () => {
  const p2 = getCharacterById(selectJ2.value);
  if (p2) renderCard(cardJ2, p2, "J2");
});

btnBatalla.addEventListener("click", actualizarUIBatalla);


initSelectors();
renderCard(cardJ1, getCharacterById(selectJ1.value), "J1");
renderCard(cardJ2, getCharacterById(selectJ2.value), "J2");
logArea.value = "Pulsa \"Iniciar batalla\" para ver quién gana.";
