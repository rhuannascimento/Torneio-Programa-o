const showLists = document.querySelector('#btn');
const list = document.querySelector('.list');
list.style.display = "none";

showLists.addEventListener('click', () =>{
    
    if(list.style.display=="none"){
        list.style.display='flex';
    }else{
        list.style.display='none';
    }

} )