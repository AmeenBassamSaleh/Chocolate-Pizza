'use strict';
// let form =document.getElementById('list');
// form.addEventListener('change',strictLine);
// function strictLine(event){
//   for (let i=1 ;i<=12;i++){
//     let checkBox1 = document.getElementById('checkbox'+i);
//     let checkbox = document.getElementById('checkbox'+i);
//     if(checkBox1.checked){
//       checkbox.style.textDecoration='line-through';
//       console.log(checkbox);
//     }
//     else
//     {checkbox.style.textDecoration='unset';
//     };};
// }
//////////////////////////////////////////////////////////////////////
let my = document.getElementById('list1');
my.addEventListener('change', strictLine);
function strictLine(event) {

  console.log(checkbox1);

  for (let i =1 ; i <= 12; i++) {
    let checkbox1 = document.getElementById('checkbox' + i);
    let check1 = document.getElementById('check'+i);
    if (checkbox1.checked) {
      check1.style.textDecoration = 'line-through';
      console.log(check1);
    }
    else {
      check1.style.textDecoration = 'unset';
    }
  }


}
// }

