import React, { createContext, useState } from 'react'

export const StoreContext = createContext({})

const StoreContextProvider = ({ children }) => {
	const [Stores, SetStores] = useState({})

	const UpdateStore = (storeName, value) => {
		SetStores({ ...Stores, [storeName]: value })

		return true
	}

	const CreateStore = (storeName, initialValue = {}) => {
		if (Stores[storeName]) return false

		SetStores({ ...Stores, [storeName]: initialValue })

		return true
	}

	const RemoveStore = storeName => {
		if (!Stores[storeName]) return false

		SetStores(prevStore => {
			const { [storeName]: _, ...result } = prevStore

			return result
		})

		return true
	}

	return (
		<StoreContext.Provider
			value={{ Stores, SetStores, UpdateStore, CreateStore, RemoveStore }}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
