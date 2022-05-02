import React, { createContext, useState } from 'react'

export const StoreContext = createContext({})

const StoreContextProvider = ({ children }) => {
	const [Stores, SetStores] = useState({})

	const UpdateStore = (storeName, valueOrCallback) => {
		SetStores(prevStores => {
			let value

			if (typeof valueOrCallback === 'function') {
				value = valueOrCallback(prevStores[storeName].value)
			} else {
				value = valueOrCallback
			}

			if (prevStores[storeName].localstorage) {
				localStorage.setItem(
					`react_usestore__${storeName}`,
					JSON.stringify(value)
				)
			}

			return {
				...prevStores,
				[storeName]: {
					value,
					localstorage: prevStores[storeName].localstorage,
				},
			}
		})

		return true
	}

	const CreateStore = (storeName, initialValue, localstorage) => {
		if (Stores[storeName]) return false

		SetStores({
			...Stores,
			[storeName]: { value: initialValue, localstorage },
		})

		if (localstorage) {
			localStorage.setItem(
				`react_usestore__${storeName}`,
				JSON.stringify(initialValue)
			)
		}

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
