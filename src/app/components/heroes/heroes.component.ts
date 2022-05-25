import { Component, OnInit } from '@angular/core';
import { HeroesService} from '../../services/heroes.service';
import { HeroeInterface } from '../../interfaces/heroe.interface';
import { Router } from "@angular/router";

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styles: []
})


export class HeroesComponent implements OnInit {

	heroes: HeroeInterface [] = [];

	constructor(private _heroresService: HeroesService, private router:Router) {
		// console.log('Constructor');
	}

	ngOnInit(): void {
		this.heroes = this._heroresService.getHeroes();
	}

}
