import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumsComponent } from './scrums.component';

describe('ScrumsComponent', () => {
  let component: ScrumsComponent;
  let fixture: ComponentFixture<ScrumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('scrum should have call in number', () => {
    // arrange
    // act
    // assert
  });

});
