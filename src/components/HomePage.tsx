import * as React from 'react'

interface HomepageProps {
    hideHomepage: () => void
}

export const HomePage: React.FunctionComponent<HomepageProps> = props => {
    return (
        <div className="container">
            <h1> Hi! </h1>
            <h2>
                {' '}
                I got banned from League of Legends so I made this site so you
                can <b>rage</b>.{' '}
            </h2>
            <a
                className="waves-effect waves-light btn-large orange pulse"
                onClick={props.hideHomepage}
            >
                Start Flaming
            </a>
        </div>
    )
}
