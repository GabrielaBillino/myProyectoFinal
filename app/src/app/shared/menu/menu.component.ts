import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/catalogo'])
    );
  
    window.open(url, '_blank');
  }
}
