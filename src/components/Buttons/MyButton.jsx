
const MyButton = ({ c, p, m, w, h, r, fw, bgcolor, label, onClick }) => {
    
    const btnStyle = {
        backgroundColor: bgcolor,
        color: c,
        padding: p,
        margin: m,
        width: w,
        height: h,
        borderRadius: r,
        fontWeight: fw,
        textAlign: 'center',
        cursor: 'pointer',
    }

  return (
    <div>
        <button 
          className="
            border-2 
            rounded-md
          " 
          style={btnStyle} 
          onClick={onClick}
        >{label}</button>
    </div>
  )
}

export default MyButton