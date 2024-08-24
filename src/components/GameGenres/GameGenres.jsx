
import React from "react";
import styles from './GameGenres.module.css';
import Button from "../Button/Button";

const GameGenres = ({ gameGenres, onClick, genresTypeData }) => {


    return (
        <div>
            <div className={styles.content} >
                {gameGenres.map((genre) => (
                    <Button key={genre.name} onClick={() => onClick(genre.name)}>{genre.name}</Button >
                ))
                }


            </div>
            <p style={{ textAlign: "center", padding: "1rem" }}>{genresTypeData ? genresTypeData.description : "Выберите жанр"}</p>
        </div>

    );
}

export default GameGenres;