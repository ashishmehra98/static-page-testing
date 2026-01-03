"use client";

import styles from "./style.module.css";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HeroContent from "@/app/components/HeroContent";
import BlogCard from "@/app/components/BlogCard";
import Footer from "@/app/components/Footer";
import HomeFooterJumbotron from "@/app/components/ContactFormFooter";
import { IMAGES } from "@/app/constants/images";
import blogs from "@/app/constants/blogs";
import useIsMobile from "@/hooks/useIsMobile";

export const dynamic = "force-static";

const Blogs = () => {
	const isMobile = useIsMobile();

	// Get latest posts (next 4 blogs)
	const latestPosts = blogs.slice(0, 4);

	// Get featured posts (first 7 blogs)
	// const featuredPosts = blogs.slice(5, 12);

	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<div className={styles.jumbotron}>
					<Hero bgImage={IMAGES.BLOG_HEADER}>
						<HeroContent
							heading={"Expert Pest "}
							highlightedText={"Control Insights "}
							subHeading={"for Sydney Homes & Businesses"}
							description={
								"Stay informed with practical tips, latest news, and expert advice on keeping your space pest-free all year round"
							}
							hideButtonSection={true}
						/>
					</Hero>
				</div>
				{/* Feature Posts */}
				{/* <div className={styles.featuredPostsSection}>
					<div className={styles.sectionHeading}>
						<h2 className={styles.sectionTitle}>Featured posts</h2>
						<div className={styles.sectionDivider} />
					</div>
					<div className={styles.featuredPosts}>
						{featuredPosts.map((blog, index) => {
							// Determine variant based on position and mobile state
							let variant = "sm";
							if (index === 0) variant = "lg";
							else if (index === 1 || index === 2) variant = isMobile ? "lg" : "md";
							else variant = isMobile ? "lg" : "sm";

							return (
								<BlogCard
									key={blog.id}
									variant={variant as "sm" | "md" | "lg"}
									image={blog.image}
									date={blog.date}
									title={blog.title}
									content={blog.meta.description}
									slug={blog.slug}
									className="blog-card"
								/>
							);
						})}
					</div>
				</div> */}
				{/* Latest Posts */}
				<div className={styles.latestPostsSection}>
					<div className={styles.sectionHeading}>
						<h2 className={styles.sectionTitle}>Latest Posts</h2>
						<div className={styles.sectionDivider} />
					</div>
					<div className={styles.latestPostsGrid}>
						{latestPosts.map((blog) => (
							<BlogCard
								key={blog.id}
								variant={isMobile ? "lg" : "md"}
								image={blog.image}
								date={blog.date}
								title={blog.title}
								content={blog.meta.description}
								slug={blog.slug}
								className="blog-card"
							/>
						))}
					</div>
				</div>
				<HomeFooterJumbotron
					bgImage={IMAGES.FOOTER_BG}
					heading="Book your quick & free "
					highlightedText="consultation "
					subHeading="today"
					description="Protect your home from unwanted pests today and ensure a safe, clean, and comfortable environment."
				/>
				<Footer className={styles.footer} />
			</div>
		</Container>
	);
};

export default Blogs;
