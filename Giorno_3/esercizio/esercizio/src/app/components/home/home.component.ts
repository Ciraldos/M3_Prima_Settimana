import { Component } from '@angular/core';
import { iArticle } from '../../models/article';
import { iPost } from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  apiUrl:string = "../../../assets/db.json"
  articleArr:iPost[] = []

  ngOnInit(){
    this.getArticle()
  }

  async getArticle():Promise<void>{
    let response = await fetch(this.apiUrl)
    let articles = <iArticle> await response.json()
    this.articleArr = articles.posts;
  }
}
