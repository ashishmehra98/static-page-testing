import React from "react";
import styles from "./Blogs.module.css";
import HeaderSection from "@/app/components/HeaderSection";
import Button from "@/app/components/Button";
import BlogCard from "@/app/components/BlogCard";

interface BlogsProps {
	blogs: BlogData[];
}

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
	return (
		<div className={styles.blogsContainer}>
			<div className={styles.headerContainer}>
				<HeaderSection
					title="Latest News, Updates, and "
					highlightedText="Expert"
					extraTitle=" Advice"
					align="start"
					className={styles.headerSection}
				/>
				<Button variant="primary" title="See more blogs" href="/blogs" />
			</div>
			<div className={styles.blogsView}>
				<div className={styles.cardsContainer}>
					<div className={styles.cardsWrapper}>
						{blogs.map((blog) => (
							<BlogCard key={blog.id} image={blog.thumbnail} date={blog.date} title={blog.title} slug={blog.slug} />
						))}
					</div>
				</div>
				{/* Gradient overlays for smooth edges */}
				{blogs.length > 1 && (
					<>
						<div className={styles.gradientLeft}></div>
						<div className={styles.gradientRight}></div>
					</>
				)}
			</div>
		</div>
	);
};

export default Blogs;
