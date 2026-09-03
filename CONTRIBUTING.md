# Branching Strategy

## Main Branches
- **main**: Production-ready code, deployed to production
- **develop**: Integration branch for features

## Feature Branches
- **feature/**: New features (e.g., feature/3d-visualization)
- **bugfix/**: Bug fixes (e.g., bugfix/scroll-performance)
- **hotfix/**: Production hotfixes (e.g., hotfix/hero-animation)

## Commit Convention

Use conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **perf**: Performance improvement
- **refactor**: Code refactoring
- **style**: Styling changes
- **docs**: Documentation
- **test**: Tests
- **chore**: Build/tooling

### Example
```
feat(hero): add particle field animation

Implement Three.js particle field with mouse tracking
and responsive performance optimization.

Closes #42
```

## Pull Request Process

1. Create feature branch from `develop`
2. Implement changes with conventional commits
3. Ensure tests pass and no type errors
4. Open PR with description
5. Request review
6. Address feedback
7. Merge to `develop` when approved
8. Merge `develop` to `main` for production releases
