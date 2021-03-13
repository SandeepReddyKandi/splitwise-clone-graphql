import React, { Component } from "react";
import { connect } from "react-redux";
import letter from "../../letter.webp";

class CreateNewGroup extends Component {
	// state = {

	// }

	addUser = (e)=>{
		const list = document.querySelector('.group-members');
		const newList = document.createElement('div');
		newList.classList.add("row", "group-member");

		const nameField = document.createElement('div');
		newList.classList.add("input-field", "col", "m6");
		nameField.innerHTML = `
			<label for="name">name</label>
			<input id="name" type="text" className="validate"/>
		`

		const emailField = document.createElement('div');
		newList.classList.add("input-field", "col", "m6");
		emailField.innerHTML = `
			<label for="email">email</label>
			<input id="email" type="email" className="validate"/>
		`

		newList.appendChild(nameField);
		newList.appendChild(emailField);

		list.appendChild(newList);
	}

	render() {
		return (
			<div className="container row new-group">
				<div className="col m4 center-align" id="groupLeftSide">
					<img className="responsive-img" src={letter} alt="letter"/>
					<div className="change-avatar center-align">
						<p>change your avatar</p>
						<input className="center-align" type="file"/>
					</div>
				</div>
				<div className="col m7" id="groupRightSide">
					<h5 className="grey-text">start a new group</h5>
					<div className="row group-name">
						<div className="input-field col m12">
							<input id="groupName" type="text" className="validate"/>
							<label htmlFor="groupName">My group shall be called</label>
						</div>
					</div>
					<div className="row group-members">
						<p className="grey-text">Group members</p>
						<div className="row group-member valign-wrapper">
							<div className="col m12" id="usersList">
								<span className="center-align valign-wrapper">
									<img className="responsive-img" src="https://img.icons8.com/nolan/64/user-male-circle.png"/>
									{this.props.userInfo.name} ({this.props.userInfo.email})
								</span>
							</div>
						</div>
					</div>
					<div className="row" id="addUser">
						<form className="grey lighten-3 center-align">
							<div className="row">
								<div className="input-field col s6">
									<input id="name" type="text" className="validate"/>
									<label htmlFor="name">name</label>
								</div>
								<div className="input-field col s6">
									<input id="email" type="email" className="validate"/>
									<label htmlFor="email">email</label>
								</div>
							</div>
							<button className="btn orange darken-3">Add a person</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
    return {
        userInfo : state.auth.signupInfo
    }
}

// export default CreateNewGroup;
export default connect(mapStateToProps, null)(CreateNewGroup);
