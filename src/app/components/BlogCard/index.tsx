import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCard.module.css";

/*
	Usage examples:

	// Small (default) vertical card
	<BlogCard
		image="/images/pest-service-thumbnail.jpg"
		date="01/05/2025"
		title="Are cockroaches dangerous?"
		slug="are-cockroaches-dangerous"
	/>

	// Medium horizontal card
	<BlogCard
		variant="md"
		image="/images/pest-service-thumbnail.jpg"
		date="01/05/2025"
		title="Are cockroaches dangerous? what every homeowner must know"
		content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse suspendisse posuere."
		slug="are-cockroaches-dangerous"
	/>

	// Large stacked card
	<BlogCard
		variant="lg"
		image="/images/pest-service-thumbnail.jpg"
		date="01/05/2025"
		title="Top 5 common pests in sydney homes (and how to handle them)"
		content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse suspendisse posuere volutpat odio sed vitae egestas sit."
		slug="top-5-common-pests"
	/>
*/

interface BlogCardProps {
	variant?: "lg" | "md" | "sm";
	image: string;
	date: string;
	title: string;
	content?: string;
	slug: string;
	className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ variant = "sm", image, date, title, content, slug, className }) => {
	const rootClassName = className ? ` ${className}` : "";
	const blogHref = `/blogs/${slug}`;

	if (variant === "lg") {
		return (
			<Link href={blogHref} className={`${styles.blogCardLg}${rootClassName}`}>
				<div className={styles.imageContainerLg}>
					<Image src={image} alt="Blog post image" loading="lazy" fill className={styles.image} />
				</div>
				<div className={styles.contentLg}>
					<p className={`${styles.date} blog-card---date`}>{date}</p>
					<h3 className={`${styles.titleLg} blog-card--title`}>{title}</h3>
					{content ? <p className={`${styles.excerpt} blog-card--content`}>{content}</p> : null}
					<button className={styles.learnMore} aria-label="Learn more about this blog post">
						learn more
					</button>
				</div>
			</Link>
		);
	}
	if (variant === "md") {
		return (
			<Link href={blogHref} className={`${styles.blogCardMd}${rootClassName}`}>
				<div className={styles.imageContainerMd}>
					<Image src={image} alt="Blog post image" fill className={styles.image} />
				</div>
				<div className={styles.contentMd}>
					<p className={`${styles.date} blog-card--date`}>{date}</p>
					<h3 className={`${styles.title} blog-card--title`}>{title}</h3>
					{content ? <p className={`${styles.excerpt} blog-card--content`}>{content}</p> : null}
					<button className={styles.learnMore} aria-label="Learn more about this blog post">
						learn more
					</button>
				</div>
			</Link>
		);
	}

	return (
		<Link href={blogHref} className={`${styles.blogCard}${rootClassName}`}>
			<div className={styles.imageContainer}>
				<Image src={image} alt="Blog post image" fill className={styles.image} />
			</div>
			<div className={styles.content}>
				<p className={`${styles.date} blog-card--date`}>{date}</p>
				<h3 className={`${styles.title} blog-card--title`}>{title}</h3>
				<button className={styles.learnMore} aria-label="Learn more about this blog post">
					learn more
				</button>
			</div>
		</Link>
	);
};

export default BlogCard;
