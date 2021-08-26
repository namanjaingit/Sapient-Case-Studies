import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.css'],
})
export class RouteSixComponent {
  @ViewChild('scrollframe', { static: false }) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;

  @HostListener('window:scroll', ['$event'])
  public scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
    if (this.isNearBottom) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.items.push(this.items.length + 1);
      }, 2000);
    }
  }

  public items = [1, 2, 3];
  public isLoading = false;

  private itemContainer: any;
  private scrollContainer: any;
  private isNearBottom = true;

  public showAlert(index) {
    alert(`Button in ${index}${index == 1 ? 'st' : index == 2 ? 'nd' : index == 3 ? 'rd' : 'th'} div clicked `);
  }

  private scrollToBottom(): void {
    window.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  private isUserNearBottom(): boolean {
    const threshold = 200;
    const position = window.scrollY + window.innerHeight;
    const height = document.body.scrollHeight;
    return position > height - threshold;
  }
}
