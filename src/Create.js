import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        const blog = { title, body, author };
        e.preventDefault();
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs/',{
            method: 'POST',
            headers: { "Content-Type": "appliccation/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('Blog Added')
            history.push('/');
        });
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title: </label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Author: </label>
                <input type="text"
                       required
                       value={author}
                       onChange={(e)=> setAuthor(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Adding Blog...</button> }
               <p>{ title }</p>
               <p>{ author }</p>
               <p>{ body }</p>
            </form>
        </div>
    );
}
 
export default Create;