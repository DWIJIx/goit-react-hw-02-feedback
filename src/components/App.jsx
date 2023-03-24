import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  } 
 
  increment = (name) => {
    console.log(name)
  if (name === 'good') {
      this.setState((prevState) => ({
        good: prevState.good + 1
      }));
    }
    if (name === 'neutral') {
      this.setState((prevState) => ({
        neutral: prevState.neutral +1
      }));
    }
    if (name === 'bad') {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
}

  countTotalFeedback = () => {
    const totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedbacks;
  }
  countPositiveFeedbackPercentage = () => {
    const positivPercentage = Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100) || 0
    return positivPercentage;
  }

  render() {
    const {good, neutral, bad} = this.state
    const optionNames = Object.keys(this.state);
    // console.log(optionNames)

   return (
   <Layout>
      <GlobalStyle/>
      <div
      style={{
        height: '100vh',
          // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <div>
           <FeedbackOptions options={optionNames} onLeaveFeedback={this.increment}/>
        </div>
         <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={this.countTotalFeedback}
           positivePercentage={this.countPositiveFeedbackPercentage}
         />
      </div>
        
   </Layout>
    
  );
  }
};
  



// goodIncrement = () => {
  //   this.setState((prevState) => {
  //     return { good: prevState.good + 1 }
      
  //   })
  // }
  // neutralIncrement = () => {
  //   this.setState((prevState) => (
  //     { neutral: prevState.neutral + 1 }
  //   ))
  // }
  // badIncrement = () => {
  //   this.setState((prevState) => (
  //     { bad: prevState.bad + 1 }
  //   ))
  // }