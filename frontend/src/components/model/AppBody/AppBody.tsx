import { type AppBodyVariantProps, appBodyVariants } from "./AppBody.variants";

type AppBodyProps = AppBodyVariantProps & {
  children: React.ReactNode;
};

const AppBody = (props: AppBodyProps): JSX.Element => {
  const { children } = props;

  const { base, inner } = appBodyVariants();

  return (
    <div className={base()}>
      <div className={inner()}>{children}</div>
    </div>
  );
};

export { AppBody };
