function FlashCard(props) {
  let title = "fact number " + props.index; //TODO: add API calls
  let body = "body";
  return (
    <div className="basis-3/7 h-19/20 justify-self-center bg-wood shadow-lg rounded-lg flex flex-col space-y-10 text-left p-6">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default FlashCard;