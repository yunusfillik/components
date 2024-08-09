---
sidebar_position: 4
sidebar_label: Alert
authors: [onur]
---

import Authors from '@theme/authors'

# Alert

<Authors frontMatter={frontMatter} />

Alerts display brief messages for the user without interrupting their use of the app.

Then you can import it in your entry point like this:

```jsx
import {PTAlert} from '@paramtechlab/shattered'
```

```jsx live
  <Space direction="vertical" style={{width: '100%'}}>
    <ThemeProvider product="kredim">
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
    </ThemeProvider>

    <ThemeProvider product="finrota">
      <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
      />
    </ThemeProvider>

    <ThemeProvider product="backoffice">
      <Alert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
    </ThemeProvider>

    <ThemeProvider product="param">
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </ThemeProvider>
  </Space>
```
