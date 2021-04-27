import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addItem, deleteItem, isUpdate, updateItem } from '../actions';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class ItemValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = e.target.inputItem.value;
        var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        let shows = this.props.settings.show;
        let _id = shows._id;
        if ((input != "") && (input.match(ipformat)) && (_id !== null)) {
            axios.post('http://localhost:8000/additem', {
                _id, input
            }).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
            this.props.dispatch(addItem(_id, input));
            e.target.inputItem.value = "";
        }
        else {
            alert("Lỗi! Vui lòng kiểm tra lại");
        }
    }
    handleDelItem = (i) => {
        let shows = this.props.settings.show;
        let _id = shows._id;
        this.props.dispatch(deleteItem(_id, i));
        axios.post('http://localhost:8000/deleteitem', {
            _id, i
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }
    handleUpdate = (i) => {
        let shows = this.props.settings.show;
        let _id = shows._id;
        let input = this.state.item;
        var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if ((input != "") && (input.match(ipformat)) && (_id !== null)) {
            this.props.dispatch(updateItem(_id, i, input));
            axios.post('http://localhost:8000/updateItem', {
                _id, i, input
            }).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            alert('Lỗi!Vui lòng thử lại');
        }
    }
    getValue = (e) => {
        const { item } = this.state;
        const value = e.target.value;
        this.setState({
            item: value
        })
    }
    handleEdit = () => {
        let data = this.props.settings.isUpdate;
        this.props.dispatch(isUpdate(!data));
    }
    render() {
        const { item } = this.state;
        const shows = this.props.settings.show;
        console.log(shows);
        const isUpdate = this.props.settings.isUpdate;
        // console.log(shows.st_value.length);
        if (shows.st_value.length == 0) {
            return (
                <div className="add-list">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <div className="col-md-9">
                                <input name="inputItem" className="form-control" />
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
        } else if (isUpdate == true) {
            return (
                <div className="table-content">
                    <form>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ip</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    shows.st_value.map((item, i) => (

                                        <tr>
                                            <th scope="row">{i}</th>
                                            <td><input className="form-control" name="a" defaultValue={item} onChange={(e) => this.getValue(e)} /></td>
                                            <button className="btn btn-warning" type="submit" onClick={() => this.handleUpdate(i)}>Update</button>
                                            <button className="btn btn-danger" onClick={() => this.handleDelItem(i)}>Delete</button>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </form>

                    <div className="add-list">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <div className="col-md-9">
                                    <input name="inputItem" className="form-control" />
                                </div>
                                <div className="col-md-3 add-btn" >
                                    <button type="submit" className="btn btn-primary">
                                        Add
                                        </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="table-content">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ip</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shows.st_value.map((item, i) => (
                                    <tr>
                                        <th scope="row">{i}</th>
                                        <td>{item}</td>
                                        <button className="btn btn-danger" onClick={() => this.handleDelItem(i)}>Delete</button>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-warning" onClick={() => this.handleEdit()}>Edit</button>

                    <div className="add-list">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <div className="col-md-9">
                                    <input name="inputItem" className="form-control" />
                                </div>
                                <div className="col-md-3 add-btn" >
                                    <button type="submit" className="btn btn-primary">
                                        Add
                            </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    settings: state.settings,
});
export default connect(mapStateToProps)(ItemValue);
