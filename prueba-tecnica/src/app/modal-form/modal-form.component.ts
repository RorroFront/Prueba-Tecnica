import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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

      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      entregable: new FormControl(''),
      fechaInicio: new FormControl(''),
      fechaFin: new FormControl(''),



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
