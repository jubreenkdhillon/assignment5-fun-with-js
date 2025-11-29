function makeBigger() {
  alert("Hello, world!");
  document.getElementById("textBox").style.fontSize = "24px";
}

function changeStyle() {
  alert("Style changed!");

  let text = document.getElementById("textBox");
  let fancy = document.getElementById("fancy");

  if (fancy.checked) {
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
  } else {
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
  }
}

function mooify() {
  let textArea = document.getElementById("textBox");
  let str = textArea.value.toUpperCase();

  if (!str.endsWith(".")) {
    str += ".";
  }

  let sentences = str.split(".");

  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i].trim();

    if (sentence.length > 0) {
      let words = sentence.split(" ");
      words[words.length - 1] += "-Moo";
      sentence = words.join("_");
      sentences[i] = sentence;
    }
  }

  textArea.value = sentences.join(". ");
}
