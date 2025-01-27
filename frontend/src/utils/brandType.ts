type BrandType<T, S extends symbol> = T & Record<S, never>;

export { type BrandType };
