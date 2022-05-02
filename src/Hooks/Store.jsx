import { useContext, useEffect, useState } from 'react'

// Contexts
import { StoreContext } from '../Contexts/Store'

const useStore = (storeName, initialValue, localstorage = false) => {
	const {
		Stores,
		UpdateStore: UpdateStoreContext,
		CreateStore,
		RemoveStore: RemoveStoreContext,
	} = useContext(StoreContext)

	const [IsCreated, SetIsCreated] = useState(false)

	useEffect(() => {
		if (IsCreated) return

		let value

		if (initialValue !== undefined) {
			if (localstorage) {
				value = JSON.parse(
					localStorage.getItem(`react_usestore__${storeName}`)
				)
			} else {
				value = initialValue
			}

			if (value) {
				CreateStore(storeName, value, localstorage)
			} else {
				CreateStore(storeName, initialValue, localstorage)
			}
		}

		SetIsCreated(true)
	}, [CreateStore, IsCreated, initialValue, localstorage, storeName])

	const RemoveStore = () => {
		RemoveStoreContext(storeName)
	}

	const UpdateStore = valueOrCallback => {
		UpdateStoreContext(storeName, valueOrCallback)
	}

	return [Stores[storeName]?.value, UpdateStore, RemoveStore]
}

export default useStore
