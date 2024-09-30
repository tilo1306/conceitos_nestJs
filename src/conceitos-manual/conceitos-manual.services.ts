import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  solucionarHome(): string {
    return 'Home do Conceitos Manual Solucionada.';
  }
}
