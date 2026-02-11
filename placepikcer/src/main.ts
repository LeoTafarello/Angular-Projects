import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; //chamando o provide para usar HTTP para todos os codigos usando inject

import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
    providers:[provideHttpClient()]
}).catch((err) => console.error(err));
