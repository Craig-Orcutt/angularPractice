import {Component} from '@angular/core';

@Component ({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css']
})

export class EntryComponent {
  title: string ='my first photo';
  photo: string ='http://placehold.it/800x500?text=AngularBasics';
  description: string = 'A description of the photo';
  comments: any[] = [
    {name: 'John', comment: 'A comment'},
    {name: 'Jim', comment: 'A comment'},
    {name: 'Jen', comment: 'A comment'},
    {name: 'James', comment: 'A comment'},
  ]


}