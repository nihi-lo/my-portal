type BrandType<T, S extends symbol> = T & { [K in S]: never };

export { type BrandType };
