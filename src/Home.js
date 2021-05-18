import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {
    

    // const [name, setName] = useState('mario')
    const { data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs')


    

    return ( 
        <div className="Home">
            { error && <div> { error } </div> }
            { isPending && <div> loading... </div> }
            { blogs && <BlogList blogs={ blogs } title='All Blogs!!'/> }



            {/* <button onClick={() => setName('Luigi')}>change name</button>
            <p>{ name }</p> */}
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === "mario") } title="Mario's Blogs!!"/> */}
        </div>
     );
}
 
export default Home;