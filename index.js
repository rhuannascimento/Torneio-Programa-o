const showLists = document.querySelector('#btn');
const add = document.querySelector('#add');
const list = document.querySelector('.list');
list.style.display = "none";

add.addEventListener('click', () =>{

    const name = document.querySelector('#name');
    const age = document.querySelector('#age');
    const senior = document.querySelector('#seniorList');
    const master = document.querySelector('#masterList');
    const junior = document.querySelector('#juniorList');
 
     const listItem = document.createElement("li");
 
     listItem.textContent = `${name.value}, ${age.value}` 
 
     if(name.value != "" && age.value != ""){
         if(age.value < 18){
             junior.appendChild(listItem);
         }else if(age.value >= 18 && age.value < 40){
             master.appendChild(listItem);
         }else{
             senior.appendChild(listItem);
         }
     }else{
         window.alert('Algum campo está incompleto')
     }
 
     name.value="";
     age.value="";
     name.focus();
 
 } )


showLists.addEventListener('click', () =>{
    
    if(list.style.display=="none"){
        list.style.display='flex';
    }else{
        list.style.display='none';
    }

} )