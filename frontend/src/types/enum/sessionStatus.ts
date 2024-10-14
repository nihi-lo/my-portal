import { type EnumType } from "@/utils/enumType";

const SessionStatus = {
  Loading: 0,
  Authenticated: 1,
  Unauthenticated: 2,
} as const;

type SessionStatus = EnumType<typeof SessionStatus>;

export { SessionStatus };
