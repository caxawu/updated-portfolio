import { useNavigate } from "react-router-dom";

import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import FadeInImage from './FadeInImage';

import pixHeader from '../assets/images/projects/pix/PIXHeader.png';
import research from '../assets/images/projects/pix/research.png';
import experienceScreens from '../assets/images/projects/pix/experienceScreens.png';
import pixMetrics from '../assets/images/projects/pix/pixMetrics.png';

import ToTopButton from './ToTopButton';
import Footer from './Footer';

const CaseStudyPIX = (props) => {

    const navigateTo = useNavigate();

    return (
        <div className="content-case-study">
            <ToTopButton />
            <div id="pix-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/projects')} style={{ cursor: 'pointer' }}>
                    <ChevronLeftIcon className="chevron" />
                    <div className='back-text'>back</div>
                </div>
                <div className="text">
                    <div className="title">
                        Discover Bank Integration
                    </div>
                    <div className="headline">
                        Creating an onboarding experience for Discover customers whose bank accounts are migrating to Capital One.
                        <div className="spacing-075" />
                        Wave 1 of migration successfully moved 779k bank accounts and $20B, exceeding targets with 98% customer retention, 94% balance retention, and &lt;1% of sessions requiring customer support.
                    </div>
                </div>
                <div className="header-img" id="align-center">
                    <FadeInImage src={pixHeader} alt="Discover integration header" loading="eager" />
                </div>
            </div>

            {/* Summary section */}
            <div className='summary'>
                <div>
                    <div className="summary-section">
                        <div className="section-title bold">THE PROBLEM</div>
                        <div className="text-block">
                            Following a bank account migration from Discover to Capital One, customers logging in for the first time experience anxiety and confusion. They are unsure if their money is safe, what the migration means for them, and what actions they need to take. This initial friction creates a poor customer experience, fosters a negative brand perception of Capital One, and puts customer retention at risk.
                            <div className="spacing-075" />
                            <b className="highlight-blue">The goal:</b> Create a one-time onboarding experience that reassures newly migrated customers, builds their confidence in the Capital One brand, and clearly primes them for their next steps.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">CONTEXT</div>
                        <div id="pix-color" className="text-callout">
                            In 2025, Capital One announced it would acquire Discover.
                        </div>
                        <div className="text-block">
                            While Discover credit card customers will move to Capital One with familiar branding, rewards, and features, banking customers have a larger change. All Discover bank products are being decommissioned, meaning all customers will be moved into equivalent Capital One bank products that match their needs. To retain customers and preserve deposits, Capital One needs to ensure a seamless move with little-to-no disruption to everyday banking.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">THE SOLUTION</div>
                        <div id="pix-color" className="text-callout">
                            Create a simple, efficient, and reassuring onboarding experience for Discover customers migrating to Capital One to support customer, balance, and relationship retention.
                        </div>
                    </div>

                    <div className="summary-section">
                        <div className="section-title bold">IMPACT</div>
                        <div className="text-block">
                            The rollout is ongoing; however, the first wave of migration shows higher digital adoption, higher task engagement, and lower call volumes compared to baseline.
                            Following the migration of <b>~779k bank accounts</b> and <b>~$20B in balances</b> with <b>zero high-severity incidents</b>, the Wave 1 metrics show the experience exceeding targets set by the business.
                        </div>
                        <div className="callout-numbers">
                            <div className="callout-number">
                                <div className="eyebrow">Customer Retention</div>
                                <div className="number">98%</div>
                                <div className="subhead">Target &gt;96%</div>
                                <div className="description">% of customers remaining active with Capital One</div>
                            </div>
                            <div className="callout-number">
                                <div className="eyebrow">Balance Retention</div>
                                <div className="number">94%</div>
                                <div className="subhead">Target &gt;92%</div>
                                <div className="description">% of migrated balances still held at Capital One</div>
                            </div>
                            <div className="callout-number">
                                <div className="eyebrow">Account Retention</div>
                                <div className="number">98%</div>
                                <div className="subhead">Target &gt;96%</div>
                                <div className="description">% of migrated accounts remaining open</div>
                            </div>
                            <div className="callout-number">
                                <div className="eyebrow">Digital Containment Rate</div>
                                <div className="number">99.2%</div>
                                <div className="subhead">Target &gt;98.5%</div>
                                <div className="description">% of sessions that do not lead to a call within 2 hours</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='secondary-container' id='desktop'>
                    <ul className="secondary-info">
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li>Capital One - Product Integration Experiences</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li>Lead Product Designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">YEAR</li>
                            <li>2024-2026</li>
                        </ul>
                    </ul>
                </div>
                <div className='secondary-container' id='mobile'>
                    <ul className="secondary-info" id='horizontal'>
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li>Capital One - Product Integration Experiences</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li>Lead Product Designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">YEAR</li>
                            <li>2024-2026</li>
                        </ul>
                    </ul>
                </div>
            </div>

            <div className="divider-container">
                <hr className="line" />
                <span className="label">The details</span>
                <hr className="line" />
            </div>
            <div className="centered">
                <div className="arrow-case-study centered">
                    <ChevronDownIcon className="h-6 w-6 text-black" />
                </div>
            </div>

            {/* detail section */}
            <div className="detail-section">
                <div id="pix-deco" />
                <div className="section-title text-secondary">strategy</div>
                <div className="text-block">
                    Migration was split into waves, dependent on a customer’s bank product mix. The launch of each wave was staggered so we could test backend capabilities, build tailored experiences for each user group, and iterate based on learnings.
                </div>
                <div className="callout-cards">
                    <div className="callout-card">
                        <b>Savers Wave (Savings and CD accounts)</b>
                        <div className="spacing-075" />
                        ~1.5M customers
                        <br/>
                        ~2M accounts
                        <br/>
                        ~$60B in balances
                    </div>
                    <div className="callout-card">
                        <b>Spenders Wave (Checking and MMA accounts)</b>
                        <div className="spacing-075" />
                        ~1.9M customers
                        <br/>
                        ~2.3M accounts
                        <br/>
                        ~$28B in balances
                    </div>
                </div>
                <div className="text-block">
                    <b>Holding a high bar</b>
                    <br />
                    Because the onboarding experience for Discover customers is a one-time experience, the product team declared that we would hold a high bar for any net-new builds. The goal was to use existing components and placements as much as possible. If we were to build anything new, it should be extensible to the general onboarding use case. 
                </div>
                <div className="horizontal-stack">
                    <div className="text-block">
                        <b>Our work was built on 4 foundational principles:</b>
                        <ul>
                            <li>Prepare customers for the change</li>
                            <li>Do the work to set up their account</li>
                            <li>Ensure any critical tasks are easy to complete</li>
                            <li>Deliver feature parity where it matters while holding a high bar for net-new investments</li>
                        </ul>
                    </div>
                    <div className="text-block">
                        <b>Business drivers:</b>
                        <ul>
                            <li>Make the move as stable as possible</li>
                            <li>Retain ~3M customers</li>
                            <li>Maintain $92B+ deposits</li>
                            <li>Expand and nurture primary banking relationships</li>
                        </ul>
                    </div>          
                </div>
            </div>
            <div className="detail-section">
                <div id="pix-deco" />
                <div className="section-title text-secondary">design</div>
                <div className="text-block">
                    <b>Role</b>
                    <br />
                    I supported the overall migration program, <b>leading 3 workstreams as the main designer in Savers onboarding, Spenders onboarding, and branch migration.</b> I worked directly with product, tech, and marketing partners from the Bank, Card, and Discover teams, helping to ground the work in the root customer problems, collaborating to uncover and unblock technical bottlenecks, and leaning into pixel-perfect work to speed up project delivery.
                </div>
                
                <div className="text-block">
                    <b>Collaborating with partners</b>
                    <br />
                    Due to the unprecedented nature of this work, we began without business requirements. We quickly realized that it was a lot easier to have stakeholders react to a design and identify the tech/business/data constraints than to ask for a clear list of capabilities and constraints as the starting point. Thus, this project was heavily design-led. I worked with my team to ideate, concept, and iterate as new constraints were identified. As a design team, we had multiple touchpoints with our cross-functional partners each week, ensuring we were always aligned at every step of the process. This helped to drive business requirement definition and establish a general direction.
                    <div className="spacing-075" />
                    The research team was a key player throughout the work. I worked closely with our two research partners on defining a learning agenda, shaping the design of the study, and determining how results would impact key decisions. We ran a total of 8 studies in Savers and 5 studies in Spenders that included sentiment/content, info prioritization, usability, and SUM tests.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='smaller' src={research} alt="research snapshot" loading="eager" />
                    </div>
                </div>

                <div className="text-block">
                    <b>Final designs</b>
                    <br/>
                    The experience we delivered is deceptively simple with only 6 key screens. Even within these screens, only 3 screens (Welcome Animation, Migration Overview, and Account Summary bottom sheet) are net-new.
                </div>
                <div className="text-block">
                    <b>Key design decisions</b>
                    <br/>
                    <ul>
                        <li>
                            <b>Make Welcome & Onboarding as quick and simple as possible.</b>
                            <ul>
                                <li>Customers are anxious about their money so the experience is short and simple, enabling customers to see their bank account details quickly.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Reassure customers that we’ve done the work for them.</b>
                            <ul>
                                <li>The Migration Overview screen shows the key items we migrated for customers, informed by user testing.</li>
                                <li>The checklist in the L2 Account Details screen frames line items as things to review, not actions to take to “complete” 
                                    migration. Checking account customers have some actions to complete: clear navigational cues throughout all the screens help 
                                    customers identify which items need action.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Help customers understand what’s different and what’s the same.</b>
                            <ul>
                                <li>The checkmarks in the Migration Overview highlight key items that are remaining the same. </li>
                                <li>The Account Summary bottom sheet clearly lays out account changes and links customers to FAQs.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption" id="less-padding">
                        <img id='smaller' src={experienceScreens} alt="Savers experience screens" loading="eager" />
                    </div>
                </div>

            </div>
            <div className="detail-section">
                <div id="pix-deco" />
                <div className="section-title text-secondary">outcome</div>
                <div className="text-block">
                    The Savers experience is rolling out to customers. Wave 1 successfully migrated <b>779k bank accounts</b> and <b>$20B,</b> exceeding targets with 
                    <b> 98% customer retention, 94% balance retention, and &lt;1% of sessions requiring customer support.</b> Against baseline (general bank account onboarding), 
                    the numbers show higher engagement with screens and features—evidence that our designs could be adapted to improve regular onboarding. 
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='pixMetrics' src={pixMetrics} alt="Experience metrics" loading="eager" />
                    </div>
                </div>
            </div>
        <Footer />
        </div>

    );
};

export default CaseStudyPIX;
