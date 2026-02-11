import { Component, signal, inject, OnInit, DestroyRef } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent,PlacesComponent],
})
export class UserPlacesComponent implements OnInit{
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef); //criara sempre para unsubscribe (limpar) o dado
  places = this.placesService.loadedUserPlaces;
  isFetching = signal(false);
  isError = signal('');

    ngOnInit() {  //usando o inject no ngOnInit quando o componente esta pronto, assim podemos usar direto no site
      this.isFetching.set(true);
      const subscription = this.placesService.loadUserPlaces()
        .subscribe({  //get é um observador, por isso temos que sempre usar o subscribe para triggar a request
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

    onRemovePlace(place: Place){
      const subscription = this.placesService.removeUserPlace(place).subscribe();
      
      this.destroyRef.onDestroy(()=>{
        subscription.unsubscribe();
      });
    }
}
    
