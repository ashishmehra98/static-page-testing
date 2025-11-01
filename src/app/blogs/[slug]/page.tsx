import { Metadata } from "next";
import { notFound } from "next/navigation";
import { findBlogBySlug, getRelatedBlogs } from "./utils";
import BlogDetailsClient from "./BlogDetailsClient";
import blogs from "@/app/constants/blogs";

interface BlogDetailsProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const blog = findBlogBySlug(blogs, params.slug);

	if (!blog) {
		return {
			title: "Blog Not Found | Ecovia Pest Control",
			description: "The requested blog post could not be found.",
		};
	}

	return {
		title: blog.meta.title,
		description: blog.meta.description,
		keywords: blog.meta.keywords.join(", "),
		openGraph: {
			title: blog.meta.title,
			description: blog.meta.description,
			images: [
				{
					url: blog.image,
					width: 1200,
					height: 630,
					alt: blog.title,
				},
			],
			type: "article",
			publishedTime: blog.date,
		},
		twitter: {
			card: "summary_large_image",
			title: blog.meta.title,
			description: blog.meta.description,
			images: [blog.image],
		},
	};
}

const BlogDetails = ({ params }: BlogDetailsProps) => {
	const blog = findBlogBySlug(blogs, params.slug);

	if (!blog) {
		notFound();
	}

	const relatedBlogs = getRelatedBlogs(blogs, blog.id, 3);

	return <BlogDetailsClient blog={blog} relatedBlogs={relatedBlogs} />;
};

export default BlogDetails;
