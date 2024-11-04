import { FullName } from "./index";

describe("氏名", () => {
  describe("氏名を新規作成する", () => {
    it("氏名を新規作成する", () => {
      const fullName = FullName.create({
        firstName: "smith",
        lastName: "john",
      });

      expect.soft(fullName.firstName).toEqual("smith");
      expect.soft(fullName.lastName).toEqual("john");
    });

    it("名字が0文字の場合はエラーを投げる", () => {
      const expected = new Error(`invalid firstName: 名前は1文字以上である必要があります。`);
      expect(() =>
        FullName.create({
          firstName: "",
          lastName: "john",
        }),
      ).toThrowError(expected);
    });

    it("名字が0文字の場合はエラーを投げる", () => {
      const expected = new Error(`invalid lastName: 名字は1文字以上である必要があります。`);
      expect(() =>
        FullName.create({
          firstName: "smith",
          lastName: "",
        }),
      ).toThrowError(expected);
    });
  });

  describe("名字を変更する", () => {
    it("名字を変更する", () => {
      const fullName = FullName.create({
        firstName: "smith",
        lastName: "john",
      });
      const newFullName = fullName.changeLastName("do");

      expect.soft(newFullName.firstName).toEqual("smith");
      expect.soft(newFullName.lastName).toEqual("do");
    });

    it("変更後の名字が0文字の場合はエラーを投げる", () => {
      const fullName = FullName.create({
        firstName: "smith",
        lastName: "john",
      });

      const expected = new Error(`invalid lastName: 名字は1文字以上である必要があります。`);
      expect.soft(() => fullName.changeLastName("")).toThrowError(expected);
    });
  });
});
