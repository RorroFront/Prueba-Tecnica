import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stageObject } from '../interfacemodel';


@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent implements OnInit {

  @Output() deleteStage = new EventEmitter<string>();
  @Output() editStage = new EventEmitter()
  @Input() stages:stageObject[] = []


  
 
  edit(item:{}){
    this.editStage.emit(item)
    // console.log('editando', item)
  }

  
  delete(id:string){
    
    // this.stages = this.stages.filter(item => item.id !== id)
    this.deleteStage.emit(id);
      
    
    
  }
  
  reset(){

    this.stages = this.stages
  }





ngOnInit(): void {
    
}


}
