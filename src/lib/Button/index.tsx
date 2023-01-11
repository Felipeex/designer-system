import { Container, mode, size } from "./styles.css";

export interface buttonProps {
  label: string;
  mode: keyof typeof mode;
  size: keyof typeof size;
  backgroundColor: string;
  disabled: boolean;
}

export function Button({
  label,
  size = "small",
  backgroundColor,
  ...rest
}: buttonProps) {
  return (
    <Container size={size} css={{ backgroundColor }} {...rest}>
      {label}
    </Container>
  );
}
