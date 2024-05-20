import { Component } from '@angular/core';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { stageObject } from '../interfacemodel';




@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [ MatFormFieldModule,
     MatInputModule, FormsModule,
     MatButtonModule,
     MatIconModule,NgIf,NgForOf,
     CommonModule, MatDatepickerModule,
     MatTooltipModule,ModalFormComponent, ReactiveformComponent,
    
    ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css'
})






export class Dashboard1Component {

  value = '0';
  nombre:string = "hola";
  stages:stageObject[] = []


  formData = {
    idsistema: '',
    nombre: '',
    descripcion: '',
    mensaje: '',
    objetivos:'',
    capex:'',
    opex:'',
  };


  formData2 = {
    idsistema: '',
    nombre: '',
    descripcion: '',
    mensaje: '',
    objetivos:'',
    
  };


 
  editData(editStage:any){
    
    console.log(editStage)
    this.isModalVisible = true;

  }

  onSubmit() {
    console.log('Formulario enviado', this.formData);
  }


  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }

  handleFormSubmit(formValue:stageObject) {
    console.log('Formulario enviado:', formValue);
    this.stages.push(formValue)
    console.log('stages',this.stages)

    this.hideModal();
  }
}


  // mostrarFormulario = false;
  // nombre?: string;
  // opcionSeleccionada?: string;ng
  // opciones: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];

  // toggleFormulario() {
  //   this.mostrarFormulario = !this.mostrarFormulario;
  // }

  // onSubmit() {
  //   // Lógica para procesar el formulario
  //   console.log('Nombre:', this.nombre);
  //   console.log('Opción seleccionada:', this.opcionSeleccionada);
  // }





