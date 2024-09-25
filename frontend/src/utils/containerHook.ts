type ContainerHook<State, Action, Argument extends object | void = void> = (args: Argument) => {
  state: State;
  action: Action;
};

export { type ContainerHook };
