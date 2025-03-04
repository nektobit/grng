# grng – GraphQL the Angular Way

## Overview
**grng** is a lightweight, Angular-native GraphQL client designed to seamlessly integrate with Angular 19’s `resource` API. It provides a minimalistic and efficient way to manage GraphQL queries, mutations, and subscriptions using Angular’s reactivity model. The goal is to reduce boilerplate, enhance developer experience, and ensure optimal performance with Signals and RxJS.

## Features

### 🚀 **Angular 19 `resource` Integration**
- Native support for `resource()`, leveraging Signals for reactivity.
- Declarative API that simplifies GraphQL operations.

### 🔥 **Minimal Boilerplate, Maximum Power**
- Short and intuitive function names: `queryResource`, `mutateResource`, `query$`, and `mutate$`.
- No unnecessary decorators or complex configurations.

### 🔄 **Dual API: Signals & RxJS**
- **Signal-based API**: Uses `resource()` for automatic reactivity.
- **RxJS-based API**: Returns `Observable` for flexibility in streaming data.

### 📦 **Built-in Caching and State Management**
- Optional caching mechanism with auto-invalidation.
- Fine-grained control over fetch policies (`network-only`, `cache-first`, etc.).

### 🔑 **First-class TypeScript Support**
- Strongly typed queries and mutations.
- Seamless integration with GraphQL Codegen.

### 📡 **WebSocket Support for Subscriptions** *(Planned Feature)*
- `subResource` and `sub$` for GraphQL subscriptions.
- Real-time updates with WebSockets.

### 🌍 **SSR and Angular Universal Friendly**
- Optimized for server-side rendering with Angular Universal.
- Automatic state hydration on the client.

### 🏗 **Flexible Transport Layer**
- Works with `fetch()`, `HttpClient`, or custom transport strategies.
- Easy authentication handling via interceptors or headers.

## Installation

```sh
npm install grng
```

## Usage

### **Query with `resource`**
```typescript
import { queryResource } from 'grng';
import { signal, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUser = queryResource<{ user: User }>(gql`
    query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
      }
    }
  `, { id: signal('123') });
}
```

### **Mutation with `resource`**
```typescript
import { mutateResource } from 'grng';

@Injectable({ providedIn: 'root' })
export class UserService {
  updateUser = mutateResource<{ updateUser: User }>(gql`
    mutation UpdateUser($id: ID!, $input: UserInput!) {
      updateUser(id: $id, input: $input) {
        id
        name
      }
    }
  `);
}
```

### **RxJS API**
#### **Query with `Observable`**
```typescript
import { query$ } from 'grng';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUser$ = query$<{ user: User }>(gql`
    query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
      }
    }
  `, { id: '123' });
}
```

#### **Mutation with `Observable`**
```typescript
import { mutate$ } from 'grng';

@Injectable({ providedIn: 'root' })
export class UserService {
  updateUser$ = mutate$<{ updateUser: User }>(gql`
    mutation UpdateUser($id: ID!, $input: UserInput!) {
      updateUser(id: $id, input: $input) {
        id
        name
      }
    }
  `);
}
```

## Contributing
We welcome contributions! Feel free to open issues and submit pull requests.

## License
MIT License

