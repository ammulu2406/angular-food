import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    animations: [
      trigger('cardFlip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ]),
      trigger('card2Flip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ]),
     
      trigger('card3Flip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ]),

      trigger('card4Flip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ]),
      trigger('card5Flip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ]),
      trigger('card6Flip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ]),
      trigger('card7Flip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ]),
      trigger('card8Flip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ]),
      trigger('card9Flip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ])



    ]
  })
export class AppComponent {
  title = 'flip';

  windowScrolled!: boolean;

  windowScrolled1!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, ) {}

  @HostListener("window:scroll", [])

 

  onWindowScroll() {

      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop >100) {

          this.windowScrolled = true;

      }

     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {

          this.windowScrolled = false;

      }

  }

  scrollToTop() {

      (function smoothscroll() {

          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

          if (currentScroll >0) {

              window.requestAnimationFrame(smoothscroll);

              window.scrollTo(0, currentScroll - (currentScroll / 8));

          }

      })();
    }

  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  datato: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  datath: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  datatj: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  datatk: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  datatl: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  datata: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  datats: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  datatd: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };




  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
  card2Clicked() {
    if (this.datato.state === "default") {
      this.datato.state = "flipped";
    } else {
      this.datato.state = "default";
    }
  }
  card3Clicked() {
    if (this.datath.state === "default") {
      this.datath.state = "flipped";
    } else {
      this.datath.state = "default";
    }
  }
  card4Clicked() {
    if (this.datatj.state === "default") {
      this.datatj.state = "flipped";
    } else {
      this.datatj.state = "default";
    }
  }
  card5Clicked() {
    if (this.datatk.state === "default") {
      this.datatk.state = "flipped";
    } else {
      this.datatk.state = "default";
    }
  }
  card6Clicked() {
    if (this.datatl.state === "default") {
      this.datatl.state = "flipped";
    } else {
      this.datatl.state = "default";
    }
  }
  card7Clicked() {
    if (this.datata.state === "default") {
      this.datata.state = "flipped";
    } else {
      this.datata.state = "default";
    }
  }
  card8Clicked() {
    if (this.datats.state === "default") {
      this.datats.state = "flipped";
    } else {
      this.datats.state = "default";
    }
  }
  card9Clicked() {
    if (this.datatd.state === "default") {
      this.datatd.state = "flipped";
    } else {
      this.datatd.state = "default";
    }
  }

  openNav(){
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width="250px"
  } 
  closeNav(){
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width="0"
  }
  
  

}

export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';

  
}
