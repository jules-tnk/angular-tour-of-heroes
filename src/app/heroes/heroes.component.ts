import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../services/hero/hero.service";
import {MessageService} from "../services/message/message.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})


export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;


  //CONSTRUCTOR
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    if (this.selectedHero==hero){
      this.selectedHero = undefined;
      return
    }
    this.messageService.add(`HeroesComponent: selected hero name=${hero.name}`);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
