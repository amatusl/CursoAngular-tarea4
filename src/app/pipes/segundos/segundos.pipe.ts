import { Pipe, PipeTransform } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Pipe({
  name: 'segundos'
})
export class SegundosPipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(segundos: number, formato: 'minutos' | 'horas' = 'minutos'): number {
    
    if (formato === 'minutos') {
      return segundos / 60;

    } else if (formato === 'horas') {
      return (segundos / 60) / 60;
      
    } else {
      return 0;
    }
  }
}
