import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  CommonModule} from '@angular/common';
import { Product } from './models/product';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  allProducts: Product[] = [
    { id: 1, name: "Bread", price: 23 }
    , { id: 2, name: "Rusk", price: 23 }
    , { id: 3, name: "Fan", price: 23 }
  ];


}

