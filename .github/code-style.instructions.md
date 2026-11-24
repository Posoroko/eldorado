# Code Style Guide — Studio Posoroko

> Agents must follow these rules when writing or editing code in any project.

---

## General

- **Write beginner-level code.** Clear, readable, no cleverness for its own sake.  Functional. Smallest functions possible.
- **Comprehensive names always.** A long descriptive name beats a short cryptic one.
- **Never sacrifice readability for brevity.**

---

## Formatting

| Rule | Value |
|---|---|
| Indentation | Tabs |
| Semicolons | None |
| Max line length | No strict limit — break for readability |

---

## Quotes

- **Single quotes** for all code: imports, object keys, attribute values in JS/TS
- **Double quotes** for user-facing strings and content text (avoids escaping French apostrophes: `'`, `'`)

```ts
import MyComponent from './MyComponent.vue'         // single
const route = '/about'                              // single
const label = "Bienvenue sur le site de la mairie"  // double — French content
const message = "C'est une belle journée"           // double — has apostrophe
```

---

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Vue component files | PascalCase | `MyComponent.vue`, `TheHeader.vue` |
| JS/TS variables & functions | camelCase | `userProfile`, `fetchArticles` |
| CSS classes | camelCase | `.topBar`, `.mainContent`, `.articleCard` |
| CSS custom properties (variables) | kebab-case | `--primary-color`, `--font-size-large` |
| Composable files | `use` prefix, camelCase | `useAuthState.ts`, `useFetchData.ts` |
| Page files (Nuxt) | kebab-case | `about.vue`, `legal-notice.vue` |

---

## Functions

- **Top-level functions** (composables, handlers, lifecycle): `function` declarations
- **Inline / callback / one-liners**: arrow functions

```ts
// top-level — function declaration
function fetchUserData(userId: string) {
    // ...
}

// inline / callback — arrow
const items = list.filter(item => item.active)
const handleClick = () => { doSomething() }
```

---

## Vue Templates

### Element attributes

- Self-close components when there is no slot content: `<MyComponent />`
- **Every attribute on its own line** — except related pairs
- **Attribute order:** `v-if` first, then other directives, then props, then class, then event handlers
- `v-for` and `:key` can be on the same line (they always go together)
- Other logical pairs can group

```vue
<!-- Self-close inline if no slot -->
<MyComponent :user="user" />

<!-- Multiple attributes — ordered: v-if, directives, props, class, events -->
<div
	v-if="isVisible"
	v-for="item in items" :key="item.id"
	@click="handleClick"
	class="container"
    :class="[
        dynamic
    ]"
>
	Content
</div>
```

- Always use `:` shorthand (not `v-bind:`)
- Always use `@` shorthand (not `v-on:`)

### Class formatting

- `class` attribute uses **multiline string** with logical grouping
- Group classes by purpose: layout/flex on one line, text/font on another, etc.
- Each group separated by a blank line for readability

```vue
<div
	v-if="isVisible"
	@click="handleClick"
	class="
		flex justifyCenter alignCenter
		gap20 pad20

		bold fS16 weight6
		darkText
	"
	:class="[
		{ 'is-active': isActive },
		dynamicClass
	]"
>
	Content
</div>
```

- Use `:class` array for conditional/dynamic classes — indent items in the array
- Never inline classes into single-line attributes

---

## Vue Components

- `<script setup lang="ts">` always — no Options API
- Props: `defineProps<{ name: string }>()`
- Emits: `defineEmits<{ (e: 'update', value: string): void }>()`
- Component order: `<script>` → `<template>` → `<style scoped>`

---

## TypeScript

- **Pragmatic** — type where it adds clarity, let TS infer the rest
- Don't force explicit types when the value is obvious from context
- Don't add types just to satisfy the linter if it makes the code harder to read

### Directus collection types

Each collection gets **three named types** in `src/types/[collection].ts`. No generics, no intersections.

```ts
// src/types/todo.ts

// What Directus returns when reading
interface TodoItem {
    id: string
    title: string
    is_completed: boolean
    date_created: string
    user_created: string | DirectusUser   // honest union — relations may or may not be expanded
}

// What we send to Directus when creating
interface TodoCreate {
    title: string
    is_completed: boolean
}

// What we send to Directus when updating (only changed fields)
interface TodoUpdate {
    title?: string
    is_completed?: boolean
}
```

Shared Directus system types (User, File, etc.) go in `src/types/directus.ts` — defined once, imported everywhere:

```ts
// src/types/directus.ts
interface DirectusUser {
    id: string
    first_name: string
    last_name: string
    avatar: string | null
}
```

**Handling relation unions** — narrow at the point of use, not in the type:

```ts
// in a component or composable
const authorName = typeof todo.user_created === 'string'
    ? todo.user_created           // just an ID, can't display name
    : todo.user_created.first_name  // expanded user object
```

Rules:
- Name pattern: `[Collection]Item`, `[Collection]Create`, `[Collection]Update`
- Never use `<T>` generics for collection types — they become unreadable
- Don't type Directus system fields you never use in the UI
- `id` is always `string` (Directus UUIDs)

---

## CSS

- Classes in camelCase: `.topBar`, `.pageContent`
- CSS variables in kebab-case: `--primary-color`, `--border-radius-small`
- One property per line, always
- No inline styles unless absolutely necessary
- All project-level structure goes in `architecture.css`, not in component `<style>`
