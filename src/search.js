import React from 'react';
import ReactDom from 'react-dom';
import "./search.less";
import bird from  "./assets/images/brid.jpg";

class Search extends React.Component {
    render() {
        return <div className="search-text">
            请输入文字...
            <img src={bird}></img>
        </div>
    }
}

ReactDom.render(
    <Search />,
    document.getElementById('root')
)