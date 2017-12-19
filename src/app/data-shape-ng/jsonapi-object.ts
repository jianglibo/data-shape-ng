import { DtoDescriptionKey } from './dto-description';
export interface Relationship {
  links: { self: string; related: string };
}

export abstract class AttributesBase {
  createdAt?: number;
  dtoApplyTo?: string;
  dtoAction?: string;
}

export interface AttributeType<T extends AttributesBase> {
  new (): T;
}

export abstract class JsonapiObject<E extends AttributesBase> {
  id: string | number;
  type: string;
  links: { self: string };
  abstract attributes: E;
  relationships?: { [s: string]: Relationship | undefined };

  constructor(jt: any) {
    this.type = Reflect.getMetadata(DtoDescriptionKey, jt).nameInUrl;
  }
}
