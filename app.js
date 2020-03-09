const form = document.querySelector('.form');
const toDo = document.querySelector('#toDo');
const newTask = document.querySelector('input');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('SUBMIT!');
    var ul = document.getElementById("toDo");
    var li = document.createElement("li");

     li.appendChild(document.createTextNode(newTask.value));
     var button = document.createElement("button");
     button.classList.add('btnAgain');
     button.innerHTML = "Done!"; 
     li.appendChild(button);
     ul.appendChild(li);

});

toDo.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
	   event.target.parentElement.remove();
}});


