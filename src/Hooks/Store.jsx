import { useContext, useEffect, useState } from 'react'

// Contexts
import { StoreContext } from '../Contexts/Store'

const useStore = (storeName, initialValue) => {
	const {
		Stores,
		UpdateStore: UpdateStoreContext,
		CreateStore,
		RemoveStore: RemoveStoreContext,
	} = useContext(StoreContext)

	const [Store, SetStore] = useState(Stores[storeName] || initialValue)

	useEffect(() => {
		if (!Stores[storeName]) CreateStore(storeName, initialValue)
	}, [storeName])

	useEffect(() => {
		if (Stores[storeName] !== Store) SetStore(Stores[storeName])
	}, [Store])

	const RemoveStore = () => {
		RemoveStoreContext(storeName)
	}

	const UpdateStore = value => {
		UpdateStoreContext(storeName, value)
	}

	return [Store, UpdateStore, RemoveStore]
}

export default useStore
