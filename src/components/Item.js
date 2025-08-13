export default function Item({item, onRemoveItem, onPackItem}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => {onPackItem(item.id)}} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItem(item.id)} title="Remove">🚫</button>
    </li>
  )
}