import { useCallback, useMemo, useState } from "react";

interface UseDisclosureProps {
	defaultOpen?: boolean;
	open?: boolean;
	onChange?: (open: boolean) => void;
}

interface UseDisclosureReturn {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
	setOpen: (value: boolean) => void;
}

export function useDisclosure(
	props: UseDisclosureProps = {},
): UseDisclosureReturn {
	const { defaultOpen = false, open: controlledOpen, onChange } = props;

	const [uncontrolledOpen, setUncontrolledOpen] =
		useState<boolean>(defaultOpen);

	const isControlled = controlledOpen !== undefined;
	const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

	const setOpen = useCallback(
		(value: boolean) => {
			if (!isControlled) {
				setUncontrolledOpen(value);
			}
			onChange?.(value);
		},
		[isControlled, onChange],
	);

	const open = useCallback(() => {
		if (!isOpen) setOpen(true);
	}, [isOpen, setOpen]);

	const close = useCallback(() => {
		if (isOpen) setOpen(false);
	}, [isOpen, setOpen]);

	const toggle = useCallback(() => {
		setOpen(!isOpen);
	}, [isOpen, setOpen]);

	return useMemo(
		() => ({ isOpen, open, close, toggle, setOpen }),
		[isOpen, open, close, toggle, setOpen],
	);
}
