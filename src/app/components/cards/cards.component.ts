import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})

export class CardsComponent {

    @Input() heroe:any  = {};
    @Input() index:number;
    @Output() heroeSelected : EventEmitter<number>;

    constructor(private router:Router) {
        this.heroeSelected = new EventEmitter();
    }

    verHeroe() {
        this.router.navigate(['/heroes-detail', this.index]);
    }
}
