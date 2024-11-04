import { ValueObject } from "@/utils/valueObject";

import { type FullNameAttribute as Attribute } from "./fullName.attr";

declare const _symbol: unique symbol;

export class FullName extends ValueObject<typeof _symbol, Attribute> {
  private constructor(attrs: Attribute) {
    super(attrs);

    if (this.attrs.firstName.length == 0) {
      throw new Error(`invalid firstName: 名前は1文字以上である必要があります。`);
    }

    if (this.attrs.lastName.length == 0) {
      throw new Error(`invalid lastName: 名字は1文字以上である必要があります。`);
    }
  }

  /** 氏名を新規作成する */
  static create(attrs: Attribute): FullName {
    return new this(attrs);
  }

  /** 名前 */
  get firstName(): Attribute["firstName"] {
    return this.attrs.firstName;
  }

  /** 名字 */
  get lastName(): Attribute["lastName"] {
    return this.attrs.lastName;
  }

  /** 名字を変更する */
  changeLastName(newLastName: Attribute["lastName"]): FullName {
    return FullName.create({
      firstName: this.attrs.firstName,
      lastName: newLastName,
    });
  }
}
