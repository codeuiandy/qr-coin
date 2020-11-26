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
