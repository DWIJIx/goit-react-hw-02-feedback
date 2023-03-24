// import PropTypes from 'prop-types';


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            <h2>Please, leave feedback</h2>
            <div>
                {options.map(option => {
                   return <button type="button" onClick={() => onLeaveFeedback(option) }>{option}</button>
               })}
            </div>
      </div>
  )
}

