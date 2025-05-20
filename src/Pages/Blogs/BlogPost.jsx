// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router';
import blogs from '../../Data/blogs.json';
import './style.css';

function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <h2>Blog no encontrado</h2>;

  return (
    <div className="container">
      <header>Mi Blog</header>
      <nav>Navegación</nav>
      <main>
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
      <aside>Barra lateral</aside>
      <footer>© 2025 Mi Nombre</footer>
    </div>

  );
}

export default BlogPost;
