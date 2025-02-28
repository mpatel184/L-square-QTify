import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import {fetchFilters} from "../../api/api"
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css"
export default function HomePage(){
    const { data } = useOutletContext();
    const { newAlbums, topAlbums, songs, genres } = data

    return(
        <>
            <Hero />
            <div className="styles.wrapper">
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <Section title="Songs" data={songs} type="song" filterSource={fetchFilters} />
            </div>
        </>
    )
}