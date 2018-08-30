import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './visuals/graph/graph.component';
import { NodeVisualComponent } from './visuals/shared/node-visual.component';
import { LinkVisualComponent } from './visuals/shared/link-visual.component';
import { D3Service } from './d3/d3.service';
import { DraggableDirective, ZoomableDirective } from './d3/directives';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

import { GraphService } from './services/graph.service';
import { SchoolsComponent } from './schools/schools.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    DraggableDirective,
    ZoomableDirective,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, MatCheckboxModule, MatPaginatorModule
  ],
  providers: [
    HttpClient,
    D3Service,
    GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
