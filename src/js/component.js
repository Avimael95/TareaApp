import { Todo, TodoList } from "../classes";
import { objList } from "..";

//Referencias Html
const todolist = document.querySelector('.todo-list');
const txtTodo = document.querySelector('.new-todo');
const btnDelete = document.querySelector('.clear-completed');
const ulFilter = document.querySelector('.filters');
const anchorFiltro = document.querySelectorAll('.filtro');


export const crearTodoHtml = ( todo )=>{
    
    const htmlTodo = `<li class="${(todo.completado)?'completed':''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)? 'checked':''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>`;
        const div = document.createElement('div');
        div.innerHTML = htmlTodo;
        todolist.append(div.firstChild);

        return div.firstChild;
}

//Agregamos los eventos

//Evento para ingreso del texto
txtTodo.addEventListener('keyup',(e)=>{
   if(e.keyCode===13 && txtTodo.value.length > 0){
       const newTodo = new Todo(txtTodo.value);
       objList.nuevoTodo(newTodo);
       console.log(objList)
       crearTodoHtml(newTodo);
       txtTodo.value = '';
   } 
});

//evento para el checked
todolist.addEventListener('click',(e)=>{

    const nombreElemento = e.target.localName; //input, label, button
    const todoElemento = e.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id')
    
    if(nombreElemento.includes('input')){//click en el checkbox
        objList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
    else if( nombreElemento.includes('button')){ //Hay que borrar el todo
        objList.eliminarTodo(todoId);
        todolist.removeChild( todoElemento );
    }
});

btnDelete.addEventListener('click',()=>{
    objList.eliminarCompletado();
    for (let i = todolist.children.length-1; i >=0; i--) {
        const elemento = todolist.children[i];
        if(elemento.classList.contains('completed')){
            todolist.removeChild(elemento);
        }
    }
    console.log(objList);
    
});

ulFilter.addEventListener('click',(e)=>{
    const filtro = e.target.text;
    if(!filtro){return;}

    anchorFiltro.forEach(elemento=>elemento.classList.remove('selected'));
    event.target.classList.add('selected');
    
    //Voy a barrer todos los elementos del todo list
    for (const elemento of todolist.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch (filtro) {
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
        
        }
    }
    
});

