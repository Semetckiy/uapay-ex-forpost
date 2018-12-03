import { Pipe, PipeTransform } from '@angular/core';
import { StringHelper } from '../../../../secoHelpers/string.helper';

@Pipe({
  name: 'highlightMatch'
})
export class HighlightMatchPipe implements PipeTransform {
  // If the given string starts with 'termToMatch' (match is not case or accent sensitive)
  // then it will return the string by wrapping the matching part with '<b>' tag to highlight it
  // ex: transform('Paris', 'par') will return '<b>Par</b>is'
  transform(value: string, termToMatch: string, handleAccents: boolean = false): string {
    let cleanedString = value.toLowerCase();
    let cleanedTerm = termToMatch.toLowerCase();
    // Handling accents decrease a lot the performance if the pipe is used multiple times
    if (handleAccents) {
      cleanedString = StringHelper.stripAccents(cleanedString);
      cleanedTerm = StringHelper.stripAccents(termToMatch);
    }

    if (cleanedString.startsWith(cleanedTerm)) {
      return `<span class="ngb-highlight">${value.substr(0, cleanedTerm.length)}</span>${value.substr(
        cleanedTerm.length,
        value.length
      )}`;
    } else {
      return value;
    }
  }
}
