import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/shared/animal.service';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/shared/animal.model';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styles: [
  ]
})
export class AnimalFormComponent implements OnInit {

  constructor(public service: AnimalService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.service.formData.isNew==true ) {
      this.insertRecord(form);
    }
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) { 
    this.service.postAnimals().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err);}
    );
  }

  updateRecord(form: NgForm) {
    this.service.putAnimals().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Animal();
  }

}
