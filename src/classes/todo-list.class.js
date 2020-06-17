import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        // this.todos = [];
        this.cargarLocalStore();
    }
    
    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStore();
    }

    eliminarTodo( id ){
                    //Nos filtra los que coincidan con id
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStore();
    }

    marcarCompletado(id){
        for (const todo of this.todos) {
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStore();
                break;
            }
        }
    }
    
    eliminarCompletado(){
        console.log('estas dentron de la funcion de completados');
        this.todos = this.todos.filter(todo=>!todo.completado);
        this.guardarLocalStore();
    }

    guardarLocalStore(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStore(){
        // if(localStorage.getItem('todo')){
        //    this.todos= JSON.parse(localStorage.getItem('todo')); 
        //    console.log(this.todos);
        // }else{
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')): [];
        //Nota podemos con mayuscula el Todo por que hacemos referencia al metodo estática
            //this.todos = this.todos.map(obj => Todo.fromJson(obj));
        //Tambien podemos optimizar el codigo anterior
        this.todos = this.todos.map(Todo.fromJson);
    }
}