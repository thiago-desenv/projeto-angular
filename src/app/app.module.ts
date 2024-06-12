import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MeuSegundoComponenteComponent } from './meu-segundo-componente/meu-segundo-componente.component';

@NgModule({
    declarations: [
        AppComponent,
        MeuComponenteComponent,
        MeuSegundoComponenteComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
