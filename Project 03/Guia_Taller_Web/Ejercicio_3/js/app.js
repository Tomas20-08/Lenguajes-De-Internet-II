const formulario = document.getElementById("formulario");
const contador = document.getElementById("contador");
const preferencia = document.getElementById("preferencia");

function guardarCookie(nombre, valor, dias) {
  const segundos = dias * 86400;

  document.cookie =
    `${nombre}=${encodeURIComponent(valor)}; ` +
    `max-age=${segundos}; path=/; SameSite=Lax`;
}

function leerCookie(nombre) {
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

function actualizarVisitas() {
  let visitas = Number(leerCookie("visitasEvento")) || 0;
  visitas++;

  guardarCookie("visitasEvento", visitas, 30);

  contador.textContent = `Has visitado esta página ${visitas} vez/veces.`;
}

function cargarModalidad() {
  const modalidad = leerCookie("modalidadPreferida");

  if (!modalidad) {
    return;
  }

  const opcion = document.querySelector(
    `input[name="modalidad"][value="${modalidad}"]`
  );

  if (opcion) {
    opcion.checked = true;
  }

  preferencia.textContent = `Tu modalidad preferida es ${modalidad}.`;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const seleccion = document.querySelector('input[name="modalidad"]:checked');

  guardarCookie("modalidadPreferida", seleccion.value, 30);

  preferencia.textContent = `Inscripción registrada en modalidad ${seleccion.value}.`;

  formulario.reset();
  cargarModalidad();
});

actualizarVisitas();
cargarModalidad();
