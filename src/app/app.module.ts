import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveComponent } from './Reactive/reactive.component';

import { NgForTableComponent } from './ng-for-table/ng-for-table.component';
import { DynamicComponent } from './Dynamic/dynamic.component';
import { DropdownDirective } from './directive/dropdown.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { UpperComponent } from './Upper/upper.component';





@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    DropdownDirective,
    NgForTableComponent,
    DynamicComponent,
    ParentComponent,
    ChildComponent,
    GrandParentComponent,
    UpperComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
