document.getElementById('form-contato').addEventListener('submit', function(event) {
  event.preventDefault();

  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;

  var tabelaContatos = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];
  var novaLinha = tabelaContatos.insertRow();

  var colunaNome = novaLinha.insertCell(0);
  colunaNome.textContent = nome;

  var colunaTelefone = novaLinha.insertCell(1);
  colunaTelefone.textContent = telefone;

  document.getElementById('form-contato').reset();
});
