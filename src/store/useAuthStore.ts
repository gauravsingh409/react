import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CONFIG } from "@/config";
import { storage } from "@/utils";
import type { GetMeTypes } from "@/features/auth/types";

interface AuthState {
	user: GetMeTypes.GetMeResponse | null;
	isAuthenticated: boolean;
	isForbidden?: boolean;

	// Actions
	setAuth: (user: GetMeTypes.GetMeResponse) => void;
	logout: () => void;
	setAuhenticated: (value: boolean) => void;
	setForbidden: (value: boolean) => void;
}

function isAuthenticated() {
	if (CONFIG.ENV.MODE === "development") {
		const token = storage.get(CONFIG.CONSTANT.ACCESS_TOKEN, "local");
		return !!token;
	}

	if (CONFIG.ENV.MODE === "production") {
		const token = storage.get(CONFIG.CONSTANT.ACCESS_TOKEN, "session");
		return !!token;
	}

	return false;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: isAuthenticated(),

			setAuth: (user) => set({ user, isAuthenticated: true }),

			logout: () => set({ user: null, isAuthenticated: false }),

			setAuhenticated: (value: boolean) => set({ isAuthenticated: value }),

			isForbidden: true,

			setForbidden: (value: boolean) => set({ isForbidden: value }),
		}),
		{
			name: "auth-storage", // Unique name for localStorage key
			storage: createJSONStorage(() => localStorage),
		},
	),
);
