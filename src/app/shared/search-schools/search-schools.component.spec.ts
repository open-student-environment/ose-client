import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSchoolsComponent } from './search-schools.component';

describe('SearchSchoolsComponent', () => {
  let component: SearchSchoolsComponent;
  let fixture: ComponentFixture<SearchSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
