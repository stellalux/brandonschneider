import React from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {get} from 'lodash'

import { showModal } from 'store/navigation'
import Hero from 'components/hero'
import SingleColumn from 'components/single-column'
import ExperienceList from 'components/experience-list'
import TechStack from 'components/tech-stack'

import experienceData from 'data/experience'
import techStackData from 'data/techStack'
import './HomeView.scss'

export const HomeView = (props) => {
  const classes = classnames('page-join-us', props.className);
  console.log(get(techStackData, 'stack'));
  const ExperienceSection = () => {
      return (
          <div key="job-section">
              <div className="current-openings">
                  <h2>Experience</h2>
              </div>
              <section className="jobs">
                  <div className="jobs-container">
                    <ExperienceList
                      key={`jobs-experience`}
                      title="Experience"
                      jobs={experienceData}
                      selected={true}
                    />
                  </div>
              </section>
          </div>
      )
  };
  return (
    <article className={classes}>
      <Hero
        title="Work in progress"
        transitionImage={true}
        subheading="Check back soon"
        eventLabel='home'
        showDownChevron={true}
      />
        <SingleColumn
            key="home-column"
            headingColour=""
            ruleColour=""
            backgroundColour=""
            isInZebraList={false}
        >
          <h2 className="title">About me</h2>
          <div className="methumb-holder">
            <img className="methumb" src="/img/me_thumb_bw.jpg" />
          </div>
          <p className="title is-4 block">Brandon Schneider</p>
          <p className="subtitle is-6 has-text-centered">Full-Stack Developer</p>
          <hr />
            <p>My curiosity is my driving force. I am entirely self-taught and have built all of my experience based on doing things that I am passionate about, and truly enjoy doing.</p>
          <p className="has-text-centered" style={{marginTop: 40}}><a className="button view_source" href="https://github.com/lyralux/brandonschneider" target="_blank"><span className="icon"><i className="fa fa-github"></i></span><span>View source on Github</span></a></p>
        </SingleColumn>
        <ExperienceSection/>
        <TechStack stack={get(techStackData, 'stack')}/>
    </article>
  )
};

const mapDispatchToProps = {
  showModal : (modalType) => showModal(modalType),
};
const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
