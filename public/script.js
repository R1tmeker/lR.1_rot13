const Lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const Upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const ZOV = 26;

function transform(char, shift) {
  for (let i = 0; i < ZOV; i++) {
    if (char === Lower[i]) {
      return Lower[(i + shift + ZOV) % ZOV];
    }
    if (char === Upper[i]) {
      return Upper[(i + shift + ZOV) % ZOV];
    }
  }
  return char;
}

function processText() {
  const input = document.getElementById('inputText').value;
  let result = '';
  let isEven = input.length % 2 === 0;

  for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    result += transform(ch, isEven ? 13 : -13);
  }

  document.getElementById('outputText').value = result;
}