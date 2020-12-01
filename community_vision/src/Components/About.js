import React, { forwardRef, useState, useImperativeHandle } from 'react';
import '../App.css';

function initial(type) {
  if (localStorage.getItem(type) != null) {
    return localStorage.getItem(type);
  }
  if (type === 'backgroundColor') {
    return 'blue';
  } else if (type === 'fontColor') {
    return 'white';
  }
}

const About = forwardRef((props, ref) => {
  const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
  const [fontColor, setFontColor] = useState(() => initial('fontColor'));
  useImperativeHandle(
    ref,
    () => ({
      update() {
        setBackgroundColor(initial('backgroundColor'));
        setFontColor(initial('fontColor'));
      }
    }),
  )
  return (
    <div style={{
      position: 'relative',
      marginTop: '-3vh',
      height: '90vh',
      width: '100vw',
      color: fontColor,
      backgroundColor: backgroundColor
    }}>
      <h1 style={{ fontWeight: 900 }}>At Community Vision</h1>

      <p >* we value individuals * value whole lives * we begin with "yes" * we are future-oriented *
      we value independence * we value expanding the conversation * we value community *
         we value callaboration * we value innovation * </p>

      <p1>We work with natural support systems including an individual’s family, friends,
      and local community to build a network that provides the means for an individual
        to be a valued and contributing member of their community.</p1>

      <p2>Our work is rooted in the belief that all people, regardless of perceived ability,
      deserve the freedom to make the basic choices that define their lives. We offer a
      variety of services to provide the tools for people to live as independently as
      possible, while pursuing their goals and dreams. These services include: supported
      living, employment services, financial education and savings plans, affordable housing
        resources, family support, and assistive technology consultations and training.</p2>

      <p3>Visit our webpage:</p3>
      <p4>https://cvision.org/</p4>
    </div>
  );
})

export default About;
