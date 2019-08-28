import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent,PropiedadesComponent, QuienessomosComponent, ContactoComponent ,DetallepropiedadComponent } from './components/index.paginas'; 

const app_routes:Routes = [
    { path: 'propiedades', component: PropiedadesComponent },
    { path: 'quienes-somos', component: QuienessomosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'detallepropiedad', component: DetallepropiedadComponent},
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing : any = RouterModule.forRoot(app_routes,{useHash:true});

