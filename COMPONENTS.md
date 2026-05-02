# UI Components Documentation

## Система переиспользуемих компонентів

Все UI компоненти розташовані в папці `src/components/UI/` і мають єдиний стиль.

## Button

```jsx
import { Button } from './components/UI';

<Button variant="primary" size="md">Click me</Button>
```

### Props:
- `variant`: `'primary'` | `'secondary'` | `'ghost'` (default: `'primary'`)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `disabled`: `boolean` (default: `false`)
- `onClick`: `function`

## Heading

```jsx
import { Heading } from './components/UI';

<Heading level={1} color="primary">Title</Heading>
```

### Props:
- `level`: `1` | `2` | `3` | `4` | `5` | `6` (default: `1`)
- `color`: `'primary'` | `'secondary'` | `'tertiary'` (default: `'primary'`)

## Text

```jsx
import { Text } from './components/UI';

<Text variant="body" color="primary" size="md">Content</Text>
```

### Props:
- `variant`: `'body'` | `'subtitle'` | `'caption'` (default: `'body'`)
- `color`: `'primary'` | `'secondary'` | `'tertiary'` (default: `'primary'`)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `as`: HTML tag (default: `'p'`)

## Container

```jsx
import { Container } from './components/UI';

<Container size="lg">Content</Container>
```

### Props:
- `size`: `'sm'` | `'md'` | `'lg'` | `'xl'` | `'fluid'` (default: `'lg'`)

## Section

```jsx
import { Section } from './components/UI';

<Section padding="lg" id="about">Content</Section>
```

### Props:
- `padding`: `'sm'` | `'md'` | `'lg'` | `'xl'` | `'none'` (default: `'lg'`)
- `backgroundColor`: custom color string
- `id`: section ID for navigation

## Grid

```jsx
import { Grid } from './components/UI';

<Grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Props:
- `cols`: `1` | `2` | `3` | `4` | `6` (default: `2`)
- `gap`: `'sm'` | `'md'` | `'lg'` | `'xl'` (default: `'md'`)

## Color System

Все кольори визначені в `src/styles/colors.css`:

```css
--color-bg-primary: #0f0f0f
--color-text-primary: #e8e8e8
--color-text-secondary: #b3b3b3
--color-text-tertiary: #999999
... та інші
```

Для зміни теми, просто оновіть значення змінних в `colors.css`.

## Приклади

### Simple Button Group
```jsx
<div style={{ display: 'flex', gap: '1rem' }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
</div>
```

### Section with Title and Content
```jsx
<Section padding="lg" id="features">
  <Container size="lg">
    <Heading level={2}>Features</Heading>
    <Text color="secondary">Описание фич</Text>
    <Grid cols={3} gap="lg">
      {/* Cards here */}
    </Grid>
  </Container>
</Section>
```

## Розширення

Щоб додати новий компонент:

1. Створіть файл `src/components/UI/NewComponent.js`
2. Створіть `src/components/UI/NewComponent.css`
3. Додайте експорт в `src/components/UI/index.js`

Всі компоненти повинні дотримуватися однієї системи дизайну і використовувати змінні з `colors.css`.
