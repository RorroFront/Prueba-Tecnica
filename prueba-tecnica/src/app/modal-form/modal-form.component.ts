import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { stageObject } from '../interfacemodel';


@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})



export class ModalFormComponent implements OnInit {

  @Output() tableOn = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();
  @Input()  stageEditObject:{} = {}


  form: FormGroup;

  constructor() {



    this.form = new FormGroup({

      id: new FormControl(this.generateId()),
      title: new FormControl(''),
      description: new FormControl(''),
      deliverableTask: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),



    })



  }

  generateId(): string {
    return new Date().toISOString();
  }





  onSubmit() {

    
    if (this.form.valid) {

      this.submit.emit(this.form.value);
      this.tableOn.emit();  



    }
  }
  

  onCancel() {
    this.cancel.emit();
  }


  

  ngOnInit(): void {

console.log(this.stageEditObject)

  }






}
