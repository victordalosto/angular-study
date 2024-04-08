import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pensamento } from '../domain/Pensamento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    autoria: 'Nome do autor',
    conteudo: 'Um pensamento',
    modelo: 'modelo1'
  };

  criarPensamento() {
    console.log(this.pensamento);
  }

  cancelar() {
    this.pensamento = {
      id: 0,
      autoria: 'Nome do autor',
      conteudo: 'Um pensamento',
      modelo: 'modelo1'
    };
  }

}
