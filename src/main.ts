import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


//// Here we are bootstrapping our application with the AppModule. So when the application first loads this app module is loaded.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
