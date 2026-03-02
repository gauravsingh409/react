import toast, { type ToastOptions } from "react-hot-toast";

// ─── Base options ────────────────────────────────────────────────────────────

const baseOptions: ToastOptions = {
    duration: 4000,
    position: "top-right",
};

const makeStyle = (bg: string, color = "#ffffff"): ToastOptions => ({
    ...baseOptions,
    style: {
        background: bg,
        color,
        borderRadius: "10px",
        fontSize: "14px",
        fontWeight: 500,
        padding: "12px 16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    },
});

// ─── Typed helpers ────────────────────────────────────────────────────────────

export const toastSuccess = (message: string, opts?: ToastOptions) =>
    toast.success(message, { ...makeStyle("#50cd89"), ...opts });

export const toastError = (message: string, opts?: ToastOptions) =>
    toast.error(message, { ...makeStyle("#f14141"), ...opts });

export const toastWarning = (message: string, opts?: ToastOptions) =>
    toast(message, {
        ...makeStyle("#ffd33c", "#242424"),
        icon: "⚠️",
        ...opts,
    });

export const toastInfo = (message: string, opts?: ToastOptions) =>
    toast(message, {
        ...makeStyle("#3178f2"),
        icon: "ℹ️",
        ...opts,
    });

export const toastPrimary = (message: string, opts?: ToastOptions) =>
    toast(message, {
        ...makeStyle("#9500ff"),
        icon: "✦",
        ...opts,
    });

// ─── Promise toast ────────────────────────────────────────────────────────────

export const toastPromise = <T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string },
    opts?: ToastOptions,
) =>
    toast.promise(promise, messages, {
        ...baseOptions,
        style: {
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 500,
            padding: "12px 16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        },
        ...opts,
    });

// ─── API error helper ─────────────────────────────────────────────────────────

/** Extracts a readable message from an API error and shows an error toast. */
export const toastApiError = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any,
    fallback = "Something went wrong. Please try again.",
) => {
    const message: string =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        fallback;
    toastError(message);
};

// ─── Dismiss helpers ──────────────────────────────────────────────────────────

export const toastDismiss = (id?: string) => toast.dismiss(id);
export const toastDismissAll = () => toast.dismiss();

// ─── Re-export original for edge cases ────────────────────────────────────────

export { toast };
export type { ToastOptions };
