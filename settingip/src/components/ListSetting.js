import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddList from './AddList';
import ItemSetting from './ItemSetting';
class ListSetting extends Component {
    constructor(props) {
        super(props);
    }

    handleDemo = (_id) => {
        console.log(_id)
    }
    render() {
        const {settings} = this.props;
        // console.log(settings);
        // console.log(this.props..st_value);
        return (
            <div>
                <Router>
                <ul>
                    {
                        <ItemSetting />
                    }
                </ul>
                    <Link to="/add" className="btn btn-info">Add</Link>
                    <Route path="/add">
                        <AddList/>
                        <Link to="/" >Close</Link>
                    </Route>
                </Router>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    settings: state.settings.datas
})
export default connect(mapStateToProps)(ListSetting);