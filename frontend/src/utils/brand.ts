type Brand<T, S extends symbol> = T & { [K in S]: never };

export { type Brand };
