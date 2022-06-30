import { CompilerFactory, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import * as $ from "jquery";
import { ConfirmedValidator } from '../../confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public formRegister!: FormGroup;
  captcha: string;

  constructor(private formBuilder: FormBuilder, private route:Router) { 
    this.captcha = '';
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      username: ['',[Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password1: ['',[Validators.required]],
      password2: ['',[Validators.required]],
      sex: ['',[Validators.required]],
      obj: ['',[Validators.required]],
      area: ['',[Validators.required]],
      equip: ['',[Validators.required]],
      diff: ['',Validators.required],
      peso: ['',Validators.required],
      altura: ['',Validators.required],
      terms: ['',[Validators.required,Validators.requiredTrue]]
    }, {
      validator: ConfirmedValidator('password1','password2')
  })
  }
  procesar(): any{
    var usuario = this.formRegister.controls['username'].value;
    var correo = this.formRegister.controls['email'].value;
    var contra1 = this.formRegister.controls['password1'].value;
    var contra2 = this.formRegister.controls['password2'].value;
    var sexo = this.formRegister.controls['sex'].value;
    var objetivo = this.formRegister.controls['obj'].value;
    var area = this.formRegister.controls['area'].value;
    var equipo = this.formRegister.controls['equip'].value;
    var dificultad = this.formRegister.controls['diff'].value;
    var peso = this.formRegister.controls['peso'].value;
    var altura = this.formRegister.controls['altura'].value;
    var alturaenmt = parseFloat(altura)/100;
    alert("Usuario: "+usuario+"\nEmail: "+correo+"\n1era contraseña: "+contra1+"\n2da contraseña: "+contra2+"\nsexo: "+sexo+"\nobjetivo: "+objetivo+"\narea preferida: "+area+"\nuso de equipo: "+equipo+"\ndificultad: "+dificultad+"\npeso: "+peso+" kg.\naltura: "+alturaenmt+" cm.\nAquí se obtienen los datos, se procesan en la API del angel");
    this.ngOnInit();
  }

  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    console.log('captcha resuleto con respuesta: '+this.captcha);
  }

}
