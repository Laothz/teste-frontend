import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testeTheos';

  developers: any;

  constructor(private http : HttpClient) {
    this.findAllDevs();
  }

  public findAllDevs(): void{
    this.http.get(`http://localhost:3000/getAllDevs`)
      .subscribe((res: any) => {
        if(res.erro){
          console.log(res.response);
          return;
        }
        this.developers = res.response;
      });
  }
}
