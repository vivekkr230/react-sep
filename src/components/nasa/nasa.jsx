import {useState,useEffect} from 'react'


export function Nasa(){
    const [nasa,setNasa]=useState({})

    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(res=>res.json())
        .then(ele=>{
            console.log(ele)
            setNasa(ele)
        })
    },[]);


    return(
        <div className="container container-fluid">
            <h1 className="text-danger text-center">Nasa API</h1>
            <table>
                <thead className="table table-hover">
                    <tr>
                        <th>PhotoID</th>
                        <th>Preview</th>
                        <th>Camera Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nasa.photos.map(photo=>
                            <tr key={photo.id}>
                                <td>{photo.id}</td>
                                {/* <td><img src={photo.img_src} width="100px" height="100px" /></td> */}
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.camera.name}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
