import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

import graceHeader from '../assets/images/caseStudies/grace/grace-header.png'
import comparisonChart from '../assets/images/caseStudies/grace/comparison-chart.png'
import banner from '../assets/images/caseStudies/grace/banner.png'
import orig from '../assets/images/caseStudies/grace/GracePeriodOrig.png'
import tile from '../assets/images/caseStudies/grace/tile.png'
import highlights from '../assets/images/caseStudies/grace/highlights.png'

import ToTopButton from './ToTopButton';
import Footer from './Footer';

const CaseStudyGracePeriod = (props) => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        console.log('page=>', window.location.pathname);
    }, []);

    const navigateTo = useNavigate();

    return (
        <div className="content-case-study">
            <ToTopButton />
            <div id="grace-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
                    <ChevronLeftIcon className="chevron" /> 
                    <div className='back-text'>back</div>
                </div>
                <div id="text-white" className="text">

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
                    <img src={graceHeader} alt="grace period header" loading="eager" />
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
                            Certificates of Deposit (CDs) are timed savings accounts with a fixed APY for a set term. During
                            this term, customers can choose what happens when it ends—either close the CD or renew it. But,
                            life can get busy, and sometimes customers miss the deadline to make a selection. To provide
                            flexibility, CDs automatically renew, and customers have a 10-day grace period to make changes
                            without penalty.
                            <div className="spacing-075" />
                            Traditionally, closing a CD during this grace period required a call to customer support. If a
                            customer wanted to change their term, they would have to close their existing CD and open a new
                            one, adding unnecessary steps to the process.
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
                            Should they still need support, the customer service team now has the necessary tools to manage accounts on
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
                            <b className="highlight-blue">For our customers</b> With the new grace period functionality, customers have additional flexibility in their options and can make the changes without needing to call in. This update also aligns the experience with customer’s expectations, as this feature is commonly offered by other financial institutions.
                            <div className="spacing-075" />
                            <b className="highlight-blue">For the business:</b> We’ve lowered operating costs to the customer service team through a 20% call volume reduction. Through this improved user experience, we also saw a 2% increase in customer retention (Customer who choose to renew their CD to a new term instead of closing it and withdrawing the funds).
                        </div>
                    </div>
                </div>

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

            <div class="divider-container">
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
                    The initial objective was a very straightforward one: Reduce customer call volume. Quantitatively, we knew that
                    the lack of self-servicing ability made up a large percentage of the call volume. This suggested that by building
                    self-service functionality, we would immediately decrease call volume as customers would service their own account
                    rather than calling in to do so.
                </div>
                <div id="grace-color" className="text-callout">
                    Hypothesis: Customers currently cannot self-service their accounts during the grace period and must instead call
                    customer support, resulting in high call volume. To reduce call volume, we need to implement self-service functionality
                    that allows customers to manage their accounts independently.
                </div>
                <div className="text-block">
                    <b>Validating the hypothesis</b>
                    <br />
                    We analyzed feedback from our customer support agents and found that, as expected, a significant portion of the comments focused
                    on the lack of self-service options. Customers were calling in because they had no way to make changes on their own.
                    <div className="spacing-075" />
                    However, we also uncovered a surprising amount of feedback regarding customer confusion. Many customers entered their grace
                    period, made changes, and then called in confused when those changes didn't reflect on their account. We discovered that
                    customers were editing their accounts, believing they were adjusting settings for their grace period, when in reality, they
                    were changing what would happen when their CD matured.
                </div>
                <div className="gray-callouts">
                    <div className="gray-card">
                        <b>Confirmed hypothesis</b>
                        <br />
                        Customers were calling in to customer support because they couldn’t self service their account during their grace period.
                    </div>
                    <div className="gray-card">
                        <b>Unexpected insight</b>
                        <br />
                        Customers were calling customer support in confusion when the changes they made on their CD management page didn’t
                        seem to reflect on their account.
                    </div>
                </div>
                <div className="text-block">
                    <b>Experience audit</b>
                    <br />
                    Realizing that the lack of self-service features was only part of the problem behind high call volume, we took a step
                    back to assess the entire CD experience. We discovered that confusion stemmed from content, hierarchy, and visual issues
                    on the CD management page, making it difficult for customers to understand their account status and available options
                    leading customers to mistakenly enter the maturity options self-service flow thinking they were in the grace period
                    self-service flow. At this point, it became clear that just adding in grace period self-service functionality would not
                    suffice in reaching our goal, a redesign was necessary—one that prioritized clarity and tailored to CD customers.
                </div>
                <div className="text-block">
                    <b>Competitive analysis</b>
                    <br />
                    Next we researched at the banking landscape to see what competitors offered. We found that the majority offered
                    self-service abilities. When we paired this data with our experience audit findings, this was the other piece of the
                    puzzle. Since self-service was a standard feature for CDs in the grace period, customers expected that functionality
                    here as well. So, when they went to their CD management page looking for grace period options, they engage with the only
                    available self-service option available—and mistakenly make changes to their maturity options instead of their intended
                    grace period selections.
                </div>
                <div className="white-callout">
                    <div className="white-card">
                        <b >Research summary</b>
                        <div id="grace-deco" className="deco-white-callout"></div>
                        In the existing experience, customers lacked sufficient information about key CD dates, which often led to them forgetting
                        to make changes before their CD matured. Although there was a 10-day grace period, options were limited. Customers could
                        only call customer support to make changes, as no self-service options were available. Even then, the only change they could
                        make was to close their account without penalty, leaving them unable to modify their CD term length.
                        <br /><br />
                        The lack of clarity on the CD management page made matters worse. Customers would log in during the grace period, make changes
                        thinking they were adjusting their current CD, when in reality, they were modifying the settings for their next CD after
                        the current term ended.
                    </div>
                </div>
            </div>
            <div className="detail-section">
                <div id="grace-deco" />
                <div className="section-title text-secondary">design</div>
                <div className="text-block">
                    <b>Building self-service functionality</b>
                    <br />
                    This was the most straightforward piece to improve our experience. We introduced modal flows to the CD management page,
                    allowing customers to close their accounts or change CD terms themselves any time during the grace period.
                    <div className="spacing-075" />
                    Since the grace period is temporary, we placed the servicing entry point in a banner at the top of the page. This design
                    made the grace period options eye-catching and easy to find for customers who needed them while remaining unobtrusive
                    for those who didn’t. This helped resolve a key source of customer confusion where customers were scrolling to the
                    maturity settings and making changes there, mistakenly thinking they were taking advantage of grace period options
                    when they were really changing the settings for their next CD. With the banner placed at the top of the page, customers
                    looking for grace period options are immediately guided to the right location, preventing misinterpretation and
                    unnecessary changes.
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
                    To reduce the need for the grace period in the first place, we evaluated the copy and hierarchy of the page. Several
                    UX issues jumped out. Key details—such as "Your 14-month CD matures on May 22, 2025"—were buried in a paragraph that
                    blended into the background of the page. Meanwhile, maturity options which took up almost the entire page were presented
                    in a stripped-down format that worked for experienced CD customers but left those needing more guidance unsure what to
                    do next.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='smaller' src={orig} alt="original CD management page" loading="eager" />
                    </div>
                    <div id='smaller' className="caption">The old design that needed a UX revamp.</div>
                </div>
                <div className="text-block">
                    Key details like APY, deposit amount, and estimated earnings were scattered across different pages, making it hard for
                    customers to get a complete view of their CD account. Since the CD management page was central to the experience, we
                    aimed to make it a one-stop shop for all CD-related information. To achieve this, we consolidated key details into a
                    single, easy-to-read table. This was further enhanced by a new key dates timeline, allowing customers to quickly see
                    important milestones and understand if any action was needed.
                </div>

                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='smaller' src={tile} alt="grace period summary tile" loading="eager" />
                    </div>
                    <div id='smaller' className="caption">The grace period banner at the top of the page: attention-grabbing for those looking for it, but not intrusive for those who aren’t.</div>
                </div>
                <div className="text-block">
                    <b>Hierarchy</b>
                    <br />
                    To create a more balanced and cohesive page, we adjusted the layout to more evenly emphasize the current account
                    details and the future maturity sections.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <div className='img-single'>
                            <img src={highlights} alt="grace period before and after" loading="eager" />
                        </div>
                        
                    </div>
                    <div className="caption">The grace period banner at the top of the page: attention-grabbing for those looking for it, but not intrusive for those who aren’t.</div>
                </div>
                <div className="text-block">
                    <b>Considering the holistic experience</b>
                    <br /><br />
                    <b>Aligning internal support tools with the customer-facing experience</b>
                    <br />
                    With customers able to self-service their grace period options, we focused on giving our customer support team the
                    same tools within the internal support platform. To create a more cohesive and seamless experience, we aligned the
                    internal platform with the customer-facing interface. This allowed agents to assist customers who still needed help
                    or preferred to have an agent make changes on their behalf.
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
                    At key moments throughout the process, we conducted usability tests with customers to guide our design iterations. Through
                    critiques and feedback sessions with leadership, product, and tech partners, we landed on these final designs.
                    <div className="spacing-075" />
                    To help with handoff to the product and tech team, we developed an step-by step release plan of how to get from the
                    current state to the new proposed design. This allowed the tech team to break the work into manageable pieces and
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
                    With the introduction of new grace period options, customers now have greater flexibility over their account. Call center
                    agents are also better equipped with updated tools to assist those who still prefer to call in. The refreshed design
                    improved usability by consolidating CD details onto a single page, making information clearer and easier to find.
                    By aligning with industry standards, we better match customer expectations, reduce confusion.
                    <div className="spacing-075" />
                    From a business perspective, this new experience has successfully decreased reliance on customer support, leading to a
                    20% reduction in call volume and lower operational costs. Additionally, this improved user experience resulted in an
                    unexpected 2% increase in customer retention, as more customers chose to renew their CDs instead of withdrawing funds.
                    <br /> <br />
                    <b>The idea parking lot</b>
                    <br />
                    As we iterated throughout the project, we uncovered many valuable ideas that fell outside the scope of grace period enhancements.
                    To ensure they weren’t lost, we documented them in an idea parking lot and revisited them at the end of the project. Reviewing the
                    list, we identified the need for enhancements across the CD experience. This list became the foundation for an end-to-end
                    redesign workshop, sparking conversations that informed future product roadmaps and spun off into a new CD enhancement workstream.
                    <br /> <br />
                    <b>A new design artifact</b>
                    <br />
                    When we began the project, CD-related resources were scattered, and there were no historical screens to reference.
                    To help us better manage resources and preserve institutional knowledge for future designers or stakeholders, we created
                    a living CD library—a single source of truth documenting the end-to-end customer journey with detailed screen
                    specifications of all possible states of a given screen.
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
