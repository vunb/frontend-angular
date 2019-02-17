import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'giaoban';
  body = 'body';

  showDetail(id: string) {
    // gọi api trả về detail theo id
  }
}
