import { type ContainerHook } from "@/utils/containerHook";

type CustomHook<State, Action, Argument extends object | void = void> = ContainerHook<
  State,
  Action,
  Argument
>;

export { type CustomHook };
