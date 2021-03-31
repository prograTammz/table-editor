import Dexie from 'dexie';

export class DexieService extends Dexie {
  constructor() {
    super('TableEditor');
    this.version(1).stores({
      data: '++id, value',
    });
  }

  public doesExist() {
    return Dexie.exists('TableEditor');
  }
}
