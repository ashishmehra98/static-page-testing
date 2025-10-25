"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./components/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
	const handleGoHome = () => {
		window.location.href = "/";
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.logoContainer}>
					<Image src="/icons/ecovia-logo.svg" alt="Ecovia Logo" fill className={styles.logo} priority />
				</div>
				<div className={styles.errorCode}>404</div>
				<h1 className={styles.title}>Page Not Found</h1>
				<p className={styles.description}>
					Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been moved, deleted, or you might
					have entered the wrong URL.
				</p>
				<div className={styles.actions}>
					<Button variant="secondary" title="Go Home" onPress={handleGoHome} className={styles.homeButton} />
					<Link href="/contact-us" className={styles.contactLink}>
						Contact Support
					</Link>
				</div>
			</div>
		</div>
	);
}
