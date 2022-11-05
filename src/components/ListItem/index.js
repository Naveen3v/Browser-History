import './index.css'

const ListItem = props => {
  const {details, imageDeleted} = props
  const {timeAccessed, title, logoUrl, domainUrl, id} = details

  const deleteImage = () => {
    imageDeleted(id)
  }

  return (
    <li className="listitem">
      <div className="listinner">
        <p className="listtime">{timeAccessed}</p>
        <img src={logoUrl} alt="logo" className="listimage" />
        <p className="listtitle">{title}</p>
        <p className="listdomain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="listbtn"
        id="delete"
        onClick={deleteImage}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="btnimage"
        />
      </button>
    </li>
  )
}
export default ListItem
