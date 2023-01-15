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
<Button
  ...
  css={{
    textDecoration: "none",
  }},
>
    Criar conta
</Button>
```

### Customizar CSS

```jsx
<Button
  ...
  style={{background: "red"}}
>
    Criar conta
</Button>
```

### Usando asChild (Criando Link)

```jsx
<Button
  ...
  css={{
    textDecoration: "none",
  }},
  asChild
>
  <a href="#">
    Criar conta
  </a>
</Button>
```