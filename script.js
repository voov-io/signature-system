import employeesData from './employeesData.js';
import templates from './emailTemplates.js';

document.addEventListener("DOMContentLoaded", () => {
    const departmentList = document.getElementById("department-list");
    const employeeTableSection = document.getElementById("employee-table-section");
    const searchInput = document.getElementById("search-input");
  
    // Variable para guardar el departamento actual seleccionado
    let currentDepartment = "";
  


  
    // 3. Escuchamos los clics en la lista de departamentos
    departmentList.addEventListener("click", (event) => {
      const departmentId = event.target.id;
    
      // Validar si existe un template para este departamento
      if (!templates[departmentId]) {
        console.warn(`No se encontró plantilla para el departamento: ${departmentId}`);
        return;
      }
    
      currentDepartment = departmentId; // Actualizamos el departamento actual
      searchInput.value = ""; // Limpiamos el input de búsqueda
      displayEmployees(); // Mostramos la tabla de empleados con el template correspondiente
    });
    
    function generateSignature(department, employee) {
      // Validar que exista un template para el departamento
      if (!templates[department]) {
        console.error(`No se encontró plantilla para el departamento: ${department}`);
        return `<p>Plantilla no disponible</p>`;
      }
    
      let template = templates[department];
    
      // Reemplazar placeholders con los datos del empleado
      template = template.replace("{{NAME}}", employee.name || "Nombre no disponible");
      template = template.replace("{{EMAIL}}", employee.email || "Correo no disponible");
      template = template.replace("{{POSITION}}", employee.position || "Posición no disponible");
      template = template.replace("{{IMAGE}}", employee.image || "https://via.placeholder.com/150");
    
      return template;
    }
    
  
    // 4. Escuchamos el input en el buscador (filtra por nombre dentro del departamento actual)
    searchInput.addEventListener("input", () => {
      displayEmployees();
    });
  
    /**
     * Muestra la tabla de colaboradores filtrados por:
     *   - El departamento actual (currentDepartment)
     *   - El texto de búsqueda en searchInput (si aplica)
     */
    function displayEmployees() {
      if (!currentDepartment) {
        employeeTableSection.innerHTML = "<p>Selecciona un departamento.</p>";
        return;
      }
    
      let filteredEmployees = employeesData.filter(
        (emp) => emp.department === currentDepartment
      );
    
      const searchTerm = searchInput.value.toLowerCase().trim();
      if (searchTerm) {
        filteredEmployees = filteredEmployees.filter((emp) =>
          emp.name.toLowerCase().includes(searchTerm)
        );
      }
    
      if (filteredEmployees.length === 0) {
        employeeTableSection.innerHTML = `<p>No se encontraron colaboradores en "${currentDepartment}" con ese criterio de búsqueda.</p>`;
        return;
      }
    
      let tableHTML = `<table class="employee-table"><tbody>`;
    
      filteredEmployees.forEach((emp) => {
        const signatureHTML = generateSignature(currentDepartment, emp);
        const signatureBase64 = btoa(signatureHTML);
    
        tableHTML += `
          <tr>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
            <td>
              <button class="copy-btn" data-signature="${signatureBase64}">Copiar</button>
              <button class="download-btn" data-signature="${signatureBase64}">Descargar</button>
            </td>
          </tr>
        `;
      });
    
      tableHTML += `</tbody></table>`;
      employeeTableSection.innerHTML = tableHTML;
    
      // Agregar listeners a los botones
      const copyButtons = document.querySelectorAll(".copy-btn");
      copyButtons.forEach((btn) => {
        btn.addEventListener("click", handleCopySignature);
      });
    
      const downloadButtons = document.querySelectorAll(".download-btn");
      downloadButtons.forEach((btn) => {
        btn.addEventListener("click", handleDownloadSignature);
      });
    }
    
  
    /**
     * Reemplaza placeholders en la plantilla según los datos del colaborador
     */
    function generateSignature(department, employee) {
      let template = templates[department];
      template = template.replace("{{NAME}}", employee.name);
      template = template.replace("{{EMAIL}}", employee.email);
      template = template.replace("{{POSITION}}", employee.position);
      template = template.replace("{{IMAGE}}", employee.image);
      return template;
    }
  
    /**
     * Maneja el copiado al portapapeles usando navigator.clipboard
     */
    function handleCopySignature(event) {
      const signatureBase64 = event.target.dataset.signature;
      const signatureHTML = atob(signatureBase64); // Convertimos Base64 a texto HTML
    
      // Crear un contenedor temporal para el contenido HTML
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = signatureHTML;
      tempContainer.style.position = "absolute";
      tempContainer.style.left = "-9999px"; // Fuera de la vista
      document.body.appendChild(tempContainer);
    
      // Seleccionar el contenido del contenedor temporal
      const range = document.createRange();
      range.selectNodeContents(tempContainer);
    
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    
      try {
        // Copiar el contenido seleccionado al portapapeles
        const success = document.execCommand("copy");
        if (success) {
          // Mostramos SweetAlert de éxito
          Swal.fire({
            title: "Copiado",
            text: "¡La firma se ha copiado al portapapeles con estilos!",
            icon: "success",
            confirmButtonText: "OK"
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "No se pudo copiar la firma al portapapeles.",
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      } catch (err) {
        console.error("Error copying signature: ", err);
        Swal.fire({
          title: "Error",
          text: "Ocurrió un error al copiar la firma.",
          icon: "error",
          confirmButtonText: "OK"
        });
      }
    
      // Limpiar la selección y eliminar el contenedor temporal
      selection.removeAllRanges();
      document.body.removeChild(tempContainer);
    }
    
  
    /**
     * Maneja la descarga de la firma como un archivo HTML
     */
    function handleDownloadSignature(event) {
      const signatureBase64 = event.target.dataset.signature;
      const signatureHTML = atob(signatureBase64);
  
      // Creamos un blob con el contenido HTML
      const blob = new Blob([signatureHTML], { type: "text/html" });
      const url = URL.createObjectURL(blob);
  
      // Creamos un link <a> temporal para forzar la descarga
      const a = document.createElement("a");
      a.href = url;
      a.download = "email-signature.html"; // Nombre del archivo
      document.body.appendChild(a);
      a.click();
  
      // Limpieza
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  });
  