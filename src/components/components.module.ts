import { NgModule } from '@angular/core';
import { Usuario } from './models/usuario-model/usuario-model';
import { UsuarioService } from './service/usuario-service/usuario-service';
@NgModule({
	declarations: [,
    Usuario,
    UsuarioService],
	imports: [],
	exports: [,
    Usuario,
    UsuarioService]
})
export class ComponentsModule {}
