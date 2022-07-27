let listaNotas = []
let soma = 0
let media = 0

function adicionar()
{
    soma = 0;
    let nota = document.getElementById("nota").value
    if(nota == "")
    {
        alert("Preencha o campo!")
    }
    else
    {
        listaNotas.push(nota)
        for(let i = 0; i < listaNotas.length; i++)
        {
            soma += parseFloat(listaNotas[i])
        }
        document.getElementById("nota").value = ""
        document.getElementById("tNotas").innerText = listaNotas.join(" , ")
        document.getElementById("addNotas").innerText = listaNotas.join(" , ")
        maiorNota()
        menorNota()
        calcMedia()
        situacaoAluno()
    }
}

function maiorNota()
{
    maior = Math.max(...listaNotas)
    document.getElementById("maiorNota").innerText = maior
}

function menorNota()
{
    menor = Math.min(...listaNotas)
    document.getElementById("menorNota").innerText = menor

    return menor
}

function calcMedia()
{
    media =  (soma / listaNotas.length)
    document.getElementById("media").innerText = media.toFixed(1).replace(".", ",")
}

function novaMedia()
{
    let novaMedia = (soma / listaNotas.length)
    document.getElementById("media").innerText = novaMedia.toFixed(1).replace(".", ",")
}

function substituiNota()
{
    let novaNota = document.getElementById("novaNota").value
    novaNota = parseFloat(novaNota)
    let menor = 11
    for(let i = 0; i < listaNotas.length; i++)
    {
        if(listaNotas[i] < menor)
        {
            menor = listaNotas[i]
            indice = i
        }
        novaMedia()
    }
    listaNotas[indice] = novaNota
    document.getElementById("substitutiva").innerText = listaNotas[indice]
    document.getElementById("tNotas").innerText = listaNotas.join(" , ")
}

function situacaoAluno()
{
    let situacao = document.getElementById("situacao")

    if(media < 4)
    {
        situacao.innerText = "ALUNO REPROVADO"
        situacao.style.color = "red"
    }
    else if(media >= 4 && media < 7)
    {
        situacao.innerText = "RECUPERAÇÃO"
        situacao.style.color = "yellow"
    }
    else
    {
        situacao.innerText = "APROVADO"
        situacao.style.color = "green"
    }
}