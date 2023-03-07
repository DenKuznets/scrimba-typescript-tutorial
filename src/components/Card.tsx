interface Props {
  title: string;
  imageUrl: string;
}

export default function Card( props : Props) {
  return (
    <div className="card">
      <h4>{ props.title }</h4>
      <img src={props.imageUrl} alt="" />
    </div>
  )
}