import './style.css'

function Input({ texto }) {
    return (
        <div className="input">
            <input placeholder={texto} />
        </div>
    )
}

export default Input;