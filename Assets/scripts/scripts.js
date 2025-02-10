function pedirDatos() {
  const backend = document.createElement("iframe");
  backend.src = "https://backend-kc8caeseg-backend-bbs-projects.vercel.app/";  // 🔹 Cambia esto por la URL del Backend Patito
  backend.style.display = "none";
  document.body.appendChild(backend);

  backend.onload = function () {
      backend.contentWindow.postMessage({ id: 1 }, "https://backend-kc8caeseg-backend-bbs-projects.vercel.app/"); // 🔹 Cambia esto por la URL del Backend Patito
  };

  window.addEventListener("message", (event) => {
      if (event.origin !== "https://backend-kc8caeseg-backend-bbs-projects.vercel.app/") return;  // 🔹 Cambia esto por la URL del Backend Patito

      if (event.data.error) {
          document.getElementById("resultado").innerText = "Error: " + event.data.error;
      } else {
          document.getElementById("resultado").innerText = "Activo: " + event.data.activo;
      }
  });
}
