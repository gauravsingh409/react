type StorageType = "local" | "session";

interface SetOptions {
	ttl?: number;
}

interface StoredValue<T> {
	value: T;
	expiry?: number;
}

const isBrowser = typeof window !== "undefined";

const getStorage = (type: StorageType): Storage | null => {
	if (!isBrowser) return null;
	return type === "local" ? window.localStorage : window.sessionStorage;
};

export const storage = {
	set<T>(
		key: string,
		value: T,
		type: StorageType = "local",
		options?: SetOptions,
	) {
		try {
			const store = getStorage(type);
			if (!store) return;

			const data: StoredValue<T> = {
				value,
				expiry: options?.ttl ? Date.now() + options.ttl : undefined,
			};

			store.setItem(key, JSON.stringify(data));
		} catch (error) {
			console.error("Storage set error:", error);
		}
	},

	get<T>(key: string, type: StorageType = "local"): T | null {
		try {
			const store = getStorage(type);
			if (!store) return null;

			const item = store.getItem(key);
			if (!item) return null;

			const parsed: StoredValue<T> = JSON.parse(item);

			// TTL check
			if (parsed.expiry && Date.now() > parsed.expiry) {
				store.removeItem(key);
				return null;
			}

			return parsed.value;
		} catch (error) {
			console.error("Storage get error:", error);
			return null;
		}
	},

	remove(key: string, type: StorageType = "local") {
		try {
			const store = getStorage(type);
			store?.removeItem(key);
		} catch (error) {
			console.error("Storage remove error:", error);
		}
	},

	clear(type: StorageType = "local") {
		try {
			const store = getStorage(type);
			store?.clear();
		} catch (error) {
			console.error("Storage clear error:", error);
		}
	},
};
