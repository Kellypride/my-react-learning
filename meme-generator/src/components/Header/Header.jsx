import React from "react";

export default function Header () {
    return (
        <header className="py-5 px-5 bg-purple-800 flex justify-between items-center text-white font-montserrat ">
            <span className="flex justify-center items-center gap-4 text-2xl font-semibold ">
                <img src={require('../../assets/Troll Face.png')} alt="header logo" width={37} height={27} title={"Troll Face"} className=" object-cover object-center w-9 h-7 "/>
                <h2>Meme Generator</h2>
            </span>
            <h3 className=" text-lg font-medium ">React Course Project-3</h3>
        </header>
    )
}