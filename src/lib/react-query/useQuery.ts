"use client";

import {
	type DefaultError,
	type QueryKey,
	type UseQueryOptions,
	useQuery,
} from "@tanstack/react-query";

export function useQueryData<
	TQueryFnData = unknown,
	TError = DefaultError,
	TData = TQueryFnData,
	TParams = unknown,
>(
	queryKey: QueryKey,
	fetchFn: (params: TParams) => Promise<TQueryFnData>,
	params?: TParams,
	options?: Omit<
		UseQueryOptions<TQueryFnData, TError, TData, QueryKey>,
		"queryKey" | "queryFn"
	>,
) {
	const finalKey: QueryKey = params ? [...queryKey, params] : queryKey;

	return useQuery<TQueryFnData, TError, TData, QueryKey>({
		queryKey: finalKey,
		queryFn: async () => {
			return fetchFn(params as TParams);
		},

		retry: 2,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		...options,
	});
}
