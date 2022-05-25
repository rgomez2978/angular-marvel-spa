import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from "../../services/heroes.service";

@Component({
    selector: 'app-heroes-detail',
    templateUrl: './heroes-detail.component.html'
})


export class HeroesDetailComponent {

    heroe: any = {};

    constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
        this.activatedRoute.params.subscribe(params => {
            this.heroe = this._heroesService.getHeroe(params['id']);
        });
    }
}
