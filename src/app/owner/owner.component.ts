import { Component, OnInit } from '@angular/core';
import { Owner } from '../shared/owner.model';
import { OwnerService } from '../shared/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styles: [
  ]
})
export class OwnerComponent implements OnInit {

  constructor(public service: OwnerService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Owner) {
   // this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: string) {
    this.service.deleteOwner(id)
      .subscribe(
        res => {
          this.service.refreshList();
        },
        err => {console.log(err)}
      );
  }

}
