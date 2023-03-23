// import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
          <h2>Statistics</h2>
          <div>
            <p>Good: 
              <span>{good}</span>
            </p>
            <p>Neutral:
              <span>{neutral}</span>
            </p>
            <p>Bad: 
              <span>{bad}</span>
            </p> 
            <p>Total: 
              <span>{total}</span>
            </p> 
            <p>Positiv feedbacks: 
                <span>{positivePercentage}</span>
                %
            </p> 
          </div>
        </div>
    )
}