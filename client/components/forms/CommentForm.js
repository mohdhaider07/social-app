const CommentForm=({comment,setComment,addComment})=>{
    return(<>
    <form onSubmit={addComment}>
    <div className="flex flex-col">
    <input className="my-2 p-2" type="text" value={comment} onChange={(e)=>setComment(e.target.value)}  placeholder="Write something here.."></input>
    <button className="p-1 bg-cyan-600 ">Submit</button>
    </div>
    </form>
    </>)
}
export default CommentForm; 