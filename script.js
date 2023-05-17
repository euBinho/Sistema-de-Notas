const form = document.getElementById("form");
const listaAlunos = document.getElementById("lista-alunos");

let alunos = [];

function cadastrarAluno(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  const media = (nota1 + nota2 + nota3) / 3;
  let resultado;
  let classeResultado;
  
  if (media >= 7) {
    resultado = "APROVADO";
    classeResultado = "aprovado";
  } else {
    resultado = "REPROVADO";
    classeResultado = "reprovado";
  }

  const aluno = {
    nome,
    nota1,
    nota2,
    nota3,
    media,
    resultado,
    classeResultado
  };
  
  alunos.push(aluno);
  
  mostrarAlunos();
  
  form.reset();
}


function mostrarAlunos() {
  listaAlunos.innerHTML = "";

  alunos.forEach(function (aluno) {
    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.innerText = aluno.nome;
    linha.appendChild(colunaNome);

    const colunaNota1 = document.createElement("td");
    colunaNota1.innerText = aluno.nota1.toFixed(1);
    linha.appendChild(colunaNota1);

    const colunaNota2 = document.createElement("td");
    colunaNota2.innerText = aluno.nota2.toFixed(1);
    linha.appendChild(colunaNota2);

    const colunaNota3 = document.createElement("td");
    colunaNota3.innerText = aluno.nota3.toFixed(1);
    linha.appendChild(colunaNota3);

    const colunaTotal = document.createElement("td");
    const total = aluno.nota1 + aluno.nota2 + aluno.nota3;
    colunaTotal.innerText = total.toFixed(1);
    linha.appendChild(colunaTotal);

    const colunaResultado = document.createElement("td");
    colunaResultado.innerText = aluno.resultado;
    colunaResultado.classList.add(aluno.classeResultado);
    linha.appendChild(colunaResultado);

    listaAlunos.appendChild(linha);
  });
}

form.addEventListener("submit", cadastrarAluno);
