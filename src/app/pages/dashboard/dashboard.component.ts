import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, MatButtonToggleModule, MatGridListModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
productos = [
  {
    nombre: 'Outfit 1',
    fecha: '23/05/2026',
    imagen: 'assets/img/outfit1.png'
  },
  {
    nombre: 'Outfit 2',
    fecha: '24/05/2026',
    imagen: 'assets/img/outfit2.png'
  },
  {
    nombre: 'Outfit 3',
    fecha: '25/05/2026',
    imagen: 'assets/img/outfit3.png'
  },
  {
    nombre: 'Outfit 4',
    fecha: '25/05/2026',
    imagen: 'assets/img/outfit4.png'
  }
];
}