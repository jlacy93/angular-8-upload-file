import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CatserviceService } from '../services/cat-service.service';

@Component({
  selector: 'app-log-cat',
  templateUrl: './log-cat.component.html',
  styleUrls: ['./log-cat.component.css']
})
export class LogCatComponent implements OnInit{
  currentFile: File;
  selectedFiles: FileList;
  catForm!: FormGroup;
  showSuccessMessage = false;
  showSubmitButton= true;
  showSubmitErrorMessage = false;
  submitted = false;
  constructor(
    private catservice:CatserviceService

  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.catForm = new FormGroup(
      {
        microchipNumber: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        color: new FormControl('', [Validators.required]),
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.catForm.controls;
  }

  logCat() {
    this.showSuccessMessage = false;
    this.showSubmitButton = true;
    this.submitted= true;
    this.showSubmitErrorMessage = false;
    console.log("log cat");
    console.log(this.catForm.value);
    this.submitted= true;
    this.currentFile = this.selectedFiles.item(0);

    if(this.catForm.invalid) {
      return;
    }
  
    if(this.catForm.valid){
    this.catservice.log(this.catForm.value, this.currentFile).subscribe(

      (result) => {
        {          
          this.showSuccessMessage = true;
          this.showSubmitButton = false;
          this.showSubmitErrorMessage = false;
      setTimeout(() => {
            //  this.router.navigate(['/']); //TODO: navigate to page for created cat.
      } , 5000);
    }
      
      },
      (error) => {
        this.showSuccessMessage = false;
        this.showSubmitButton = true; 
        this.showSubmitErrorMessage= true
        
      }
    );
    }

  }
}