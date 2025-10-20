# shadcn rn registry

a minimal template for building component registries in react native using expo and nativewind.

## features

- **shadcn cli integration** - uses shadcn's component registry distribution system for component management
- **structured registry** - organize components in `registry/components-lib/components` and `registry/components-lib/blocks`
- **nativewind support** - build components with tailwind css utilities
- **animations** - powered by react-native-reanimated for smooth interactions
- **theme support** - light and dark mode support built-in
- **expo router** - file-based routing for react native

## getting started

### install dependencies

```bash
bun install
```

### start development

```bash
bun dev
```

### build for platforms

```bash
bun android    # Android
bun ios        # iOS
bun web        # Web
```

### code quality

```bash
bun fix        # Format and fix code with biome
bun lint       # Lint with expo
```

## project structure

```
├── app/                    # expo router pages and layouts
├── components/             # reusable components
├── registry/              # shadcn component registry (registry.json manages metadata)
├── constants/             # app constants
├── hooks/                 # custom react hooks
├── lib/                   # utility functions
└── assets/                # static assets
```

## using the registry

this project uses the **shadcn cli registry distribution system**. components are defined in the registry and can be discovered and managed through the shadcn ecosystem.

## tech stack

- [expo](https://expo.dev) - react native framework
- [expo-router](https://docs.expo.dev/routing/introduction/) - file-based routing
- [nativewind](https://www.nativewind.dev) - tailwind css for react native
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) - animation library
- [lucide-react-native](https://lucide.dev) - icon library
- [biome](https://biomejs.dev) - code formatter and linter
