export interface IBlogPost {
    frontmatter: {
        date: string;
        path: string;
        title: string;
        tags: string[];
        id: string;
    };
    id: string;
    html: string;
}
