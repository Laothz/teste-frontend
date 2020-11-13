import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  inputGit: Boolean = true;

  registerForm = new FormGroup({
    avatarUrl: new FormControl(
      '',
      Validators.required
    ),
    nome: new FormControl(
      '',
      Validators.required
    ),
    email: new FormControl(
      '',
      Validators.required
    ),
    cidade: new FormControl(
      '',
      Validators.required
    ),
    formacao: new FormControl(
      '',
      Validators.required
    ),
    tecnologias: new FormControl(
      '',
      Validators.required
    )
  });

  constructor(private http : HttpClient) { }

  ngOnInit(): void { }

  public ativarDesativarGitInput(): void {
    this.inputGit = !this.inputGit;
  }

  public onSubmit(): void {

    if(this.registerForm.status === 'INVALID'){
      alert('Formulário inválido!');
      return;
    }

    this.http.post(`http://localhost:3000/cadastrar`, this.registerForm.value)
      .subscribe(resultado => console.log(resultado));

  }

}
