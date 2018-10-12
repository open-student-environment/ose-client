import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { NodeVisualComponent } from './graph/node-visual.component';
import { LinkVisualComponent } from './graph/link-visual.component';
import { D3Service } from './d3/d3.service';
import { DraggableDirective, ZoomableDirective } from './d3/directives';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PlotlyModule } from 'angular-plotly.js';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GraphService } from './services/graph.service';
import { SchoolsComponent } from './schools/schools.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ChartsComponent } from './charts/charts.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material/material.module';
import { TabsComponent } from './profile/tabs/tabs.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { ProfileSummaryComponent } from './profile/profile-summary/profile-summary.component';
import { ActivityComponent } from './profile/tabs/activity/activity.component';
import { IndicatorsComponent } from './profile/tabs/indicators/indicators.component';
import { GradesComponent } from './profile/tabs/grades/grades.component';
import { HomeComponent } from './home/home.component';
import { RightSidebarComponent } from './home/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './home/left-sidebar/left-sidebar.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { SearchSchoolsComponent } from './shared/search-schools/search-schools.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { FilterModalComponent } from './home/filter/filter-modal/filter-modal.component';
import { MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NouisliderModule } from 'ng2-nouislider';
import { FilterComponent } from './home/filter/filter.component';
import { ColorModalComponent } from './home/filter/color-modal/color-modal.component';
import { SizeModalComponent } from './home/filter/size-modal/size-modal.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    DraggableDirective,
    ZoomableDirective,
    SchoolsComponent,
    ClickOutsideDirective,
    ChartsComponent,
    ProfileComponent,
    LayoutComponent,
    TabsComponent,
    ProfileDetailsComponent,
    ProfileSummaryComponent,
    ActivityComponent,
    IndicatorsComponent,
    GradesComponent,
    HomeComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    DropdownComponent,
    SearchSchoolsComponent,
    FilterModalComponent,
    FilterComponent,
    ColorModalComponent,
    SizeModalComponent,
    SafeHtmlPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   DataService, { dataEncapsulation: false }
    // ),
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgxChartsModule,
    PlotlyModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatButtonModule,
    NouisliderModule,
    MatTooltipModule
  ],
  providers: [
    HttpClient,
    D3Service,
    GraphService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FilterModalComponent,
    ProfileComponent,
    ColorModalComponent,
    SizeModalComponent
  ]
})
export class AppModule { }
