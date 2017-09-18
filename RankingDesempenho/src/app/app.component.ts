import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fa fa-home',
        routerLink: ['/classificacao']
      },
      {
        label: 'Projetos',
        icon: 'fa-product-hunt',
        routerLink: ['/projeto']
      },
      {
        label: 'Equipes',
        icon: 'fa-users',
        routerLink: ['/equipe']
      },
      {
        label: 'Membros',
        icon: 'fa-user',
        routerLink: ['/membro']
      }
    ];
  }

}
