import React, {Component} from 'react';


// import pattern1 from '../../media/pattern1.png';

import Aux from '../components/js/HOC/aux';

import Landing from "../components/js/home/landing";
import Skills from '../components/js/home/skills';
import Description from '../components/js/home/description';
import Projects from '../components/js/home/projects';
import ContactMe from '../components/js/home/contact-me';

class Home extends Component {
    render() {
        
        return (
            <Aux>
                <div className='home-container'>
                {/* <img src={pattern1} alt="" className="home__img"/> */}
                <Landing></Landing>
                <Skills></Skills>
                {/* <Description></Description>
                <Projects></Projects>
                <ContactMe></ContactMe> */}
                </div>
            </Aux>
        );
    }
}
export default Home;

// import sr from '../HOC/scroll-reveal/scrollReveal';

// export class RevealMe extends React.Component {
//     constructor(props) {
//         super(props);
//         this.myRef = React.createRef();  }
    
// //   props: Props;

//   componentDidMount = () => {
//     const config = {
//       origin: 'right',
//       duration: 1000,
//       delay: 150,
//       distance: '500px',
//       scale: 1,
//       easing: 'ease',
//     }

//     sr.reveal(this.box1, config)
//   }

//   render () {
//     console.log('Hello')
//     console.log(this.box1)
//     return (
//         <Aux>
//             <div className='home-container'>
//             {/* <img src={pattern1} alt="" className="home__img"/> */}
//             <Landing></Landing>
//             <Skills></Skills>
//             <Description></Description>
//             <Projects></Projects>
//             <ContactMe></ContactMe>
//             </div>
//         </Aux>
//     )
//   }
// }
// export default RevealMe