import { type EnumType } from "@/utils/enumType";

const OS = {
  Undetermined: 0,
  Mac: 1,
  Windows: 2,
} as const;

type OS = EnumType<typeof OS>;

export { OS };
