## Começar agora

```
npm install @fivem-shop/react
```

## Usar um componente

Aqui está um simples exemplo de uso basico do `button` componente.

```jsx
import { Button } from '@fivem-shop/react';

function App() {
  return <Button mode="primary">Hello World</Button>;
}
```

### Customizar CSS com stitches

```jsx
<Box
  css={'&:hover': {
    background: "red"
  }}
>
    Criar conta
  </Button>
</Box>
```

### Customizar CSS

```jsx
<Box
  style={background: "red"}
>
    Criar conta
  </Button>
</Box>
```
