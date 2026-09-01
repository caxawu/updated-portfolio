import { useNavigate } from "react-router-dom";

import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import FadeInImage from './FadeInImage';

import graceHeader from '../assets/images/projects/grace/grace-header.png'
import comparisonChart from '../assets/images/projects/grace/comparison-chart.png'
import banner from '../assets/images/projects/grace/banner.png'
import orig from '../assets/images/projects/grace/GracePeriodOrig.png'
import tile from '../assets/images/projects/grace/tile.png'
import highlights from '../assets/images/projects/grace/highlights.png'

import ToTopButton from './ToTopButton';
import Footer from './Footer';

const CaseStudyGracePeriod = (props) => {

    const navigateTo = useNavigate();

    return (
        <div className="content-case-study">
            <ToTopButton />
            <div id="grace-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/projects')} style={{ cursor: 'pointer' }}>
                    <ChevronLeftIcon className="chevron" /> 
                    <div className='back-text'>back</div>
                </div>
                <div className="text">

                    <div className="title">
                        CD Grace Period
                    </div>
                    <div className="headline">
                        A redesigned user experience for managing Certificates of Deposit (CDs) during the grace period,
                        aimed at reducing customer service call volume.
                        <br /><br />
                        Through UX improvements that increased clarity and ease of use, customers are empowered to self-manage their accounts which resulting in a 20% reduction in calls and a 2% increase in customer retention.
                    </div>
                </div>
                <div className="header-img">
                    <FadeInImage src={graceHeader} alt="grace period header" loading="eager" />
                </div>
            </div>

            {/* Summary section */}
            <div className='summary'>
                <div>
                    <div className="summary-section">
                        <div className="section-title bold">THE PROBLEM</div>
                        <div className="text-block">
                            As a promotional CD (Certificate of Deposit) was maturing, some of the top call drivers to our customer service agents were due to confusion and lack of functionality when customers fell into their CD grace period. During the peak, this amounted to ~500 calls per day.
                            <div className="spacing-075" />
                            <b className="highlight-blue">The goal:</b> Reduce call volume for our customer support team.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">CONTEXT</div>
                        <div className="text-block">
                            Certificates of Deposit (CDs) are savings accounts with a fixed earning rate for a set amount of time. Customers can choose to either renew the CD or close it when it ends. But, customers sometimes miss the deadline to make that choice. For flexibility, CDs automatically renew and give customers a 10-day grace period to make changes without penalty.
                            <div className="spacing-075" />
                            Traditionally, closing a CD within these 10 days required a call to customer support. If a customer wanted to change their term length, they had to close their account and open a new one, adding unnecessary steps to the process.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">THE SOLUTION</div>
                        <div className="text-block">
                            Reduce customer support call volume through improvements to the customer experience:
                            <ul>
                                <li>Give customers the tools to <b>self-service their accounts</b> during the grace period</li>
                                <li>Provide customer service agents the <b>tools they need to assist customers</b> with their grace period options</li>
                                <li>Improve <b>visibility of key dates</b> to encourage customers to make changes on time and reduce reliance on the grace period</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="img-row">
                        <div className="img-single">
                            <img id="grace-chart-img" src={comparisonChart} alt="functionality comparison chart" loading="eager" />
                        </div>
                    </div> */}
                    <div className="summary-section">
                        <div className="section-title bold">IMPACT</div>
                        <div className="text-block">
                            <b className="highlight-blue">For our customers</b> With the new grace period self-service features, customers can make the changes without needing to call in. We also better match customers’ expectations as self-service functionality is commonly offered by other financial institutions.
                            <div className="spacing-075" />
                            <b className="highlight-blue">For the business:</b> We’ve lowered operating costs to the customer service team through a 20% call volume reduction. Through an improved user experience, we saw a 2% increase in customer retention (Customer who choose to renew their CD to a new term instead of closing it and withdrawing the funds).
                        </div>
                    </div>
                </div>
                <div className='secondary-container' id='desktop'>
                    <ul className="secondary-info">
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li>Capital One - Bank Account Management</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li>Lead Product Designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>1 year</li>
                        </ul>
                    </ul>
                </div>
                <div className='secondary-container' id='mobile'>
                    <ul className="secondary-info" id='horizontal'>
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li>Capital One - Bank Account Management</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li>Lead Product Designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>1 year</li>
                        </ul>
                    </ul>
                </div>
            </div>

            <div className="divider-container">
                <hr class="line" />
                <span class="label">The details</span>
                <hr class="line" />
            </div>
            <div className="centered">
                <div className="arrow-case-study centered">
                    <ChevronDownIcon className="h-6 w-6 text-black" />
                </div>
            </div>

            {/* detail section */}
            <div className="detail-section">
                <div id="grace-deco" />
                <div className="section-title text-secondary">research</div>
                <div className="text-block">
                    The initial objective was straightforward: Reduce customer call volume. Quantitatively, we knew the lack of self-service capabilities made up a large percentage of the call volume. It followed then that building self-service functionality would decrease call volume as customers would service their own accounts rather than calling in to do so.
                </div>
                <div id="grace-color" className="text-callout">
                    Hypothesis: Customers currently cannot self-service during the grace period and must instead call
                    customer support—resulting in high call volume. To reduce call volume, we need to implement self-service functionality
                    that allows customers to manage their accounts independently.
                </div>
                <div className="text-block">
                    <b>Validating the hypothesis</b>
                    <br />
                    I analyzed feedback from our customer support calls and found that as expected, a significant portion of calls were because customers could not self-service. However, I also uncovered a surprising amount of feedback regarding customer confusion. Many customers made changes during their grace period, saw nothing change on their account, and called in confused. Misleading UI was causing customers to change the wrong setting, thinking they were making grace period edits.
                </div>
                <div className="callout-cards">
                    <div className="callout-card">
                        <b>Confirmed hypothesis</b>
                        <br />
                        Customers were calling in to customer support because they couldn’t self-service their accounts during the grace period.
                    </div>
                    <div className="callout-card">
                        <b>Unexpected insight</b>
                        <br />
                        Customers were calling customer support in confusion when the changes they made didn’t
                        seem to reflect on their accounts.
                    </div>
                </div>
                <div className="text-block">
                    <b>Experience audit</b>
                    <br />
                    Once I realized that the lack of self-service features was only part of the problem, I took a step back and assessed the entire CD experience. The confusion was stemming from content, hierarchy, and visual issues on the CD management page. It was difficult for customers to see their account status and available options—causing customers to mistakenly enter the wrong self-service flow. Key details such as "Your 14-month CD matures on May 22, 2025" were buried in a paragraph that blended into the background of the page. Maturity options took up almost the entire page and was presented in a bare-bones format that worked for experienced CD customers but left those who needed more guidance unsure of what to do next. Simply adding in grace period self-service functionality was not sufficient. We also needed a redesign that prioritized clarity.
                </div>
                <div className="text-block">
                    <b>Competitive analysis</b>
                    <br />
                    I looked into the banking landscape to see what competitors offered and found that the majority offered self-service capabilities. This was the other piece of the puzzle. Because self-service was a standard feature for CDs in the grace period, customers expected it at Capital One as well. So, when they went to their CD management page looking for grace period options, they engaged with the only self-service option available and mistakenly made changes to their CD’s maturity options thinking it was their CD’s grace period options.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption" id="blue3">
                        <img id='smaller' src={orig} alt="original CD management page" loading="eager" />
                    </div>
                </div>
                {/* <div className="white-callout">
                    <div className="white-card">
                        <b >Research summary</b>
                        <div id="grace-deco" className="deco-white-callout"></div>
                        In the old experience, customers lacked sufficient information about key CD dates, which led them to forget to choose a maturity option for their 
                        CD before it matured. Although there was a 10-day grace period, options were limited. To make any changes, customers had to call customer support, 
                        as no self-service options were available. Even still, the only change they could make was to close their account without penalty, with no option 
                        to modify their CD term length.
                        <div className='spacing-15'/>
                        The lack of clarity on the CD management page made matters worse. Customers would log in during the grace period to make changes to their current CD, 
                        when in reality, they were changing the settings for their next CD after the current term ended.
                    </div>
                </div> */}
            </div>
            <div className="detail-section">
                <div id="grace-deco" />
                <div className="section-title text-secondary">design</div>
                <div className="text-block">
                    <b>Building self-service functionality</b>
                    <br />
                    This was the most straightforward piece of the experience. I built out grace period modal flows, allowing customers to close their accounts or change their term length themselves. I placed the entry point in a banner at the top of the page with an informational blue background to make it eye-catching and easy to find for customers who needed it while remaining unobtrusive for those who didn’t.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption" id="blue3">
                        <img id='smaller' src={banner} alt="grace period banner" loading="eager" />
                    </div>
                    {/* <div id='smaller' className="caption">The grace period banner at the top of the page: attention-grabbing for those looking for it, but not intrusive for those who aren’t.</div> */}
                </div>
                
                <div className="text-block">
                    <b>Consolidating info</b>
                    <br />
                    Important information like APY, deposit amount, and estimated earnings were scattered across different pages, making it hard for customers to get a complete view of their account. The CD management page is the core of the experience, so I made it a one-stop shop for all CD-related information: consolidated key information into one easy-to-read table and a key dates timeline to lets customers quickly see important information and milestones to determine if any action was needed.
                </div>

                <div className="full-caption">
                    <div className="img-row-w-caption" id="blue1">
                        <img id='smaller' src={tile} alt="grace period summary tile" loading="eager" />
                    </div>
                    {/* <div id='smaller' className="caption">The new module containing all relevant CD information in one view.</div> */}
                </div>
                <div className="text-block">
                    <b>Hierarchy</b>
                    <br />
                    To create a more balanced and cohesive page, I adjusted the layout to evenly emphasize current CD details against future maturity selections.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption" id="blue3">
                        <div className='img-single'>
                            <img src={highlights} alt="grace period before and after" loading="eager" />
                        </div>
                        
                    </div>
                    {/* <div className="caption">The updated design has more even emphasis on current CD details and future maturity options compared to the original.</div> */}
                </div>
                <div className="text-block">
                    <b>Considering the holistic experience</b>
                    <div className='spacing-15'/>
                    <b>Extending capabilities to customer service agents</b>
                    <br />
                    To compliment giving customers self-service functionality, I worked with the internal platforms team to give customer support the same tools in their customer servicing platform. This allowed agents to assist customers who still needed help or preferred to have an agent make changes on their behalf. 
                    <br /><br />
                    <b>Updating servicing emails</b>
                    <br />
                    I worked with content design and the legal team to highlight new CD functionalities and created a new confirmation email for grace period account changes. In the spirit of informational clarity, I also took the opportunity partnering with my content designer to revise the language of existing CD emails, making them easier to understand and adding in helpful details like the CD maturity date. 
                </div>
            </div>
            <div className="detail-section">
                <div id="grace-deco" />
                <div className="section-title text-secondary">refining & implementation</div>
                <div className="text-block">
                    At key moments, I conducted usability tests with customers to guide our design iterations. Through critiques and feedback sessions with leadership, product, and tech partners, I landed on these final designs. 
                    <div className="spacing-075" />
                    To help with handoff, I developed an step-by step roll out plan of how to get from the current state to the new design. This plan helped the tech team break the work into manageable pieces and enabled the product team to release parts of the experience, monitor performance, and ensure everything worked as expected before scaling the release to all customers. This approach also allowed us to deliver parts of the experience to customers more quickly, enabling them to start using the new tools sooner.
                </div>
            </div>
            <div className="detail-section">
                <div id="grace-deco" />
                <div className="section-title text-secondary">results & next steps</div>
                <div className="text-block">
                    <b>Results</b>
                    <br />
                    With the introduction of new grace period options, customers now have greater flexibility over their accounts. Call center agents are also better equipped with updated tools to assist those who still prefer to call in. The refreshed design improved usability by consolidating CD details onto a single page, making information clearer and easier to find. By aligning with industry standards, we better match customer expectations and reduce confusion.
                    <div className="spacing-075" />
                    From a business perspective, this new experience has successfully decreased reliance on customer support, leading to a <b>20% reduction in call volume and lower operational costs.</b> Additionally, this improved user experience resulted in an unexpected <b>2% increase in customer retention</b>, as more customers chose to renew their CDs instead of withdrawing funds.
                    <br /> <br />
                    <b>The idea parking lot</b>
                    <br />
                    As I iterated, I uncovered many valuable ideas that fell outside the scope of grace period enhancements. Upon revisited them at the end of the project, my product partner and I identified the need for enhancements across the CD experience. This list became the foundation for an end-to-end redesign workshop, sparking conversations that informed future product roadmaps and spun off a new CD enhancement workstream.
                    <br /> <br />
                    <b>A new design artifact</b>
                    <br />
                    When I began the project, CD-related resources were scattered and there were no historical screens to reference. To help us better manage resources and preserve institutional knowledge for future designers or stakeholders, I created a living CD library—a single source of truth documenting the end-to-end customer journey with detailed screen specifications of all possible screen states. This library improved efficiency within the team and eliminating the frustration of searching for scattered information or relying on production to find the most up-to-date screens.
                </div>
            </div>
        <Footer />
        </div>

    );
};

export default CaseStudyGracePeriod;
