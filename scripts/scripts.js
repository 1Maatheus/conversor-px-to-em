const input = document.querySelector(".input");
const result = document.querySelector(".main-result");
const btnConvertor = document.getElementById("btn-convertor");

function pxConvertor() {
  let px = 16;

  result.textContent = input.value / px;
}
input.addEventListener("input", pxConvertor);
