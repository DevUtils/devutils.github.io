const mod = (dividendo, divisor) => {
  return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
};

const random = (n) => {
  return Math.round(Math.random() * n);
};

const formataCNPJ = (cnpj, formata) => {
  if (formata) {
    var parte1 = cnpj.substring(0, 2);
    var parte2 = cnpj.substring(2, 5);
    var parte3 = cnpj.substring(5, 8);
    var parte4 = cnpj.substring(8, 12);
    var parte5 = cnpj.substring(12, 15);
    cnpj = parte1 + '.' + parte2 + '.' + parte3 + '/' + parte4 + '-' + parte5;
  }
  return cnpj;
};

const generate = (dots) => {
  var n = 9;
  var n1 = random(n);
  var n2 = random(n);
  var n3 = random(n);
  var n4 = random(n);
  var n5 = random(n);
  var n6 = random(n);
  var n7 = random(n);
  var n8 = random(n);
  var n9 = 0;
  var n10 = 0;
  var n11 = 0;
  var n12 = 1;

  // cria DV 1
  let d1 =
    n12 * 2 +
    n11 * 3 +
    n10 * 4 +
    n9 * 5 +
    n8 * 6 +
    n7 * 7 +
    n6 * 8 +
    n5 * 9 +
    n4 * 2 +
    n3 * 3 +
    n2 * 4 +
    n1 * 5;
  d1 = 11 - mod(d1, 11);
  d1 = d1 >= 10 ? 0 : d1;

  // cria DV 2
  let d2 =
    d1 * 2 +
    n12 * 3 +
    n11 * 4 +
    n10 * 5 +
    n9 * 6 +
    n8 * 7 +
    n7 * 8 +
    n6 * 9 +
    n5 * 2 +
    n4 * 3 +
    n3 * 4 +
    n2 * 5 +
    n1 * 6;
  d2 = 11 - mod(d2, 11);
  d2 = d2 >= 10 ? 0 : d2;

  const cnpj =
    '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + d1 + d2;
  const retorno = dots ? formataCNPJ(cnpj, true) : formataCNPJ(cnpj, false);

  return retorno;
};

export default generate;
