import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from './material.module';
import { TableComponent } from './core/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './core/nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { PersonalInformationComponent } from './core/table/personal-information/personal-information.component';
import { FooterComponent } from './core/footer/footer.component';
import { ExcelService } from './shared/excel.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavMenuComponent,
    PersonalInformationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
