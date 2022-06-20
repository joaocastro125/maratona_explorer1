const elementResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const Respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decidamente asssim.",
    "Não conte com isso. ",
    "Sem dúvidas!",
    "pergunte novamente mais tarde.",
    "Sim,definitamente!",
    "Minha resposta é não",
    "Você pode contar com isso.",
    "Melhor não te dizer agora. ",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possivel prever agora.",
    "Persceptiva boa.",
    "Persceptiva não são tão boas.",
    "sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."

]






function fazerPergunta() {
    const totalResponstas = Respostas.length

    if (inputPergunta.value == "") {
        alert("Por favor responsa a pergunta?")
        return
    }
    buttonPerguntar.setAttribute("disabled", true)
    const pergunta = "<div>" + inputPergunta.value + "</div>"
    const numeroAleatorio = Math.floor(Math.random() * totalResponstas)
    console.log(Respostas[numeroAleatorio])

    elementResposta.innerHTML = pergunta + Respostas[numeroAleatorio]

    elementResposta.style.opacity = 1;

    console.log(elementResposta)
    setTimeout(() => {
        elementResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)


}

