"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import styles from "./FlashMessage.module.css";

type FlashMessageType = "success" | "error" | "info";

interface FlashMessage {
	id: string;
	message: string;
	type: FlashMessageType;
}

interface FlashMessageContextType {
	showMessage: (message: string, type?: FlashMessageType) => void;
}

const FlashMessageContext = createContext<FlashMessageContextType | undefined>(undefined);

export const useFlashMessage = () => {
	const context = useContext(FlashMessageContext);
	if (!context) {
		throw new Error("useFlashMessage must be used within FlashMessageProvider");
	}
	return context;
};

export const FlashMessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [messages, setMessages] = useState<FlashMessage[]>([]);
	const idCounterRef = React.useRef(0);
	const timeoutsRef = React.useRef<Map<string, NodeJS.Timeout>>(new Map());

	const showMessage = useCallback((message: string, type: FlashMessageType = "info") => {
		// Generate unique ID with timestamp and counter to prevent duplicates
		const id = `${Date.now()}-${++idCounterRef.current}-${Math.random().toString(36).slice(2, 11)}`;

		setMessages((prev) => {
			// Check if this exact message already exists to prevent duplicates
			const exists = prev.some((msg) => msg.message === message && msg.type === type);
			if (exists) {
				return prev;
			}
			return [...prev, { id, message, type }];
		});

		// Auto-dismiss after 5 seconds
		const timeoutId = setTimeout(() => {
			setMessages((prev) => prev.filter((msg) => msg.id !== id));
			timeoutsRef.current.delete(id);
		}, 5000);

		timeoutsRef.current.set(id, timeoutId);
	}, []);

	// Cleanup timeouts on unmount
	useEffect(() => {
		return () => {
			timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
			timeoutsRef.current.clear();
		};
	}, []);

	const removeMessage = useCallback((id: string) => {
		setMessages((prev) => prev.filter((msg) => msg.id !== id));
		// Clear timeout if message is manually removed
		const timeout = timeoutsRef.current.get(id);
		if (timeout) {
			clearTimeout(timeout);
			timeoutsRef.current.delete(id);
		}
	}, []);

	return (
		<FlashMessageContext.Provider value={{ showMessage }}>
			{children}
			<div className={styles.container} aria-live="polite" aria-atomic="true">
				{messages.map((msg) => (
					<div
						key={msg.id}
						className={`${styles.message} ${styles[msg.type]}`}
						role="alert"
						onClick={() => removeMessage(msg.id)}>
						<span className={styles.content}>{msg.message}</span>
						<button
							className={styles.closeButton}
							onClick={(e) => {
								e.stopPropagation();
								removeMessage(msg.id);
							}}
							aria-label="Close message">
							×
						</button>
					</div>
				))}
			</div>
		</FlashMessageContext.Provider>
	);
};
