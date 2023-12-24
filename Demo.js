let form=document.querySelector("form");
let main=document.querySelector(".main")
form.addEventListener("submit",(event)=>{

  let editData=()=>{
    let userData=JSON.parse(localStorage.getItem("userDetails"))??[]
    document.getElementById('number').value=userData.number;
    document.getElementById('expense').value=userData.expense
    document.getElementById('choose').value=choose;
}

  let number=event.target.number.value;
  let expense=event.target.expense.value;
  let choose=event.target.choose.value;
  let chekStatus=0;
  let userData=JSON.parse(localStorage.getItem("userDetails"))??[]
  for(let v of userData){
    if(v.choose==choose){
      chekStatus=1;
      break;
    }
  }
  if(chekStatus==1){
    alert("Item already exist")
  }
  else{
  userData.push({
    'number':number,
    'expense':expense,
    'choose':choose
  })
}
  localStorage.setItem("userDetails",JSON.stringify(userData));
  event.target.reset();
  displayData();
  event.preventDefault();
});


let displayData=()=>{
  let userData=JSON.parse(localStorage.getItem("userDetails"))??[]
  let finalData='';
  userData.forEach((element,i) => {
    finalData+=`<div class="item">
    <li>${element.number}, ${element.expense}, ${element.choose}<button onclick='removeData(${i})'>Remove</button>
    <button onclick='editData()'>Edit</button>
    </div>`
  });
  main.innerHTML=finalData;
}
let removeData=(index)=>{
  let userData=JSON.parse(localStorage.getItem("userDetails"))??[]
  userData.splice(index,1);
  localStorage.setItem("userDetails",JSON.stringify(userData));
  displayData();
}

displayData();