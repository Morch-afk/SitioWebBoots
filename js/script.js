document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const formData = new FormData(form);
        const nombre = formData.get("nombre");
        const email = formData.get("email");
        const mensaje = formData.get("mensaje");

        // Validar campos (aquí puedes agregar más validaciones según tus requerimientos)
        if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
            statusMessage.innerHTML = '<div class="alert alert-danger">Por favor, completa todos los campos.</div>';
            return;
        }

        // Aquí puedes agregar más validaciones, como validar el formato del correo electrónico

        // Enviar formulario (aquí puedes hacer una solicitud HTTP, enviar un correo, etc.)
        // Ejemplo básico de mostrar un mensaje de éxito
        statusMessage.innerHTML = '<div class="alert alert-success">Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.</div>';

        // Limpiar formulario después de enviar
        form.reset();
    });
});
