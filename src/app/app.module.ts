import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';

// Interface
import { HeroeInterface } from './interfaces/heroe.interface';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        AboutComponent,
        HeroesComponent,
        HeroesDetailComponent,
        BuscadorComponent,
        CardsComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING
    ],
    providers: [
        HeroesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
