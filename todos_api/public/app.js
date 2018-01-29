/* global $ */

$(document).ready(function(){
  //get /api/todos
  $.getJSON("api/todos")
  .then(getTodos)
  .catch(function(err){
      console.log(err);
  });
  
  $('#todoInput').keypress(function(event){
    if(event.which === 13){
      createTodo();
    }
  });
  
  $(".list").on("click", "span", function(e){
    e.stopPropagation();
    deleteTodo($(this).parent());
  });
  
  
  $(".list").on("click", "li", function(){
    toggleTodo($(this));
  });
  
});

function getTodos(todos){
  return todos.map(function(todo){
    addTodo(todo);
  });
}

function addTodo(todo){
    let newTodo = $('<li class="task">'+todo.name+' <span>X</span></li>');
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
    if(todo.completed){
      newTodo.addClass("done");
    }
    $(".list").append(newTodo);
}


function createTodo(){
  let value = $('#todoInput').val();
  let data = {name: value};
  
  $.post("api/todos",data)
  .then(function(newTodo){
    $('#todoInput').val("");
    addTodo(newTodo);
  })
  .catch(function(err){
    console.log(err);
  });
}

function deleteTodo(todo){
  let id = todo.data("id");
  let url = `/api/todos/${id}`;
  
  $.ajax({
    method: "DELETE",
    url
  })
  .then(function(data){
    todo.remove();
  })
  .catch(function(err){
    console.log(err);
  });
}

function toggleTodo(todo){
  let isDone= !todo.data("completed");
  let id = todo.data("id");
  let data = {completed: isDone};
  let url = `/api/todos/${id}`;
  $.ajax({
    method: "PUT",
    url,
    data
  })
  .then(function(updatedTodo){
    todo.toggleClass("done");
    todo.data("completed", isDone);
  })
  .catch(function(err){
    console.log(err);
  });
}
