import { load } from "emmy-dom";
import { readDataFromTextArea, search } from "./logic.js";

function Home() {
    this.callback = () => {
        this.querySelector('#studentsForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar que el formulario se envíe de forma convencional
      
            let result = '';
            const data = readDataFromTextArea();
      
            while (true) {
                const query = prompt();
                if (['', 'exit'].includes(query.trim())) {
                    break;
                }
                result += `${Number(search(data.uc, query))}\n`;
            }
      
            // Muestra el resultado en un contenedor específico
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.textContent = 'Resultado:\n' + result;
      
            // Opcional: Muestra casos especiales en el mismo contenedor o en otro
            resultContainer.innerHTML += '<p>Casos especiales detectados: ' + data.specialCases.join(', ') + '</p>';
        });
    };

    return /*html*/`
        <h1 class="text-3xl font-bold">Bienvenido a juroQueFui</h1>
        <p class="text-xl my-5">
            La plataforma de gestión de asistencia y tareas para ayudantes
        </p>
        <form id="studentsForm">
            <TextArea textAreaId="studentsTextArea"></TextArea>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        <div id="resultContainer"></div>
    `;
}

load(Home, 'Home');
