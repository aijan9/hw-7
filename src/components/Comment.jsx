import CommentWrapper from "../ComentWrapper";
import { dateFormat } from "../halpers/general";
import UserInfo from "../UserInfo";
import './Comment.css'

const Comment = (props) => {
   return (
     <div className="Comment">
       <div className="commentUserInfo">
         <UserInfo author={props.author} />
       </div>
       <div>{props.id}</div>
       <div>
         <CommentWrapper>
             <p>{props.text}</p>
             <div>{dateFormat(props.date)}</div>
         </CommentWrapper>
       </div>
     </div>
   );
}

export default Comment;