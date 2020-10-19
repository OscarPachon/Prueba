import { Component } from '@angular/core';

@Component ({
    selector: 'app-micomponente',
    templateUrl: './mi-componente.component.html'

})
export class MiComponente{

    constructor(){
      console.log("Componente mi-componente !!");
    }

}
