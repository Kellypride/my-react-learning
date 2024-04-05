import React from "react";
import memesData from "../../memesData";

export default function Meme () {
    
    let url
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""

    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage (){
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        console.log("memeArray[randomNumber].url", memeArray[randomNumber].url);
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))

    }

    return (
        <main className="px-10 flex flex-col justify-center gap-10 py-10  bg-white font-karla">
             <p>{url}</p>
            <div className="grid  grid-cols-2 gap-5  ">
               
                <input
                    type="text"
                    name="topText"
                    value={meme.topText}
                    placeholder="Shutup"
                    onChange={handleChange}
                    className="border border-gray-400 rounded-lg  py-2 indent-3"
                />
                <input
                    type="text"
                    name="bottomText"
                    value={Meme.bottomText}
                    placeholder="And take your money"
                    onChange={handleChange}
                    className="border border-gray-400 rounded-lg py-2 indent-3"
                />
                <button className=" bg-purple-800 col-span-2 text-white rounded-lg px-4 py-2 cursor-pointer border-none" onClick={getMemeImage} >
                    Get a new meme image 🖼
            </button>
            </div>
            <div className="relative py-10 px10  h-96">
                {meme.randomImage && (
                    <img
                    src={require(`../../${meme.randomImage}`)}
                    alt="memes img"
                    className="absolute inset-0 object-cover w-full h-full"
                    />
                )}
                <h2 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center text-white text-5xl  font-bolder tracking-tighter uppercase ">
                    {meme.topText}
                </h2>
                <h2 className="absolute top-2/4 transform translate-x-2/4 text-center text-white text-5xl font-bolder tracking-tighter uppercase ">
                    {meme.bottomText}
                </h2>
            </div>
            
        </main>
    )
}