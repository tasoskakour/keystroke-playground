
export class RandomText {
    
    /* Variables (like verbs, subjects, etc etc) used for sentences */
    verbs =[   
        ['go to', 'goes to', 'going to', 'went to', 'gone to'],
        ['look at', 'looks at', 'looking at', 'looked at', 'looked at'],
        ['choose', 'chooses', 'choosing', 'chose', 'chosen']
    ];
    tenses = [
        {name:'Present', singular:1, plural:0, format:'%subject %verb %complement'},
        {name:'Past', singular:3, plural:3, format:'%subject %verb %complement'},
        {name:'Present Continues', singular:2, plural:2, format:'%subject %be %verb %complement'}
    ];
    subjects =  
    [
        {name:'I', be:'am', singular:0},
        {name:'You', be:'are', singular:0},
        {name:'He', be:'is', singular:1}
    ];
    complementsForVerbs =
    [
        ['cinema', 'Egypt', 'home', 'concert'],
        ['for a map', 'them', 'the stars', 'the lake'],
        ['a book for reading', 'a dvd for tonight']
    ];


    /************************************* */
    /* Constructor */
    constructor() {

    }

    /* Class Methods */

    /*returns a random element from the array or property*/
    private arrayGetRandom(arr: string[])
    {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    private propertyGetRandom(prop: {})
    {
        return prop[Math.floor(Math.random() * Object.keys(prop).length)];
    };

    /*generate a single random sentence */
    private generateSentence(){
        let index = Math.floor(this.verbs.length * Math.random());
        let tense = this.propertyGetRandom(this.tenses);
        let subject =  this.propertyGetRandom(this.subjects);
        let verb = this.verbs[index];
        let complement = this.complementsForVerbs[index];
        let str = tense.format;
        str = str.replace('%subject', subject.name).replace("%be", subject.be);
        str = str.replace('%verb', verb[subject.singular ? tense.singular : tense.plural]);
        str = str.replace('%complement', this.arrayGetRandom(complement));
        return str;
    }

    /*generate a count (senteceCount) of senteces*/
    public generateText(sentenceCount: number){
        let text = '';
        for(let i=0;i<sentenceCount;i++){
            text += this.generateSentence() + '. ';
            console.log(text);
        }
        return text;
    }
}
