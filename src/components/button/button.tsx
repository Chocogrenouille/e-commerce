export default function Button(props: {
  text: string
  image: string
  type: 'addToCart' | 'continueCheckout'
}) {
  const handleClick = () => {
    console.log(props)
  }

  return (
    <button onClick={handleClick}>
      {props.image}
      {props.text}
    </button>
  )
}
