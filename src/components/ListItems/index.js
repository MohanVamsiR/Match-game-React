import './index.css'

const ListItems = props => {
  const {details, onChangeImage} = props
  const {thumbnailUrl, id} = details

  const onClickItem = () => {
    onChangeImage(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ListItems
