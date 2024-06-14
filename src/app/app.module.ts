import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MeuSegundoComponenteComponent } from './meu-segundo-componente/meu-segundo-componente.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';

@NgModule({
    declarations: [
        AppComponent,
        MeuComponenteComponent,
        MeuSegundoComponenteComponent,
        ApiComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
