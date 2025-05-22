// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router';
import blogs from '../../Data/blogs.json';
import './style.css';
import { Footer } from '../../Components/Footer';
import { useEffect, useState } from 'react';

function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const [suggestedList, setSuggestedList] = useState([]);

  useEffect(() => {
    updateSuggestedBlogs();
  }, [slug])
  
  const updateSuggestedBlogs = () => {
    blog.tags.forEach(tag => {
      //take each tag and search blogs that match that tag and add it to the suggestedlist
      setSuggestedList(prevItems => [...prevItems, {title:tag}]);
    });
  }

  if (!blog) return <h2>Blog no encontrado</h2>;

  return (
    <div className="layout">
      <header className="header">Encabezado</header>
      <nav className="sidebar-left">Navegación</nav>
      <main className="main-content">
         <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <p className="text-sm text-gray-600 mb-4">Por {blog.author} - {blog.date}</p>
            <div className="prose">{blog.content.map((x)=>(
                <div key={x.subtitle}>
                  <h2>{x.subtitle}</h2>
                  <p>{x.contenido}</p>
                </div>
            )
            )}</div>
         </div>
      </main>
      <aside className="sidebar-right">
        <h2>Barra lateral</h2>
        <h3>Similar Blogs</h3>
        <ul>
          {
            suggestedList.map((x)=>(
              <li key={x.title}>{x.title}</li>
            ))
          }
        </ul>
      </aside>      
      <Footer/>
    </div>
  );
}

export default BlogPost;
