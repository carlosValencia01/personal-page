import './BlogCard.css';
export const BlogCard = (props) => {
    return (
        <div className="blogcard-container">
            <img className='blogcard-image' src="https://static-blog.siteground.com/wp-content/uploads/sites/4/2022/02/what-is-a-blog-1200x600-1.jpeg" alt="" />
            <h3 className='blogcard-title'>{props.blog.title}</h3>
            <h4>{props.blog.description }</h4> 
            <a className="blogcard-link-button" href={`/blog/${props.blog.slug}`}>Ir a</a>
        </div>
    )
}