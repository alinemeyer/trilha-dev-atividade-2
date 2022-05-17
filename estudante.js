var nomeAluno = "John Doe";
var idadeAluno = 20;
var nota1 = 7;
var nota2 = 8.5;
var nota3 = 6.9;
var mediaAluno = (nota1 * 4 + nota2 * 3 + nota3 * 3) / (4 + 3 + 3);

console.log(nomeAluno);
console.log(idadeAluno);
console.log(mediaAluno);

if(mediaAluno >= 7){
    console.log("Aluno Aprovado");
  } 
if(mediaAluno == 0){
    console.log("Aluno zerou");
}
if(mediaAluno < 7 && mediaAluno >=1) {
    console.log("Aluno reprovado");
}

