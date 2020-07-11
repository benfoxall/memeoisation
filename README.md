# Memeoisation

## useMeme

```js
import React from 'react';
import { useMeme } from 'memeoisation';

export default function App() {
  const { alt, src } = useMeme();

  return <img alt={alt} src={src} />;
}
```

[example](https://codesandbox.io/s/zealous-spence-tr7xz?fontsize=14&hidenavigation=1&theme=dark)

## Development docs

See [tsdx](https://github.com/formik/tsdx/blob/master/templates/react/README.md)
