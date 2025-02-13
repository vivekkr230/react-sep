import { useState, useEffect } from 'react'

export function MouseEvent(){
    const[photos,setPhotos]=useState([{img_src:''}])

    useEffect(() => {
        fetch("/Users/vivekkumar/react-sep/public/ss_image.json")
        .then(res=>res.json())
        .then(pics=>{
            setPhotos(pics)
        })
    }, [])

    return(
        <div className="container-fluid">
            <h2>MouseEvents</h2>
            <div className="row">
                <div className="col-2">
                    {
                        photos.map(prod=>
                            <div className="mb-4 border border-primary border-2" key={prod}>
                                <img src={prod.img_src} width="50px" height="50px" alt="not"/>
                            </div>
                            )
                    }
                </div>
                <div className="col-10">

                </div>
            </div>
        </div>
    )
}