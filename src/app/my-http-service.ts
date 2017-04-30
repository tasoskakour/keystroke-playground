import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MyHttpService {

  /*****************Variables************/
 
  // server_url = '/api';

  /****************Constructor*******************/
  constructor(public http: Http) { }

  /***********Methods*******/
  /*Extracts Data from the request*/
  private extractData(res) {

    //check if error
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    console.log(res.json());
    let serviceData = (res.json());
    return serviceData || {}; //return the data or nothing
  }

  /* Wrapper to the get request, returns an observable */
   myHttpGet(url: string, myToken: string ): Observable<any> {

        if (myToken !== ' ') {
              const headers = new Headers();
              headers.append('x-access-token', myToken );
              const options = new RequestOptions({ headers: headers });
              return this.http.get(url, options).map(this.extractData);
        }else {
              return this.http.get(url).map(this.extractData);
        }
   }


  /* Wrapper to post request, returns an observable */
  myHttpPut(url: string, JSONdataToSend, myToken: string): Observable<any> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    if (myToken !== ' ') { headers.append('x-access-token', myToken ); }

    return this.http.post(url, JSONdataToSend, {headers: headers} ).map((res: Response) => res.json());

  }

}