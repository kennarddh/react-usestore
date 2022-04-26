import React from 'react'

import useStore from '../Hooks/Store'

const WithStoreConsumer = (WrappedComponent, storeName, initialValue) => {
	const Wrapper = props => {
		const [Store, UpdateStore, RemoveStore] = useStore(
			storeName,
			initialValue
		)

		const data = {
			Store,
			UpdateStore,
			RemoveStore,
		}

		const newProps = {
			...props,
			[storeName]: data,
		}

		return <WrappedComponent {...newProps} />
	}

	return Wrapper
}

export default WithStoreConsumer
