// seleciona o formulário HTML
const form = document.querySelector('#my-form');

// adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(e) {
  e.preventDefault(); // evita que a página seja recarregada

  // captura os valores dos campos do formulário
  const name = form.elements['name'].value;
  const qnt = form.elements['qnt'].value;
  const price = form.elements['price'].value;
  const classe = form.elements['classe'].value;

  // cria um objeto com os valores capturados
  const formData = { name, qnt, price, classe };
  console.log(formData);

  // armazena o objeto em localStorage para acessá-lo na nova página
  localStorage.setItem('formData', JSON.stringify(formData));

  // redireciona para a nova página
  window.location.href = 'sucess.html';
});

// função para exibir o resumo dos dados na nova página
function showSummary() {
  // recupera os dados armazenados em localStorage
  const formData = JSON.parse(localStorage.getItem('formData'));

  // exibe os dados na nova página
  document.querySelector('#name-summary').textContent = `Nome: ${formData.name}`;
  document.querySelector('#qnt-summary').textContent = ` ${formData.qnt} unidades disponíveis`;
  document.querySelector('#price-summary').textContent = `${formData.price} reais por unidade`;
}

// chama a função showSummary quando a nova página é carregada
window.onload = showSummary;

function reset() {
  document.getElementById("fname").value = "";
  document.getElementById("fqtd").value = "";
  document.getElementById("fclass").value = "";
}
