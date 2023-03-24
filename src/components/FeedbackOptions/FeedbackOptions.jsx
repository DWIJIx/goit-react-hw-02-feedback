import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    // console.log(options)
    return (
        
            <div>
                {options.map(option => {
                    return <button type="button" key={option} onClick={() => onLeaveFeedback(option) }>{option}</button>
               })}
            </div>
    
  )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

