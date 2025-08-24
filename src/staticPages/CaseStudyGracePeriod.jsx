import { useNavigate } from "react-router-dom";

import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import FadeInImage from './FadeInImage';

import graceHeader from '../assets/images/caseStudies/grace/grace-header.png'
import comparisonChart from '../assets/images/caseStudies/grace/comparison-chart.png'
import banner from '../assets/images/caseStudies/grace/banner.png'
import orig from '../assets/images/caseStudies/grace/GracePeriodOrig.png'
import tile from '../assets/images/caseStudies/grace/tile.png'
import highlights from '../assets/images/caseStudies/grace/highlights.png'

import ToTopButton from './ToTopButton';
import Footer from './Footer';

const CaseStudyGracePeriod = (props) => {

    const navigateTo = useNavigate();

    return (
        <div className="content-case-study">
            <ToTopButton />
            <div id="grace-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
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
                        Through UX improvements that increased clarity and ease of use, customers are empowered to self-manage
                        their accounts—resulting in a 20% reduction in calls and a 2% increase in customer retention.
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
                            As a promotional CD (Certificate of Deposit) was maturing in early 2024, some of the top call drivers
                            to our customer service agents were due to confusion and lack of functionality when customers fell
                            into their CD grace period. During the peak, this amounted to ~500 calls per day.
                            <div className="spacing-075" />
                            <b className="highlight-blue">The goal:</b> Reduce call volume for our customer support team.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">CONTEXT</div>
                        <div className="text-block">
                            Certificates of Deposit (CDs) are savings accounts with a fixed earning rate for a set amount of time. 
                            Customers can choose to either renew the CD or close it when it ends. But, life can get busy and 
                            sometimes customers miss the deadline to make that choice. For flexibility, CDs automatically renew and 
                            provide a 10-day grace period to make changes without penalty.
                            <div className="spacing-075" />
                            Traditionally, closing a CD during this grace period required a call to customer support. Further, 
                            if a customer wanted to change their term length, 
                            they would have to close their existing CD and open a new one, adding unnecessary steps to the process.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">THE SOLUTION</div>
                        <div className="text-block">
                            <ul>
                                <li>Give customers the tools to self-service their accounts during the grace period</li>
                                <li>Provide customer service agents the tools they need to assist customers with their grace period options</li>
                                <li>Improve visibility of key dates to encourage customers to make changes on time and reduce reliance on the grace period</li>
                            </ul>
                            Customers can now fully manage their CDs through self-service tools. The redesigned CD account page has better
                            clarity, making it easier for customers to view their account status and determine if changes are needed.
                            Should they need support, the customer service team now has the necessary tools to manage accounts on
                            their behalf.
                        </div>
                    </div>
                    <div className="img-row">
                        <div className="img-single">
                            <img id="grace-chart-img" src={comparisonChart} alt="functionality comparison chart" loading="eager" />
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">IMPACT</div>
                        <div className="text-block">
                            <b className="highlight-blue">For our customers</b> With the new grace period functionality, customers have additional flexibility in their options and can make the changes without needing to call in. This update also aligns the experience with customers' expectations as this feature is commonly offered by other financial institutions.
                            <div className="spacing-075" />
                            <b className="highlight-blue">For the business:</b> We’ve lowered operating costs to the customer service team through a 20% call volume reduction. Through this improved user experience, we also saw a 2% increase in customer retention (Customer who choose to renew their CD to a new term instead of closing it and withdrawing the funds).
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
                            <li>Lead UI/UX designer</li>
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
                            <li>Lead UI/UX designer</li>
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
                    The initial objective was a straightforward one: Reduce customer call volume. Quantitatively, we knew that
                    the lack of self-service capabilities made up a large percentage of the call volume. This suggested that by building
                    self-service functionality, we would immediately decrease call volume as customers would service their own accounts
                    rather than calling in to do so.
                </div>
                <div id="grace-color" className="text-callout">
                    Hypothesis: Customers currently cannot self-service during the grace period and must instead call
                    customer support—resulting in high call volume. To reduce call volume, we need to implement self-service functionality
                    that allows customers to manage their accounts independently.
                </div>
                <div className="text-block">
                    <b>Validating the hypothesis</b>
                    <br />
                    We analyzed feedback from our customer support agents and found that as expected, a significant portion of the comments were 
                    focused on the lack of self-service options. Customers were calling in because they had no way to make changes on their own.
                    <div className="spacing-075" />
                    However, we also uncovered a surprising amount of feedback regarding customer confusion. Many customers entered their grace period, 
                    made changes, and then called in confused when those changes didn't reflect on their account. We found that customers were making 
                    changes during the grace period, thinking they were changing the CD that had just renewed. In reality, they were setting 
                    instructions for what would happen once this CD <i>ended</i>—months down the line.
                </div>
                <div className="gray-callouts">
                    <div className="gray-card">
                        <b>Confirmed hypothesis</b>
                        <br />
                        Customers were calling in to customer support because they couldn’t self-service their accounts during the grace period.
                    </div>
                    <div className="gray-card">
                        <b>Unexpected insight</b>
                        <br />
                        Customers were calling customer support in confusion when the changes they made didn’t
                        seem to reflect on their accounts.
                    </div>
                </div>
                <div className="text-block">
                    <b>Experience audit</b>
                    <br />
                    Once we realized that the lack of self-service features was only part of the problem, we took a step back to 
                    assess the entire CD experience. We discovered that the confusion was stemming from content, hierarchy, and visual issues on the CD 
                    management page. It was difficult for customers to see their CD status and available options—leading customers to mistakenly enter the 
                    maturity options self-service flow, believing it was their grace period self-service flow. We determined that just adding in grace period 
                    self-service functionality was not sufficient. We needed a redesign that prioritized clarity.
                </div>
                <div className="text-block">
                    <b>Competitive analysis</b>
                    <br />
                    Next we looked into the banking landscape to see what competitors offered and found that the majority offered self-service capabilities. 
                    This was the other piece of the puzzle. Because self-service was a standard feature for CDs in the grace period, customers expected it at 
                    Capital One as well. So, when they went to their CD management page looking for grace period options, they engaged with the only self-service 
                    option available and mistakenly made changes to their CD’s maturity options thinking it was their CD’s grace period options.
                </div>
                <div className="white-callout">
                    <div className="white-card">
                        <b >Research summary</b>
                        <div id="grace-deco" className="deco-white-callout"></div>
                        In the old experience, customers lacked sufficient information about key CD dates, which often led them to forget to choose what should happen 
                        to their CD before it matured. Although there was a 10-day grace period, options were limited. To make any changes, customers had to call 
                        customer support, as no self-service options were available. Even still, the only change they could make was to close their account without 
                        penalty, with no option to modify their CD term length.
                        <div className='spacing-105'/>
                        The lack of clarity on the CD management page made matters worse. Customers would log in during the grace period to make changes to their current CD, 
                        when in reality, they were changing the settings for their next CD after the current term ended.
                    </div>
                </div>
            </div>
            <div className="detail-section">
                <div id="grace-deco" />
                <div className="section-title text-secondary">design</div>
                <div className="text-block">
                    <b>Building self-service functionality</b>
                    <br />
                    This was the most straightforward piece to improve the experience. We introduced modal flows to the CD management page, allowing customers to close their 
                    accounts or change their term length themselves any time during the grace period. 
                    <div className="spacing-075" />
                    Since the grace period is temporary, we placed the servicing entry point in a banner at the top of the page. With an informational blue background, the grace 
                    period banner was eye-catching and easy to find for customers who needed it while remaining unobtrusive for those who didn’t. This helped resolve a key source 
                    of customer confusion where customers were scrolling to the maturity settings and making changes there. With the banner placed at the top of the page, 
                    customers looking for grace period options are immediately guided to the right location, preventing misinterpretation and confusion.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='smaller' src={banner} alt="grace period banner" loading="eager" />
                    </div>
                    <div id='smaller' className="caption">The grace period banner at the top of the page: attention-grabbing for those looking for it, but not intrusive for those who aren’t.</div>
                </div>
                <div className="text-block">
                    <b>Informational clarity</b>
                    <br />
                    To reduce the reliance on the grace period in the first place, we evaluated the copy and hierarchy of the page. Several UX issues jumped out. Key details such as 
                    "Your 14-month CD matures on May 22, 2025" were buried in a paragraph that blended into the background of the page. Meanwhile, maturity options which took up almost 
                    the entire page were presented in a stripped-down format that worked for experienced CD customers but left those who needed more guidance unsure what to do next.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='smaller' src={orig} alt="original CD management page" loading="eager" />
                    </div>
                    <div id='smaller' className="caption">The old design that needed a UX revamp.</div>
                </div>
                <div className="text-block">
                    Important information like APY, deposit amount, and estimated earnings were scattered across different pages, making it hard for customers to get a complete view of their 
                    account. Since the CD management page was the core of the experience, we made it the one-stop shop for all CD-related information. We consolidated all key details into one 
                    easy-to-read table and added a key dates timeline that let customers quickly see important milestones and understand if any action was needed.
                </div>

                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='smaller' src={tile} alt="grace period summary tile" loading="eager" />
                    </div>
                    <div id='smaller' className="caption">The new module containing all relevant CD information in one view.</div>
                </div>
                <div className="text-block">
                    <b>Hierarchy</b>
                    <br />
                    To create a more balanced and cohesive page, we adjusted the layout to evenly emphasize current account details against future maturity selections.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <div className='img-single'>
                            <img src={highlights} alt="grace period before and after" loading="eager" />
                        </div>
                        
                    </div>
                    <div className="caption">Redistribution of emphasis from the old design (heavy emphasis on maturity details) to the new design (even emphasis 
                        between current CD details and maturity details.)</div>
                </div>
                <div className="text-block">
                    <b>Considering the holistic experience</b>
                    <div className='spacing-105'/>
                    <b>Extending capabilities to call center agents</b>
                    <br />
                    With customers able to self-service their grace period options, we focused on giving our customer support team the same tools in the internal support 
                    platform. To create a more cohesive and seamless experience, we built additional functionality in the internal platform to match the customer-facing 
                    interface. This allowed agents to assist customers who still needed help or preferred to have an agent make changes on their behalf. 
                    <br /><br />
                    <b>Updating servicing emails</b>
                    <br />
                    Customers receive timely emails at key stages during the lifetime of their CD. We updated the copy of existing emails
                    to highlight new CD functionalities and created a new confirmation email for grace period account changes. In the spirit
                    of informational clarity, we also took the opportunity to revise the language of these emails, making them easier to
                    understand and added in helpful details like the CD maturity date.
                </div>
            </div>
            <div className="detail-section">
                <div id="grace-deco" />
                <div className="section-title text-secondary">refining & implementation</div>
                <div className="text-block">
                    At key moments, we conducted usability tests with customers to guide our design iterations. Through
                    critiques and feedback sessions with leadership, product, and tech partners, we landed on these final designs.
                    <div className="spacing-075" />
                    To help with handoff, we developed an step-by step release plan of how to get from the
                    current state to the new design. This plan helped the tech team break the work into manageable pieces and
                    enabled the product team to roll out parts of the experience, monitor performance, and ensure everything worked as
                    expected before scaling the release to all customers. This approach also allowed us to deliver parts of the experience
                    to customers more quickly, enabling them to start using the new tools sooner.
                </div>
            </div>
            <div className="detail-section">
                <div id="grace-deco" />
                <div className="section-title text-secondary">results & next steps</div>
                <div className="text-block">
                    <b>Results</b>
                    <br />
                    With the introduction of new grace period options, customers now have greater flexibility over their accounts. Call center
                    agents are also better equipped with updated tools to assist those who still prefer to call in. The refreshed design
                    improved usability by consolidating CD details onto a single page, making information clearer and easier to find.
                    By aligning with industry standards, we better match customer expectations and reduce confusion.
                    <div className="spacing-075" />
                    From a business perspective, this new experience has successfully decreased reliance on customer support, leading to a
                    20% reduction in call volume and lower operational costs. Additionally, this improved user experience resulted in an
                    unexpected 2% increase in customer retention, as more customers chose to renew their CDs instead of withdrawing funds.
                    <br /> <br />
                    <b>The idea parking lot</b>
                    <br />
                    As we iterated, we uncovered many valuable ideas that fell outside the scope of grace period enhancements. To ensure they weren’t lost, 
                    we documented them in an idea parking lot. Upon revisited them at the end of the project, we identified the need for enhancements across 
                    the CD experience. This list became the foundation for an end-to-end redesign workshop, sparking conversations that informed future product 
                    roadmaps and spun off a new CD enhancement workstream.
                    <br /> <br />
                    <b>A new design artifact</b>
                    <br />
                    When we began the project, CD-related resources were scattered and there were no historical screens to reference.
                    To help us better manage resources and preserve institutional knowledge for future designers or stakeholders, we created
                    a living CD library—a single source of truth documenting the end-to-end customer journey with detailed screen
                    specifications of all possible screen states.
                    <div className="spacing-075" />
                    This library made it easy for anyone to pinpoint a specific area of the experience, improving efficiency and eliminating
                    the frustration of searching for scattered information or relying on production to find the most up-to-date screens.
                    As new features and changes were introduced, we continuously maintained the library, ensuring it remained a current
                    and reliable resource at the core of the CD space.
                </div>
            </div>
        <Footer />
        </div>

    );
};

export default CaseStudyGracePeriod;
