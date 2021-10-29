import { Component, OnInit } from '@angular/core';
import { Animal, AnimalSize } from '../shared/animal.model';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styles: [
  ]
})
export class AnimalComponent implements OnInit {

  constructor(public service: AnimalService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Animal) {
   // this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: string) {
    this.service.deleteAnimals(id)
      .subscribe(
        res => {
          this.service.refreshList();
        },
        err => {console.log(err)}
      );
  }

}
