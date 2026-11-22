const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const bienvenida = document.getElementById("bienvenida");

function crearCookie(nombre, valor, segundos) {
  document.cookie =
    `${nombre}=${encodeURIComponent(valor)}; ` +
    `max-age=${segundos}; path=/; SameSite=Lax`;
}

function obtenerCookie(nombre) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const partes = cookie.trim().split("=");
    const clave = partes.shift();

    if (clave === nombre) {
      return decodeURIComponent(partes.join("="));
    }
  }

  return null;
}

function mostrarBienvenida() {
  const nombre = obtenerCookie("nombreUsuario");

  if (nombre) {
    bienvenida.textContent = `Bienvenido nuevamente, ${nombre}.`;
  }
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = nombreInput.value.trim();

  crearCookie("nombreUsuario", nombre, 86400);

  bienvenida.textContent = `Registro realizado. Hola, ${nombre}.`;

  formulario.reset();
});

mostrarBienvenida();
