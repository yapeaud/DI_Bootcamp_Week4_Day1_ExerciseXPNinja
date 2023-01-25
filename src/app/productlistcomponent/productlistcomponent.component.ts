import { Component, OnInit } from '@angular/core';

interface productListInterface{
  name:string;
  price:number;
}

const productListArray:productListInterface[] = [
  {
    name:'Bissap',
    price:150,
  },
  {
    name:'Gnamankoudji',
    price:150,
  },
  {
    name:'Citron',
    price:150,
  },
  {
    name:'Baobab',
    price:150,
  },
  {
    name:'Tomie',
    price:150,
  }
]

// addProduct(i){
  
//   let index = this.containtProductListArray.indexOf(i);
//   i.name = "Change Hardik";
//   this.containtProductListArray[index] = i;

//   console.log(this.containtProductListArray);
// }
 
@Component({
  selector: 'app-productlistcomponent',
  templateUrl: './productlistcomponent.component.html',
  styleUrls: ['./productlistcomponent.component.css']
})
export class ProductlistcomponentComponent implements OnInit{
  constructor(){}
  ngOnInit(){}

  containtProductListArray=productListArray;
  
  
}