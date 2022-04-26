import React from 'react'

import StoreProvider from '../Contexts/Store'

const WithStoreProvider = WrappedComponent => {
	const Wrapper = () => (
		<StoreProvider>
			<WrappedComponent />
		</StoreProvider>
	)

	return Wrapper
}

export default WithStoreProvider
