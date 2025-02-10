import employeesData from './employeesData.js';
import templates from './emailTemplates.js';



let employees = [...employeesData];

console.log(employeesData);

document.addEventListener("DOMContentLoaded", () => {
  const departmentList = document.getElementById("department-list");
  const employeeTableSection = document.getElementById("employee-table-section");
  const searchInput = document.getElementById("search-input");
  const addSignatureBtn = document.createElement("button");
  addSignatureBtn.textContent = "Add New Signature";
  addSignatureBtn.classList.add("add-signature-btn");
  document.body.insertBefore(addSignatureBtn, document.body.firstChild);

  let currentDepartment = "";

  departmentList.addEventListener("click", (event) => {
    const departmentId = event.target.id;
    if (templates[departmentId]) {
      currentDepartment = departmentId;
      searchInput.value = "";
      displayEmployees();
    }
  });

  searchInput.addEventListener("input", () => {
    displayEmployees();
  });

  addSignatureBtn.addEventListener("click", () => {
    showEditForm();
  });

  function displayEmployees() {

    if (!currentDepartment) {
      employeeTableSection.innerHTML = "<p>Selecciona un departamento.</p>";
      return;
    }

    let filteredEmployees = employees.filter(
      (emp) => emp.department.toLowerCase() === currentDepartment
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

    let gridHTML = `<div class="signature-grid">`;

    filteredEmployees.forEach((emp) => {
      const signatureHTML = generateSignature(currentDepartment, emp);
      const signatureBase64 = btoa(signatureHTML);

      gridHTML += `
        <div class="signature-card">
          <div class="signature-content">
            ${signatureHTML}
          </div>
          <div class="signature-actions">
            <button class="edit-btn" data-id="${emp.id}">Editar</button>
            <button class="delete-btn" data-id="${emp.id}">Eliminar</button>
            <button class="copy-btn" data-signature="${signatureBase64}">Copiar</button>
            <button class="download-btn" data-signature="${signatureBase64}">Descargar</button>
          </div>
        </div>
      `;
    });

    gridHTML += `</div>`;
    employeeTableSection.innerHTML = gridHTML;

    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", handleEdit);
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", handleDelete);
    });

    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", handleCopySignature);
    });

    document.querySelectorAll(".download-btn").forEach((btn) => {
      btn.addEventListener("click", handleDownloadSignature);
    });
    

  }

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

  function handleDownloadSignature(event) {
    const signatureBase64 = event.target.dataset.signature;
    const signatureHTML = atob(signatureBase64);

    const blob = new Blob([signatureHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "email-signature.html";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function generateSignature(department, employee) {
    let template = templates[department];
    template = template.replace("{{NAME}}", employee.name);
    template = template.replace("{{EMAIL}}", employee.email);
    template = template.replace("{{POSITION}}", employee.position);
    template = template.replace("{{IMAGE}}", employee.image);
    return template;
  }

  function handleEdit(event) {
    const employeeId = event.target.dataset.id;
    const employee = employees.find(emp => emp.id == employeeId);
    showEditForm(employee);
  }

  function handleDelete(event) {
    const employeeId = event.target.dataset.id;
    employees = employees.filter(emp => emp.id != employeeId);
    saveToLocalStorage();
    displayEmployees();
    Swal.fire("Eliminado", "La firma ha sido eliminada.", "success");
  }
  

  function showEditForm(employee = {}) {
    Swal.fire({
      title: employee.id ? "Editar Firma" : "Añadir Nueva Firma",
      html: `
        <input id="edit-name" class="swal2-input" value="${employee.name || ''}" placeholder="Nombre">
        <input id="edit-email" class="swal2-input" value="${employee.email || ''}" placeholder="Correo">
        <input id="edit-position" class="swal2-input" value="${employee.position || ''}" placeholder="Posición">
        <select id="edit-department" class="swal2-input">
          <option value="skillcloud">Skillcloud</option>
          <option value="management">Management</option>
          <option value="executive">Executive</option>
          <option value="marketing">Marketing</option>
          <option value="isa">ISA</option>
          <option value="it">IT</option>
        </select>
        <input type="file" id="edit-image" class="swal2-input" accept="image/*">
      `,
      confirmButtonText: "Guardar",
      showCancelButton: true,
      preConfirm: () => {
        return new Promise((resolve) => {
          const fileInput = document.getElementById("edit-image");
          const file = fileInput.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              resolve({
                name: document.getElementById("edit-name").value,
                email: document.getElementById("edit-email").value,
                position: document.getElementById("edit-position").value,
                department: document.getElementById("edit-department").value,
                image: reader.result
              });
            };
            reader.readAsDataURL(file);
          } else {
            resolve({
              name: document.getElementById("edit-name").value,
              email: document.getElementById("edit-email").value,
              position: document.getElementById("edit-position").value,
              department: document.getElementById("edit-department").value,
              image: employee.image || ""
            });
          }
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        if (employee.id) {
          updateEmployee(employee.id, result.value);
        } else {
          addNewEmployee(result.value);
        }
      }
    });
  }


    function updateEmployee(id, updatedData) {
      const index = employees.findIndex(emp => emp.id == id);
      if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedData };
        saveToLocalStorage();
        displayEmployees();
        Swal.fire("Éxito", "Firma actualizada correctamente!", "success");
      }
    }
    
  

  function addNewEmployee(newEmployee) {
    newEmployee.id = Date.now();
    employees.push(newEmployee);
    saveToLocalStorage();
    displayEmployees();
    Swal.fire("Éxito", "Nueva firma añadida!", "success");
  }

  function saveToLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  function loadFromLocalStorage() {
    const storedData = localStorage.getItem("employees");
    if (storedData) {
      employees = JSON.parse(storedData);
    }
  }
  loadFromLocalStorage();
  displayEmployees();
});
