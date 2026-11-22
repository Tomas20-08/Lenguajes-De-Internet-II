# Guía Taller de Desarrollo Web — Cómo usar este proyecto con VS Code + Live Server

Este paquete contiene los 5 ejercicios de la guía, listos para abrir con la
extensión **Live Server** en Visual Studio Code (sin necesidad de XAMPP).

## 1. Requisitos

- Visual Studio Code instalado.
- Extensión **Live Server** (autor: Ritwick Dey), instalable desde el
  Marketplace de VS Code (icono de cuadritos en la barra lateral, buscar
  "Live Server" e instalar).

## 2. Pasos para ejecutar cada ejercicio

1. Descomprime este `.zip` en cualquier carpeta de tu sistema, por ejemplo:
   `~/Proyectos/Guia_Taller_Web`
2. Abre la carpeta `Guia_Taller_Web` completa en VS Code
   (`Archivo → Abrir carpeta...`).
3. En el panel de archivos, entra a `Ejercicio_1` y haz clic derecho sobre
   `index.html`.
4. Selecciona **"Open with Live Server"**.
5. Se abrirá el navegador en una dirección como:
   `http://127.0.0.1:5500/Ejercicio_1/index.html`
6. Repite el mismo proceso (clic derecho → Open with Live Server) para
   `Ejercicio_2`, `Ejercicio_3`, `Ejercicio_4` y `Ejercicio_5`.

> Nota: mientras un ejercicio esté abierto con Live Server, puedes cerrarlo
> con el botón "Port: 5500" en la barra inferior de VS Code antes de abrir
> otro, o simplemente dejar que Live Server reutilice la pestaña.

## 3. Verificar las cookies

Con la página abierta en el navegador:

- Presiona `F12` para abrir las herramientas de desarrollador.
- Ve a la pestaña **Application** (o **Aplicación**) → **Storage** →
  **Cookies** → selecciona `http://127.0.0.1:5500`.
- También puedes escribir `document.cookie` en la pestaña **Console**.

## 4. Estructura del proyecto

```
Guia_Taller_Web/
├── Ejercicio_1/   Registro de Estudiantes
│   ├── index.html
│   ├── css/estilos.css
│   └── js/app.js
├── Ejercicio_2/   Reserva de Biblioteca
│   ├── index.html
│   ├── css/estilos.css
│   └── js/app.js
├── Ejercicio_3/   Inscripción a Evento Académico
│   ├── index.html
│   ├── css/estilos.css
│   └── js/app.js
├── Ejercicio_4/   Registro de Productos (Tienda)
│   ├── index.html
│   ├── css/estilos.css
│   └── js/app.js
└── Ejercicio_5/   Landing Page Empresarial (Nexa Digital)
    ├── index.html
    ├── css/estilos.css
    ├── js/app.js
    └── img/equipo.jpg
```

## 5. Antes de entregar (según la guía)

- [ ] Personaliza cada ejercicio: cambia al menos dos colores, un título,
      textos descriptivos y opciones de listas (sección 22 de la guía).
- [ ] En los ejercicios 3, 4 y 5, realiza además algún cambio en la
      distribución visual.
- [ ] Prueba el "Reto final": agrega un botón que borre las cookies del
      ejercicio elegido, verificándolo con `document.cookie` y en
      Application → Cookies.
- [ ] Toma capturas de cada proyecto funcionando con Live Server.
- [ ] Comprime la carpeta final en un `.zip` para la entrega.

## 6. Diferencia con la guía original

La guía menciona `http://localhost/Guia_Taller_Web/Ejercicio_1/` porque usa
Apache (XAMPP) escuchando en el puerto 80. Con Live Server verás en su lugar
algo como `http://127.0.0.1:5500/Ejercicio_1/`. Funcionalmente es
equivalente: en ambos casos estás sirviendo los archivos por HTTP (no por
`file://`), que es el requisito real para que las cookies funcionen
correctamente.
