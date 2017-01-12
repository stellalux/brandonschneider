/**
 * Created by brand on 1/11/2017.
 */
'use strict';

import React from 'react';
import classnames from 'classnames';

import './index.scss';

const DownChevron = React.createClass({
  getInitialState() {
    return Object.assign({
      currentFrame: 0,
      fadeInDuration: 20,
      fps: 30,
      frameName: 'Frame',
      totalFrames: 0
    }, this.props);
  },
  componentDidMount() {
    const autoAnim = this.props.autoAnim;
    let svgElement = this.refs.animsvg;
    this.setState({totalFrames: svgElement.childNodes.length});
    if(autoAnim) {
      if(autoAnim) {
        setTimeout(this.anim, autoAnim);
      } else {
        this.anim();
      }
    } else if(this.state.fadeInDuration > 0) {
      for(let i = 1; i <= this.state.fadeInDuration; i++) {
        // TODO: add tween function support
        svgElement.getElementById(this.state.frameName + i).style.opacity = i / this.state.fadeInDuration;
      }
    }
    this.resetAnim();
  },
  componentWillUnmount() {
    this.resetAnim();
  },
  hideAllFrames() {
    let svg = this.refs.animsvg;
    for (let i = 0; i < svg.childNodes.length; i++) {
      svg.childNodes[i].style.display = 'none';
    }
  },
  goToFrame(frameNumber) {
    this.setState({currentFrame: frameNumber});
    window.cancelAnimationFrame(this.frameRequest);
    this.frameRequest = window.requestAnimationFrame(() => {
      this.hideAllFrames();
      this.refs.animsvg.getElementById(this.state.frameName+frameNumber).style.display = 'inline-block';
    });
  },
  goToProgressRatio(progressRatio) {
    this.goToFrame(Math.ceil(this.state.totalFrames * progressRatio));
  },
  resetAnim() {
    clearTimeout(this.timeout);
    window.cancelAnimationFrame(this.frameRequest);
    this.hideAllFrames();
    this.setState({currentFrame: 0});
  },
  anim() {
    this.timeout = setTimeout(() => {
      this.goToFrame(this.state.currentFrame + 1);
      if (this.state.currentFrame < this.state.totalFrames) {
        this.anim();
      } else {
        if(this.props.loop) {
          this.setState({ currentFrame: 0 });
          this.anim();
        }
      }
    }, 1000 / this.state.fps);
  },

  render() {
    const classes = classnames('down-chevron', this.props.customClass);
    return <div className={classes} onClick={this.props.onClick}>
      <svg ref="animsvg" title="Down arrow" role="img" viewBox="0 0 400 200">
        <g id="Frame1">
          <path d=""/>
        </g>
        <g id="Frame2">
          <path d="M374.975 79.667c-.444-6.223 9.778-11.556 14.223-7.11.888 6.22-9.78 11.11-14.223 7.11z"/>
        </g>
        <g id="Frame3">
          <path d="M349.198 82.333c13.333 0 25.333-6.666 38.222-10.222-8.444 12-24.444 13.34-38.222 14.67v-4.44z"/>
        </g>
        <g id="Frame4">
          <path d="M306.975 79.667c24 4.89 48.445 3.556 72-2.667-11.11 11.556-28 10.223-42.666 10.667-10.23-.89-23.12 2.222-29.34-8z"/>
        </g>
        <g id="Frame5">
          <path d="M249.198 53.444c26.222 8 48.89 27.556 77.333 28.89 13.34 2.222 27.56-4 40 3.11-41.33 9.334-85.33-5.777-117.33-32z"/>
        </g>
        <g id="Frame6">
          <path d="M174.086 19.667c20-1.333 37.333 9.777 54.667 18.222 36.89 20.88 73.778 46.66 117.778 46.22-4.44 7.55-13.33 3.55-20.44 3.55-45.77-5.34-80.89-37.78-121.78-55.56-10.22-4.45-21.33-5.78-30.22-12.45z"/>
        </g>
        <g id="Frame7">
          <path d="M103.42 31.667C136.753 16.11 177.198 12.11 210.976 29c32.89 15.11 62.222 38.667 97.333 49.334 4.44.89 7.55 4 8.44 8.444C276.75 77 243.42 50.334 206.53 33c-35.554-17.777-78.22-9.333-112 8.89 1.334-4.89 4-8.446 8.89-10.223z"/>
        </g>
        <g id="Frame8">
          <path d="M66.086 59.667c25.333-28 63.556-42.667 100.89-41.778 26.666-.45 50.666 13.33 72.89 26.22 12.888 8 27.554 13.77 38.665 24.44-10.66-.44-19.55-7.55-28.44-12.44-20.44-12-40.44-24.45-63.11-31.11-40.44-8-83.11 5.77-113.77 32.89C81.2 65 93.2 69 96.76 80.11c-11.12-4.446-21.34-12.446-30.68-20.446z"/>
        </g>
        <g id="Frame9">
          <path d="M65.642 59.667c29.333-32.444 75.556-47.11 118.667-40.444 13.77 4 29.33 7.11 38.66 18.666-18.67-4-36-16.89-56-14.67-34.67-2.23-68 12.44-93.34 35.11C92.3 73.44 112.74 85.89 130.96 101c.89 1.77 2.222 5.33 3.11 7.55-24-14.67-46.22-32-68.444-48.89z"/>
        </g>
        <g id="Frame10">
          <path d="M65.642 60.11c22.222-24.888 55.11-39.555 88-41.333v4.89c-29.778 1.777-57.778 15.556-80 35.11 27.11 20.89 55.556 40 82.667 61.334.88 1.78 3.11 5.34 4 7.56-33.34-20-63.56-44.89-94.67-67.55z"/>
        </g>
        <g id="Frame11">
          <path d="M65.642 60.11c11.11-12 24-23.555 40-27.555C98.532 45 83.42 49 73.642 58.777c30.667 23.11 62.222 45.778 93.333 68.445 4.445 3.555 11.11 6.666 9.778 13.777-37.778-26.23-74.222-53.78-111.11-80.89z"/>
        </g>
        <g id="Frame12">
          <path d="M186.975 38.334c3.11-4.445 15.11-2.223 8.445 4-4.89 6.666-20.445 2.666-8.445-4zM66.085 60.11c1.334-1.777 4.445-4.888 5.78-6.222 3.554 4.89 7.554 9.777 12.89 13.334 31.553 22.666 63.11 46.222 94.664 68.89 5.33 3.11 8.88 8 11.55 13.776-16-7.556-29.34-20-44-29.777-27.11-20.44-54.67-39.11-80.89-60z"/>
        </g>
        <g id="Frame13">
          <path d="M180.31 46.777c7.554-8.444 17.776-13.333 28.888-14.222-8.445 7.556-18.667 10.668-28.89 14.222zM82.53 69.89c10.224.443 17.335 8 24.89 13.333 25.778 19.11 51.556 38.222 77.778 56.89 5.333 3.554 9.777 8.443 13.333 13.776-5.77-1.34-11.55-4-16-8-23.55-17.78-47.55-35.12-71.11-52.45-10.66-7.11-21.77-13.34-28.89-23.56z"/>
        </g>
        <g id="Frame14">
          <path d="M181.198 45.89c10.667-12.445 28-14.667 43.11-18.667v4c-14.222 4-28.444 9.777-43.11 14.666zM98.086 78.777c17.333 8.89 32 21.778 47.556 32.89 16.89 13.333 35.556 24.444 51.556 39.11l3.11 8c-29.332-19.11-56.444-41.333-85.333-61.333-6.222-5.333-14.666-9.777-16.89-18.667z"/>
        </g>
        <g id="Frame15">
          <path d="M183.42 43.223c19.556-14.667 45.333-17.78 68.89-14.223 24 5.333 44 23.556 53.776 46.223C293.198 67.667 288.31 52.556 275.42 45c-20.89-15.556-49.778-15.556-73.334-6.223-6.222 2.223-12.444 3.556-18.666 4.446zm-73.778 43.11c33.333 20.444 64 44.89 95.11 68.445-2.222.444-6.222 1.333-8.444 2.222-24.89-17.333-48.445-36-73.333-53.333-5.777-4.89-15.556-8.444-13.333-17.333z"/>
        </g>
        <g id="Frame16">
          <path d="M189.642 41.89c12.444-13.778 32.89-14.667 50.222-14.223 28.89 0 52.89 21.333 65.778 45.777-21.778 16.89-44 33.778-65.778 50.222-4.89 4-10.667 7.11-16.89 8.445 23.112-22.66 52-39.11 76.445-60-13.78-22.66-37.78-41.77-65.78-39.11-15.56-1.77-29.34 5.34-44 8.89zM115.864 93c10.222.89 17.778 8 26.222 13.777 20.444 15.556 41.778 30.223 62.223 45.778-2.23.89-6.23 3.11-8.45 4.444-24.89-18.67-50.67-36.45-75.56-55.56-1.34-1.78-3.11-6.22-4.45-8.45z"/>
        </g>
        <g id="Frame17">
          <path d="M198.53 35.223c24.89-12 57.334-11.11 80 5.777 12 8 20 20.444 27.557 32.444-31.556 23.556-62.222 48.89-95.556 70.222.89-4.443 3.12-8.444 7.12-10.666 27.56-20 55.11-40 81.78-61.334-13.77-22.222-37.77-41.333-65.33-39.11-12-1.333-23.55 6.22-35.55 2.667zm-78.22 63.554c2.22-.443 6.665-.89 8.888-1.333 25.777 16.89 49.333 36.444 74.222 53.333-1.333 2.223-4 6.223-5.333 8.445-21.778-15.556-43.11-32-65.333-47.556-5.335-2.666-9.334-7.555-12.445-12.89z"/>
        </g>
        <g id="Frame18">
          <path d="M214.53 33c2.668-8 13.334-4.444 19.557-5.777 31.11-1.778 59.11 19.556 72 46.666-31.11 24-62.666 47.55-94.222 70.22-6.223 4-10.223 9.77-14.223 16-24-17.34-48-35.11-72-52.89l5.333-8.89c24 16 46.667 33.78 69.778 50.67 3.556-4.45 7.556-9.34 12.444-12.45 29.333-20.89 58.222-42.23 86.223-64.89-11.11-17.78-27.556-33.33-48.89-37.78-12-2.23-24.444-.89-36-.89z"/>
        </g>
        <g id="Frame19">
          <path d="M234.975 27.223c30.667-1.778 58.667 19.556 71.11 46.666-30.666 23.11-60.888 46.22-92 68.44-7.11 4.44-12.443 11.11-17.332 17.77-22.667-17.34-46.222-33.78-68.89-51.11 1.78-2.23 4.89-7.56 6.668-9.78 22.23 14.22 42.23 32.44 64.89 45.77 34.67-22.227 67.56-48.448 100-73.78-13.33-21.337-35.11-39.11-61.33-38.67-1.33-1.33-2.66-4-3.11-5.33z"/>
        </g>
        <g id="Frame20">
          <path d="M258.975 32.11c21.334 4.445 36 23.112 46.667 41.334-30.222 23.11-60.89 46.223-92 68.444-7.11 4.89-12.444 11.11-17.333 18.223-22.67-16.44-45.34-33.33-68-49.77 1.77-2.66 5.77-7.55 7.55-10.22 20.89 15.56 41.78 30.67 63.11 46.23 33.78-24.45 67.56-49.34 100.45-74.67-9.34-17.33-26.23-26.67-40.45-39.56z"/>
        </g>
        <g id="Frame21">
          <path d="M282.53 49.89c13.334-2.223 16.445 16 24 23.555-29.776 22.667-59.555 45.333-89.776 66.667-8 5.333-14.667 12.89-21.333 20-22.22-16.445-44.88-32.89-67.11-49.334 2.23-2.666 6.23-8.444 8-11.11 20.89 15.11 41.34 30.222 62.23 45.333 33.78-24.44 67.11-48.88 99.56-74.22-4.89-6.22-10.22-13.33-15.55-20.89z"/>
        </g>
        <g id="Frame22">
          <path d="M198.086 145.444C233.642 121 266.976 92.556 303.42 69l4.444 4.444c-24.444 19.11-49.333 38.222-74.667 56.444-12.89 9.778-27.11 17.778-36.89 31.11-22.222-16.443-44.888-32.888-67.11-49.332 2.223-2.667 6.223-8 8-11.11 20 14.667 40.445 29.778 60.89 44.888z"/>
        </g>
        <g id="Frame23">
          <path d="M197.642 145c29.778-21.777 59.556-43.11 88.89-65.777 1.332 1.777 4.444 5.333 5.777 7.556-31.12 25.77-66.67 46.22-96.45 74.22-22.23-16.89-44.89-32.89-67.11-49.78 2.22-2.67 6.22-8 8-11.11 20.44 15.11 40.44 30.22 60.88 44.88z"/>
        </g>
        <g id="Frame24">
          <path d="M197.198 144.556c25.777-19.11 52-37.778 77.333-57.333 1.78 2.222 4.89 6.666 6.67 8.444-27.55 22.666-59.11 40.89-85.33 65.333-21.78-17.334-44.89-32.89-67.11-49.777 2.22-2.667 6.22-8 8-11.11 20 15.11 40 29.776 60.45 44.443z"/>
        </g>
        <g id="Frame25">
          <path d="M196.31 144.11c23.11-16.888 46.666-34.222 69.777-51.555 2.667 3.11 4.89 6.667 7.556 9.778-25.778 20-53.333 37.333-77.778 58.666-21.778-17.34-44.89-32.89-67.11-49.78 2.22-2.67 6.22-8 8-11.11 19.998 14.66 39.998 29.33 59.554 44z"/>
        </g>
        <g id="Frame26">
          <path d="M195.864 143.667c21.333-16 43.11-31.556 64.445-47.556 2.66 3.56 5.33 7.12 8.44 11.12-24 18.22-49.34 35.11-72.89 54.22-21.78-17.77-44.89-33.33-67.11-50.22 2.22-2.66 6.22-8 8-11.11 20 14.67 39.55 29.33 59.11 43.56z"/>
        </g>
        <g id="Frame27">
          <path d="M195.864 143.667c20.444-15.11 40.89-29.778 61.333-44.89 2.666 3.557 5.333 7.557 8 11.11-23.11 17.335-47.11 33.335-69.333 51.557-21.778-17.777-44.89-33.333-67.11-50.222 2.22-2.667 6.22-8 8-11.11 20 14.666 39.555 29.332 59.11 43.555z"/>
        </g>
        <g id="Frame28">
          <path d="M195.864 143.667c19.556-14.667 39.556-28.89 59.11-43.556 2.224 2.67 6.224 8 8.446 10.67-22.222 16.89-45.778 32.45-67.556 50.67-21.778-17.78-44.89-33.33-67.11-50.22 2.22-2.66 6.22-8 8-11.11 20 14.67 39.555 29.33 59.11 43.56z"/>
        </g>
      </svg>
    </div>;
  }
});

export default DownChevron;
