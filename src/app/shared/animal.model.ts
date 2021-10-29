export enum AnimalSize {
    Unknown = 0,
    Tiny,
    Small,
    Medium,
    Large,
    Huge
  }
  
  export class Animal {
    animalId: string;
    name: string;
    size: AnimalSize;
    isNew: boolean;
     
    constructor() {
      this.animalId = "";
      this.name = "";
      this.size = 0;
      this.isNew = true;
    }
  }
  