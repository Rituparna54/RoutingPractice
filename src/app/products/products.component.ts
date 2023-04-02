import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  data: Array<any>;constructor(){
    this.data = [
        { ProductId :"A01",ProductName: 'TV', Quantity: '10', Price: '1000' },
        { ProductId :"A02",ProductName: 'AC', Quantity: '30', Price: '5000' },
        { ProductId :"A03",ProductName: 'Refregerator', Quantity: '20', Price: '2500' },
        { ProductId :"A04",ProductName: 'Washing-Machine', Quantity: '60', Price: '4700' },
        { ProductId :"A05",ProductName: 'Micro-Oven', Quantity: '30', Price: '1900' },
        
       
    ];
}
}
