const input = document.getElementById("input-field");
const list = document.getElementById("list-selector");

function todoTask() {
  
  if (input.value === "") {
    console.log("cli")
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
    
  }
  input.value = "";
}

const id = list.addEventListener(
  "click",
  function (e) {
    //let res = e.target.classList.toggle("check");
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
    } else if (e.target.tagName === "SPAN") {
      const el = e.target.parentElement;
      if (el.classList.contains("check")) {
        e.target.parentElement.remove();
      }
    }
    //console.log(res);
  },
  false
);
