import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Usuario } from '../../components/models/usuario-model/usuario-model';
import { UsuarioService } from '../../components/service/usuario-service/usuario-service';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
  providers: [UsuarioService],
})
export class RegistroPage {
  public errorMessage: string;
  public usuario:Usuario;
  public confirm_pass:string;
  public confirm:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _usuarioService: UsuarioService,
    private _route: ActivatedRoute, 
    private _router: Router,
    public alertCtrl: AlertController) {
      this.usuario = new Usuario('','','','','');
      this.confirm_pass ='';
      this.confirm = false;
      
  
    }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegistroPage');
  // }

  public onSubmit(){
    console.log(this.usuario+this.confirm_pass);
    if(this.usuario.password != this.confirm_pass){
      console.log("NO-coinciden");
      this.alert('Error','Las contraseñas introducidas no coinciden, vuelve a verificarlas');
      this.usuario = new Usuario('','','','','');
      this.confirm_pass ='';
    }
    else{
      // console.log("entra al else, coincide");
      if (this.usuario.password == this.confirm_pass){
        this.alert('Success', "coinciden contraseñas"+this.usuario.nombre);
        this._usuarioService.addUsuario(this.usuario).subscribe(
          result=>{
            if (!result.usuario) {
              this.alert('Error','Problemas con el servidor. Contacte con su administrador de red.');
              console.log(result);
            }
            else{
              if(result){
                
                this.usuario = result.usuario;
                this.alert("Success", "Usuario creado correctamente. Por favor "+this.usuario.nombre+" "+this.usuario.apellido+" introduce tus credenciales.");
                this.navCtrl.popTo(HomePage);
              }
              else{
                console.log(result);
              }
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
    }
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