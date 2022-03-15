// jshint esversion: 6

const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaTarefa(textoInput) {
  const item = criaLi();
  item.innerText = textoInput;
  tarefas.appendChild(item);
  botaoApagar(item);
}

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value) return;
  else {
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

inputTarefa.addEventListener("keypress", (e) => {
  if (!inputTarefa.value) return;
  else if (e.key === "Enter") {
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

function botaoApagar(li) {
  li.innerText += " ";
  const botao = document.createElement("button");
  botao.innerText = "Apagar";
  botao.setAttribute("class", "apagar");
  li.appendChild(botao);
}

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
}
