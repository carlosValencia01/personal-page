// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router';
import blogs from '../../Data/blogs.json';
import './style.css';
import { Footer } from '../../Components/Footer';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { contents } from '../../Data/content';

function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const [suggestedList, setSuggestedList] = useState([]);
  const [contentList, setContentList] = useState([]);
  const [blogContent, setBlogContent] = useState("");


  useEffect(() => {
    updateSuggestedBlogs();
    updateContentList();
  }, [slug])
  
  const updateSuggestedBlogs = () => {
    blog.tags.forEach(tag => {
      console.log('tag searching', tag)
      //take each tag and search blogs that match that tag and add it to the suggestedlist
      let similarBlogs = blogs.filter(b=>b.tags.includes(tag));
      similarBlogs.forEach(b => {
        // avoid adding same blog
        if(b === blog){}
        // avoid adding duplicated blogs
        else if(suggestedList.includes(b)){}
        else{
          setSuggestedList(prevItems => [...prevItems, b]);
        }
      })
      
      //TODO - if no similar blogs found return the top 5 most popular.
      
    });
  }

  const updateContentList = () => {
    blog.content.forEach(x => {
      //take each subtitle and add to contentent list
      setContentList(prevItems => [...prevItems, x.subtitle]);
    });
  }

  function getContent(slug){
    var c = contents.filter(x => x.slug===slug);
    console.log(c)
    return c;
    
  }

  if (!blog) return <h2>Blog no encontrado</h2>;

  return (
    <div className="layout">
      <header className="header">
        Encabezado
      </header>
      <nav className="sidebar-left">
        <h2>Navegación</h2>
        <ul>
          {contentList.map((link, index) => (
            <li key={index}>
              <a href={`#`+link}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="blog-main-content">
         <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <p className="text-sm text-gray-600 mb-4">Por {blog.author} - {blog.date}</p>
            <div className="prose">
              
              {blog.content.map((x)=>(
                <div className='blogcontent-block' key={x.subtitle} id={x.subtitle}>
                  <h2 className='blogcontent-title'>{x.subtitle}</h2>
                  {/* <p className='blogcontent-p'>{x.contenido}</p>*/}
                  <p className='blogcontent-p' dangerouslySetInnerHTML={{ __html: x.contenido }}></p>                  
                </div>
            )
            )}
            </div>
         </div>
      </main>
      <aside className="sidebar-right">
        <h2>También te podría interesar:</h2>
        <ul>
          {
            suggestedList.map((x)=>(
              <li key={x.slug}><a href={x.slug} >{x.title}</a></li>
            ))
          }
        </ul>
      </aside>      
      <Footer/>
    </div>
  );
}

export default BlogPost;
