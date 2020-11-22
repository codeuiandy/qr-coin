import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './layout.css'
export default function Index(props) {
    return (
        <React.Fragment>
  <div >
                    <Navbar/>
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
