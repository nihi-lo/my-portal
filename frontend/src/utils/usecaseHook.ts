type UsecaseHook<Input, Output> = () => {
  handleAsync: (input: Input) => Promise<Output>;
};

export { type UsecaseHook };
