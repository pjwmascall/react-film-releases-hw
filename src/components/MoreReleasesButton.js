const MoreReleasesButton = () => {

    const handleButtonClick = () => {
        window.open('https://www.imdb.com/calendar/?region=gb', '_blank');
    }

    return (

        <>
            <button id="more-releases" onClick={handleButtonClick}>View more upcoming releases {'>>'}</button>
        </>

    );

}

export default MoreReleasesButton;