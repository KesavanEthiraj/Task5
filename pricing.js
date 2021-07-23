import React, { Component } from 'react'
import './pricing.css'

 class Pricing extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       price:[{
        scheme:"FREE",
        cost: "$0",
        Duration:"/month",
        user:{
          nouser:"single",
          Access:true,
        },
        Stotage:{
          space:"5GB Storage",
          Access:true,
        },
        Propject:{
          noofproject: "Unlimited Public projects",
          Access:true,
        },
        Acces:{
          Acessall:"community Access",
          Access:true,
        },
        pubPropject:{
          noofpubproject: "Unlimited Public projects",
          Access:false,
        },
        Phonesupport:{
          support:"Dedicated phone support",
          Access:false,
        },
        domain:{
          subdomain: "Free Sub Domain",
          Access:false,
        },
        statusreport:{
          monthly:"Monthly Status Report",
          Access:false,
        },

     },{
      scheme:"PLUS",
      cost: "$9",
      Duration:"/month",
      user:{
        nouser:"5 Users",
        Access:true,
      },
      Stotage:{
        space:"50GB Storage",
        Access:true,
      },
      Propject:{
        noofproject: "Unlimited Public projects",
        Access:true,
      },
      Acces:{
        Acessall:"community Access",
        Access:true,
        
      },
      pubPropject:{
        noofpubproject: "Unlimited Public projects",
        Access:true,
      },
      Phonesupport:{
        support:"Dedicated phone support",
        Access:true,
      },
      domain:{
        subdomain: "Free Sub Domain",
        Access:true,
      },
      statusreport:{
        monthly:"Monthly Status Report",
        Access:false,
      },

   },{
    scheme:"PRO",
    cost: "$49",
    Duration:"/month",
    user:{
      nouser:"Unlimited",
      Access:true,
    },
    Stotage:{
      space:"150GB Stoarge",
      Access:true,
    },
    Propject:{
      noofproject: "Unlimited Public projects",
      Access:true,
    },
    Acces:{
      Acessall:"community Access",
      Access:true,
    },
    pubPropject:{
      noofpubproject: "Unlimited Public projects",
      Access:true,
    },
    Phonesupport:{
      support:"Dedicated phone support",
      Access:true,
    },
    domain:{
      subdomain: "Free Sub Domain",
      Access:true,
    },
    statusreport:{
      monthly:"Monthly Status Report",
      Access:true,
    },

 }]
   }}
   
    render() {
      console.log(this.state.price)
        return (
            <div className="div1">
              <section className="pricing py-5">
                <div className="container">
                <div className="row">
      
            {this.state.price.map(({scheme,cost,Duration,user,Stotage,Propject,Acces,pubPropject, Phonesupport,domain,statusreport})=>{
              return (
                <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{scheme}</h5>
                <h6 className="card-price text-center">{cost}<span className="period">{Duration}</span></h6>
                <hr></hr>
                <ul className="fa-ul">
                <li className={(user.Access) ? "":"text-muted" } ><span className="fa-li">{ (user.Access) ? <i className="fas fa-check"></i>:<i className="fas fa-times"></i> }</span>{user.nouser}</li>
                <li className={(Stotage.Access) ? "":"text-muted" } ><span className="fa-li">{ (Stotage.Access) ? <i className="fas fa-check"></i>:<i className="fas fa-times"></i> }</span>{Stotage.space}</li>
                <li className={(Propject.Access) ? "":"text-muted" } ><span className="fa-li">{ (Propject.Access) ? <i className="fas fa-check"></i>:<i className="fas fa-times"></i> }</span>{Propject.noofproject}</li>
                <li className={(Acces.Access) ? "":"text-muted" } ><span className="fa-li">{ (Acces.Access) ? <i className="fas fa-check"></i>:<i className="fas fa-times"></i> }</span>{Acces.Acessall}</li>
                  
                  <li className={(pubPropject.Access) ? "":"text-muted" } ><span className="fa-li">{ (pubPropject.Access) ? <i className="fas fa-check"></i>:<i className="fas fa-times"></i> }</span>{pubPropject.noofpubproject}</li>
                  <li className={(Phonesupport.Access) ? "":"text-muted"}><span className="fa-li">{ (Phonesupport.Access) ? <i className="fas fa-check"></i>:<i className="fas fa-times"></i> }</span>{Phonesupport.support}</li>
                  <li className={(domain.Access) ? "":"text-muted"}><span className="fa-li">{ (domain.Access) ? <i className="fas fa-check"></i>:<i className="fas fa-times"></i> }</span>{domain.subdomain}</li>
                  <li className={(statusreport.Access) ? "":"text-muted"}><span className="fa-li">{ (statusreport.Access) ? <i className="fas fa-check"></i>:<i className="fas fa-times"></i> }</span>{statusreport.monthly}</li>
                </ul>
                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                </div>
      </div>
      </div>
              )
            })}
           
     
     </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Pricing
