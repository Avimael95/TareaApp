//Crear una funcion que me permita saludar al usuario
import './style.css';
//Ahora haremos la importacion de un solo archivo
import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/component';

export const objList = new TodoList();
// objTarea.completado = true;
// crearTodoHtml(objTarea);
// console.log(objList);
   //Recorremos todos los elemetos del arreglo todos para recounstruir el html
//objList.todos.forEach(todo=>crearTodoHtml(todo));
//Tambien podemos escribir de esta forma cuando tiene un solo parametro
objList.todos.forEach(crearTodoHtml);


