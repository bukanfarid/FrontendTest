import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Owner } from 'src/app/shared/owner.model';
import { OwnerService } from 'src/app/shared/owner.service';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styles: [
  ]
})
export class OwnerFormComponent implements OnInit {

  constructor(public service: OwnerService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.service.formData.IsNew==true ) {
      this.insertRecord(form);
    }
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) { 
    this.service.postOwner().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err);}
    );
  }

  updateRecord(form: NgForm) {
    this.service.putOwner().subscribe(
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
    this.service.formData = new Owner();
  }

}
