import Image from "next/image";
import Link from "next/link";

import styles from "./style.module.css";
import { formatDate } from "./utils";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

interface BlogDetailsClientProps {
	blog: BlogData;
	relatedBlogs: BlogData[];
}

const BlogDetailsClient = ({ blog }: BlogDetailsClientProps) => {
	return (
		<Container>
			<Header />
			<div className="flex flex-col gap-[60px] xl:gap-[120px]">
				{/* Blog Hero Section */}
				<div className={styles.heroSection}>
					<div className={styles.heroImage}>
						<Image src={blog.image} alt={blog.title} fill className={styles.heroImageContent} />
					</div>
					<div className={styles.heroContent}>
						<div className={styles.breadcrumb}>
							<Link href="/blogs" className={styles.breadcrumbLink}>
								Blogs
							</Link>
							<span className={styles.breadcrumbSeparator}>/</span>
							<span className={styles.breadcrumbCurrent}>{blog.title}</span>
						</div>
						<div className={styles.blogMeta}>
							<span className={styles.blogDate}>{formatDate(blog.date)}</span>
						</div>
						<h1 className={styles.blogTitle}>{blog.title}</h1>
					</div>
				</div>

				{/* Blog Content */}
				<div className={styles.contentSection}>
					<div className={styles.contentWrapper}>
						<div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: blog.content }} />
					</div>
				</div>
				<Footer className={styles.footer} />
			</div>
		</Container>
	);
};

export default BlogDetailsClient;
