//ENUM used to disable re-animating todo buttons
var CONST_CALLING_DISPLAY_SOURCE = {
    ADD : '1',
    CHANGE : '2',
    DELETE : '3',
    COMPLETE : '4',
    ALL : '5'
};

const randomTodos = ["Random Stuff", "Mow The Lawn", "Take Out The Trash", "Buy Food", "Feed The Dog", "Feed The Cat", "Save The Planet", "Do Homework"];


var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
      justAdded : true
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function(todo){
      if(todo.completed === true)
      {
        completedTodos++;
      }
    });
    this.todos.forEach(function(todo){
      if (completedTodos === totalTodos) {
          todo.completed = false;
      }
      else{
          todo.completed = true;
      }
    });
  },
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    if(addTodoTextInput.value === "" || alreadyHasTodo(addTodoTextInput.value)){
      addTodoTextInput.value = '';
      return;
    }
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos(CONST_CALLING_DISPLAY_SOURCE.ADD, todoList.length - 1);
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos(CONST_CALLING_DISPLAY_SOURCE.CHANGE, changeTodoPositionInput);
  },
  makeLiEditable : function(position) {
   var input = prompt("Enter the new todo value : ", pickRandomToDo());
   todoList.changeTodo(position, input);
   view.displayTodos(CONST_CALLING_DISPLAY_SOURCE.CHANGE, position);
    
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos(CONST_CALLING_DISPLAY_SOURCE.DELETE, position);
  },
  toggleCompleted: function(position) {
    todoList.toggleCompleted(position);
    view.displayTodos(CONST_CALLING_DISPLAY_SOURCE.COMPLETE, position);
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos(CONST_CALLING_DISPLAY_SOURCE.ALL, -1);
  }  
};

var view = {
  displayTodos: function(source, position) {
    var todosUl = document.querySelector('ul');
    if(source === CONST_CALLING_DISPLAY_SOURCE.DELETE)
    {
      let liToBeDeleted = document.getElementById(position);
      todosUl.removeChild(liToBeDeleted);
    }

    else if(source === CONST_CALLING_DISPLAY_SOURCE.CHANGE)
    {
      let liToBeChanged = document.getElementById(position);
      let spanElement = liToBeChanged.getElementsByTagName('span');
      spanElement[0].textContent = todoList.todos[position].todoText;
    }
    else if(source === CONST_CALLING_DISPLAY_SOURCE.COMPLETE)
    {
      let liToBeChanged = document.getElementById(position);
      if(liToBeChanged.classList.contains("completed"))
      {
        liToBeChanged.classList.remove("completed");
      }
      else
      {
          liToBeChanged.className = "completed";
      }

    }
    else if(source === CONST_CALLING_DISPLAY_SOURCE.ALL)
    {
      let lis = todosUl.getElementsByTagName('li');
      for(let i = 0; i < lis.length; i++)
      {
        if(lis[i].classList.contains("completed")){
          lis[i].classList.remove("completed");
        }
        else
        {
          lis[i].className = "completed";
        }
      } // end for
    }

    todoList.todos.forEach(function(todo, position){
      if(todo.justAdded)
      {
        var todoLi = document.createElement('li');
        var todoTextWithCompletion = '';

        todoTextWithCompletion = todo.todoText;
        if(todo.completed){
          todoLi.className = "completed";
        }
        todo.justAdded = false;
        todoLi.id = position;
        let span = document.createElement('span');
        span.textContent = todoTextWithCompletion;
        todoLi.appendChild(span);

        todoLi.appendChild(this.createDeleteButton(source));
        todoLi.appendChild(this.createToggleButton(source));
        todoLi.appendChild(this.createEditButton(source));
        todosUl.appendChild(todoLi);
      }
    }, this);
  },
  createDeleteButton : function(source) {
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    if(source === CONST_CALLING_DISPLAY_SOURCE.ADD){
      deleteButton.className = "deleteButton todoBtns animated fadeIn";
    }
    else
    {
      deleteButton.className = "deleteButton todoBtns";
    }
    return deleteButton;
  },
  createToggleButton : function(source){
    var toggleButton = document.createElement("button");
    toggleButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    if(source === CONST_CALLING_DISPLAY_SOURCE.ADD){
      toggleButton.className ="toggleButton todoBtns animated fadeIn";
    }
    else
    {
      toggleButton.className ="toggleButton todoBtns";
    }
    return toggleButton;
  },
  createEditButton : function(source){
    var editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    if(source === CONST_CALLING_DISPLAY_SOURCE.ADD){
      editButton.className = "editButton todoBtns animated fadeIn";
    }
    else
    {
      editButton.className = "editButton todoBtns";
    }
    return editButton;
  },
  setUpEventListeners : function () {
    var todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function(event){
      var elementClicked = event.target;
      var listItemId = elementClicked.parentElement.parentElement.id;

      if(elementClicked.className === "fa fa-trash")
      {
        handlers.deleteTodo(parseInt(listItemId));
      }
      else if(elementClicked.className === "fa fa-check"){
        handlers.toggleCompleted(parseInt(listItemId));
      }
      else if(elementClicked.className === "fa fa-pencil"){
        handlers.makeLiEditable(listItemId);
      }
    });

    //Enabling the user to press enter when inputting a new todo in the input field
    var textInput = document.getElementById('addTodoTextInput');
    textInput.addEventListener("keypress", function(event){
      if(event.keyCode === 13){
        handlers.addTodo();
        event.preventDefault();
        }
     });
  },
};

view.setUpEventListeners();

//method to prevent adding the same todo to the list
function alreadyHasTodo(todo){
  var found = false;
  for(var i = 0; i < todoList.todos.length && !found; i++){
      if(todoList.todos[i]['todoText'] === todo){
        found = true;
      }
  } 
  return found;

}

function pickRandomToDo(){
  var index = Math.floor(Math.random() * randomTodos.length);
  return randomTodos[index];
}
