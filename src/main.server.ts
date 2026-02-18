import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { BootstrapContext } from '@angular/platform-browser';

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(
    App,
    {
      ...appConfig,
      providers: [...(appConfig.providers ?? [])],
    },
    context,
  );
}
