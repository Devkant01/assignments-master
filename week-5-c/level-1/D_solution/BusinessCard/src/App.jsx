import React from 'react'
import { state } from './state'
import './App.css'

function App() {
  return (<>
    <div className='header'>
      <span >BusinessCards</span>
    </div>
    {/* main task */}
    <div id="heroSection">
      {state.map((state) => {
        return <BusinessCards name={state.name} description={state.description} interest={state.interest} linkedIn={state.linkedIn} twitter={state.twitter} otherSocialLinks={state.othersocialinks} key={state.id} />
      })}
    </div>
  </>

  )
}

function BusinessCards(props) {
  return (
    <div className='business-cards'>
      <div className='cards'>
        <h1>{props.name}</h1>
        <h3 className='desc'>{props.description}</h3>
        <h2>Interests</h2>
        <ul>
          {props.interest.map(int => {
            return <li key={int}>{int}</li>
          })}
        </ul>
        <div className="links">
          <button className='SocialLinks'><a href={props.linkedIn} title="LinkedIn Profile" target='_blank'>LinkedIn</a></button>
          <button className='SocialLinks'><a href={props.twitter} title="LinkedIn Profile" target='_blank'>Twitter</a></button>
        </div>
        <div className="otherLinks">
          {
            (props.otherSocialLinks ?
              props.otherSocialLinks.map(osl => {
                // setLinkCount(linkCount + 1);
                return <button className='SocialLinks' key={osl.name}><a href={osl.Address} title="LinkedIn Profile" target='_blank'>{osl.name}</a></button>
              }) : "")
          }
        </div>
      </div>
    </div>
  )
}
export default App