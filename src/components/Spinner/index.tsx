import React from "react";
import './index.scss'

interface SpinnerProps {
    loading: Boolean;
}

const Spinner = (props: SpinnerProps): JSX.Element => {
    const { loading } = props;
    return (
        <>
            {loading &&
                <div className="loader">
                    Loading...
                </div>
            }
        </>
    );
}

export default Spinner;