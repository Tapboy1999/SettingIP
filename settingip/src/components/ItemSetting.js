import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteSetting, listItem ,loadSetting, isUpdate} from '../actions';
import axios from 'axios';
class ItemSetting extends Component {
    constructor(props){
        super(props);
    }
    handleDelete = (_id) => {
        console.log(_id);
        axios.post('http://localhost:8000/deletelist',{
            _id
        }).then(function(response) {
            console.log(response);
        }).catch(function(error){
            console.log(error);
        });
        const action = deleteSetting(_id);
        this.props.dispatch(action);
    }
    handleShow = (_id) => {
        let a = null;
        this.props.settings.filter((item,i) => item._id == _id ? a = item : null);
        console.log(a);
        this.props.dispatch(listItem(a));
        let data = this.props.settings.isUpdate;
        this.props.dispatch(isUpdate(false));
    }
    componentDidMount(props = this.props){
        axios.get('http://localhost:8000/').then(function(response) {
            // json in here
            // console.log(response.data);
        props.dispatch(loadSetting(response.data));

        }).catch(function(error){
            console.log(error);
        });
    }
    render() {
        const { settings } = this.props;
        // console.log(this.props.show);

        return (
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name Setting</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                settings.map((data, index) => (
                    
                    <tr>
                        <td>{index}</td>
                        <td>{data.st_key}</td>
                        <td>
                            <button className="btn btn-warning" onClick={() => this.handleShow(data._id)}>Show</button>
                            <button className="btn btn-danger" onClick={() => this.handleDelete(data._id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => ({
    settings: state.settings.datas,
});
export default connect(mapStateToProps)(ItemSetting);
