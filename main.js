function clickBtn() {
  let paragraph = document.getElementById('textarea').value;
  findLongestWord(paragraph);
}

function findLongestWord(paragraph) {
  const array = paragraph.split(' ');
  var letterCount = 0;
  var word = '';
  let resultado = document.getElementById('resultado');

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > letterCount) {
      letterCount = array[i].length;
      word = array[i];
      resultado.innerHTML = `La palabra más larga es <span>${word}</span>, que tiene ${letterCount} letras`;
    } else if (array[i].length == 0) {
      resultado.innerHTML = `No has escrito nada .. DUH`;
    }
  }
}
