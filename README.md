# React usestore

React hooks for state management

## What is usestore?

usestore is a library for managing state in React applications.

Here is the [demo](https://react-kttczk.stackblitz.io/).

## Installation

```bash
npm i @kennarddh/react-usestore
```

## Usage

```javascript
import React from 'react'

import { useStore, StoreProvider } from '@kennarddh/react-usestore'

const SubSubComponent = () => {
	const [Store] = useStore('test-store')

	return <p>SubSubComponent: {Store?.data}</p>
}

const SubComponent = () => <SubSubComponent />
const Component = () => {
	useStore('test-store', { data: 'dataForSubSubComponent' })

	return <SubComponent />
}

const App = () => {
	return (
		<StoreProvider>
			<Component />
		</StoreProvider>
	)
}

export default App
```

### Using WithStoreProvider HOC

```javascript
import React from 'react'

import { useStore, StoreProvider } from '@kennarddh/react-usestore'

const WithStoreProvider = WrappedComponent => {
	const Wrapper = () => (
		<StoreProvider>
			<WrappedComponent />
		</StoreProvider>
	)

	return Wrapper
}

const SubSubComponent = () => {
	const [Store] = useStore('test-store')

	return <p>SubSubComponent: {Store?.data}</p>
}

const SubComponent = () => <SubSubComponent />

const Component = () => {
	useStore('test-store', { data: 'dataForSubSubComponent' })

	return <SubComponent />
}

const App = () => <Component />

export default WithStoreProvider(App)
```

### Using WithStoreConsumer HOC

```javascript
import React from 'react'

import {
	useStore,
	StoreProvider,
	WithStoreConsumer,
} from '@kennarddh/react-usestore'

class SubSubComponent extends React.Component {
	render() {
		const { Store } = this.props['test-store']
		return <p>{Store?.data}</p>
	}
}

const WrappedSubSubComponent = WithStoreConsumer(SubSubComponent, 'test-store')

const SubComponent = () => <WrappedSubSubComponent />

const Component = () => {
	useStore('test-store', { data: 'dataForWrappedSubSubComponent' })

	return <SubComponent />
}

const App = () => {
	return (
		<StoreProvider>
			<Component />
		</StoreProvider>
	)
}

export default App
```

## License

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing

![Contributors](https://img.shields.io/badge/Contributors-1-blue.svg)
