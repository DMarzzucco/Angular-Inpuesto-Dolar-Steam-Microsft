import { Component } from '@angular/core';
import { ListF } from '../share/share-comps/share-comps.component';

@Component({
    selector: 'app-footer-comp',
    standalone: true,
    imports: [ListF],
    template: `
     <footer class="flex flex-col justify-center items-center">
            <div class="max-w-100 grid grid-cols-2 gap-1 justify-center items-center my-2">
                <div class="flex justify-center items-center">
                    <a href="https://systemarzz.netlify.app/">
                        <img class="ns:h-40 h-60" src="https://imgbb.host/images/3LXuW.png" alt=""/>
                    </a>
                </div>
                <div class="flex flex-row justify-center border-l mx-2 border-slate-400 items-center">
                    <ListF [href]=" 'https://github.com/DMarzzucco/Inpuesto-Dolar-Steam-Microsft.git'"[iconClass]="'fa-brands fa-github'" ></ListF>
                    <ListF [href]=" 'https://www.linkedin.com/in/dario-marzzucco-597090283/'" [iconClass]="'fa-brands fa-linkedin'" />
                </div>
            </div>
            <div class="flex my-px py-1 ns:text-12 ns:justify-center bg-bgk w-full text-slate-400">
                <p class="footer:text-10">
                    &copy; 2024
                </p>
                <span class="mx-1 font-mono footer:text-10 text-slate-300">SysteMarzz</span>
                <p class="footer:text-10">
                    All rights reserved Made by Dario Marzzucco
                </p>

            </div>
        </footer>
  `,
})
export class FooterCompComponent {

}
