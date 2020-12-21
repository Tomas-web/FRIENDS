import {TestBed} from '@angular/core/testing';
import {HttpClientWrapperService} from './http-client-wrapper.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('HttpClientWrapperService', () => {
  let httpClientWrapper: HttpClientWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        HttpClientWrapperService,
        HttpClient
      ]
    });
  });


  it('should be able to create instance', () => {
    httpClientWrapper = TestBed.inject(HttpClientWrapperService);
    expect(httpClientWrapper).toBeTruthy();
  });

  it('should be able to perform requests and to handle errors', () => {
    httpClientWrapper = TestBed.inject(HttpClientWrapperService);

    const requests = ['get', 'post', 'delete', 'put'];
    const handleErrorSpy = spyOn<any>(httpClientWrapper, 'handleError').and.callThrough();
    const url = '/testUrl';

    requests.forEach(function (requestType) {
      httpClientWrapper[requestType]<any>(url, {}).subscribe(() => {
      }, (e) => {
        return e;
      });
      const mostRecentCall = handleErrorSpy.calls.mostRecent();
      expect(typeof mostRecentCall.returnValue).toBe('function');
      expect(mostRecentCall.args[0]).toBe(requestType + ':' + url);
      mostRecentCall.returnValue({msg: 'Fail_' + requestType}).subscribe(() => {
      }, (e) => {
        expect(e.msg).toEqual('Fail_' + requestType);
        return e;
      });
      expect(handleErrorSpy.calls.any()).toBeTruthy();
    });

  });

  afterEach(() => {
    httpClientWrapper = null;
  });
});
