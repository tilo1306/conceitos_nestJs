import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  solucionarHome(): string {
    return 'Home do Conceitos automatico Solucionada.';
  }
}
