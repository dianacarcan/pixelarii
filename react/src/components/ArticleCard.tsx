interface ArticleProps {
    imageUrl: string;
    label: string;
    title: string;
    date: string;
    read_time: number;
    excerpt: string;
}

export const ArticleCard = ({ imageUrl,label ,title, date, read_time, excerpt }: ArticleProps) => {
    return (
        <article>
            <img src={imageUrl} />
            <h1>{label}</h1>
            <h2>{title}</h2>
            <h3>{date} • {read_time} min read</h3>
            <p>{excerpt}</p>
        </article>
    );
};
