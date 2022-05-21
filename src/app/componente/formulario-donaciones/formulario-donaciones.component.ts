import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-donaciones',
  templateUrl: './formulario-donaciones.component.html',
  styleUrls: ['./formulario-donaciones.component.css']
})
export class FormularioDonacionesComponent implements OnInit {

  formValue!: FormGroup;
  public data_detalle: Array<any>=[];



  constructor(private forBuilder:FormBuilder) { }
   

  ngOnInit(): void {
    this.obtenerDatosForm();
  }

  obtenerDatosForm(){
    this.formValue= this.forBuilder.group({

      nombres:[''],
      apellidos:[''],
      edad:[''],
      ciudad:[''],
      cantidad_dinero:['']
    })
  }

  enviar_formu(detalleFormulario: any){

    if(detalleFormulario.value.nombres==""){
      //alert("El campo Nombre no puede estar vacío")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo Nombre no puede estar vacío',
      })
    }

    else if(detalleFormulario.value.apellidos==""){
      //alert("El campo Apellidos no puede estar vacío")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo Apellidos no puede estar vacío',
      })
    }
    else if(detalleFormulario.value.edad==""){
      //alert("El campo Edad no puede estar vacío")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo Edad no puede estar vacío',
      })
    }

    else if(detalleFormulario.value.ciudad==""){
      //alert("El campo Ciudad no puede estar vacío")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo Ciudad no puede estar vacío',
      })
    }

  
    else if(detalleFormulario.value.cantidad_dinero==""){
      //alert("El campo Cantidad de dinero a donar no puede estar vacío")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo Dinero no puede estar vacío',
      })
    }

    else{
      this.data_detalle.push({
        nombres: detalleFormulario.value.nombres,
        apellidos: detalleFormulario.value.apellidos,
        ciudad: detalleFormulario.value.ciudad,
        edad: detalleFormulario.value.edad,
        cantidad_dinero: detalleFormulario.value.cantidad_dinero
      })

      Swal.fire(
        'Good job!',
        'La Donación fue enviada Exitosamente',
        'success'
      )

      this.formValue= this.forBuilder.group({
        nombres:[''],
      apellidos:[''],
      edad:[''],
      ciudad:[''],
      cantidad_dinero:['']
      })      
    }
  }

}
