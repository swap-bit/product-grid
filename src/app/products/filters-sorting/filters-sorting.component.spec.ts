import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSortingComponent } from './filters-sorting.component';

describe('FiltersSortingComponent', () => {
  let component: FiltersSortingComponent;
  let fixture: ComponentFixture<FiltersSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersSortingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
