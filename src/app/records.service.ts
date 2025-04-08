import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam", 'E123', 'at@abc.net']
  info2: string[] = ["Nina", 'E231', 'nn@abc.net']
  info3: string[] = ["Mic", 'E321', 'mc@abc.net']

  //creating method
  getInfo1(): string[]{
    return this.info1
  }

  getInfo2(): string[]{
    return this.info2
  }

  getInfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
