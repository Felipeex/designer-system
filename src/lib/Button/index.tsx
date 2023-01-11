import { Container, mode, size } from "./styles.css";

export interface buttonProps {
  children: React.ReactNode;
  mode: keyof typeof mode;
  size?: keyof typeof size;
  backgroundColor?: string;
  disabled?: boolean;
}

export function Button({
  children,
  size = "small",
  backgroundColor,
  ...rest
}: buttonProps) {
  return (
    <Container size={size} css={{ backgroundColor }} {...rest}>
      {children}
    </Container>
  );
}
