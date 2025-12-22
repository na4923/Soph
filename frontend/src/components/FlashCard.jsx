function FlashCard(/*{ props }*/) {
  let title = "title"; //TODO: add API calls
  let body = "body";
  return (
    <div className="w-1/3 h-9/10 justify-self-center bg-wood shadow-lg rounded-lg flex flex-col space-y-10 text-left p-6">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default FlashCard;