import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDirection, TasksSortColComponent } from './tasks-sort-col.component';
import { ChangeDetectionStrategy } from "@angular/core";

describe('TasksSortColComponent', () => {
  let component: TasksSortColComponent;
  let fixture: ComponentFixture<TasksSortColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksSortColComponent ]
    })
    .overrideComponent(TasksSortColComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSortColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('have direction SortDirection.None by default', () => {
    expect(component.direction).toEqual(SortDirection.NONE);
  });

  it('have direction SortDirection.ASC', () => {
    component.columnId = 'test';
    component.settings = {sortColumn: 'test', sortDescending: false};
    fixture.detectChanges();
    expect(component.direction).toEqual(SortDirection.ASC);
  });

  it('have direction SortDirection.DESC', () => {
    component.columnId = 'test';
    component.settings = {sortColumn: 'test', sortDescending: true};
    fixture.detectChanges();
    expect(component.direction).toEqual(SortDirection.DESC);
  });

  it('have direction SortDirection.None when column is inactive', () => {
    component.columnId = 'inactive';
    component.settings = {sortColumn: 'test', sortDescending: true};
    fixture.detectChanges();
    expect(component.direction).toEqual(SortDirection.NONE);
  });

  it('should emit with sortDescending: false', () => {
    let evt;
    component.columnId = 'test';
    component.settings = {sortColumn: 'test', sortDescending: true};
    fixture.detectChanges();
    component.change.subscribe(e => evt = e);
    component.onClick();
    expect(evt).toEqual({sortColumn: 'test', sortDescending: false});
  });

  it('should emit with sortDescending: true', () => {
    let evt;
    component.columnId = 'test';
    component.settings = {sortColumn: 'test', sortDescending: false};
    fixture.detectChanges();
    component.change.subscribe(e => evt = e);
    component.onClick();
    expect(evt).toEqual({sortColumn: 'test', sortDescending: true});
  });

  it('should set  columnId and sortDescending: true when not yet active', () => {
    let evt;
    component.columnId = 'yetInactive';
    component.settings = {sortColumn: 'test', sortDescending: true};
    fixture.detectChanges();
    component.change.subscribe(e => evt = e);
    component.onClick();
    expect(evt).toEqual({sortColumn: 'yetInactive', sortDescending: true});
  });

});
