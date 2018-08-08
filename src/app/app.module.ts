import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SheetComponent } from './sheet/sheet.component';
// NGPRIME
import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { MenuItem } from 'primeng/api';                 // api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import { NavComponent } from './side-bar/nav.component';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from '../../node_modules/ng2-pdf-viewer';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadPDFComponent } from './upload-pdf/upload-pdf.component';
import {FileUploadModule} from 'primeng/fileupload';
import { HtmlPdfComponent } from './html-pdf/html-pdf.component';
import {RouterModule} from '@angular/router';
import { DatalineComponent } from './dataline/dataline.component'
import {CardModule} from 'primeng/card';
import { DatagridComponent } from './datagrid/datagrid.component';
import { MyfilesComponent } from './myfiles/myfiles.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SheetComponent,
    NavComponent,
    NavbarComponent,
    UploadPDFComponent,
    HtmlPdfComponent,
    DatalineComponent,
    DatagridComponent,
    MyfilesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    PdfViewerModule,
    FormsModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    AccordionModule,
    CardModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
