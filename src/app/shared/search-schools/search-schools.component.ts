import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search-schools',
  templateUrl: './search-schools.component.html',
  styleUrls: ['./search-schools.component.css']
})
export class SearchSchoolsComponent {

  @ViewChild('schoolInput') schoolInput: ElementRef<HTMLInputElement>;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  schoolCtrl = new FormControl();
  filteredSchools: Observable<string[]>;
  schools: string[] = ['Paris'];
  allSchools: string[] = ['Paris', 'Lille', 'Lyon', 'Marseille'];

  constructor() {
    this.filteredSchools = this.schoolCtrl.valueChanges.pipe(
    startWith(null),
    map((school: string | null) => school ? this._filter(school) : this.allSchools.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our school
    if ((value || '').trim()) {
      this.schools.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.schoolCtrl.setValue(null);
  }

  remove(school: string): void {
    const index = this.schools.indexOf(school);

    if (index >= 0) {
      this.schools.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.schools.push(event.option.viewValue);
    this.schoolInput.nativeElement.value = '';
    this.schoolCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSchools.filter(school => school.toLowerCase().indexOf(filterValue) === 0);
  }

}
