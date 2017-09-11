import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Usuario } from '../../components/models/usuario-model/usuario-model';
import { UsuarioService } from '../../components/service/usuario-service/usuario-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UsuarioService],
})
export class HomePage {
  
  public errorMessage: string;
  public usuario:Usuario;
  
  

  constructor(public navCtrl: NavController,
  private _usuarioService: UsuarioService,
  private _route: ActivatedRoute, 
  private _router: Router,
  public alertCtrl: AlertController) {
    this.usuario = new Usuario('','','','','');
    

  }

  public onSubmit(){
    console.log(this.usuario);
    this._usuarioService.login(this.usuario).subscribe(result=>{
      if(!result){
        this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
      }
      else {
        if(result.failed){
          this.alert('Error', 'Usuario o contraseña incorrecta');
        }
        else{
          this.alert('Bienvenido', 'Sessión exitosa');
        }
        console.log(result.success);
      }
    },
    error=>{
      this.errorMessage = <any>error;
      if (this.errorMessage !=null) {
        console.log(this.errorMessage);
        this.alert('Error', 'Problemas con el servidor');
      }

    });
  }

  public alert(titulo:string, contenido:string ){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();


  }

}
