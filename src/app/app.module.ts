import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { TabComponent } from './tab/tab.component';
import { TabForComponent } from './tab-for/tab-for.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TabComponent,
    TabForComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
