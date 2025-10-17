"use client";

import React from "react";
import Image from "next/image";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
	image: string;
	date: string;
	title: string;
	onLearnMore: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, date, title, onLearnMore }) => {
	return (
		<div className={styles.blogCard}>
			<div className={styles.imageContainer}>
				<Image src={image} alt="Blog post image" fill className={styles.image} />
			</div>
			<div className={styles.content}>
				<p className={styles.date}>{date}</p>
				<h3 className={styles.title}>{title}</h3>
				<button className={styles.learnMore} onClick={onLearnMore} aria-label="Learn more about this blog post">
					learn more
				</button>
			</div>
		</div>
	);
};

export default BlogCard;
