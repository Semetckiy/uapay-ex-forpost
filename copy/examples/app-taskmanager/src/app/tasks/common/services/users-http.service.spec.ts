import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UsersHttpService } from "./users-http.service";
import { of } from "rxjs";

describe('UsersHttpService', () => {
  let service: UsersHttpService;
  let httpMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: 'API_BASE', useValue: 'http://amadeus-direct.com/' },
        {
          provide: HttpClient,
          useValue: {
            get: () => {}
          }
        },
        UsersHttpService
      ]
    });

    service = TestBed.get(UsersHttpService);
    httpMock = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('should retrieve users via get', () => {
      spyOn(httpMock, 'get').and.returnValue(of());

      service.getUsers();
      expect(httpMock.get).toHaveBeenCalledWith('http://amadeus-direct.com/tasks/users');
    });

  });
});
