let cor = {};

function criarVariaveisCss() {
  const nomeDaCor = document.querySelector('#nome').value;
  const hDaCor = document.querySelector('#h').value;
  const sDaCor = document.querySelector('#s').value;
  const lDaCor = document.querySelector('#l').value;
  const containerDeCodigo = document.querySelector('code');
  let corHS = `--cor-${nomeDaCor}-hs: ${hDaCor}, ${sDaCor}%;`;
  let corL = `--cor-${nomeDaCor}-l: ${lDaCor}%;`;

  let estilosCssProntos = `
    //${nomeDaCor}
    ${corHS} \n\
    ${corL} \n\
    --cor-${nomeDaCor}-hsl: var(--cor-${nomeDaCor}-hs), var(--cor-${nomeDaCor}-l); \n\
    --cor-${nomeDaCor}: hsl(var(--cor-${nomeDaCor}-hsl)); \n\
    --cor-${nomeDaCor}-escura: hsla(var(--cor-${nomeDaCor}-hs), calc(var(--cor-${nomeDaCor}-l) - 10%)); \n\
    --cor-${nomeDaCor}-clara: hsla(var(--cor-${nomeDaCor}-hs), calc(var(--cor-${nomeDaCor}-l) + 10%)); \n\
    --cor-${nomeDaCor}-90: hsla(var(--cor-${nomeDaCor}-hsl), 90%); \n\
    --cor-${nomeDaCor}-80: hsla(var(--cor-${nomeDaCor}-hsl), 80%); \n\
    --cor-${nomeDaCor}-70: hsla(var(--cor-${nomeDaCor}-hsl), 70%); \n\
    --cor-${nomeDaCor}-60: hsla(var(--cor-${nomeDaCor}-hsl), 60%); \n\
    --cor-${nomeDaCor}-50: hsla(var(--cor-${nomeDaCor}-hsl), 50%); \n\
    --cor-${nomeDaCor}-40: hsla(var(--cor-${nomeDaCor}-hsl), 40%); \n\
    --cor-${nomeDaCor}-30: hsla(var(--cor-${nomeDaCor}-hsl), 30%); \n\
    --cor-${nomeDaCor}-20: hsla(var(--cor-${nomeDaCor}-hsl), 20%); \n\
    --cor-${nomeDaCor}-10: hsla(var(--cor-${nomeDaCor}-hsl), 10%); \n\
  `
  containerDeCodigo.textContent = estilosCssProntos;
}


