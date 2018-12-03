import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { UsersHttpService } from "../users-http.service";
import { HttpCredentialsInterceptor } from './http-credentials-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe(`HttpCredentialsInterceptor`, () => {
  let service: UsersHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: 'API_BASE', useValue: 'http://amadeus-direct.com/' },
        UsersHttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpCredentialsInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(UsersHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should set withCredentials = true', () => {
    service.getUsers().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`http://amadeus-direct.com/tasks/users`);

    expect(httpRequest.request.withCredentials).toBeTruthy();
  });

});
