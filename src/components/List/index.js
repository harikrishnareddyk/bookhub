const List = props => {
  const {i, SelectedEl} = props
  const {id, value, label} = i
  const selectEl = () => {
    SelectedEl(value)
  }
  return <p onClick={selectEl}>{label}</p>
}

export default List
