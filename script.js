/// variaveis de controle de interface:
let seuVotoPara = document.querySelector('.d-1-1 span');  /// seuVotoPara.style.display = 'none';
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

/// variaveis de controle de ambiente:
let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];

function comecarEtapa() {
  let etapa = etapas[etapaAtual];     /// aqui estou pegando o primeiro item do array, que estã na posição zero;

  let numeroHtml = '';
  numero = '';  /// para zerar o numero quando apertar no corrige;
  votoBranco = false;

    for(let i = 0; i < etapa.numeros; i++) {    /// irá repetir até 5, pois o etapa.numeros no etapas.js é 5, estou puxando os arquivos do json;
      if (i === 0) {
        numeroHtml += '<div class="numero pisca"></div>';
      } else {
      numeroHtml += '<div class="numero"></div>';     /// aqui ele irá criar 5 vezes essa div no html;
      }
    }

    seuVotoPara.getElementsByClassName.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';  /// para a descrição ficar sem nada;
    aviso.style.display = 'none'; /// para sumir da tela;
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}

function atualizaInterface() {
  // alert('Finalizou de digitar o voto !');
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((itemCandidato) => {
    if(itemCandidato.numero === numero) {   /// o itemCandidato é cada candidato do json e estou vendo se o numero é igual ao numero que digitei nos botoes;
      return true;
    } else {
      return false;
    } 
  });
  if(candidato.length > 0) {    /// aqui é se ele achou um candidato, pois o Array será maior que zero, posso testar no console.log(candidato);
    candidato = candidato[0];    /// zero pois é o que achei com o número;
    seuVotoPara.getElementsByClassName.display = 'block';
    aviso.style.display = 'block';

    //descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}<br/>Vice: ${candidato.vice}`;    /// br para pular linha;

    let fotosHtml = '';
    for(let i in candidato.fotos) {
      if(candidato.fotos[i].small) {
        fotosHtml += `<div class="d-1-image small"><img src="img/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}<br/>Vice: ${candidato.vice}`; 
      } else {
        fotosHtml += `<div class="d-1-image"><img src="img/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`; 
      }
    }

    lateral.innerHTML = fotosHtml;

  } else {  /// else se não achou o candidato, se não tem o numero igual
    seuVotoPara.getElementsByClassName.display = 'block';
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
  }
}



function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca');   /// se não tiver, essa variável irá me retornar 'null', que não existe;
  if (elNumero !== null) {   ///   '!=='  isso significa se o numero for diferente de null; /// elNumero de ElementoNumero;
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;

    elNumero.classList.remove('pisca');   /// remove a classe do item que está digitando o numero;
    if (elNumero.nextElementSibling !== null) {   //// se o proximo elemento, no caso, o próximo numero for diferente de null, se ele existir, irá ter o próximo então;
      elNumero.nextElementSibling.classList.add('pisca');   /// adicionando a classe 'pisca' no próximo elemento, no caso, numero seguinte;
    } else {
      atualizaInterface();
    }

  }

  // alert("Clicou em "+n);
}

function branco() {
  // alert('clicou em BRANCO!');
  numero = '';
  votoBranco = true;

  seuVotoPara.getElementsByClassName.display = 'block';
  aviso.style.display = 'block';
  numeros.innerHTML = ''; /// removendo os numeros
  descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
  lateral.innerHTML = '';
}

function corrige() {
  // alert('clicou em CORRIGE!');
  comecarEtapa();
}

function confirma() {
  // alert('clicou em CONFIRMA!');
  let etapa = etapas[etapaAtual];

  let votoConfirmado = false;

  if(votoBranco === true) {
    votoConfirmado = true;
    // console.log('Confirmando como BRANCO...');
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: 'branco',
    })
  } else if(numero.length === etapa.numeros) {    /// se etapa.numeros for igual a 5;
    votoConfirmado = true;
    // console.log("Confirmando como "+numero);
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero,
    })
  }

  if(votoConfirmado) {    /// se votoConfirmado for true;
    etapaAtual++;  /// ela é zero, aí aqui ela fica com 1;
    if(etapas[etapaAtual] !== undefined) {  /// se etapas[etapaAtual] for diferente de undefined, ou seja, que essa etapa 1 exista;
      comecarEtapa();
    } else {
      document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';
      console.log(votos);  /// isso aqui é do array que eu criei para armazenar os votos;
    }
  }

}



comecarEtapa();
