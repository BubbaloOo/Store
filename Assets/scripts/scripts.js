function pedirDatos() {
  const backend = document.createElement("iframe");
  backend.src = "https://backend-kc8caeseg-backend-bbs-projects.vercel.app/";  // 🔹 Cambia esto por la URL del Backend Patito
  backend.style.display = "none";
  document.body.appendChild(backend);

  backend.onload = function () {
      backend.contentWindow.postMessage({ id: 1 }, "https://backend-kc8caeseg-backend-bbs-projects.vercel.app/"); // 🔹 Cambia esto por la URL del Backend Patito
  };

  window.addEventListener("message", (event) => {
    console.log("Mensaje recibido desde backend:", event.data);
    
    if (event.origin !== "https://backend-kc8caeseg-backend-bbs-projects.vercel.app/") return;

    if (event.data.error) {
        alert("Error: " + event.data.error);
    } else {
        alert("Hola papu, este es tu papu texto: " + event.data.activo);
    }
});

}

