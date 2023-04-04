var meds = {};

function addMed() {
    event.preventDefault();
    var newMed = {
        "medName": document.getElementById("medName").value,
        "medQtd": document.getElementById("medQnt").value,
        "medPrice": document.getElementById("medPrice").value,
    }
    resetForm();
    meds.push(newMed);
    renderDiv();
}
function renderDiv(){
  let div = document.getElementById("container-new-med");
  div.innerHTML =  `<p>${newMed.medName}</p>
  <p>${newMed.medQtd} unidades disponíveis</p>
  <p>${newMed.medPrice} Reais por Unidade</p>;`
}

function resetForm(){
  document.getElementById("medName").value = "";
  document.getElementById("medQnt").value = "";
  document.getElementById("medPrice").value = "";
}

renderDiv();