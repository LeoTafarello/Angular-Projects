import { Component, signal, inject, OnInit, DestroyRef } from '@angular/core';


import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';



@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  isError = signal('');
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef); //criara sempre para unsubscribe (limpar) o dado

  ngOnInit() {  //usando o inject no ngOnInit quando o componente esta pronto, assim podemos usar direto no site
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces()
      .subscribe({  //get é um observador, por isso temos que sempre usar o subscribe para triggar a request
        next: (places) => {
          this.places.set(places);
        },
        error:(isError : Error) => {
          this.isError.set(isError.message);
        },
        complete: () => { //quando o rest for done, iremos chamar a função que desliga o Fetching
          this.isFetching.set(false);
        },
      });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    });
  }

  onSelectPlace (selectedPlace:Place){
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace)
    .subscribe({
      next: (resData) => console.log(resData),
    });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    });
  }
}
