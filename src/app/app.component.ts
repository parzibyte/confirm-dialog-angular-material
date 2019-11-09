import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogoConfirmacionComponent } from "./dialogo-confirmacion/dialogo-confirmacion.component";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public dialogo: MatDialog) {}
  mostrarDialogo(): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Te gusta programar en TypeScript?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("¡A mí también!");
        } else {
          alert("Deberías probarlo, a mí me gusta :)");
        }
      });
  }
}
