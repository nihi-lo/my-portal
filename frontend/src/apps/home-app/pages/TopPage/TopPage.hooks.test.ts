import { act, cleanup, renderHook } from "@testing-library/react";

import { useTopPage } from "./TopPage.hooks";

describe("Testing useTopPage", () => {
  beforeEach(() => {
    cleanup();
  });

  test("inputNameの初期値が空文字列であること", () => {
    const { result } = renderHook(() => useTopPage());
    expect(result.current.state.inputName).toBe("");
  });

  test("resultTextの初期値がundefinedであること", () => {
    const { result } = renderHook(() => useTopPage());
    expect(result.current.state.resultText).toBe(undefined);
  });

  test("handleGreetClickを実行するとresultTextが更新されること", async () => {
    vi.mock("@wailsjs/go/homeservice/Service", () => ({
      GreetAsync: vitest.fn().mockResolvedValue("foo"),
    }));

    const { result } = renderHook(() => useTopPage());
    await act(async () => {
      result.current.action.handleGreetClick();
      await Promise.resolve();
    });
    expect(result.current.state.resultText).toBe("foo");
  });

  test("handleInputChangeを実行すると引数で渡した文字列がinputNameにセットされること", () => {
    const { result } = renderHook(() => useTopPage());
    act(() => result.current.action.handleInputChange("foo"));
    expect(result.current.state.inputName).toBe("foo");
  });
});
