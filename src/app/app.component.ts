import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  //     const loader = document.getElementById('app-loader');
  // if (loader) {
  //   loader.style.display = 'none';
  // }

//   const loader = document.getElementById('app-loader');
// if (loader) {
//   loader.style.opacity = '0';
//   setTimeout(() => loader.remove(), 300);
// }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
