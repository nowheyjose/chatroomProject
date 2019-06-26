import * as React from 'react'

interface HomepageProps {
    hideHomepage: () => void
}

export const HomePage: React.FunctionComponent<HomepageProps> = props => {
    return (
        <div className="container">
            <h1> ChitChat </h1>
            <h3>
                Talk about it.
            </h3>
            <a
                className="waves-effect waves-light btn-large orange pulse"
                onClick={props.hideHomepage}
            >
                Start
            </a>
        </div>
    )
}
