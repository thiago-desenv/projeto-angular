import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  constructor(private apiService: ApiService) {
    this.getImg();
  }

  getImg() {
    this.apiService.getImg().subscribe();
  }
}
