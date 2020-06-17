//creamos la clases todo

export class Todo{

    //Creamos un metodo stactic para realizar la instancias de la clase todo
    static fromJson( {tarea,id,completado,creado} ){ //Utilizamos la desestructuracion de argumentos
        const tempTodo = new Todo( tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;
        return tempTodo;
    }
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();//1223432
        this.completado = false;
        this.creado = new Date();
    }

    //Creamos metodos si alguna vez podemos necesitarlo
    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}