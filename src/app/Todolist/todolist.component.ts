
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { ListTasksComponent } from '../list-tasks/list-tasks.component';
import { Tasks } from '../tasks';

     @Component({
      selector: 'app-ToDoList',
      templateUrl: './todolist.component.html',
      styleUrls: ['./todolist.component.css']
     })
     export class ToDoListComponent {
       @Input()
        taskName: string;
        taskDescription: string;
        task: Tasks;
        tasks: Tasks[]=[];
        
        i!: number;
        
        @ViewChildren(ListTasksComponent)
        ListTasks: QueryList<ListTasksComponent>;
        taskSelected: Tasks = null;

    
      constructor() {
          this.tasks = [];
      }

     addTask(){
         let dd: Tasks = {
             id: "1",
             name: this.taskName,
             description: this.taskDescription
         }

        
         this.tasks.push(dd);
         console.log(this.tasks);
     } 
     deleteTask(index: number, ListTaskcomponent:ListTasksComponent){
        this.tasks.splice(index, 1);
        
} 
    selectedTask(Taskscomponent: ListTasksComponent) {
        this.ListTasks.forEach(p => {
            p.isSelected = false;
          });        
          Taskscomponent.isSelected = true; 
          this.taskSelected = Taskscomponent.taskObj;
    }
    
    }

     
   
  