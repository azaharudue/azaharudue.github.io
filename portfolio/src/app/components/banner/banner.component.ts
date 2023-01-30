import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    //mobile
    this.breakpointObserver.observe(Breakpoints.HandsetPortrait).subscribe({
      next: (result) => {
        if (result.matches) {
          console.log('Matches HandsetPortrait');
        }
      },
    });

    //web / pc
    this.breakpointObserver.observe(Breakpoints.WebLandscape).subscribe({
      next: (result) => {
        if (result.matches) {
          console.log('Matches WebLandscape');
        }
      },
    });
  }
}
