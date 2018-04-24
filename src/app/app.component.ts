import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  loading = false;
  tasks$;
  data;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private http: Http) {
    this.getTasks();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      file: null
    });
  }

  onFileChange(event) {
    /*
      Use a FileReader and save data into a formControl `file`
      Format: {
        filename,
        filetype,
        value
      }
    */
  }

  onSubmit() {
    /*
     Upload a file to the server
    */
  }

  onAddNewTask(name) {
    /*
      Save a new task
    */
  }

  onRemoveTask(id) {
    /*
    Remove a task from the server
    */
  }

  clearFile() {
    this.form.get('file').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  private getTasks() {
    this.tasks$ = this.http
      .get('api/tasks')
      .pipe(map(res => res.json()))
      .subscribe(data => (this.data = data));
  }
}
