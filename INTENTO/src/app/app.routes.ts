import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-component/mi-componente.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'componentes', component: MiComponente },
    { path: 'path3', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
