import { type ExternalToast, toast as sonnerToast } from "sonner";

/**
 * Global toast utility for consistent messaging
 */
export const sooner = {
	success: (message: string, data?: ExternalToast) => {
		return sonnerToast.success(message, {
			...data,
		});
	},

	error: (message: string, data?: ExternalToast) => {
		return sonnerToast.error(message, {
			...data,
			duration: 4000,
		});
	},

	info: (message: string, data?: ExternalToast) => {
		return sonnerToast.info(message, data);
	},

	warning: (message: string, data?: ExternalToast) => {
		return sonnerToast.warning(message, data);
	},

	promise: <T>(
		promise: Promise<T>,
		messages: { loading: string; success: string; error: string },
	) => {
		return sonnerToast.promise(promise, {
			loading: messages.loading,
			success: messages.success,
			error: messages.error,
		});
	},

	dismiss: (id?: string | number) => sonnerToast.dismiss(id),
};
