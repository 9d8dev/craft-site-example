![craft](https://github.com/9d8dev/craft-ui/assets/57158102/de2f45fe-ed4f-4674-9f5e-68a057e00c05)

# Craft UI

## Craft UI is a design system and collection of components for developing marketing websites

### Getting Started

```bash
npm install -D @tailwindcss/typography
npm install clsx
```

### Dependencies

- [Tailwind](https://tailwindcss.com/)
  - [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
  - [Tailwind Animate](https://tailwindcss.com/docs/animation)
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- [Typescript](https://www.typescriptlang.org/)
- [React Wrap Balancer](https://github.com/shuding/react-wrap-balancer)
- [Lucide Icons](https://lucide.dev/)
- [clsx](https://github.com/lukeed/clsx)
- [shadcn/ui](https://ui.shadcn.com/)

### Parts

- Layout (layout.tsx)
  - [`<Layout />`](#layout-component)
  - [`<Main />`](#main-component)
  - [`<Section />`](#section-component)
  - [`<Container />`](#container-component)
  - [`<Article />`](#article-component)

Certainly! The provided code snippet is a collection of React components designed for layout and content structuring in a web application. Let's break down each component to understand its purpose and usage:

#### `Layout` Component

- **Purpose:** Acts as the root layout component for the application.
- **Props:**
  - `children`: React.ReactNode - This is where you pass the child components or elements that will be rendered inside the `Layout`.
  - `className`: string (optional) - Additional CSS classes to customize the styling.
- **Functionality:** Uses the `clsx` function for conditional and combined class names. Sets global styles like text color and font smoothing.
- **Usage Example:**

  ```tsx
  <Layout className="custom-class">
    {/* Child components go here */}
  </Layout>
  ```

#### `Main` Component

- **Purpose:** Serves as the main content area of a page.
- **Props:**
  - `children`: React.ReactNode - Contains the main content of the page.
  - `className`: string (optional) - Additional CSS classes.
  - `id`: string (optional) - An identifier for the main element.
- **Functionality:** Combines general prose styles and specific styles for headings, links, and blockquotes.
- **Usage Example:**

  ```tsx
  <Main className="main-content" id="main-section">
    {/* Main content goes here */}
  </Main>
  ```

#### `Section` Component

- **Purpose:** Defines a thematic grouping of content, typically with a common theme or subject.
- **Props:**
  - `children`: React.ReactNode - The content of the section.
  - `className`: string (optional) - Additional styling options.
  - `id`: string (optional) - A unique identifier for the section.
- **Functionality:** Primarily used for grouping content and applying padding.
- **Usage Example:**

  ```tsx
  <Section id="about-section">
    {/* Section content goes here */}
  </Section>
  ```

#### `Container` Component

- **Purpose:** Used to constrain the width of the content and center it.
- **Props:**
  - `children`: React.ReactNode - The inner content of the container.
  - `className`: string (optional) - Additional CSS classes.
  - `id`: string (optional) - An identifier for the container element.
- **Functionality:** Centers content with a maximum width and applies padding.
- **Usage Example:**

  ```tsx
  <Container className="custom-container">
    {/* Container content goes here */}
  </Container>
  ```

#### `Article` Component

- **Purpose:** Used for writing an article, blog post, or any similar standalone content.
- **Props:**
  - `children`: React.ReactNode - The article content.
  - `className`: string (optional) - Additional CSS classes for customization.
  - `id`: string (optional) - A unique identifier for the article.
- **Functionality:** Applies styles suitable for reading, like typography and color scheme adjustments.
- **Usage Example:**

  ```tsx
  <Article id="feature-article">
    {/* Article content goes here */}
  </Article>
  ```

Each of these components is designed to be modular and reusable, making it easy to construct pages with consistent layout and styling. They utilize the `clsx` utility, which is a popular choice in React projects for handling dynamic class names more elegantly.
