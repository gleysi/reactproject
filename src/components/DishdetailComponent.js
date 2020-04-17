import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const comment = comments.map((com) =>  {
                return(
                        <ul className="list-unstyled" key={com.id}>
                            <li>
                                {com.comment} <br></br>
                                -- {com.author}, {com.date}
                            </li>
                        </ul>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {comment}
                </div>
            );
        } 
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            {this.renderDish(this.props.dish)}
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

}

export default DishDetail;
