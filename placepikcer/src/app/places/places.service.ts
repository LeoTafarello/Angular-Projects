import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError,tap } from 'rxjs';

import { Place } from './place.model';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})

export class PlacesService {
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);
  private userPlaces = signal<Place[]>([]);
  isError = signal('');

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places','Sorry for the Issue, we are working to get back as soon as possible');
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places','Sorry for the Issue with your favorite places, we are working to get back as soon as possible')
      .pipe(
       tap ({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces(); //variavel para ter os dados antes de atualizar

    if (!prevPlaces.some((p) => p.id === place.id)){  //if para nao adicionar 2 places iguais
          this.userPlaces.update(prevPlaces => [...prevPlaces,place]); //faz com que a UI atualiza apos voce fazer qualquer mudança

    }

    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id,
    })
    .pipe(
      catchError((isError) =>{
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to store selected place.');
        return throwError(() => new Error('Failed to store selected place.'));
      })
    );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    if (prevPlaces.some((p) => p.id === place.id)){  //if para nao adicionar 2 places iguais
        this.userPlaces.set(prevPlaces.filter(p => p.id !== place.id)); //faz com que a UI atualiza apos voce fazer qualquer mudança
    }

    return this.httpClient
    .delete('http://localhost:3000/user-places/' + place.id)
    .pipe(
      catchError((isError) =>{
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to remove the selected place.');
        return throwError(() => new Error('Failed to remove the selected place.'));
      })
    );
  }

  private fetchPlaces(url:string,errorMessage:string) {
    return this.httpClient
      .get<{places: Place[]}>(url)
      .pipe(   //podemos usar o pipe para adicionar um operator para transformar o dado antes de chegar na proxima função
        map((resData) => resData.places), //mudando para pegar apenas a string places 
        catchError((isError) => {
          console.log(isError);
          return throwError(
            () => 
              new Error(errorMessage)
          );
        })
      );
  }
}
