import React from 'react';
import { connect } from 'react-redux';

const HomePage = (props) => {
    const { stage } = props;
    if(stage === "potato"){
        return <p>hello</p>;
    }
    else{
        return <p>yeet</p>;
    }
}

const mapStateToProps = ({HomePageReducer}) => ({
        stage: HomePageReducer.stage
});


export default connect(mapStateToProps)(HomePage);