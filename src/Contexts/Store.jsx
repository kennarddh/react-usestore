import React, { createContext, useState } from 'react'

export const StoreContext = createContext({})

const StoreContextProvider = ({ children }) => {
	const [Store, SetStore] = useState({})

	const UpdateStore = (storeName, value) => {
		SetStore({ ...Store, [storeName]: value })

		return true
	}

	const CreateStore = (storeName, initialValue = {}) => {
		if (Store[storeName]) return false

		SetStore({ ...Store, [storeName]: initialValue })

		return true
	}

	const RemoveStore = storeName => {
		if (!Store[storeName]) return false

		SetStore(prevStore => {
			const { [storeName]: _, ...result } = prevStore

			return result
		})

		return true
	}

	return (
		<StoreContext.Provider
			value={{ Store, SetStore, UpdateStore, CreateStore, RemoveStore }}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
