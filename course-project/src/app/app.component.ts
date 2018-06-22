import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCgFuLaIZWWiF_5trCrM6f7uhSi9bg5xYM',
      authDomain: 'ng-recipe-book-be5c8.firebaseapp.com'
      /*
      // this properties aren't needed
      databaseURL: 'https://ng-recipe-book-be5c8.firebaseio.com',
      projectId: 'ng-recipe-book-be5c8',
      storageBucket: 'ng-recipe-book-be5c8.appspot.com',
      messagingSenderId: '821558075475'
      */
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
