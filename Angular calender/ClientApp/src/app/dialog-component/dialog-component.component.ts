import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponentComponent>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      filename: ''
    })
  }
  submit(form) {
    this.dialogRef.close(`${form.value.filename}`);
  }
}
