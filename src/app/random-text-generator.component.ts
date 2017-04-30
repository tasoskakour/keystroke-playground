import { Component } from '@angular/core';
import { RandomText } from './random-text'

@Component({
  selector: 'random-text-generator',
  templateUrl: './random-text-generator.component.html',
  styleUrls: ['./random-text-generator.component.css'],
})



export class RandomTextGeneratorComponent  {

   randomTextModel = new RandomText();
   randomText: string;
   counter = 0;

   generateRandomText(){
      
      this.randomText = this.randomTextModel.generateText(5);
      
  }
}

