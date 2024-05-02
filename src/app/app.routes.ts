import { Routes } from '@angular/router';
import { MicrosoftPageComponent } from './pages/microsoft-page/microsoft-page.component';
import { SteamPageComponent } from './pages/steam-page/steam-page.component';

export const routes: Routes = [
    {
        path:'Microsoft', 
        component:MicrosoftPageComponent
    },
    {
        path:'Steam',
        component:SteamPageComponent
    }
];
