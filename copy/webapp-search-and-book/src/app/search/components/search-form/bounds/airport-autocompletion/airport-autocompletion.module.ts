import { NgModule } from '@angular/core';
import { AirportAutocompletionParsingService } from './airport-autocompletion.parsing.service';
import { AirportAutocompletionDownloadService } from './airport-autocompletion.download.service';
import { AirportAutocompletionService } from './airport-autocompletion.service';

@NgModule({
  providers: [AirportAutocompletionParsingService, AirportAutocompletionDownloadService, AirportAutocompletionService]
})
export class AirportAutocompletionModule {}
