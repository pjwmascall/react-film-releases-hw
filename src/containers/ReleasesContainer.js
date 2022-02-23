import ReleasesList from '../components/ReleasesList.js';
import MoreReleasesButton from '../components/MoreReleasesButton.js';

const ReleasesContainer = () => {

    const releases =
        [
            {
            id: 1,
            title: "Spider-Man: Into the Spider-Verse",
            link: "https://www.imdb.com/title/tt4633694/"
            },
            {
            id: 2,
            title: "Life Itself",
            link: "https://www.imdb.com/title/tt5989218/"
            },
            {
            id: 3,
            title: "Mary Queen of Scots",
            link: "https://www.imdb.com/title/tt2328900/"
            },
            {
            id: 4,
            title: "The Lego Movie 2: The Second Part",
            link: "https://www.imdb.com/title/tt3513498/"
            },
            {
            id: 5,
            title: "Captain Marvel",
            link: "https://www.imdb.com/title/tt4154664/"
            }
        ]

    return (

        <>
            <h1>Upcoming Film Releases for UK</h1>

            <hr></hr>

            <ReleasesList releases={releases} />

            <hr></hr>

            <MoreReleasesButton />
        </>

    );

}

export default ReleasesContainer;