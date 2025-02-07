import employeesData from './employeesData.js';
import templates from './emailTemplates.js';

document.addEventListener("DOMContentLoaded", () => {
  const departmentList = document.getElementById("department-list");
  const employeeTableSection = document.getElementById("employee-table-section");
  const searchInput = document.getElementById("search-input");

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
            <button class="copy-btn" data-signature="${signatureBase64}">Copiar</button>
            <button class="download-btn" data-signature="${signatureBase64}">Descargar</button>
          </div>
        </div>
      `;
    });

    gridHTML += `</div>`;
    employeeTableSection.innerHTML = gridHTML;

    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", handleCopySignature);
    });

    document.querySelectorAll(".download-btn").forEach((btn) => {
      btn.addEventListener("click", handleDownloadSignature);
    });
  }

  function generateSignature(department, employee) {
    let template = templates[department];
    template = template.replace("{{NAME}}", employee.name);
    template = template.replace("{{EMAIL}}", employee.email);
    template = template.replace("{{POSITION}}", employee.position);
    template = template.replace("{{IMAGE}}", employee.image);
    return template;
  }

  function handleCopySignature(event) {
    const signatureBase64 = event.target.dataset.signature;
    const signatureHTML = atob(signatureBase64);

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = signatureHTML;
    tempContainer.style.position = "absolute";
    tempContainer.style.left = "-9999px";
    document.body.appendChild(tempContainer);

    const range = document.createRange();
    range.selectNodeContents(tempContainer);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      const success = document.execCommand("copy");
      if (success) {
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
});
