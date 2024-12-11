import { Component, Input, input } from "@angular/core";

@Component({
    standalone: false,
    selector: 'app-property_card',
    // template: `<h1>I am a card</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: ['h1{font-weight:normal;}']
    styleUrl:'property-card.component.css'
})

export class PropertyCardComponent{
    @Input() property : any
}