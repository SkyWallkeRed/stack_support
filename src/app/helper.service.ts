import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/';
import {Observable} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public homeData;
  public allUpdate: Observable<Array<Object>>;
  public allSubject: Subject<Array<Object>>;

  constructor(private http: HttpClient) {
    this.allSubject = new Subject<Array<Object>>();
    this.allUpdate = this.allSubject.asObservable();
    this._getHome();
  }


  _getHome(): void {
    const objservble = this.http.get<Object[]>('http://localhost:8888/api/articles');
    objservble.subscribe((res) => {
      this.homeData = res;
      this.allSubject.next(this.homeData);
    });
  }

}
