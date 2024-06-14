import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {
  nome: string = '';
  arrayValores = ['Bob Esponja', 'Sr Sirigueijo', 'Guery', 2, 4];

  constructor() {
  }

  ngOnInit(): void {
  }

  atualizarNome(valor: any) {
    this.nome = valor.target.value;
  }
}
