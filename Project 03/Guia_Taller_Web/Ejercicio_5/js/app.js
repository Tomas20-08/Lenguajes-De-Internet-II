const botonTema = document.getElementById("tema");
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

function guardarCookie(nombreCookie, valor, dias) {
  const segundos = dias * 86400;

  document.cookie =
    `${nombreCookie}=${encodeURIComponent(valor)}; ` +
    `max-age=${segundos}; path=/; SameSite=Lax`;
}

function leerCookie(nombreCookie) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [clave, ...partes] = cookie.trim().split("=");

    if (clave === nombreCookie) {
      return decodeURIComponent(partes.join("="));
    }
  }

  return null;
}

function aplicarTema(tema) {
  if (tema === "oscuro") {
    document.body.classList.add("oscuro");
    botonTema.textContent = "☀️";
  } else {
    document.body.classList.remove("oscuro");
    botonTema.textContent = "🌙";
  }
}

function cargarPreferencias() {
  const temaGuardado = leerCookie("temaSitio") || "claro";
  aplicarTema(temaGuardado);

  const usuario = leerCookie("nombreVisitante");

  if (usuario) {
    saludo.textContent = `¡Qué bueno verte nuevamente, ${usuario}!`;
  }
}

botonTema.addEventListener("click", function () {
  const modoOscuro = document.body.classList.contains("oscuro");
  const nuevoTema = modoOscuro ? "claro" : "oscuro";

  guardarCookie("temaSitio", nuevoTema, 30);
  aplicarTema(nuevoTema);
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const visitante = nombre.value.trim();

  guardarCookie("nombreVisitante", visitante, 30);

  saludo.textContent = `Gracias, ${visitante}. Hemos recibido tu solicitud.`;

  formulario.reset();
});

cargarPreferencias();
