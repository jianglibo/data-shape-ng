import { Observable } from 'rxjs/Observable';
import { AttributesBase, JsonapiObject } from '../jsonapi-object';
import { ListBody } from '../list-body';
import { SingleBody } from '../single-body';
import { PageCursor, PageNumberSize, PageOffsetLimit } from './datastore-util';

export interface JsonapiObjectType<E extends AttributesBase, T extends JsonapiObject<E>> {
  new (attr: E): T;
}

export type SortWay = 'asc' | 'desc' | '';

export interface SortPhrase {
  fname: string;
  direction: SortWay;
}

export interface FilterPhrase {
  fname: string;
  value: any;
}

export interface DataStore {
  findAll<E extends AttributesBase, T extends JsonapiObject<E>>(
    jsonapiObjectType: JsonapiObjectType<E, T>,
    page: PageOffsetLimit | PageCursor | PageNumberSize,
    sort: SortPhrase[],
    filter: FilterPhrase[],
    params?: any
  ): Observable<ListBody<E, T>>;

  findRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
    modelType: JsonapiObjectType<E, T>,
    id: number | string,
    params?: any
  ): Observable<SingleBody<E, T>>;

  createRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
    modelType: JsonapiObjectType<E, T>,
    data: T
  ): Observable<SingleBody<E, T>>;

  saveRecord<E extends AttributesBase, T extends JsonapiObject<E>>(model: T, params?: any): Observable<SingleBody<E, T>>;

  deleteRecord<E extends AttributesBase, T extends JsonapiObject<E>>(model: T): Observable<Response>;
  deleteRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
    jsonapiObjectType: JsonapiObjectType<E, T>,
    id: string
  ): Observable<Response>;
}
