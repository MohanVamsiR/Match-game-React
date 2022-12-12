import './index.css'

const TabsListItems = props => {
  const {name, details, tabsSwap} = props
  const {tabId} = details

  const onTabChange = () => {
    tabsSwap(tabId)
  }

  return (
    <li className="each-img">
      <button type="button" id="list-buttons" onClick={onTabChange}>
        {name}
      </button>
    </li>
  )
}

export default TabsListItems
