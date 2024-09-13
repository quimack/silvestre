import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('circle') logotext!: ElementRef<any>;

  ngAfterViewInit(){
    console.log(this.logotext)
    let textArray = this.logotext.nativeElement.innerText.split('');
    this.logotext.nativeElement.innerText = '';  
    textArray.forEach( (item: string, index: number) => {
      console.log(Number(index*10+50))
      this.logotext.nativeElement.innerHTML += `<span class="logo-letter" style="transform:rotate(${Number((index+1)*18)}deg);"> ${item} </span>`
    });
  }
}
