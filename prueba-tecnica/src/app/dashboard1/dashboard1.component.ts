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
import { HeaderComponent } from '../header/header.component';




@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [ MatFormFieldModule,
     MatInputModule, FormsModule,
     MatButtonModule,
     MatIconModule,NgIf,NgForOf,
     CommonModule, MatDatepickerModule,
     MatTooltipModule,ModalFormComponent, ReactiveformComponent, HeaderComponent,
    
    ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css'
})






export class Dashboard1Component {

  value = '0';
  nombre:string = "hola";
  stages:stageObject[] = []
  stageEditObject:{}={};


  formData = {
    idsistema: '',
    nombre: '',
    descripcion: '',
    mensaje: '',
    objetivos:'',
    capex:'',
    opex:'',
  };


  formDataright = {
    proyectid: '',
    name: '',
    description: '',
    creationdate: '',
    capex:'',
    opex:'',

    
  };

  formDataDown = {
    projectresponsables: '',
    admin: '',
    involved: '',
    
  
  };



  showDropdown = false;
  objetivosOptions = ['Objetivo 1', 'Objetivo 2', 'Objetivo 3', 'Objetivo 4', 'Objetivo 5','Objetivo 6','Objetivo 7','Objetivo 8'];

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectObjetivo(option: string) {
    this.formData.objetivos = option;
    this.showDropdown = false;
  }

 
  editData(editStage:any){

    this.stageEditObject = editStage

    this.isModalVisible = true;
    
    console.log(editStage)


  }

  onDeleteStage(id: string) {
    this.stages = this.stages.filter(item => item.id !== id);
  }

  
  onSubmit() {
    console.log('Formulario enviado', this.formData);
  }


  isModalVisible = false;
  isTableVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }




  showTable() {
    this.isTableVisible = true;
  }

  hideTable() {
    this.isTableVisible = false;
  }

  handleTableOn() {
    this.showTable();
  }


  handleFormSubmit(formValue:stageObject) {
    // console.log('Formulario enviado:', formValue);
    // console.log('stages',this.stages)

    this.stages.push(formValue)
    

    this.hideModal();
  }
}








