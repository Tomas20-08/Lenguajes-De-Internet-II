const formulario = document.getElementById("formulario");
const producto = document.getElementById("producto");
const categoria = document.getElementById("categoria");
const ultimo = document.getElementById("ultimo");
const borrarCookies = document.getElementById("borrarCookies");

function guardarCookie(nombre, valor) {
  document.cookie =
    `${nombre}=${encodeURIComponent(valor)}; ` +
    `max-age=2592000; path=/; SameSite=Lax`;
}

function leerCookie(nombre) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [clave, ...partes] = cookie.trim().split("=");

    if (clave === nombre) {
      return decodeURIComponent(partes.join("="));
    }
  }

  return null;
}

function eliminarCookie(nombre) {
  document.cookie = `${nombre}=; max-age=0; path=/; SameSite=Lax`;
}

function cargarPreferencias() {
  const ultimoProducto = leerCookie("ultimoProducto");
  const ultimaCategoria = leerCookie("ultimaCategoria");

  if (ultimoProducto) {
    ultimo.textContent = `Último producto registrado: ${ultimoProducto}.`;
  }

  if (ultimaCategoria) {
    categoria.value = ultimaCategoria;
  }
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  guardarCookie("ultimoProducto", producto.value.trim());
  guardarCookie("ultimaCategoria", categoria.value);

  ultimo.textContent = `Producto guardado: ${producto.value}.`;

  formulario.reset();
  cargarPreferencias();
});

borrarCookies.addEventListener("click", function () {
  eliminarCookie("ultimoProducto");
  eliminarCookie("ultimaCategoria");

  ultimo.textContent = "Preferencias eliminadas.";
  categoria.value = "";
});

cargarPreferencias();
