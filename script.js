const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como produtor agrícola, quais serão seus principais produtos?",
        alternativas: [
            {
                texto: "Proteínas, grãos e hortaliças.",
                
            },
            {
                texto: "Frutas e produtos florestais.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em qual região você produzirá?",
        alternativas: [
            {
                texto: "Área de Guarapuava, grande produtor de batata inglesa, milho e cevada.",
                
            },
            {
                texto: "Área de Londrina, grande produtora de soja, milho e frango de corte.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você viaja alguns dias para produzir em Curitiba. O que você produz?",
        alternativas: [
            {
                texto: "Algodão, amendoim e rami.",
               
            },
            {
                texto: "Mamona e cana-de-açúcar.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Acidentes acontecem e vocÊ acaba perdendo grande parte de sua produção, entrando em prejuízo. O que você faz?",
        alternativas: [
            {
                texto: "Busco amparo em contratos de seguro agrícola.",
                
            },
            {
                texto: "Penso racionalmente, e recomeço minha produção.",
                afirmacao: " "
            }
        ]
    },
        
        ]
   

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você viveu alguns momentos como um produtor agricóla do Paraná, como foi esta experiência? Saiba que atualmente, o agro já passou por diversas mudanças, e está cada vez mais tecnológico. Se você se interessou, busque pesquisar mais sobre!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
