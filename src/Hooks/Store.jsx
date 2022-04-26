import { useContext, useEffect, useCallback } from 'react'

// Contexts
import { StoreContext } from '../Contexts/Store'

const useStore = (storeName, initialValue) => {
	const {
		Stores,
		UpdateStore: UpdateStoreContext,
		CreateStore,
		RemoveStore: RemoveStoreContext,
	} = useContext(StoreContext)

	const CreateNewStore = useCallback(() => {
		CreateStore(storeName, initialValue)
	}, [CreateStore, initialValue, storeName])

	useEffect(() => {
		if (initialValue) {
			CreateNewStore()
		}
	}, [CreateNewStore, initialValue])

	const RemoveStore = () => {
		RemoveStoreContext(storeName)
	}

	const UpdateStore = valueOrCallback => {
		UpdateStoreContext(storeName, valueOrCallback)
	}

	return [Stores[storeName], UpdateStore, RemoveStore]
}

export default useStore
