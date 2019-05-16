let person_objects = [];//empty array to store data

let day_night_toggler = document.querySelector('#toggle-dark');

let dark_components = document.querySelectorAll('.dark-flag');

day_night_toggler.addEventListener('click', ()=>{
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
  let dark_components = document.querySelectorAll('.dark-flag'); 
let navbar_toggle = document.querySelector('.navbar');
let toggle_button = document.querySelector('#toggle-dark');
  if(localStorage.getItem('mode') === 'dark'){
    
    for(let dark_comps of dark_components){
      dark_comps.classList.add('dark');
  }
  toggle_button.classList.remove('btn-dark');
    toggle_button.classList.add('btn-light');
  navbar_toggle.classList.remove('bg-light');
    navbar_toggle.classList.add('bg-dark');
    
  toggle_button.innerHTML = 'to Day';
  }else{
    

    for(let dark_comps of dark_components){
      dark_comps.classList.remove('dark');
  }
  toggle_button.classList.remove('btn-light');
  toggle_button.classList.add('btn-dark');
  navbar_toggle.classList.remove('bg-dark');
  navbar_toggle.classList.add('bg-light');
  
  toggle_button.innerHTML = 'to Night';
  }
  
})


document.addEventListener('DOMContentLoaded', (event) => {

  let dark_components = document.querySelectorAll('.dark-flag'); 
    let navbar_toggle = document.querySelector('.navbar');
    let toggle_button = document.querySelector('#toggle-dark');
  if((localStorage.getItem('mode') || 'dark') === 'dark'){
    
    for(let dark_comps of dark_components){
      dark_comps.classList.add('dark');
  }

  toggle_button.classList.remove('btn-dark');
  toggle_button.classList.add('btn-light');
  navbar_toggle.classList.remove('bg-light');
  navbar_toggle.classList.add('bg-dark');

  toggle_button.innerHTML = 'to Day';
  }else{
    

    for(let dark_comps of dark_components){
      dark_comps.classList.remove('dark');
  }
  toggle_button.classList.remove('btn-light');
  toggle_button.classList.add('btn-dark');
  navbar_toggle.classList.remove('bg-dark');
  navbar_toggle.classList.add('bg-light');

  toggle_button.innerHTML = 'to Night';
  }
})


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((json)=>{
    let i =0 ;//initializes the names' List
    let elems = document.querySelectorAll('#name-list span');
    for(let itr of elems){
      person_objects[i] = json[i];
      itr.innerHTML = json[i].name;
      i++ ;
    }
  }    
  )


  //accesses summary panel element
  let summary_panel = document.querySelector('.summary-panel');
  

  //accesses namesList elements for getting index of clicked Element
  var nameList = Array.prototype.slice.call( document.querySelector('#name-list').children );
  
  
  document.addEventListener('click', ()=>{
    if(event.target.classList.contains('person')){
      //setting details panel to updated HTML 
      // summary_panel.innerHTML = person_objects[nameList.indexOf(event.target)].email ;
      element_Creator(nameList.indexOf(event.target));
    }
  })


  element_Creator = (_id) =>{
    let newElement = document.createElement('div');
    
    newElement.innerHTML = '<div class=" details-view"><p>Name: '+ person_objects[_id].name+ '</p> '+ '<p>Address:<br/> '+ Object.values(person_objects[_id].address).slice(0, 4).join(', ') + '</p>'+ '<p>e-mail: <br/>' + person_objects[_id].email +'</p></div>' ;
    summary_panel.appendChild(newElement);
    summary_panel.replaceChild(newElement, summary_panel.firstChild);

  }