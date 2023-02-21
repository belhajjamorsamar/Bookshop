import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {


 constructor(){}


  getBooks(){

    return[
      {
       name:'Clean Code',
       author:'Robert C. Martin ',
       image:"https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
       amount:700,
       },
      {
      name:"Pragmatic Programmer",
      author:"David Thomas",
      image:"https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg",
      amount:800 ,
    
    } ,
    
    
    {
      name:"ART of Coputer Programming ",
      author:"David Donald JOHN Fuller",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ArtOfComputerProgramming.svg/800px-ArtOfComputerProgramming.svg.png",
      amount:18.300 ,
    
    } ,
    
    
    {
      name:"Introduction To Algorithms  T Cormen ",
      author:" T Cormen",
      image:"https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg",
      amount:1.500 ,
    
    } ,
    
    ];
  }
}

  

