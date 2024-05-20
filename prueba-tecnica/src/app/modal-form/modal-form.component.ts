import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  form: FormGroup;

  constructor() {



    this.form = new FormGroup({

      title: new FormControl(''),
      description: new FormControl(''),
      deliverableTask: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),



    })



  }





  onSubmit() {

    
    if (this.form.valid) {

      this.submit.emit(this.form.value);




    }
  }

  onCancel() {
    this.cancel.emit();
  }

  ngOnInit(): void {



  }






}
