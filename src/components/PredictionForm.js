import React from 'react';
import R from 'ramda';
import { DeleteButton } from './buttons';

export const PredictionForm = (props) => (
  <form className="card card-form" onSubmit={props.handleSubmit}>
    <div className="card-title">
      <textarea
        className="input"
        type="text"
        name="title"
        onChange={props.handleInputChange}
        value={props.prediction.title}
        placeholder="It will rain tomorrow"
        required />
    </div>
    <div className="card-parameters">
      <div className="probability-select">
        {
          R.map(val => {
            const applyClassProb = props.prediction.prob === val ? "prob selected" : "prob";
            return (
              <div
                id={"prob" + val}
                className={"pointer " + applyClassProb}
                onClick={() => props.handleInputChange({ target: { name: 'prob', value: val } })}>
                {val + '%'}
              </div>
            )
          },
            ["50", "60", "70", "80", "90", "95", "97", "99"]
          )
        }
      </div>
      <div className="correct-select">
        {
          R.map(val => {
            const applyClass = props.prediction.correct === val ? "correctness selected" : "corectness";
            return (
              <div
                id={val}
                className={"pointer " + applyClass}
                onClick={() => props.handleInputChange({ target: { name: 'correct', value: val } })}>
                {val}
              </div>
            )
          },
            ["unknown", "correct", "incorrect"]
          )
        }
      </div>
      <button type='submit' className="badge btn-save-card"><i className="fa fa-check-square-o fa-lg" aria-hidden="true"></i></button>

    </div>
    <div className="card-delete">
      {props.edit && <DeleteButton id={props.id} handleDelete={props.handleDelete} />}
    </div>
  </form >
)