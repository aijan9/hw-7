import './App.css';
import Comment from './components/Comment';
import { comment } from './data/data.jsx'
console.log(comment);

function App() {
  return (
  <div className='wrapper'>
   {comment.map((el) => 
    <Comment
    
       key={el.id}
       author={el.author}
       text={el.text}
       date={el.date}
     />
  )}
  
 </div>
  )
}

export default App;
