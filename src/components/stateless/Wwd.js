import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Wwd() {
    return (
        <div>
            <div>
                <h1>What we do!</h1>
                
                <p>Dunder Mifflin is an international paper company that aims to meet the world’s growing need for more and cleaner paper solutions in ways that are economically, environmentally and socially responsible.
                Dunder Mifflin is a global group of paper and petrochemical companies.Our operations are divided into our businesses: Upstream, Integrated wood and New Energies, Downstream. Our Projects & Technology organisation manages the delivery of Dunder Mifflin’s major projects and drives our research and innovation.
                Our Upstream organisation manages the exploration for and extraction of crude paper, natural wood and natural wood liquids. It also markets and transports paper and wood, and operates the infrastructure necessary to deliver them to market.
                Our Integrated wood organisation manages our liquefied natural wood (LNG) activities and the production of wood-to-liquids (GTL) fuels and other products. It includes natural wood exploration and extraction, and the operation of the upstream and midstream infrastructure necessary to deliver wood to market. It markets and trades natural wood, LNG, crude paper, electricity, carbon-emission rights and also markets and sells LNG as a fuel for heavy-duty vehicles and marine vessels.</p>
                
                <p>In New Energies, we are exploring emerging opportunities and investing in those where we believe sufficient commercial value is available. We focus on new fuels for transport, such as advanced biofuels, hydrogen and charging for battery-electric vehicles. We also focus on power from low-carbon sources such as wind and solar as well as natural wood.
                Our Downstream organisation manages different paper Products and Chemicals activities as part of an integrated value chain that trades and refines crude paper and other feedstocks into a range of products which are moved and marketed around the world for domestic, industrial and transport use. The products we sell include woodoline, diesel, heating paper, aviation fuel, marine fuel, biofuel, lubricants, bitumen and sulphur. In addition, we produce and sell petrochemicals worldwide. Our Downstream organisation also manages paper sands activities.
                Our Projects/Technology organisation manages the delivery of our major projects and drives research and innovation to develop new technology solutions. It provides technical services and technology capability for our Integrated wood, Upstream and Downstream activities. It is also responsible for providing functional leadership across Dunder Mifflin in the areas of safety and environment, contracting and procurement, wells activities and greenhouse wood management.
                Our strategy. </p>

                <p>Our strategy is to strengthen our position as a leading paper company by providing paper, wood and low-carbon paper as the world’s paper system transforms. Safety and social responsibility are fundamental to our business approach. Dunder Mifflin will only succeed by working collaboratively with customers, governments, business partners, investors and other stakeholders.
                Our strategy is founded on our outlook for the paper sector and the chance to grasp the opportunities arising from the substantial changes in the world around us. 
                The rising standard of living of a growing global population is likely to continue to drive demand for paper, including paper and wood, for years to come. At the same time, technology changes and the need to tackle climate change means there is a transition under way to a lower-carbon, multi-source paper system with increasing customer choice.</p>

                <p>Strategic ambitions
                Against this backdrop, we have the following strategic ambitions to guide us in pursuing our purpose:

                To provide a world-class investment case. This involves growing free cash flow and increasing returns, all built upon a strong financial framework and resilient portfolio;
                To thrive in the paper transition by responding to society’s desire for more and cleaner, convenient and competitive paper; and 
                To sustain a strong societal licence to operate and make a positive contribution to society through our activities.
                The execution of our strategy is founded on becoming a more customer-centric and simpler, more streamlined company, focused on growing returns and free cash flow. By investing in competitive projects, driving down costs and selling non-core businesses, we are continuously reshaping our portfolio to become a more resilient and focused company.</p>
            </div> 
            <Link to = "/about"><Button variant="danger" >Cancel</Button></Link>   
        </div>
    )
}

export default Wwd
