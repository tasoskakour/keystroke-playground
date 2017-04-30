/*DEN XRISIMOPOIEITAI PROS TO PARON....*/

import { Component, OnInit } from '@angular/core';
import { MyHttpService } from './my-http-service';

@Component({
  selector: 'a-get-request.component',
  template: ` `,
  providers : [MyHttpService],
})



export class AGetRequestComponent {

  // myResponse;  

  /*****Constructor*********/
 constructor(public _myHttpService: MyHttpService) {}

 /**********Methods*********/
  getMyData() {
      this._myHttpService.myHttpGet('api/users' , ' ').subscribe(data => {
        //do something with the json data
        console.log(data.message);
      } );

  }

  sendMyData() {

    const jsondata = JSON.stringify({username: 'Joere', name: 'Smith', password: '123'});

    this._myHttpService.myHttpPut('api/authenticate', jsondata, ' ').subscribe(
      (res) => {
        console.log(res);
        // this.myResponse = res;
        // console.log(this.myResponse);
     });
  }

}
