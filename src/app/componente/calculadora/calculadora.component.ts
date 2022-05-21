import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  titulo="Calculadora"
  num1!: number;
  num2!: number;
  result!: number;

  mensaje_ok: any;
  mendaje_error: any;


  constructor() { }

  ngOnInit(): void {
  }

  restar(){
    if(this.num1==null){
      this.mendaje_error="Digite un número por favor"
    }
    if(this.num1<=0){
      this.mendaje_error="No es posible la operacion, digite un numero mayor a cer(0)"
    }
    if(this.num2==null){
      this.mendaje_error="Digite un número por favor"
    }
    else if(this.num2<=0){
      this.mendaje_error="No es posible la operacion, digite un numero mayor a cer(0)"
    }

    else if(this.mendaje_error){
      this.result=NaN 
    }


    else{
      this.result= this.num1 - this.num2
      this.mensaje_ok= "Resta realizada"
    }
  }

  multiplicacion(){
    if(this.num1==null){
      this.mendaje_error="Digite un número por favor"
    }
    else if( this.num1<=0){
      this.mendaje_error="No es posible la operacion, digite un numero mayor a cer(0)"
    }

    if(this.num2==null){
      this.mendaje_error="Digite un número por favor"
     
    }
    else if(this.num2<=0){
       this.mendaje_error="No es posible la operacion, digite un numero mayor a cer(0)"
    }
    else if(this.mendaje_error){
      this.result=NaN 
    }
    else{
      this.result= this.num1 * this.num2
      this.mensaje_ok= "Multiplicación realizada"
    }
  }

  division(){
    if(this.num1==null){
      this.mendaje_error="Digite un número por favor"
    }
    else if(this.num1<=0){
      this.mendaje_error="No es posible la operacion, digite un numero mayor a cer(0)"
    }

     if(this.num2==null){
      this.mendaje_error="Digite un número por favor"
     
    }
    else if( this.num2<=0){
      this.mendaje_error="No es posible la operacion, digite un numero mayor a cer(0)"
    }
    else if(this.mendaje_error){
      this.result=NaN 
    }

    else{
      this.result= this.num1 / this.num2
      this.mensaje_ok= "Divsión realizada"
    }
  }

  cerrarAlertaError(){
    this.mendaje_error=""
  }
  cerrarAlertaOK(){
    this.mensaje_ok=""
  }

}
