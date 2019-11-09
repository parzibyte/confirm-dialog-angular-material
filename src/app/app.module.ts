import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// Importar animaciones, los botones, el diálogo y el componente
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule, // <--- Aquí
    BrowserAnimationsModule, // <--- Aquí
    MatButtonModule, // <--- Aquí
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DialogoConfirmacionComponent,// <--- Aquí
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogoConfirmacionComponent// <--- Aquí
  ]
})
export class AppModule { }
