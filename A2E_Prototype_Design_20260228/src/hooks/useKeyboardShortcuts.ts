import { useEffect } from "react";
import { toast } from "sonner"; // Using sonner as it is available in package.json

type KeyboardShortcutsOptions = {
    onEscape?: () => void;
    onToolbarAction?: (action: string) => void;
    // Let components handle structural navigation, but we intercept the keydown
    // on a global level to prevent default browser behavior
};

export function useKeyboardShortcuts(options?: KeyboardShortcutsOptions) {
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            const isFunctionKey = /^F(1[0-2]|[1-9])$/.test(e.key);
            const isTab = e.key === "Tab";
            const isAltKey = e.key === "Alt" || e.altKey;
            const isCtrlKey = e.ctrlKey || e.metaKey;
            const keyStr = e.key.toLowerCase();

            // Intercept Ctrl + S, O, P and Alt+N
            const isInterceptedCtrl = isCtrlKey && ["s", "o", "p"].includes(keyStr);
            const isInterceptedAlt = isAltKey && keyStr === "n";

            if (isFunctionKey || isTab || isAltKey || isInterceptedCtrl || isInterceptedAlt) {
                // Prevent default browser behavior completely
                e.preventDefault();
                e.stopPropagation();
            }

            // 2. Map F-keys to toolbar actions
            if (isFunctionKey) {
                if (e.key === "F12") {
                    toast.success("登録を受け付けました", {
                        duration: 2000,
                        position: "bottom-right",
                        style: {
                            background: "#005BAC",
                            color: "#fff",
                            border: "none",
                        }
                    });
                    options?.onToolbarAction?.("submit");
                } else if (e.key === "F11") {
                    options?.onToolbarAction?.("cancel");
                } else if (e.key === "F10") {
                    options?.onToolbarAction?.("search");
                } else if (e.key === "F9") {
                    options?.onToolbarAction?.("delete");
                } else if (e.key === "F8") {
                    options?.onToolbarAction?.("insert_row");
                } else if (e.key === "F7") {
                    options?.onToolbarAction?.("delete_row");
                } else if (e.key === "F4") {
                    options?.onToolbarAction?.("reference");
                } else if (e.key === "F3") {
                    options?.onToolbarAction?.("dictionary");
                } else if (e.key === "F5") {
                    options?.onToolbarAction?.("refresh");
                }
            }

            // 3. Handle Ctrl+Keys
            if (isInterceptedCtrl) {
                if (keyStr === "s") {
                    // Same as F12 submit
                    toast.success("登録を受け付けました", {
                        duration: 2000,
                        position: "bottom-right",
                        style: {
                            background: "#005BAC",
                            color: "#fff",
                            border: "none",
                        }
                    });
                    options?.onToolbarAction?.("submit");
                } else if (keyStr === "o") {
                    options?.onToolbarAction?.("view:journal");
                } else if (keyStr === "p") {
                    setTimeout(() => window.print(), 100);
                }
            }

            // 4. Handle Alt+Keys (specific ones we want to capture)
            if (isInterceptedAlt) {
                if (keyStr === "n") {
                    options?.onToolbarAction?.("action:new_slip");
                }
            }

            // 5. Escape Key
            if (e.key === "Escape") {
                e.preventDefault();
                options?.onEscape?.();
            }
        }

        // Use capture phase to ensure we intercept before other specific handlers can rely on default behavior
        window.addEventListener("keydown", handleKeyDown, { capture: true });
        return () => {
            window.removeEventListener("keydown", handleKeyDown, { capture: true });
        };
    }, [options]);
}
