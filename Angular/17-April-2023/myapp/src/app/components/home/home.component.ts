import { Component, OnInit } from '@angular/core';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor ( private fakeStoreService: FakestoreService ) { }

  products : any[] = [];

  ngOnInit(): void {
    this.fakeStoreService.getProducts().subscribe((data:any) => {
      console.table(data)
      this.products = data;
    }
    );
  }

}
