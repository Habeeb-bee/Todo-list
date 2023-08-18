
// // delete list
// const del = document.querySelectorAll('.delete');

// del.forEach((d) =>{
//     d.addEventListener('click', (d) =>{ 
    
//         const li = d.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });


// delete list

const list= document.querySelector('#todo-list ul');

list.addEventListener('click', (d) => {
  if(d.target.className == 'delete'){
   const li = d.target.parentElement;
    li.parentNode.removeChild(li);
   } });

//    add list

const addList = document.forms['add-list'];
addList.addEventListener('submit', (s) =>{
  s.preventDefault();
  const value = addList.querySelector('input[type="text"]').value;

  // const upper = function(f){
  // var firstCar = value.slice(0,1);
  // var upperCar = firstCar.toUpperCase();}

  
// Element

const li = document.createElement('li');
const listName = document.createElement('span');
const delBtn = document.createElement('span');


// appending child

li.appendChild(listName);
li.appendChild(delBtn);
list.appendChild(li);

// adding class

listName.classList.add('name');
delBtn.classList.add('delete');



// adding content
delBtn.textContent= 'delete';
listName.textContent= value;
});

// search 

const searchBar = document.forms['search-list'].querySelector('input');
searchBar.addEventListener('keyup', function(s){
  const term = s.target.value.toLowerCase();
  const dos = list.getElementsByTagName('li');
  Array.from(dos).forEach(function(dos){
    const title = dos.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      dos.style.display= 'block';
    }
    else{

      dos.style.display= 'none';
    }
  })
})