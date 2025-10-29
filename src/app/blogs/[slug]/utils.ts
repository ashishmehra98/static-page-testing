// Define BlogData interface locally to avoid import issues
interface BlogData {
	id: string;
	image: string;
	date: string;
	title: string;
	content: string;
	meta: {
		title: string;
		description: string;
		keywords: string[];
	};
}

export const createSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.trim();
};

export const findBlogBySlug = (blogs: BlogData[], slug: string): BlogData | undefined => {
	return blogs.find((blog) => createSlug(blog.title) === slug);
};

export const getRelatedBlogs = (blogs: BlogData[], currentBlogId: string, limit: number = 3): BlogData[] => {
	return blogs.filter((blog) => blog.id !== currentBlogId).slice(0, limit);
};

export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-AU", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
};
