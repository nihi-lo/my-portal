import { type ReadonlyDeep } from "type-fest";

/**
 * オブジェクトをディープフリーズし、全てのプロパティを凍結します。
 * 再帰的に全てのネストされたオブジェクトも凍結されます。
 *
 * 循環参照が検出された場合、そのオブジェクトは凍結されません。
 *
 * @template T - 凍結対象のオブジェクトの型
 * @param {T} object - 凍結するオブジェクト。nullや未定義の場合はそのまま返されます。
 * @param {WeakSet<object>} [seen=new WeakSet<object>()] - 凍結処理中に循環参照を検出するためのセット。
 * @returns {ReadonlyDeep<T>} - 全てのプロパティが凍結されたオブジェクト。
 * すべてのプロパティは読み取り専用であり、変更できません。
 */
function deepFreeze<T>(object: T, seen: WeakSet<object> = new WeakSet<object>()): ReadonlyDeep<T> {
  if (object && typeof object === "object" && !Object.isFrozen(object)) {
    // 循環参照が検出された場合、処理を終了する
    if (seen.has(object)) {
      return object as ReadonlyDeep<T>;
    }

    seen.add(object);
    Object.getOwnPropertyNames(object).forEach((prop) => {
      const value = object[prop as keyof T];
      if (value && typeof value === "object" && !Object.isFrozen(value)) {
        deepFreeze(value, seen);
      }
    });
  }

  return Object.freeze(object) as ReadonlyDeep<T>;
}

export { deepFreeze };
