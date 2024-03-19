import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    //! signal sirve para que el componente se actualice cuando cambie el valor
    {
      title: 'Contador',
      router: 'counter',
    },
    {
      title: 'Usuario',
      router: 'user-info',
    },
    {
      title: 'Mutaciones',
      router: 'properties',
    },
  ]);

  // public menuItems: MenuItem[] = [
  //   {
  //     title: 'Contador',
  //     router: 'counter',
  //   },
  //   {
  //     title: 'Usuario',
  //     router: 'user-info',
  //   },
  //   {
  //     title: 'Mutaciones',
  //     router: 'properties',
  //   },
  // ];
}
