let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "Learn to HTML",
    "Learn to CSS",
    "Learn to JavaScript",
    "Learn to React",
    "Learn to mySQL",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}
//resey typing
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력함수
function dynamic(randomArr) {
  console.log(randomArr);
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString);

console.log(selectString);
console.log(selectStringArr);
//cursor blinking effect//
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
