import React from 'react';

class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js',
    );
    head.appendChild(script);
  }

  componentWillUnmount() {
    this.script = this.script.destroy();
  }

  render() {
    return (
      <div>
        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/sarah-goncalves"
            style={{ minWidth: '320px', height: '680px' }}
          />
        </div>
      </div>
    );
  }
}

export default Calendly;
