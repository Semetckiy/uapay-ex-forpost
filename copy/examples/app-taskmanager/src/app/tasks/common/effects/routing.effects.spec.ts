import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { RoutingEffects } from './routing.effects';
import { Actions } from "@ngrx/effects";
import { hot } from "jasmine-marbles";
import { UsersHttpService } from "../services/users-http.service";
import { RouterTestingModule } from "@angular/router/testing";
import { Back, Go } from "../actions/routing.actions";
import { Router } from "@angular/router";

describe('RoutingEffects', () => {
  let actions$: Observable<any>;
  let effects: RoutingEffects;
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {
        provide: UsersHttpService, useValue: {
          getUsers: () => {}
        }}, {
        provide: Location, useValue: {
          back: () => {}
        }},
        RoutingEffects,
        provideMockActions(() => actions$)
      ],
      imports: [
        RouterTestingModule
      ]
    });

    actions$ = TestBed.get(Actions);
    effects = TestBed.get(RoutingEffects);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('navigate$', () => {
    it('should navigate', () => {
      spyOn(router, 'navigate');
      actions$ = hot('-a', { a: new Go({path: ['somePath']})});

      effects.navigate$.subscribe(x => {
        expect(router.navigate).toHaveBeenCalledWith(['somePath'], {queryParams: {}})
      });
    });

  });

  describe('navigateBack$', () => {
    it('should navigate back', () => {
      spyOn(location, 'back');
      actions$ = hot('-a', { a: new Back()});

      effects.navigateBack$.subscribe(x => {
        expect(location.back).toHaveBeenCalledWith();
      });
    });

  });
});
