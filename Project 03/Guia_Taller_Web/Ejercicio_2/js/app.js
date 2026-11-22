const formulario = document.getElementById("formulario");
const recurso = document.getElementById("recurso");
const preferencia = document.getElementById("preferencia");

function crearCookie(nombre, valor, dias) {
  const segundos = dias * 24 * 60 * 60;

  document.cookie =
    `${nombre}=${encodeURIComponent(valor)}; ` +
    `max-age=${segundos}; path=/; SameSite=Lax`;
}

function obtenerCookie(nombre) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [clave, ...valor] = cookie.trim().split("=");

    if (clave === nombre) {
      return decodeURIComponent(valor.join("="));
    }
  }

  return null;
}

const recursoGuardado = obtenerCookie("recursoPreferido");

if (recursoGuardado) {
  recurso.value = recursoGuardado;
  preferencia.textContent = `Preferencia guardada: ${recursoGuardado}`;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  crearCookie("recursoPreferido", recurso.value, 7);

  preferencia.textContent = `Reserva registrada. Preferencia: ${recurso.value}`;

  formulario.reset();
});
