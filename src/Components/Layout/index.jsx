import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './layout.css'
export default function Index(props) {
    const [LastScrool, setLastScrool] = useState(0)
    const [ticking , setticking ] = useState(false)
    const [Hidenav , setHideNav ] = useState(false)
    useEffect(() => {
        
      
    }, [Hidenav])

    function doSomething(scroll_pos) {
      
        let action = 15.199999809265137;
         console.log(scroll_pos)
        // if (action >= scroll_pos) {
        //     setHideNav(true)
        // }

        // if (action <= scroll_pos) {
        //     setHideNav(false)
        // }
    //    else{
    //     setHideNav(false)
    //    }
      }
      
      window.addEventListener('scroll', function(e) {
        setLastScrool(window.scrollY)
      
        if (!ticking) {
          window.requestAnimationFrame(function() {
            doSomething(LastScrool);
            setticking(false);
          });
      
          setticking(false);
        }
      });

    return (
        <React.Fragment>
  <div >
                  <div id="hideNav">
                       <Navbar/>
                  </div>
                  
                  
					<Sidebar BrowserRoter={props.BrowserRoter}  CurrentRoute={props.CurrentRoute}/>
                          <div className="backgroundImage-wrap">

                          </div>
       <div>
            <section className="app-container">
                        {props.children}

           </section>
                   
	                
					
			
		</div>
  </div>
            
        </React.Fragment>
    )
}
