const Release = ({title, link}) => {

    const handleLinkClick = (link) => {
        window.open(link, '_blank');
    }

    return (

        <>
            <span className="release-title" onClick={() => handleLinkClick(link)}>{title}</span>
        </>

    );

}

export default Release;