// Apenas carga la página hacemos la petición.
// Así cuando el usuario presione el botón,
// los datos ya estarán listos casi al instante.

let cachePersonas = [];

window.addEventListener("load", async () => {
    await precargarPersonas();
});

async function precargarPersonas() {

    try {

        const response = await fetch("/api/personas");

        cachePersonas = await response.json();

    } catch (error) {

        console.error("No se pudo precargar la información", error);
    }
}

async function cargarPersonas() {

    const contenedor = document.getElementById("personas");

    // Si ya hay datos guardados, los mostramos rápido
    if (cachePersonas.length > 0) {

        renderizarPersonas(cachePersonas);

        // Después volvemos a cargar nuevos datos en segundo plano
        precargarPersonas();

        return;
    }

    contenedor.innerHTML = `
        <div class="loading">
            Obteniendo información...
        </div>
    `;

    try {

        const response = await fetch("/api/personas");

        const personas = await response.json();

        renderizarPersonas(personas);

    } catch (error) {

        console.error(error);

        contenedor.innerHTML = `
            <div class="loading">
                Ocurrió un problema al cargar los datos.
            </div>
        `;
    }
}

function renderizarPersonas(personas) {

    const contenedor = document.getElementById("personas");

    contenedor.innerHTML = "";

    personas.forEach(persona => {

        contenedor.innerHTML += `
            <div class="card">

                <div class="image-container">
                    <img src="${persona.fotografia}" alt="foto-persona">
                </div>

                <h3>${persona.nombre}</h3>

                <div class="info">

                    <p>
                        <span class="label">Género:</span>
                        ${persona.genero}
                    </p>

                    <p>
                        <span class="label">Ubicación:</span>
                        ${persona.ubicacion}
                    </p>

                    <p>
                        <span class="label">Correo:</span>
                        ${persona.correoElectronico}
                    </p>

                    <p>
                        <span class="label">Fecha de nacimiento:</span>
                        ${persona.fechaNacimiento.substring(0, 10)}
                    </p>

                </div>

            </div>
        `;
    });
}
