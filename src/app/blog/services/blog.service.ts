import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  blog: Blog[] = [
    {
    id: 1,
    title: "The Monarchs",
    description:"In this thrilling conclusion to New York Times bestselling authors Kass Morgan and Danielle Paiges The Ravens duology, loyalty, love, and friendships are tested as sorority sisters Scarlett and Vivi must face the forces of hell itself when a rival sorority threatens to wreak havoc on campus.",
    author:"Kass Morgan",
    comments:["great","not bad"]
    },
    {
    id: 2,
    title: "My Contrary Mary",
    description: "Long live the queen: The authors who brought you the New York Times bestselling My Lady Jane kick off an all-new historical trilogy with the classy, courtly tale of Mary, Queen of Scots.  ",
    author:"Cynthia Hand",
    comments:["beautiful story","nice"]
    },
    {
    id : 3,
    title: "Tiny Pretty Things",
    description: "Tiny Pretty Things is an American drama streaming television series based on the novel of the same name by Sona Charaipotra and Dhonielle Clayton, created by Michael MacLennan. It premiered on Netflix on December 14, 2020, and has aired for one season.",
    author: "Sona Charaipotra",
    comments: ["nice","beautiful story"]
    },
    {
    id : 4,
    title: "Punching the Air",
    description: "An unflinching look inside the American criminal justice system told from the perspective of a boy incarcerated for a crime he didn’t commit and working to communicate his truth through art. Honest, raw and profoundly eye-opening, this is a must-read for teens and adults alike.",
    author: " Ibi Zoboi",
    comments: ["great!!","beautiful story"]
    },
    {
    id : 5,
    title: "Here s to Us",
    description: "Becky Albertalli and Adam Silvera reunite to continue the story of Arthur and Ben, the boys readers first fell for in the New York Times bestselling rom-com What If It’s Us.",
    author: "Becky Albertalli",
    comments: ["beautiful story","not bad"]
    }


  ]

  constructor() { }

  getBlogDisplay(){
    return this.blog;
  }
}
