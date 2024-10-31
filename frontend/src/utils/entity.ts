import { BrandClass } from "@/utils/brandClass";
import { type IEntityId } from "@/utils/entityId";

abstract class Entity<
  Symbol extends symbol,
  EntityId extends IEntityId,
  Attribute extends object,
> extends BrandClass<Symbol> {
  readonly #id: EntityId;
  #attrs: Attribute;

  constructor(id: EntityId, attrs: Attribute) {
    super();

    this.#id = id;
    this.#attrs = attrs;
  }

  get id(): EntityId {
    return this.#id;
  }

  protected get attrs(): Attribute {
    return this.#attrs;
  }

  equals(object: unknown): boolean {
    if (object === null || !(object instanceof Entity)) {
      return false;
    }

    /* HACK:
     * Entityの同一性を確認するためにEntityのID同士を比較する必要があるが、object.idはany型であり、object.id.valueのように呼び出せない。
     * しかし、objectがEntityのインスタンスであるならば、object.idはIEntityIdを実装しており、valueにアクセス可能である。
     * したがって、型アサーションを用いつつID同士を比較する。
     */
    return this.id.value === (object.id as IEntityId).value;
  }
}

export { Entity };
