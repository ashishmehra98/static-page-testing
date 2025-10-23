"use client";

import useIsMobile from "../../hooks/useIsMobile";
import styles from "./style.module.css";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HeroContent from "@/app/components/HeroContent";
import BlogCard from "@/app/components/BlogCard";
import Footer from "@/app/components/Footer";
import HomeFooterJumbotron from "@/app/components/ContactFormFooter";
import { IMAGES } from "@/app/constants/images";

const Blogs = () => {
	const isMobile = useIsMobile();

	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Jumbotron */}
				<div className={styles.jumbotron}>
					<Hero bgImage={IMAGES.HOME_BG}>
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
				<div className={styles.featuredPostsSection}>
					<div className={styles.sectionHeading}>
						<h2 className={styles.sectionTitle}>Featured posts</h2>
						<div className={styles.sectionDivider} />
					</div>
					<div className={styles.featuredPosts}>
						<BlogCard
							variant="lg"
							image="/images/pest-service-thumbnail.jpg"
							date="01/05/2025"
							title="Top 5 common pests in Sydney homes (and how to handle them)"
							content="Discover the most common pests in Sydney and practical steps to keep them out of your home."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant={isMobile ? "lg" : "md"}
							image="/images/pest-service-thumbnail.jpg"
							date="01/05/2025"
							title="Are cockroaches dangerous? What every homeowner must know"
							content="Learn the risks and how to prevent infestations with expert tips."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant={isMobile ? "lg" : "md"}
							image="/images/pest-service-thumbnail.jpg"
							date="02/05/2025"
							title="Termite warning signs you should never ignore"
							content="Spot early indicators and save on costly repairs with timely action."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant={isMobile ? "lg" : "sm"}
							image="/images/pest-service-thumbnail.jpg"
							date="02/05/2025"
							title="Termite warning signs you should never ignore"
							content="Learn the risks and how to prevent infestations with expert tips."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant={isMobile ? "lg" : "sm"}
							image="/images/pest-service-thumbnail.jpg"
							date="02/05/2025"
							title="Termite warning signs you should never ignore"
							content="Learn the risks and how to prevent infestations with expert tips."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant={isMobile ? "lg" : "sm"}
							image="/images/pest-service-thumbnail.jpg"
							date="02/05/2025"
							title="Termite warning signs you should never ignore"
							content="Learn the risks and how to prevent infestations with expert tips."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant={isMobile ? "lg" : "sm"}
							image="/images/pest-service-thumbnail.jpg"
							date="02/05/2025"
							title="Termite warning signs you should never ignore"
							content="Learn the risks and how to prevent infestations with expert tips."
							onLearnMore={() => {}}
							className="blog-card"
						/>
					</div>
				</div>
				{/* Latest Posts */}
				<div className={styles.latestPostsSection}>
					<div className={styles.sectionHeading}>
						<h2 className={styles.sectionTitle}>Latest Posts</h2>
						<div className={styles.sectionDivider} />
					</div>
					<div className={styles.latestPostsGrid}>
						<BlogCard
							variant="lg"
							image="/images/pest-service-thumbnail.jpg"
							date="01/05/2025"
							title="Top 5 Common Pests in Sydney Homes (and How to Handle Them)"
							content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse suspendisse posuere volutpat odio sed vitae egestas sit."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant="lg"
							image="/images/pest-service-thumbnail.jpg"
							date="28/04/2025"
							title="How to Prevent Cockroach Infestations in Your Home"
							content="Learn effective strategies to keep cockroaches away from your home with these proven prevention methods."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant="lg"
							image="/images/pest-service-thumbnail.jpg"
							date="25/04/2025"
							title="Safe Pest Control for Families with Children"
							content="Discover child-safe pest control methods that protect your family while effectively eliminating pests."
							onLearnMore={() => {}}
							className="blog-card"
						/>
						<BlogCard
							variant="lg"
							image="/images/pest-service-thumbnail.jpg"
							date="22/04/2025"
							title="Common Spider Species in Sydney and How to Identify Them"
							content="Identify the most common spider species found in Sydney homes and learn which ones require professional attention."
							onLearnMore={() => {}}
							className="blog-card"
						/>
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
