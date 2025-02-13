import { useState } from 'react'

export function Preview() {
    const [preview, setPreview] = useState({ visibility: '' })

    function handleButtonClick(e) {

        if (e.checked) {
            alert(`you clicked`)
            setPreview({
                visibility: 'block'
            })
        }
        else{
            setPreview({
                visibility: 'none'
            })
        }
    }
    return (
        <div className="container-fluid m-4">
            <button className="form-check" onClick={handleButtonClick}>
                <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Checked checkbox
                </label>
            </button>
            <img src="./iphone.webp" alt="" style={preview} className="m-4" />
        </div>
    )
}