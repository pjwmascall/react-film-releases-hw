import Release from './Release.js';

const ReleasesList = ({releases}) => {

    const releaseNodes = releases.map((release) => {
        return (
            <li className="release" key={release.id}><Release key={release.id} title={release.title} link={release.link} /></li>
        );
    });

    return (

        <ul id="release-list">
            {releaseNodes}
        </ul>

    );

}

export default ReleasesList;