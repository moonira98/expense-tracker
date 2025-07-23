import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ILinks } from './sidebar.model';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})


export class Sidebar {
 openSideBar = signal<boolean>(false)
 items = signal<ILinks[]>([
  {
    href: 'home',
    label: 'Home',
  }
 ])

  

  toggleCollapse(): void {
    this.openSideBar.set(!this.openSideBar())
  }

  closeSidenav(): void {
    this.openSideBar.set(!this.openSideBar())
  }
}
