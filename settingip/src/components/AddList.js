import axios from 'axios';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addList, loadSetting } from '../actions';
class AddList extends Component {
    constructor(props) {
        super(props);

    }
    handleSubmit = (e) => {
        e.preventDefault();
        let _id = Math.random();
        let input = e.target.inputList.value;
        if ((input != '')){
            axios.post('http://localhost:8000/add', {
                _id,input
            }).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
            const action = addList(_id, input);
            this.props.dispatch(action);
            e.target.inputList.value = '';
        }
        else{
            alert('Lỗi! Vui lòng kiểm tra lại');
        }
    }
    render() {
        const {settings} = this.props;
        // console.log(settings)
        return (
            <div className="add-list">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-md-9">
                            <input name="inputList" className="form-control"/>
                        </div>
                        <div className="col-md-3 add-btn" >
                            <button type="submit" className="btn btn-primary">
                                Add
                            </button>
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    settings : state.settings.datas,
    
})
export default connect(mapStateToProps)(AddList);
