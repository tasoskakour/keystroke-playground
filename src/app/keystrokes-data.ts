
export class KeystrokesData {

    /*Variables*/
    key_times:        number[] = [];    //timings in ms for each keystroke (since the epoch)
    key_timeDiffs:    number[] = [];    //diffrences in time for each keystroke to the next
    key_codes:        string[] = [];    //code for each keystroke (eg. backspace = BACKSPACE, keyA, keyB, SHIFT etc)
    key_ascii:        number[] = [];    //asci code for each keystroke (not capital sensitive eg. A=a=63)

    /*Constructor*/
    constructor(){}

    /*Methods*/
    save (keycode: string, ascci_code: number, time_ms: number){
        
        /*Store the data*/
        this.key_times.push (time_ms); 
        this.key_codes.push (keycode);     
        this.key_ascii.push(ascci_code);

    }

    calculateDiffs (){

        for (let i=0;i<this.key_times.length-1;i++){
            this.key_timeDiffs[i] =  this.key_times[i+1] - this.key_times[i];
            // console.log(String(this.key_timeDiffs[i]));
        }
    }

    clear(){
        
        this.key_times = [];
        this.key_timeDiffs = [];
        this.key_codes = [];
        this.key_ascii  = [];

    }
}