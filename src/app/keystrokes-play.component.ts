import { Component }      from '@angular/core';
import { KeystrokesData } from './keystrokes-data';
import { MyHttpService } from './my-http-service';
import { User } from './user';


@Component({
  selector:    'keystrokes-play',
  templateUrl: './keystrokes-play.component.html',
  styleUrls:   ['./keystrokes-play.component.css'],
  host:        {'(document:keydown)': 'keyPressed($event)'}, // this is used for keystroke detection in this component
  providers : [MyHttpService],
})



export class KeystrokesPlayComponent  {

    /***Variables***/
    myKeystrokesData = new KeystrokesData();
    showResultsFlag = false;
    myUser = new User();

    /*Constructor*/
     constructor(public _myHttpService: MyHttpService) {}

    /***Methods***/

    /*Fires up when a key is pressed down*/
    keyPressed(event: KeyboardEvent){
      
      console.log('Keypressed Fired--> Code: ' + event.code + ' ASCI: ' + String(event.keyCode));  

      let t_ms = Math.trunc(performance.now()); // get time in ms 

      this.myKeystrokesData.save(event.code, event.keyCode, t_ms); // save 
  
}

    /*Show the Keystrokes & timing data */
    showData(){
        
        /*Calculate time diffs in ms for each keystroke*/
        this.myKeystrokesData.calculateDiffs();

        /*Print results in screen */
        // console.log(this.myKeystrokesData.keyCodes);
        // alert(this.myKeystrokesData.keyCodes);
        if (this.showResultsFlag == false){
            // first check if there are some results to show
            if (this.myKeystrokesData.key_ascii.length !== 0) {
                this.showResultsFlag=true;
            }else{
                alert('No results to show!')
            }
            
        }else{
            //clear results
            this.myKeystrokesData.clear();
            this.showResultsFlag=false
        }
     }

     /* Sends data via a post request to /api/getkeystrokes*/
     sendData(){

         if (this.myUser.username === '') {
             alert('Please type some username!');
             return;
         }

         console.log(this.myUser.username);
       
        this.myKeystrokesData.calculateDiffs();

        //key_ascii, key_timeDiffs
        const jsondata = JSON.stringify({username: this.myUser.username, keyAscii: this.myKeystrokesData.key_ascii, timeDiffs: this.myKeystrokesData.key_timeDiffs});

        this._myHttpService.myHttpPut('api/getkeystrokes', jsondata, ' ').subscribe(
        (res) => {
            //do sth if you want with the response message
             alert(res.message);
             console.log(res);
        });
     }


}


