import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
      header {
        margin: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      </style>
      <title>404</title>
  </head>
  <body>
      <header>
          <h1>
              404 Page not Found or Invalid Path 
          </h1>
          <small> Please click on <a routerLink="route-1">this</a> url to continue.</small>
          
      </header>
      
      <main>
          
      </main>
  </body>
  </html>
  `
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
