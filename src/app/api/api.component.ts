import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Imagem } from '../models/api';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  imagens: any;
  erro: any;
  constructor(private apiService: ApiService) {
    this.getImg();
  }

  getImg() {
    this.apiService.getImg().subscribe(
      (data: Imagem) => {
        this.imagens = data;
        console.log('Dados sendo recebidos ', data);
      },
      (error: any) => {
        this.erro = error;
        console.log('Erro ', error)
      }
    );
  }
}
