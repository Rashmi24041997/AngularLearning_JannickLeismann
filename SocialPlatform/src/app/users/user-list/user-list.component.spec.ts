import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [UserListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue
      (of([
        { id: 1, name: "Rashmi" }
        , { id: 2, name: "Gupta" }
      ]))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should fetch users from the UserService on init", () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  })

  it("Should fetch users from the userService when the refresh button is clicked",
    () => {
      fixture.detectChanges();
      userServiceSpy.calls.reset();

      const btn = fixture.debugElement.query(By.css("button"));

      btn.triggerEventHandler('click', null);

      expect(userServiceSpy).toHaveBeenCalled();
    }
  )
});
