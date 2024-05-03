import { Component } from '@angular/core';

@Component({
  selector: 'app-microsoft-page',
  standalone: true,
  imports: [],
  template: `
   <section class="flex flex-col w-full h-screen justify-center items-center">
                <div class=" flex flex-col justify-center items-center border border-slate-400 p-10 rounded-xl">
                    <div class="flex flex-col justify-center items-center">
                        <i class="fa-brands fa-microsoft" color="skyBlue"></i>
                        <h1 class="text-xl m-2">Microsoft</h1>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <input class=" text-center rounded-xl border bg-bgk border-slate-400 p-2" type="text"
                            placeholder="$0.00" value={valorInput}  onChange={takeInput} />
                        <button
                            class="hover:bg-slate-200 hover:text-slate-800 py-1 px-2 border m-2 border-slate-400 rounded-xl"
                            onClick={ecuation} (click)="ecuation()">Enviar
                        </button>
                    </div>
                    <!-- {/* Result Template */}
                    {resultado !== null &&
                        <ResultComp result={resultado} child={
                            <div class="flex flex-col justify-center items-center">
                                <h1 class="text-xl m-2"></h1>
                            </div>
                        } />
                    }
                    {error !== '' && <ErrorComp />} -->
                </div>
            </section>
  `,
})
export class MicrosoftPageComponent {
  values:number = 128;
  // takeValues:HTMLInputElement = <input>;

  ecuation (){

  }

}
