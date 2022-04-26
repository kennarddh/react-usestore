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

	const [IsCreated, SetIsCreated] = useState(false)

	useEffect(() => {
		if (IsCreated) return

		if (initialValue !== undefined) {
			CreateStore(storeName, initialValue)
		}

		SetIsCreated(true)
	}, [CreateStore, IsCreated, initialValue, storeName])

	const RemoveStore = () => {
		RemoveStoreContext(storeName)
	}

	const UpdateStore = valueOrCallback => {
		UpdateStoreContext(storeName, valueOrCallback)
	}

	return [Stores[storeName], UpdateStore, RemoveStore]
}

export default useStore
