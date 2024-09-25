import { type AppBodyVariantProps, appBodyVariants } from "./AppBody.variants";

type Props = AppBodyVariantProps & {
  children: React.ReactNode;
};

const AppBody = (props: Props): JSX.Element => {
  const { children } = props;

  const { base, inner } = appBodyVariants();

  return (
    <div className={base()}>
      <div className={inner()}>{children}</div>
    </div>
  );
};

export { AppBody };
