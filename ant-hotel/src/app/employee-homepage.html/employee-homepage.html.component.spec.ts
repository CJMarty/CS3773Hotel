import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHomepage.HtmlComponent } from './employee-homepage.html.component';

describe('EmployeeHomepage.HtmlComponent', () => {
  let component: EmployeeHomepage.HtmlComponent;
  let fixture: ComponentFixture<EmployeeHomepage.HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHomepage.HtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHomepage.HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
