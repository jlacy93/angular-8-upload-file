import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { LogCatComponent } from './log-cat/log-cat.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatcardComponent } from './catcard/catcard.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    LogCatComponent,
    CatcardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
