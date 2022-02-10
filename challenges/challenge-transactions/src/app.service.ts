import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Desafio Nest.js - Semana FullCycle 6';
  }
}
