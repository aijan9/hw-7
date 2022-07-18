import './CommentWrapper.css'

function CommentWrapper (props) {
    console.log(props);
    return (
      
          
          <div className="backraund">{props.children}</div>

    
    );
}
export default CommentWrapper
