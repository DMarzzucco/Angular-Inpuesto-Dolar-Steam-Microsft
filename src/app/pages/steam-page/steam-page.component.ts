import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FooterCompComponent } from '../../components/footer-comp/footer-comp.component';

@Component({
  selector: 'app-steam-page',
  standalone: true,
  imports: [FooterCompComponent],
  template: `
   <section class="h-screen flex flex-col justify-center items-center">
  <div class="flex flex-col justify-center items-center border border-slate-400 p-10 rounded-xl">
    <div class="flex flex-col justify-center items-center">
      <!-- Icono Font Awesome -->
      <h1 class="text-xl m-2">Steam</h1>
    </div>
    <div class="flex flex-col justify-center items-center">
      <input class="text-center rounded-xl border bg-bgk border-slate-400 p-2" type="text"
             placeholder="$0.00" [value]="valorInput" (input)="takeInput($event)" />
      <button class="hover:bg-slate-200 hover:text-slate-800 py-1 px-2 border m-2 border-slate-400 rounded-xl"
              (click)="ecuation()">Enviar
      </button>
    </div>
    @if (resultado !== null){
      <div class="result">
      <h1 class="text-xl m-2 font-semibold">Coste del dolar Tarjeta:</h1>
      <div>
        <div class="font-bold">
          <span>1.00 U$D =</span>
          <span>1.465,92 AR$</span>
        </div>
        <p class="font-semibold text-slate-300">
          Valor de dolar oficial mas impuestos.
        </p>
        <p>{{valorSave}} U$D + 60%</p>
        <p>Valor total: {{resultado}} AR$</p>
        <p class="text-13 text-slate-400 font-semibold">
          Update: {{ DataTime }} 
        </p>
      </div>
    </div>

    }
    @if (error !== ''){
      <div class="error">
      <p class="text-blue-300 ">{{error}}</p>
    </div>

    }
  </div>
</section>
<app-footer-comp></app-footer-comp>
  `,
  providers: [DatePipe]
})
export class SteamPageComponent {
  valorInput: string = '';
  resultado: number | null = null;
  error: string = '';
  valorSave: string = ''
  DataTime = new Date();

  takeInput(event: any) {
    this.valorInput = event.target.value;
    this.valorSave = this.valorInput;
  }
  ecuation() {
    let num: number = 1465.92;
    const value: number = parseFloat(this.valorInput);

    if (isNaN(value) || /^\d+$/.test(this.valorInput) === false) {
      this.error = 'error de valor';
      this.valorInput = '';
      setTimeout(() => this.error = '', 1000);
      this.resultado = null;
      return;
    }

    const result: number = value * num;
    this.valorInput = '';
    const resultadoRound: number = Math.round(result * 100) / 100;
    const resultFormat: string = resultadoRound.toLocaleString('es-AR', { minimumFractionDigits: 2 })
    this.resultado = parseFloat(resultFormat);
  }
  constructor(private datePipe: DatePipe) {
    // this.DataTime = this.datePipe.transform(this.DataTime, 'yyyy-MM-dd');
  }

}
