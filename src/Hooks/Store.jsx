import { useContext, useEffect } from 'react'

// Contexts
import { StoreContext } from '../Contexts/Store'

const useStore = (storeName, initialValue) => {
	const {
		Stores,
		UpdateStore: UpdateStoreContext,
		CreateStore,
		RemoveStore: RemoveStoreContext,
	} = useContext(StoreContext)

	useEffect(() => {
		CreateStore(storeName, initialValue)
	}, [CreateStore, initialValue, storeName])

	const RemoveStore = () => {
		RemoveStoreContext(storeName)
	}

	const UpdateStore = value => {
		UpdateStoreContext(storeName, value)
	}

	return [Stores[storeName], UpdateStore, RemoveStore]
}

export default useStore
