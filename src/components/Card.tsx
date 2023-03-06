export default function Card(props: object) {
  return (
    <div className="card">
      <h4>{ props.title }</h4>
      <img src={props.imageUrl} alt="" />
    </div>
  )
}